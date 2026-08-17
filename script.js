(function(){
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");
  if(menuBtn && navLinks){
    menuBtn.addEventListener("click",()=>navLinks.classList.toggle("open"));
  }

  // Put current year in footer
  document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());

  // Home notification
  const ticker = document.querySelector("[data-notification]");
  if(ticker && typeof SITE_DATA !== "undefined") ticker.textContent = SITE_DATA.notification;

  const updatesBox = document.querySelector("[data-updates]");
  if(updatesBox && typeof SITE_DATA !== "undefined"){
    updatesBox.innerHTML = SITE_DATA.latestUpdates.map(t=>`<div class="update-item">${escapeHTML(t)}</div>`).join("");
  }
})();

function escapeHTML(value){
  return String(value)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

function safeExternalLink(url){
  if(!url || url === "#") return "#";
  return url;
}

function resourceLinkHTML(item){
  const url = safeExternalLink(item.url);
  if(url === "#"){
    return `<span class="resource-link disabled"><span>${escapeHTML(item.label)}</span><small>Link Coming Soon</small></span>`;
  }
  return `<a class="resource-link" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">
    <span>${escapeHTML(item.label)}</span><small>Open ↗</small>
  </a>`;
}

function readSemester(){
  const p = new URLSearchParams(location.search);
  const value = Number(p.get("sem"));
  return value >= 1 && value <= 6 ? value : null;
}

function renderSemesterSelector(containerId, targetPage, text){
  const root = document.getElementById(containerId);
  if(!root) return;
  root.innerHTML = [1,2,3,4,5,6].map(sem=>`
    <article class="semester-card">
      <div class="semester-number">${sem}</div>
      <h3>Semester ${sem}</h3>
      <p>${escapeHTML(text)}</p>
      <a class="btn btn-soft" href="${targetPage}?sem=${sem}">Select Semester ${sem} →</a>
    </article>
  `).join("");
}

function renderSubjectResources(type, titlePrefix){
  const sem = readSemester();
  const selector = document.getElementById("semesterSelector");
  const resources = document.getElementById("resourceArea");
  const pageTitle = document.getElementById("dynamicTitle");
  const back = document.getElementById("backToSemesters");
  const search = document.getElementById("resourceSearch");

  if(!sem){
    if(selector) selector.classList.remove("hidden");
    if(resources) resources.classList.add("hidden");
    if(search) search.classList.add("hidden");
    return;
  }

  if(pageTitle) pageTitle.textContent = `${titlePrefix} — Semester ${sem}`;
  if(back){
    back.classList.remove("hidden");
    back.href = location.pathname.split("/").pop();
  }
  if(selector) selector.classList.add("hidden");
  if(resources) resources.classList.remove("hidden");
  if(search) search.classList.remove("hidden");

  const list = SITE_DATA[type]?.[sem] || [];
  const grid = document.getElementById("resourceGrid");

  function draw(items){
    if(!grid) return;
    if(!items.length){
      grid.innerHTML = `<div class="empty">No subjects/resources added yet.</div>`;
      return;
    }
    grid.innerHTML = items.map(subject=>`
      <article class="resource-card" data-subject="${escapeHTML(subject.name.toLowerCase())}">
        <h3>${escapeHTML(subject.name)}</h3>
        <div class="meta">Semester ${sem}</div>
        <div class="link-list">
          ${(subject.links || []).map(resourceLinkHTML).join("")}
        </div>
      </article>
    `).join("");
  }

  draw(list);

  if(search){
    search.oninput = () => {
      const q = search.value.trim().toLowerCase();
      draw(list.filter(x=>x.name.toLowerCase().includes(q)));
    };
  }
}

function renderStudyNotes(){

  const sem = readSemester();

  const params =
    new URLSearchParams(window.location.search);

  const selectedSubject =
    params.get("subject");


  const selector =
    document.getElementById("semesterSelector");

  const resources =
    document.getElementById("resourceArea");

  const pageTitle =
    document.getElementById("dynamicTitle");

  const back =
    document.getElementById("backToSemesters");

  const search =
    document.getElementById("resourceSearch");

  const grid =
    document.getElementById("resourceGrid");


  /* =========================
      NO SEMESTER SELECTED
  ========================= */

  if(!sem){

    selector.classList.remove("hidden");

    resources.classList.add("hidden");

    search.classList.add("hidden");

    return;
  }


  const subjects =
    SITE_DATA.studyNotes?.[sem] || [];


  selector.classList.add("hidden");

  resources.classList.remove("hidden");

  back.classList.remove("hidden");


  /* =========================
      SUBJECT LIST
  ========================= */

  if(!selectedSubject){

    pageTitle.textContent =
      `Study Notes — Semester ${sem}`;

    back.href =
      "study-notes.html";

    back.textContent =
      "← Change Semester";


    search.classList.remove("hidden");

    search.placeholder =
      "Search subject...";


    function showSubjects(list){

      if(!list.length){

        grid.innerHTML = `
          <div class="empty">
            No subjects found.
          </div>
        `;

        return;
      }


      grid.innerHTML =
        list.map(subject => `
          <article class="resource-card">

            <h3>
              📚 ${escapeHTML(subject.name)}
            </h3>

            <div class="meta">
              Semester ${sem}
            </div>

            <p>
              View all available notes for this subject.
            </p>

            <a
              class="btn btn-blue"
              href="study-notes.html?sem=${sem}&subject=${encodeURIComponent(subject.name)}">

              Open Subject →

            </a>

          </article>

        `).join("");
    }


    showSubjects(subjects);


    search.oninput = () => {

      const value =
        search.value
        .trim()
        .toLowerCase();


      const filtered =
        subjects.filter(subject =>

          subject.name
          .toLowerCase()
          .includes(value)

        );


      showSubjects(filtered);

    };


    return;
  }



  /* =========================
  
  SELECTED SUBJECT NOTES
  ========================= */

  const subject =
    subjects.find(

      item =>
        item.name === selectedSubject

    );


  search.classList.add("hidden");


  back.href =
    `study-notes.html?sem=${sem}`;

  back.textContent =
    "← Back to Subjects";


  if(!subject){

    pageTitle.textContent =
      "Subject Not Found";


    grid.innerHTML = `

      <div class="empty">

        This subject is not available.

      </div>

    `;

    return;
  }


  pageTitle.textContent =
    `${subject.name} — Notes`;


  const noteLinks =
    subject.links || [];


  grid.innerHTML = `

    <article class="resource-card">

      <h3>
        📚 ${escapeHTML(subject.name)}
      </h3>

      <div class="meta">
        Semester ${sem}
      </div>

      <div class="link-list">

        ${
          noteLinks.length

          ?

          noteLinks
          .map(resourceLinkHTML)
          .join("")

          :

          `
          <div class="empty">
            Notes will be added soon.
          </div>
          `
        }

      </div>

    </article>

  `;

}

function renderSyllabus(){
  const grid = document.getElementById("syllabusGrid");
  if(!grid) return;
  grid.innerHTML = SITE_DATA.syllabus.map(item=>{
    const isReady = item.url && item.url !== "#";
    return `
      <article class="semester-card">
        <div class="semester-number">${item.semester}</div>
        <h3>Semester ${item.semester}</h3>
        <p>Diploma CST/IT syllabus resource.</p>
        ${isReady
          ? `<a class="btn btn-blue" href="${escapeHTML(item.url)}" target="_blank" rel="noopener noreferrer">View Syllabus ↗</a>`
          : `<span class="btn btn-soft">Link Coming Soon</span>`
        }
      </article>`;
  }).join("");
}

function renderInterview(){
  const grid = document.getElementById("companyGrid");
  if(!grid) return;
  grid.innerHTML = SITE_DATA.interview.map(company=>`
    <article class="company-card">
      <div class="company-title">
        <div class="company-avatar">🏢</div>
        <div>
          <h3>${escapeHTML(company.company)}</h3>
          <p>Company-wise preparation resources</p>
        </div>
      </div>
      <div class="link-list">
        ${(company.links || []).map(resourceLinkHTML).join("")}
      </div>
    </article>
  `).join("");
}

function renderJELET(){
  const syllabus = document.getElementById("jeletSyllabus");
  const notification = document.getElementById("jeletNotification");
  const questions = document.getElementById("jeletQuestions");

  if(syllabus){
    syllabus.innerHTML = SITE_DATA.jelet.syllabusUrl !== "#"
      ? `<a class="btn btn-blue" href="${escapeHTML(SITE_DATA.jelet.syllabusUrl)}" target="_blank" rel="noopener noreferrer">Open JELET Syllabus ↗</a>`
      : `<span class="btn btn-soft">Syllabus Link Coming Soon</span>`;
  }
  if(notification){
    notification.innerHTML = SITE_DATA.jelet.notificationUrl !== "#"
      ? `<a class="btn btn-blue" href="${escapeHTML(SITE_DATA.jelet.notificationUrl)}" target="_blank" rel="noopener noreferrer">Open Official Notifications ↗</a>`
      : `<span class="btn btn-soft">Notification Link Coming Soon</span>`;
  }
  if(questions){
    questions.innerHTML = SITE_DATA.jelet.questions.map(q=>resourceLinkHTML({
      label:q.label || `JELET ${q.year} Question Paper`,
      url:q.url
    })).join("");
  }
}

/* =========================================================
   PREMIUM UI MOTION — subtle scroll reveal
========================================================= */
(function setupPremiumMotion(){
  const selectors = [
    '.service-card','.books-home-section','.quick-link-card','.compact-social-card',
    '.how-card','.update-item','.semester-card','.resource-card','.company-card',
    '.jelet-feature','.page-hero'
  ].join(',');

  const applyReveal = () => {
    const items = document.querySelectorAll(selectors);
    if(!('IntersectionObserver' in window)){
      items.forEach(el=>el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },{threshold:.08,rootMargin:'0px 0px -35px 0px'});
    items.forEach((el,i)=>{
      if(el.dataset.revealReady) return;
      el.dataset.revealReady='1';
      el.classList.add('reveal-item');
      el.style.transitionDelay = `${Math.min((i%6)*55,275)}ms`;
      observer.observe(el);
    });
  };

  requestAnimationFrame(()=>requestAnimationFrame(applyReveal));
  const mo = new MutationObserver(()=>requestAnimationFrame(applyReveal));
  mo.observe(document.body,{childList:true,subtree:true});
})();

/* =====================================================
   GOURAV STUDY ZONE
   FEEDBACK POPUP
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const modal =
        document.getElementById("gszFeedbackModal");

    const openButton =
        document.getElementById("gszOpenFeedback");

    const closeButton =
        document.getElementById("gszCloseFeedback");

    const overlay =
        document.getElementById("gszModalOverlay");


    /* Safety Check */

    if (
        !modal ||
        !openButton ||
        !closeButton ||
        !overlay
    ) {
        return;
    }


    /* ==========================
       OPEN POPUP
    ========================== */

    function openFeedbackModal() {

        modal.classList.add("active");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "gsz-modal-open"
        );


        setTimeout(function () {

            closeButton.focus();

        }, 250);

    }


    /* ==========================
       CLOSE POPUP
    ========================== */

    function closeFeedbackModal() {

        modal.classList.remove("active");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove(
            "gsz-modal-open"
        );

    }


    /* Give Feedback */

    openButton.addEventListener(
        "click",
        openFeedbackModal
    );


    /* X Button */

    closeButton.addEventListener(
        "click",
        closeFeedbackModal
    );


    /* Outside Click */

    overlay.addEventListener(
        "click",
        closeFeedbackModal
    );


    /* ESC Key */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                modal.classList.contains("active")
            ) {

                closeFeedbackModal();

            }

        }
    );

});

/* =============================================
   GOURAV STUDY ZONE - NOTIFICATION SYSTEM
============================================= */


const gszNotifications = [

    {
        title:
            "Digital Image Procesing All Units Imp. Qns. & Ans. Notes Added",

        date:
            "15 Aug 2026",

        icon:
            "📚",

        link:
            "study-notes.html?sem=5&subject=Digital%20Image%20Processing",

        isNew:
            true
    },

    {
        title:
            "Internet of Things All Units Imp. Qns. & Ans. Notes Added",

        date:
            "15 Aug 2026",

        icon:
            "📚",

        link:
            "study-notes.html?sem=5&subject=IoT%20(Internet%20of%20Things)",

        isNew:
            true
    },

    {
        title:
            "Third Semester PYQ Base Suggestions Available",

        date:
            "13 Aug 2026",

        icon:
            "🔥",

        link:
            "suggestions.html?sem=3",

        isNew:
            true
    },


    {
        title:
            "Fifth Semester PYQ Base Suggestions Available",

        date:
            "13 Aug 2026",

        icon:
            "🔥",

        link:
            "suggestions.html?sem=5",

        isNew:
            false
    },
    {
        title:
            "Fifth Semester Previous Year Questions Uploaded",
        date:
            "12 Aug 2026",

        icon:
            "🔥",

        link:
            "pyq.html?sem=5",

        isNew:
            true
    },
    {
        title:
            "Third Semester Previous Year Questions Uploaded",
        date:
            "12 Aug 2026",

        icon:
            "🔥",

        link:
            "pyq.html?sem=3",

        isNew:
            true
    },
    
    {
        title:
            "First Semester Previous Year Questions Uploaded",
        date:
            "12 Aug 2026",

        icon:
            "🔥",

        link:
            "pyq.html?sem=1",

        isNew:
            true
    },
    
    {
        title:
            "Jelet Previous Year Questions Uploaded",

        date:
            "11 Aug 2026",

        icon:
            "🔥",

        link:
            "jelet.html",

        isNew:
            true
    },


    {
        title:
            "WBSCTE All Semester Syllabus Uploaded",

        date:
            "10 Aug 2026",

        icon:
            "🔥",

        link:
            "syllabus.html",

        isNew:
            true
    }

];



document.addEventListener(
    "DOMContentLoaded",
    function(){

        const list =
            document.getElementById(
                "gszNotificationList"
            );

        const emptyMessage =
            document.getElementById(
                "gszNoNotification"
            );

        const viewAll =
            document.getElementById(
                "gszViewAllNotifications"
            );


        if(!list){
            return;
        }



        /* Initially show 3 notifications */

        let showAll = false;



        function renderNotifications(){

            list.innerHTML = "";


            if(
                gszNotifications.length === 0
            ){

                emptyMessage.style.display =
                    "block";

                return;

            }


            emptyMessage.style.display =
                "none";


            const notificationsToShow =
                showAll

                ? gszNotifications

                : gszNotifications.slice(
                    0,
                    3
                );



            notificationsToShow.forEach(
                function(notification){

                    const item =
                        document.createElement(
                            "div"
                        );


                    item.className =
                        "gsz-notification-item";


                    item.innerHTML = `

                        <div
                            class="gsz-notification-icon"
                        >
                            ${notification.icon}
                        </div>


                        <div
                            class="gsz-notification-content"
                        >

                            <div
                                class="gsz-notification-top"
                            >

                                <h3
                                    class="gsz-notification-title"
                                >

                                    ${notification.title}

                                </h3>


                                ${
                                    notification.isNew

                                    ?

                                    `<span
                                        class="gsz-new-badge"
                                    >
                                        NEW
                                    </span>`

                                    :

                                    ""
                                }

                            </div>


                            <p
                                class="gsz-notification-date"
                            >

                                🕒 ${notification.date}

                            </p>

                        </div>


                        <a
                            class="gsz-notification-link"

                            href="${notification.link}"
                        >

                            View →

                        </a>

                    `;


                    list.appendChild(item);

                }
            );


            if(
                gszNotifications.length <= 3
            ){

                viewAll.style.display =
                    "none";

            }
            else{

                viewAll.style.display =
                    "inline-block";

                viewAll.textContent =
                    showAll
                    ? "Show Less"
                    : "View All";

            }

        }



        /* View All Button */

        viewAll.addEventListener(
            "click",
            function(){

                showAll = !showAll;

                renderNotifications();

            }
        );



        /* Initial Render */

        renderNotifications();

    }
);

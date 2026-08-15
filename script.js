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

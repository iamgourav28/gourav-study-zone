/*
=========================================================
 GOURAV STUDY ZONE - EDIT ALL YOUR CONTENT/LINKS HERE
=========================================================

HOW TO EDIT A LINK:
url: "#"
change to:
url: "https://drive.google.com/...."

HOW TO EDIT A SUBJECT NAME:
name: "Subject 1"
change to:
name: "Digital Image Processing"

You normally do NOT need to edit the HTML/CSS files.
*/

const SITE_DATA = {

  // ---------- HOME PAGE LATEST UPDATES ----------
  latestUpdates: [
    "📚 Add your newest Study Notes update here.",
    "📝 Add your newest PYQ update here.",
    "🎯 Add an important exam / JELET update here."
  ],

  notification:
    "📢 Latest Update: Study Notes, PYQ, Suggestions, Interview Preparation & JELET Resources are available on Gourav Study Zone!",

  // ---------- 1. SYLLABUS ----------
  // Flow: Syllabus → Semester → Drive Link
  syllabus: [
    { semester: 1, url: "https://drive.google.com/file/d/1oGUlqwTdnlBdwIy5-WE9bd8EI9ROGX_X/view?usp=sharing" },
    { semester: 2, url: "https://drive.google.com/file/d/1Yd41f7pv9z_p3leqg6wQS5r788G6aqJw/view?usp=sharing" },
    { semester: 3, url: "https://drive.google.com/file/d/1-nB-iwzHYY9eSuu3jsob7bzXrE_5OAyw/view?usp=sharing" },
    { semester: 4, url: "https://drive.google.com/file/d/1P4L14HQWEQP-owTfW5N8dAlJoGv3ey6m/view?usp=sharing" },
    { semester: 5, url: "https://drive.google.com/file/d/19RlTDjhG86dCekLqCtpmBAjMm7uTVJP6/view?usp=sharing" },
    { semester: 6, url: "https://drive.google.com/file/d/13VFcKhR7yHZlHDxWLpUHm3KsH2nY69-o/view?usp=sharing" }
  ],

  // ---------- 2. STUDY NOTES ----------
  // Flow: Study Notes → Semester → Subjects → Notes Links
notes: {
    1: [
      {
        name: "Mathematics",
        links: [
          { label: "Unit 1 Notes", url: "YOUR-UNIT-1-DRIVE-LINK" },
          { label: "Unit 2 Notes", url: "YOUR-UNIT-2-DRIVE-LINK" },
          { label: "Unit 3 Notes", url: "YOUR-UNIT-3-DRIVE-LINK" },
          { label: "Complete Mathematics Notes", url: "YOUR-COMPLETE-NOTES-LINK" }
        ]
      }
    ],
    2: [
      { name: "Subject 1", links: [{ label: "Open Notes", url: "#" }] },
      { name: "Subject 2", links: [{ label: "Open Notes", url: "#" }] },
      { name: "Subject 3", links: [{ label: "Open Notes", url: "#" }] }
    ],
    3: [
      { name: "Subject 1", links: [{ label: "Open Notes", url: "#" }] },
      { name: "Subject 2", links: [{ label: "Open Notes", url: "#" }] },
      { name: "Subject 3", links: [{ label: "Open Notes", url: "#" }] }
    ],
    4: [
      { name: "Subject 1", links: [{ label: "Open Notes", url: "#" }] },
      { name: "Subject 2", links: [{ label: "Open Notes", url: "#" }] },
      { name: "Subject 3", links: [{ label: "Open Notes", url: "#" }] }
    ],
    5: [
      { name: "Internet of Things", links: [{ label: "Open Notes", url: "#" }] },
      { name: "Subject 2", links: [{ label: "Open Notes", url: "#" }] },
      { name: "Subject 3", links: [{ label: "Open Notes", url: "#" }] }
    ],
    6: [
      { name: "Subject 1", links: [{ label: "Open Notes", url: "#" }] },
      { name: "Subject 2", links: [{ label: "Open Notes", url: "#" }] },
      { name: "Subject 3", links: [{ label: "Open Notes", url: "#" }] }
    ]
  },

  // ---------- 3. PYQ ----------
  // Flow: PYQ → Semester → Subjects → Question Links
  // Add as many question links as you want inside each subject.
  pyq: {
    1: [
      { name: "Subject 1", links: [
        { label: "2026 Question Paper", url: "#" },
        { label: "2025 Question Paper", url: "#" },
        { label: "2024 Question Paper", url: "#" }
      ]},
      { name: "Subject 2", links: [
        { label: "2026 Question Paper", url: "#" },
        { label: "2025 Question Paper", url: "#" }
      ]}
    ],
    2: [
      { name: "Subject 1", links: [
        { label: "2026 Question Paper", url: "#" },
        { label: "2025 Question Paper", url: "#" }
      ]},
      { name: "Subject 2", links: [
        { label: "2026 Question Paper", url: "#" },
        { label: "2025 Question Paper", url: "#" }
      ]}
    ],
    3: [
      { name: "Subject 1", links: [{ label: "2026 Question Paper", url: "#" }] },
      { name: "Subject 2", links: [{ label: "2026 Question Paper", url: "#" }] }
    ],
    4: [
      { name: "Subject 1", links: [{ label: "2026 Question Paper", url: "#" }] },
      { name: "Subject 2", links: [{ label: "2026 Question Paper", url: "#" }] }
    ],
    5: [
      { name: "Subject 1", links: [
        { label: "2026 Question Paper", url: "#" },
        { label: "2025 Question Paper", url: "#" },
        { label: "2024 Question Paper", url: "#" }
      ]},
      { name: "Subject 2", links: [
        { label: "2026 Question Paper", url: "#" },
        { label: "2025 Question Paper", url: "#" }
      ]}
    ],
    6: [
      { name: "Subject 1", links: [
        { label: "2026 Question Paper", url: "#" },
        { label: "2025 Question Paper", url: "#" }
      ]},
      { name: "Subject 2", links: [
        { label: "2026 Question Paper", url: "#" }
      ]}
    ]
  },

  // ---------- 4. SUGGESTIONS ----------
  // Flow: Suggestions → Semester → Subjects → Suggestion Link
  suggestions: {
    1: [
      { name: "Subject 1", links: [{ label: "View Suggestion", url: "#" }] },
      { name: "Subject 2", links: [{ label: "View Suggestion", url: "#" }] }
    ],
    2: [
      { name: "Subject 1", links: [{ label: "View Suggestion", url: "#" }] },
      { name: "Subject 2", links: [{ label: "View Suggestion", url: "#" }] }
    ],
    3: [
      { name: "Subject 1", links: [{ label: "View Suggestion", url: "#" }] },
      { name: "Subject 2", links: [{ label: "View Suggestion", url: "#" }] }
    ],
    4: [
      { name: "Subject 1", links: [{ label: "View Suggestion", url: "#" }] },
      { name: "Subject 2", links: [{ label: "View Suggestion", url: "#" }] }
    ],
    5: [
      { name: "Subject 1", links: [{ label: "View Suggestion", url: "#" }] },
      { name: "Subject 2", links: [{ label: "View Suggestion", url: "#" }] }
    ],
    6: [
      { name: "Subject 1", links: [{ label: "View Suggestion", url: "#" }] },
      { name: "Subject 2", links: [{ label: "View Suggestion", url: "#" }] }
    ]
  },

  // ---------- 5. INTERVIEW PREPARATION ----------
  // Flow: Interview → Company → Preparation Links
  interview: [
    {
      company: "TCS",
      links: [
        { label: "Aptitude Preparation", url: "#" },
        { label: "Technical Interview Questions", url: "#" },
        { label: "HR Interview Questions", url: "#" }
      ]
    },
    {
      company: "Infosys",
      links: [
        { label: "Preparation Resources", url: "#" },
        { label: "Interview Questions", url: "#" }
      ]
    },
    {
      company: "Wipro",
      links: [
        { label: "Preparation Resources", url: "#" },
        { label: "Interview Questions", url: "#" }
      ]
    },
    {
      company: "Accenture",
      links: [
        { label: "Preparation Resources", url: "#" },
        { label: "Interview Questions", url: "#" }
      ]
    },
    {
      company: "Cognizant",
      links: [
        { label: "Preparation Resources", url: "#" },
        { label: "Interview Questions", url: "#" }
      ]
    },
    {
      company: "Capgemini",
      links: [
        { label: "Preparation Resources", url: "#" },
        { label: "Interview Questions", url: "#" }
      ]
    },
    {
      company: "CMS IT Services",
      links: [
        { label: "Technical Preparation", url: "#" },
        { label: "HR Preparation", url: "#" }
      ]
    },
    {
      company: "Other Companies",
      links: [
        { label: "General Fresher Interview Preparation", url: "#" }
      ]
    }
  ],

  // ---------- 6. JELET ----------
  // Flow: JELET → Syllabus / Notification / Year-wise Questions
  jelet: {
    syllabusUrl: "#",
    notificationUrl: "#",

    questions: [
      { year: 2026, label: "JELET 2026 Question Paper", url: "#" },
      { year: 2025, label: "JELET 2025 Question Paper", url: "#" },
      { year: 2024, label: "JELET 2024 Question Paper", url: "#" },
      { year: 2023, label: "JELET 2023 Question Paper", url: "#" },
      { year: 2022, label: "JELET 2022 Question Paper", url: "#" },
      { year: 2021, label: "JELET 2021 Question Paper", url: "#" }
    ]
  }
};

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

  notification:
    "📢 Latest Update: All Semester PYQ , Suggestions, Importnat Notes & JELET Syllabus & PYQ are available on Gourav Study Zone!",
    

  // ---------- 1. SYLLABUS ----------
  // Flow: Syllabus → Semester → Drive Link
  syllabus: [
    { semester: 1, url: "https://drive.google.com/file/d/1oGUlqwTdnlBdwIy5-WE9bd8EI9ROGX_X/view?usp=sharing" },
    { semester: 2, url: "https://drive.google.com/file/d/1Yd41f7pv9z_p3leqg6wQS5r788G6aqJw/view?usp=sharing" },
    { semester: 3, url: "https://drive.google.com/file/d/1-nB-iwzHYY9eSuu3jsob7bzXrE_5OAyw/view?usp=sharing" },
    { semester: 4, url: "https://drive.google.com/file/d/1P4L14HQWEQP-owTfW5N8dAlJoGv3ey6m/view?usp=sharing" },
    { semester: 5, url: "https://drive.google.com/file/d/19RlTDjhG86dCekLqCtpmBAjMm7uTVJP6/view?usp=sharing" },
    { semester: 6, url: "https://drive.google.com/file/d/13VFcKhR7yHZlHDxWLpUHm3KsH2nY69-o/view?usp=sharing" },
    { semester: "6 (ES)", url: "https://drive.google.com/file/d/1itJEHar6OuGr3y2ZW9P8OkgE4ETmfYOG/view?usp=sharing" }
  ],

  /* =====================================================
   ENGINEERING BOOKS

   Flow:
   Books → Semester → Book Name → Download Link
===================================================== */

books: {

  1: [
    {
      name: "Applied Physics I",
      author: "D Choudhary",
      url: "https://drive.google.com/file/d/1SkBZtRQpBv_G1KJ6oQeE5EmvitmF2XrB/view?usp=sharing"
    },

    {
      name: "Engineering Mathematics I",
      author: "A Sarkar",
      url: "https://drive.google.com/file/d/1sI5ui1-g7E36WKK-UFExB0t0t6PZEFca/view?usp=sharing"
    },

    {
      name: "Applied Chemistry",
      author: "K Bhattacharya",
      url: "https://drive.google.com/file/d/1IgchjjZzUQLkbEPitcqM4yQk6bBUS2k6/view?usp=sharing"
    }
  ],


  2: [
    {
      name: "Engineering Mathematics II",
      author: "A Sarkar",
      url: "https://drive.google.com/file/d/1NBA8S26RKFcEyJ6lHrvjCg0LRjvUik0T/view?usp=sharing"
    },

    {
      name: "Applied Physics II",
      author: "D Choudhary",
      url: "https://drive.google.com/file/d/1XaOGcG_d3NzqGCY6mlPy_iZrMa-9mRQM/view?usp=sharing"
    },
    {
      name: "Engineering Mechanics",
      author: "Bhagabati Publication",
      url: "https://drive.google.com/file/d/1VBYuLc4nAVsp7gjszoRhN_aqlfdPUP_k/view?usp=sharing"
    },
    {
      name: "Fundamentals of Electrical & Electronics Engineering",
      author: "Bhagabati Publication",
      url: "https://drive.google.com/file/d/1e_Xdw2oOmz-bSvXHse9s6o5bHt4BH3cF/view?usp=sharing"
    },
    {
      name: "Introduction to IT Systems",
      author: "Bhagabati Publication",
      url: "https://drive.google.com/file/d/1MRnHfQFUc5Lr7-ebM-Rb7hGUFzc4EXFy/view?usp=sharing"
    }
  ],


  3: [
    {
      name: "Let us C",
      author: "Yashavant Kanetkar",
      url: "https://drive.google.com/file/d/1iSgbvW8jSF7CFzgwzfHTHFw9INGajBj3/view?usp=sharing"
    },

    {
      name: "Let us Python",
      author: "Yashavant Kanetkar / Aditya Kanetkar",
      url: "https://drive.google.com/file/d/1M5uwFGbpKnsLggYfbwr_IVPAZ-3cslO4/view?usp=sharing"
    },
    {
      name: "Data Structures and Algorithms",
      author: "Narasimha Karumanchi",
      url: "https://drive.google.com/file/d/17wdjBLxqi-uHxGit-Xx8Nguk0kiTMWnL/view?usp=sharing"
    },
    {
      name: "Computer System Architecture",
      author: "M. Morris Mano",
      url: "https://drive.google.com/file/d/1iLQB88eyKwZeOoM1gS0uYFFdGy1BszTL/view?usp=sharing"
    }
  ],


  4: [
    {
      name: "Semester 4 Book 1",
      author: "Book / Author Name",
      url: "#"
    }
  ],


  5: [
    {
      name: "The 8051 Microcontroller and Embedded Systems",
      author: "Muhammad Ali Mazidi / Janice Gillispie Mazidi",
      url: "https://drive.google.com/file/d/1zwZobDc3g2QODqnTVjI-ywZWtiQ69DbV/view?usp=sharing"
    },
    {
      name: "Internet of Things",
      author: "Arshdeep Bahga / Vijay Madisetti",
      url: "https://drive.google.com/file/d/1iZ3e7LfcIGNgZ7IoRM2biP2YcGDZxHOD/view?usp=sharing"
    },
    {
      name: "Mobile Computing",
      author: "The McGraw-Hill Companies",
      url: "https://drive.google.com/file/d/129zemI54YjiQFzxttckAh8IXUVUuN5kY/view?usp=sharing"
    },
    {
      name: "Artificial Intelligence - A Modern Approach (3rd Edition)1",
      author: "Stuart Russell / Peter Norvig",
      url: "https://drive.google.com/file/d/14LV9KxxwCkS3B0bkJ9qUABVyFRrUc3VC/view?usp=sharing"
    },
    {
      name: "Digital Image Processing 3rd Edition",
      author: "R. Gonzalez / R. Woods",
      url: "https://drive.google.com/file/d/1AXSC0AUCtEtBp9PdO5Mda_YcRQ4aKnrN/view?usp=sharing"
    }
  ],


  6: [
    {
      name: "Semester 6 Book 1",
      author: "Book / Author Name",
      url: "#"
    }
  ]

},

  // ---------- 2. STUDY NOTES ----------
  // Flow: Study Notes → Semester → Subjects → Notes Links
studyNotes: {

  1: [
    {
      name: "Applied Physics I",
      links: [
        {
          label: "Unit 1 Notes",
          url: "#"
        },
        {
          label: "Unit 2 Notes",
          url: "#"
        },
        {
          label: "Unit 3 Notes",
          url: "#"
        },
        {
          label: "Unit 4 Notes",
          url: "#"
        },
        {
          label: "Complete Subject Notes",
          url: "#"
        }
      ]
    },
          {
      name: "Applied Chemistry",
      links: [
        {
          label: "Unit 1 Notes",
          url: "#"
        },
        {
          label: "Unit 2 Notes",
          url: "#"
        },
        {
          label: "Unit 3 Notes",
          url: "#"
        },
        {
          label: "Unit 4 Notes",
          url: "#"
        },
        {
          label: "Complete Subject Notes",
          url: "#"
        }
      ]

    },
          {
      name: "Engineering Mathematics I",
      links: [
        {
          label: "Unit 1 Notes",
          url: "#"
        },
        {
          label: "Unit 2 Notes",
          url: "#"
        },
        {
          label: "Unit 3 Notes",
          url: "#"
        },
        {
          label: "Unit 4 Notes",
          url: "#"
        },
        {
          label: "Complete Subject Notes",
          url: "#"
        }
      ]

    },
          {
      name: "Communication Skills in English",
      links: [
        {
          label: "Unit 1 Notes",
          url: "#"
        },
        {
          label: "Unit 2 Notes",
          url: "#"
        },
        {
          label: "Unit 3 Notes",
          url: "#"
        },
        {
          label: "Unit 4 Notes",
          url: "#"
        },
        {
          label: "Complete Subject Notes",
          url: "#"
        }
      ]

    }

],
    2: [
    {
      name: "Applied Physics II",
      links: [
        {
          label: "Unit 1 Notes",
          url: "#"
        },
        {
          label: "Unit 2 Notes",
          url: "#"
        },
        {
          label: "Unit 3 Notes",
          url: "#"
        },
        {
          label: "Unit 4 Notes",
          url: "#"
        },
        {
          label: "Complete Subject Notes",
          url: "#"
        }
      ]
    },
          {
      name: "Engineering Mathematics II",
      links: [
        {
          label: "Unit 1 Notes",
          url: "#"
        },
        {
          label: "Unit 2 Notes",
          url: "#"
        },
        {
          label: "Unit 3 Notes",
          url: "#"
        },
        {
          label: "Unit 4 Notes",
          url: "#"
        },
        {
          label: "Complete Subject Notes",
          url: "#"
        }
      ]

    },
          {
      name: "Engineering Mechanics",
      links: [
        {
          label: "Unit 1 Notes",
          url: "#"
        },
        {
          label: "Unit 2 Notes",
          url: "#"
        },
        {
          label: "Unit 3 Notes",
          url: "#"
        },
        {
          label: "Unit 4 Notes",
          url: "#"
        },
        {
          label: "Complete Subject Notes",
          url: "#"
        }
      ]

    },
          {
      name: "Fundamental of Electrical and Electronics Engineering",
      links: [
        {
          label: "Unit 1 Notes",
          url: "#"
        },
        {
          label: "Unit 2 Notes",
          url: "#"
        },
        {
          label: "Unit 3 Notes",
          url: "#"
        },
        {
          label: "Unit 4 Notes",
          url: "#"
        },
        {
          label: "Complete Subject Notes",
          url: "#"
        }
      ]

    },
    {
      name: "Introduction to IT Systems",
      links: [
        {
          label: "Unit 1 Notes",
          url: "#"
        },
        {
          label: "Unit 2 Notes",
          url: "#"
        },
        {
          label: "Unit 3 Notes",
          url: "#"
        },
        {
          label: "Unit 4 Notes",
          url: "#"
        },
        {
          label: "Complete Subject Notes",
          url: "#"
        }
      ]

    }
],
    3: [
    {
      name: "Computer Programming in C",
      links: [
        {
          label: "Unit 1 Notes",
          url: "#"
        },
        {
          label: "Unit 2 Notes",
          url: "#"
        },
        {
          label: "Unit 3 Notes",
          url: "#"
        },
        {
          label: "Unit 4 Notes",
          url: "#"
        },
        {
          label: "Complete Subject Notes",
          url: "#"
        }
      ]
    },
          {
      name: "Scripting Language (Python)",
      links: [
        {
          label: "Unit 1 Notes",
          url: "#"
        },
        {
          label: "Unit 2 Notes",
          url: "#"
        },
        {
          label: "Unit 3 Notes",
          url: "#"
        },
        {
          label: "Unit 4 Notes",
          url: "#"
        },
        {
          label: "Complete Subject Notes",
          url: "#"
        }
      ]

    },
          {
      name: "Data Structures",
      links: [
        {
          label: "Unit 1 Notes",
          url: "#"
        },
        {
          label: "Unit 2 Notes",
          url: "#"
        },
        {
          label: "Unit 3 Notes",
          url: "#"
        },
        {
          label: "Unit 4 Notes",
          url: "#"
        },
        {
          label: "Complete Subject Notes",
          url: "#"
        }
      ]

    },
          {
      name: "Computer System Organization",
      links: [
        {
          label: "Unit 1 Notes",
          url: "#"
        },
        {
          label: "Unit 2 Notes",
          url: "#"
        },
        {
          label: "Unit 3 Notes",
          url: "#"
        },
        {
          label: "Unit 4 Notes",
          url: "#"
        },
        {
          label: "Complete Subject Notes",
          url: "#"
        }
      ]

    },
    {
      name: "Algorithms",
      links: [
        {
          label: "Unit 1 Notes",
          url: "#"
        },
        {
          label: "Unit 2 Notes",
          url: "#"
        },
        {
          label: "Unit 3 Notes",
          url: "#"
        },
        {
          label: "Unit 4 Notes",
          url: "#"
        },
        {
          label: "Complete Subject Notes",
          url: "#"
        }
      ]

    }
],
    4: [
      {
      name: "Operating Systems",
      links: [
        {
          label: "Unit 1 Notes",
          url: "#"
        },
        {
          label: "Unit 2 Notes",
          url: "#"
        },
        {
          label: "Unit 3 Notes",
          url: "#"
        },
        {
          label: "Unit 4 Notes",
          url: "#"
        },
        {
          label: "Complete Subject Notes",
          url: "#"
        }
      ]
    },
          {
      name: "Introduction to DBMS",
      links: [
        {
          label: "Unit 1 Notes",
          url: "#"
        },
        {
          label: "Unit 2 Notes",
          url: "#"
        },
        {
          label: "Unit 3 Notes",
          url: "#"
        },
        {
          label: "Unit 4 Notes",
          url: "#"
        },
        {
          label: "Complete Subject Notes",
          url: "#"
        }
      ]

    },
          {
      name: "Computer Networks",
      links: [
        {
          label: "Unit 1 Notes",
          url: "#"
        },
        {
          label: "Unit 2 Notes",
          url: "#"
        },
        {
          label: "Unit 3 Notes",
          url: "#"
        },
        {
          label: "Unit 4 Notes",
          url: "#"
        },
        {
          label: "Complete Subject Notes",
          url: "#"
        }
      ]

    },
          {
      name: "SSAD/Software Engineering",
      links: [
        {
          label: "Unit 1 Notes",
          url: "#"
        },
        {
          label: "Unit 2 Notes",
          url: "#"
        },
        {
          label: "Unit 3 Notes",
          url: "#"
        },
        {
          label: "Unit 4 Notes",
          url: "#"
        },
        {
          label: "Complete Subject Notes",
          url: "#"
        }
      ]

    },
    {
      name: "Object Oriented Programming Using Java",
      links: [
        {
          label: "Unit 1 Notes",
          url: "#"
        },
        {
          label: "Unit 2 Notes",
          url: "#"
        },
        {
          label: "Unit 3 Notes",
          url: "#"
        },
        {
          label: "Unit 4 Notes",
          url: "#"
        },
        {
          label: "Complete Subject Notes",
          url: "#"
        }
      ]

    }
    ],
    5: [
      {
      name: "Microprocessor & Microcontroller (based on 8086 & 8051)",
      links: [
        {
          label: "Unit 1 Notes",
          url: "#"
        },
        {
          label: "Unit 2 Notes",
          url: "#"
        },
        {
          label: "Unit 3 Notes",
          url: "#"
        },
        {
          label: "Unit 4 Notes",
          url: "#"
        },
        {
          label: "Complete Subject Notes",
          url: "#"
        }
      ]
    },
          {
      name: "IoT (Internet of Things)",
      links: [
        {
          label: "UNIT 1 — IoT Fundamentals Imp Qns",
          url: "https://drive.google.com/file/d/1aB1ESyeRK9rXyKDDpGlMWB2ld_GkC25p/view?usp=sharing"
        },
        {
          label: "Unit 2 NotesUNIT 2 — IoT Protocols Imp Qns",
          url: "https://drive.google.com/file/d/1ps8KyyP-5P2vJIu9R9uX48q7ITbEh666/view?usp=sharing"
        },
        {
          label: "UNIT 3 — IoT Architecture Imp Qns",
          url: "https://drive.google.com/file/d/1J-NrDbP6M5d-gRuKqPXAmjU-V40cZLN1/view?usp=sharing"
        },
        {
          label: "UNIT 4 — Web of Things (WoT) Imp Qns",
          url: "https://drive.google.com/file/d/1x8x863PK5B--oAW0uM0C-PeqPD8ZUpXu/view?usp=sharing"
        },
        {
          label: "UNIT 5 — Arduino Imp Qns",
          url: "https://drive.google.com/file/d/1WwpQ5AnR8Hb_qVuuN8ONgmqj7EcuFb9L/view?usp=sharing"
        },
        {
          label: "UNIT 6 — IoT Applications Imp Qns",
          url: "https://drive.google.com/file/d/1QQOi_hYEYesFLFhtsa01tQpD4BETsFK4/view?usp=sharing"
        },
        {
          label: "Internet of Things Other Imp Qns",
          url: "https://drive.google.com/file/d/1taJswbyx6YIbhwtJiJzgcvNwOS2awHQM/view?usp=sharing"
        }
      ]

    },
          {
      name: "Mobile computing",
      links: [
        {
          label: "Unit 1 Notes",
          url: "#"
        },
        {
          label: "Unit 2 Notes",
          url: "#"
        },
        {
          label: "Unit 3 Notes",
          url: "#"
        },
        {
          label: "Unit 4 Notes",
          url: "#"
        },
        {
          label: "Complete Subject Notes",
          url: "#"
        }
      ]

    },
          {
      name: "Fundamentals of AI",
      links: [
        {
          label: "Unit 1 Notes",
          url: "#"
        },
        {
          label: "Unit 2 Notes",
          url: "#"
        },
        {
          label: "Unit 3 Notes",
          url: "#"
        },
        {
          label: "Unit 4 Notes",
          url: "#"
        },
        {
          label: "Complete Subject Notes",
          url: "#"
        }
      ]

    },
    {
      name: "Digital Image Processing",
      links: [
        {
          label: "UNIT 1 — Image Processing Fundamentals",
          url: "https://drive.google.com/file/d/1VA28sBnQxHo3srXzEDb69uaVRMgLlddu/view?usp=sharing"
        },
        {
          label: "UNIT 2 — Image Enhancement in the Spatial Domain",
          url: "https://drive.google.com/file/d/1j8hULOisBLymRoavcONYF30KfCpvCA-t/view?usp=sharing"
        },
        {
          label: "UNIT 3 — Image Restoration",
          url: "https://drive.google.com/file/d/1on_ekez1ljBXwS1i5zk4QyZwYr9ZOX69/view?usp=sharing"
        },
        {
          label: "UNIT 4 — Color Image Processing",
          url: "https://drive.google.com/file/d/1g8JOk7_wN5P4TvqhvNnErF-VvtsL1QRY/view?usp=sharing"
        },
        {
          label: "UNIT 5 — Image Compression",
          url: "https://drive.google.com/file/d/1bSP1gpYSvNSlZ62nTvF1WyfrUgN2jEMU/view?usp=sharing"
        }
      ]

    }
    ],
    6: [
      {
      name: "Cloud Computing",
      links: [
        {
          label: "Unit 1 Notes",
          url: "#"
        },
        {
          label: "Unit 2 Notes",
          url: "#"
        },
        {
          label: "Unit 3 Notes",
          url: "#"
        },
        {
          label: "Unit 4 Notes",
          url: "#"
        },
        {
          label: "Complete Subject Notes",
          url: "#"
        }
      ]
    },
          {
      name: "Machine Learning",
      links: [
        {
          label: "Unit 1 Notes",
          url: "#"
        },
        {
          label: "Unit 2 Notes",
          url: "#"
        },
        {
          label: "Unit 3 Notes",
          url: "#"
        },
        {
          label: "Unit 4 Notes",
          url: "#"
        },
        {
          label: "Complete Subject Notes",
          url: "#"
        }
      ]

    },
          {
      name: "Engineering Economics and Project Management",
      links: [
        {
          label: "Unit 1 Notes",
          url: "#"
        },
        {
          label: "Unit 2 Notes",
          url: "#"
        },
        {
          label: "Unit 3 Notes",
          url: "#"
        },
        {
          label: "Unit 4 Notes",
          url: "#"
        },
        {
          label: "Complete Subject Notes",
          url: "#"
        }
      ]

    },
          {
      name: "Entrepreneurship and Start-ups.",
      links: [
        {
          label: "Unit 1 Notes",
          url: "#"
        },
        {
          label: "Unit 2 Notes",
          url: "#"
        },
        {
          label: "Unit 3 Notes",
          url: "#"
        },
        {
          label: "Unit 4 Notes",
          url: "#"
        },
        {
          label: "Complete Subject Notes",
          url: "#"
        }
      ]

    }
    ]
  },

  // ---------- 3. PYQ ----------
  // Flow: PYQ → Semester → Subjects → Question Links
  // Add as many question links as you want inside each subject.
  pyq: {
    1: [
      { name: "Applied Physics I ", links: [
        { label: "2026 Question Paper", url: "https://drive.google.com/file/d/1e4afgKYE87jX5kA-UxMmXFjLfHDCmYQ3/view?usp=sharing" },
        { label: "2025 Question Paper", url: "https://drive.google.com/file/d/1AMiAyUPeXwUik7TvrHtFf-NgY2ddzvj5/view?usp=sharing" },
        { label: "2024 Question Paper", url: "https://drive.google.com/file/d/1KynpFJe4KZS35NC_6nAdbZ6yRcLz_4S4/view?usp=sharing" },
        { label: "2023 Question Paper", url: "https://drive.google.com/file/d/1aTsGoHnRfQ-Ee-lBZzqnNddio9lESqll/view?usp=sharing" }
      ]},
      { name: "Appiled Chemistry", links: [
        { label: "2026 Question Paper", url: "https://drive.google.com/file/d/1LcrZb7dsKYOTn-LrSawIRA4K1VIwz_w-/view?usp=sharing" },
        { label: "2025 Question Paper", url: "https://drive.google.com/file/d/15-qW7FeqfrKEOIRJmPgse-QMkG_HSMYg/view?usp=sharing" },
        { label: "2024 Question Paper", url: "https://drive.google.com/file/d/1Ml1EPyWZZW0onmqI4G_9WrL66jya6nRS/view?usp=sharing" },
        { label: "2023 Question Paper", url: "https://drive.google.com/file/d/1aTsGoHnRfQ-Ee-lBZzqnNddio9lESqll/view?usp=sharing" }
      ]},
      { name: "Enginering Mathematics I", links: [
        { label: "2026 Question Paper", url: "https://drive.google.com/file/d/1cdCieQADsvEFy4DhrKbqvbtJkIi7_rkg/view?usp=sharing" },
        { label: "2025 Question Paper", url: "https://drive.google.com/file/d/1J731PF3xonQe8PRXKqqZEyIqwAckvIZO/view?usp=sharing" },
        { label: "2024 Question Paper", url: "https://drive.google.com/file/d/1pHbVLY1LOzOBvDpuXA5z5aXxw0nkBc2n/view?usp=sharing" },
        { label: "2023 Question Paper", url: "https://drive.google.com/file/d/1uM144YMfh9-5bye4Mdn4dXZeHn1W2Y45/view?usp=sharing" }
      ]},
      { name: "Communication Skills in English", links: [
        { label: "2026 Question Paper", url: "https://drive.google.com/file/d/1rPY6QGPKUWLK5ULGerLYLd_-BWC8jL4e/view?usp=sharing" },
        { label: "2025 Question Paper", url: "https://drive.google.com/file/d/1qfX6F_2xsrQ_1LW6tdSmExhGfsSj25bR/view?usp=sharing" },
        { label: "2024 Question Paper", url: "https://drive.google.com/file/d/1SU6dG1nVyoGgVIzlHEgSV8rPCagudnHB/view?usp=sharing" },
        { label: "2023 Question Paper", url: "https://drive.google.com/file/d/119KAMYfbhGw2wGE-TJTgQ0Dly_d8Zy1v/view?usp=sharing" }
      ]},

    ],
    2: [
      { name: "Applied Physics II", links: [
        { label: "2026 Question Paper", url: "#" },
        { label: "2025 Question Paper", url: "#" },
        { label: "2024 Question Paper", url: "#" },
        { label: "2023 Question Paper", url: "#" },
        { label: "2022 Question Paper", url: "#" }
      ]},
      { name: "Engineering Mathematics II", links: [
        { label: "2026 Question Paper", url: "#" },
        { label: "2025 Question Paper", url: "#" },
        { label: "2024 Question Paper", url: "#" },
        { label: "2023 Question Paper", url: "#" },
        { label: "2022 Question Paper", url: "#" }
      ]},
      { name: "Engineering Mechanics", links: [
        { label: "2026 Question Paper", url: "#" },
        { label: "2025 Question Paper", url: "#" },
        { label: "2024 Question Paper", url: "#" },
        { label: "2023 Question Paper", url: "#" },
        { label: "2022 Question Paper", url: "#" }
      ]},
      { name: "Fundamentals of Electrical & Electronics Engineering", links: [
        { label: "2026 Question Paper", url: "#" },
        { label: "2025 Question Paper", url: "#" },
        { label: "2024 Question Paper", url: "#" },
        { label: "2023 Question Paper", url: "#" },
        { label: "2022 Question Paper", url: "#" }
      ]},
      { name: "Introduction to IT Systems", links: [
        { label: "2026 Question Paper", url: "#" },
        { label: "2025 Question Paper", url: "#" },
        { label: "2024 Question Paper", url: "#" },
        { label: "2023 Question Paper", url: "#" },
        { label: "2022 Question Paper", url: "#" }
      ]}
    ],
    3: [
      { name: "Computer Programming in C", links: [
        { label: "2026 Question Paper", url: "https://drive.google.com/file/d/1HW1S1-Us9vMGRTfkUJyzxyZ3-trwa-8H/view?usp=drive_link" },
        { label: "2025 Question Paper", url: "https://drive.google.com/file/d/1FBtGJkb56z-K31tdvEJPBMp7nPf9bACo/view?usp=drive_link" },
        { label: "2024 Question Paper", url: "https://drive.google.com/file/d/1P2lbh1gkxyVX3QngDfYIG2eEJChfA7iE/view?usp=drive_link" },
        { label: "2023 Question Paper", url: "https://drive.google.com/file/d/1DSvRQ4vDrLzSxdTp7NjH7zu43kLGXb2v/view?usp=drive_link" },
        { label: "2022 Question Paper", url: "https://drive.google.com/file/d/1GSDWMbL3ArBfavTqK0ASR7pY9j3rna2H/view?usp=drive_link" }
        
      ]},
      { name: "Scripting Languages (Python)", links: [
        { label: "2026 Question Paper", url: "https://drive.google.com/file/d/1953sn7DKZzEq_oz7sipVszenuuNqa5v5/view?usp=drive_link" },
        { label: "2025 Question Paper", url: "https://drive.google.com/file/d/1TjXKy_VyN3TiCJ-RKoTuknZowaTmfmCf/view?usp=drive_link" },
        { label: "2024 Question Paper", url: "https://drive.google.com/file/d/1OqmQUzWsKnQBx1bPToAMMNxuhX00OieU/view?usp=drive_link" },
        { label: "2023 Question Paper", url: "https://drive.google.com/file/d/1BvIU-8glHxoqA-93WyCpkn9oUJbcwzUw/view?usp=drive_link" },
        { label: "2022 Question Paper", url: "https://drive.google.com/file/d/1qHbOvqtfK1vPpVLb23pp8Irpg27dVMXY/view?usp=drive_link" }
      ]},
      { name: "Data Structures", links: [
        { label: "2026 Question Paper", url: "https://drive.google.com/file/d/1NB-hu4HKndoCmUrzI2FE9Ez6oVIdSer5/view?usp=drive_link" },
        { label: "2025 Question Paper", url: "https://drive.google.com/file/d/1q37v2jkUGH-AVZW95hYxgE6JhNoJR1o2/view?usp=drive_link" },
        { label: "2024 Question Paper", url: "https://drive.google.com/file/d/1hISKSuvah0z6TlwKzhM5Kzq5gxNDsWNa/view?usp=drive_link" },
        { label: "2023 Question Paper", url: "https://drive.google.com/file/d/10qKhIuX9oUMo5zX4LxVZ5OpzcddUgLda/view?usp=drive_link" },
        { label: "2022 Question Paper", url: "https://drive.google.com/file/d/103LLbGMqJFaPhvk8uqlHPD6QLA0QPXVQ/view?usp=drive_link" }
      ]},
      { name: "Computer System Organization ", links: [
        { label: "2026 Question Paper", url: "https://drive.google.com/file/d/1UKILJ_Re-a3XdDHbiAb7DUuZ2q27HFn9/view?usp=drive_link" },
        { label: "2025 Question Paper", url: "https://drive.google.com/file/d/1qzw4oRwqohK70Nh-m84lS5PBbANQT3-q/view?usp=drive_link" },
        { label: "2024 Question Paper", url: "https://drive.google.com/file/d/17Sc2muk3fpyJUIEq9XKCvLPtSygAuBR8/view?usp=drive_link" },
        { label: "2023 Question Paper", url: "https://drive.google.com/file/d/12oen43YfzhVnbCufTAkvuyUhmw3ag2OO/view?usp=drive_link" },
        { label: "2022 Question Paper", url: "https://drive.google.com/file/d/1PeYI1jgX5lsgaBh_nKVeJaCeNsDpTHrs/view?usp=drive_link" }
      ]},
      { name: "Algorithms ", links: [
        { label: "2026 Question Paper", url: "https://drive.google.com/file/d/1rRM94Cif8YYRb_AhHIi95w1HoSyHSql3/view?usp=drive_link" },
        { label: "2025 Question Paper", url: "https://drive.google.com/file/d/1IAp_RXB2QWa6oOD6gJpzfaqFwK4czo93/view?usp=drive_link" },
        { label: "2024 Question Paper", url: "https://drive.google.com/file/d/1uSe2JL_Sk1wPlBKmFWtdyORxAZ4QkIRG/view?usp=drive_link" },
        { label: "2023 Question Paper", url: "https://drive.google.com/file/d/1uS1JwmM3xlb1lMIa2pUBjcX12U3x3dTc/view?usp=drive_link" },
        { label: "2022 Question Paper", url: "https://drive.google.com/file/d/13IoA5szPO5oLzC2Ky1NpUqRbscyheZtN/view?usp=drive_link" }
      ]}
    ],
    4: [
      { name: "Operating Systems", links: [
        { label: "2026 Question Paper", url: "#" },
        { label: "2025 Question Paper", url: "#" },
        { label: "2024 Question Paper", url: "#" },
        { label: "2023 Question Paper", url: "#" },
        { label: "2022 Question Paper", url: "#" }
        
      ]},
      { name: "Introduction to DBMS", links: [
        { label: "2026 Question Paper", url: "#" },
        { label: "2025 Question Paper", url: "#" },
        { label: "2024 Question Paper", url: "#" },
        { label: "2023 Question Paper", url: "#" },
        { label: "2022 Question Paper", url: "#" }
      ]},
      { name: "Computer Networks", links: [
        { label: "2026 Question Paper", url: "#" },
        { label: "2025 Question Paper", url: "#" },
        { label: "2024 Question Paper", url: "#" },
        { label: "2023 Question Paper", url: "#" },
        { label: "2022 Question Paper", url: "#" }
      ]},
      { name: "SSAD/Software Engineering", links: [
        { label: "2026 Question Paper", url: "#" },
        { label: "2025 Question Paper", url: "#" },
        { label: "2024 Question Paper", url: "#" },
        { label: "2023 Question Paper", url: "#" },
        { label: "2022 Question Paper", url: "#" }
      ]},
      { name: "Object Oriented Programming Using Java", links: [
        { label: "2026 Question Paper", url: "#" },
        { label: "2025 Question Paper", url: "#" },
        { label: "2024 Question Paper", url: "#" },
        { label: "2023 Question Paper", url: "#" },
        { label: "2022 Question Paper", url: "#" }
      ]}
    ],
    5: [
      { name: "Microprocessor & Microcontroller (based on 8086 & 8051)", links: [
        { label: "2026 Question Paper", url: "https://drive.google.com/file/d/1zuabWShIBB-NSo16SQWMipCuycM3FWnG/view?usp=drive_link" },
        { label: "2025 Question Paper", url: "https://drive.google.com/file/d/16i9iCYlsov4O9Whuwj2EbfJO56ftpipr/view?usp=drive_link" },
        { label: "2024 Question Paper", url: "https://drive.google.com/file/d/1MXai9OnaO575EqFQRviYgl4zyvmRhb1m/view?usp=drive_link" },
        { label: "2023 Question Paper", url: "https://drive.google.com/file/d/1wmERYZu7lXMEZ8AB0LGOL29Kw_VGxTAo/view?usp=drive_link" }
        
      ]},
      { name: "IoT (Internet of Things)", links: [
        { label: "2026 Question Paper", url: "https://drive.google.com/file/d/1W11lQtyd93HF3FT76Oz8XFrRoez2kz2L/view?usp=drive_link" },
        { label: "2025 Question Paper", url: "https://drive.google.com/file/d/1grQfiDUWQVs0SCN7Zs1QMMm-zoJnzIbl/view?usp=drive_link" },
        { label: "2024 Question Paper", url: "https://drive.google.com/file/d/1dNOk8KkhSPYoXJ5ujFk7QoKFRAKuy2bA/view?usp=drive_link" },
        { label: "2023 Question Paper", url: "https://drive.google.com/file/d/1wmERYZu7lXMEZ8AB0LGOL29Kw_VGxTAo/view?usp=drive_link" }
      ]},
      { name: "Mobile Computing", links: [
        { label: "2026 Question Paper", url: "https://drive.google.com/file/d/1yCXr7avUptjQTObCORz0jXGZDmjApIMK/view?usp=drive_link" },
        { label: "2025 Question Paper", url: "https://drive.google.com/file/d/1GkYJG2gPcnqncGEeOAkIEUiZzWVZCbtw/view?usp=drive_link" },
        { label: "2024 Question Paper", url: "https://drive.google.com/file/d/1HdfW4QwzvLdJTjy-MReuzWHr5jYzQrHM/view?usp=drive_link" },
        { label: "2023 Question Paper", url: "https://drive.google.com/file/d/1wy7TUEVgdA5tCKdHPB1vFbBgnbfily2j/view?usp=drive_link" }
      ]},
      { name: "Fundamentals of AI", links: [
        { label: "2026 Question Paper", url: "https://drive.google.com/file/d/13rB3w78CwrZhQNI1Yr-pqJB1fr5OWoEi/view?usp=drive_link" },
        { label: "2025 Question Paper", url: "https://drive.google.com/file/d/1LVICUi69-7hnkFbfyMHLWxGpuOZEEi5i/view?usp=drive_link" },
        { label: "2024 Question Paper", url: "https://drive.google.com/file/d/1rEmUcNldBJb2MV8Fp7RNJWhAzVnque04/view?usp=drive_link" },
        { label: "2023 Question Paper", url: "https://drive.google.com/file/d/14WoQFST3AeP_C_7Mb3iC2Hw0gdi9_oQ7/view?usp=drive_link" }
      ]},
      { name: "Digital Image Processing", links: [
        { label: "2026 Question Paper", url: "https://drive.google.com/file/d/1pToeM4ibavIRzox3S3-d0ieYuiTJRGgd/view?usp=drive_link" },
        { label: "2025 Question Paper", url: "https://drive.google.com/file/d/16iP4WF1Jc-XMbpBw_JF_WYqT7rgth3uE/view?usp=drive_link" },
        { label: "2024 Question Paper", url: "https://drive.google.com/file/d/1WOA8AGkxsRctpUa_X69aCPcM6tYysuYi/view?usp=drive_link" },
        { label: "2023 Question Paper", url: "https://drive.google.com/file/d/1rxsU4Am-2kezrHkaC9ceaOv--fMuc2-_/view?usp=drive_link" }
      ]}
    ],
    6: [
      { name: " Cloud Computing", links: [
        { label: "2026 Question Paper", url: "#" },
        { label: "2025 Question Paper", url: "#" },
        { label: "2024 Question Paper", url: "#" },
        { label: "2023 Question Paper", url: "#" },
        { label: "2022 Question Paper", url: "#" }
        
      ]},
      { name: "Machine Learning", links: [
        { label: "2026 Question Paper", url: "#" },
        { label: "2025 Question Paper", url: "#" },
        { label: "2024 Question Paper", url: "#" },
        { label: "2023 Question Paper", url: "#" },
        { label: "2022 Question Paper", url: "#" }
      ]},
      { name: "Engineering Economics and Project Management", links: [
        { label: "2026 Question Paper", url: "#" },
        { label: "2025 Question Paper", url: "#" },
        { label: "2024 Question Paper", url: "#" },
        { label: "2023 Question Paper", url: "#" },
        { label: "2022 Question Paper", url: "#" }
      ]},
      { name: "Entrepreneurship and Start-ups", links: [
        { label: "2026 Question Paper", url: "#" },
        { label: "2025 Question Paper", url: "#" },
        { label: "2024 Question Paper", url: "#" },
        { label: "2023 Question Paper", url: "#" },
        { label: "2022 Question Paper", url: "#" }
      ]}
    ]
  },

  // ---------- 4. SUGGESTIONS ----------
  // Flow: Suggestions → Semester → Subjects → Suggestion Link
  suggestions: {
    1: [
      { name: "Applied Physics I", links: [{ label: "View Suggestion", url: "#" }] },
      { name: "Applied Chemistry", links: [{ label: "View Suggestion", url: "#" }] },
      { name: "Engineering Mathematics I", links: [{ label: "View Suggestion", url: "#" }] },
      { name: "Communication Skills in English", links: [{ label: "View Suggestion", url: "#" }] }
    ],
    2: [
      { name: "Applied Physics II", links: [{ label: "View Suggestion", url: "#" }] },
      { name: "Engineering Mathematics II", links: [{ label: "View Suggestion", url: "#" }] },
      { name: "Engineering Mechanics", links: [{ label: "View Suggestion", url: "#" }] },
      { name: "Fundamentals of Electrical & Electronics Engineering", links: [{ label: "View Suggestion", url: "#" }] },
      { name: "Introduction to IT Systems", links: [{ label: "View Suggestion", url: "#" }] },
    ],
    3: [
      { name: "Computer Programming in C", links: [{ label: "View Suggestion", url: "https://drive.google.com/file/d/1pHlKjLs7kVdww25awB19ZdE7ApZl6qF2/view?usp=drive_link" }] },
      { name: "Scripting Languages (Python)", links: [{ label: "View Suggestion", url: "https://drive.google.com/file/d/1Zr_x1AQQAB80ZqoQ7Q1I1ZAR9CXpuVHx/view?usp=drive_link" }] },
      { name: "Data Structures", links: [{ label: "View Suggestion", url: "https://drive.google.com/file/d/18Dz5P-z4Mc1fLvCugia53BR5zaM2MjBA/view?usp=drive_link" }] },
      { name: "Computer System Organization ", links: [{ label: "View Suggestion", url: "https://drive.google.com/file/d/1x2x2ryN1ubTsa_y8CHmtYWkF-vIaswHK/view?usp=drive_link" }] },
      { name: "Algorithms ", links: [{ label: "View Suggestion", url: "https://drive.google.com/file/d/1oPY3Fs_kOnjo4e-hwlt1t2yGYKNY2DFS/view?usp=drive_link" }] }
    ],
    4: [
      { name: "Operating Systems", links: [{ label: "View Suggestion", url: "#" }] },
      { name: "Introduction to DBMS", links: [{ label: "View Suggestion", url: "#" }] },
      { name: "Computer Networks", links: [{ label: "View Suggestion", url: "#" }] },
      { name: "SSAD/Software Engineering", links: [{ label: "View Suggestion", url: "#" }] },
      { name: "Object Oriented Programming Using Java", links: [{ label: "View Suggestion", url: "#" }] }
    ],
    5: [
      { name: "Microprocessor & Microcontroller (Based on 8086 & 8051", links: [{ label: "View Suggestion", url: "https://drive.google.com/file/d/1FQewbq0pLi8apFinnjq1d7IxtTMeuTd7/view?usp=drive_link" }] },
      { name: "IoT (Internet of Things)", links: [{ label: "View Suggestion", url: "https://drive.google.com/file/d/1Osd7KXZ_o7QMZDgMag-QVyiNxlAOWq1b/view?usp=drive_link" }] },
      { name: "Mobile Computing", links: [{ label: "View Suggestion", url: "https://drive.google.com/file/d/1iz3mzNuY8PIhk_SOnGlqGELeBY1VKsN9/view?usp=drive_link" }] },
      { name: "Fundamentals of AI", links: [{ label: "View Suggestion", url: "https://drive.google.com/file/d/1F2rQY-dY0oo0Y2MZDi0IPhjomTqFF-YP/view?usp=drive_link" }] },
      { name: "Digital Image Processing", links: [{ label: "View Suggestion", url: "https://drive.google.com/file/d/1pSmcD2yxmAlnwC0qBw6ganZZzAEio2kr/view?usp=sharing" }] }
    ],
    6: [
      { name: "Machine Learning", links: [{ label: "View Suggestion", url: "#" }] },
      { name: "Cloud Computing", links: [{ label: "View Suggestion", url: "#" }] },
      { name: "Engineering Economics and Project Management", links: [{ label: "View Suggestion", url: "#" }] },
      { name: "Entrepreneurship and Start-ups", links: [{ label: "View Suggestion", url: "#" }] }
      
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
    syllabusUrl: "https://drive.google.com/file/d/1Ofey-0F_M_kL0964QNdsrtgYelLhxMpQ/view?usp=drive_link",
    notificationUrl: "https://wbjeeb.nic.in/jelet/",

    questions: [
      { year: 2026, label: "JELET 2026 Question Paper", url: "https://drive.google.com/file/d/171-MzBK7l5vHeSm5FP9hIMMKGNGBaJRD/view?usp=drive_link" },
      { year: 2025, label: "JELET 2025 Question Paper", url: "https://drive.google.com/file/d/1ktLM6vpO6F5T-_zyBftBOnpz_E3hVevK/view?usp=drive_link" },
      { year: 2024, label: "JELET 2024 Question Paper", url: "https://drive.google.com/file/d/1sAwjS3p_pY66v7KyR3Bg017BEi8RoUod/view?usp=drive_link" },
      { year: 2023, label: "JELET 2023 Question Paper", url: "https://drive.google.com/file/d/1h-uKLgcnacxmjd8RrCltaYFIR9cFSg6A/view?usp=drive_link" },
      { year: 2022, label: "JELET 2022 Question Paper", url: "https://drive.google.com/file/d/1rxOms4zenStMZZG0xatG9ynpvnBJw0Xx/view?usp=drive_link" },
      { year: 2021, label: "JELET 2021 Question Paper", url: "https://drive.google.com/file/d/1-ZVOL8ESjkQxoeUwxqExwrRUbLFYp-Ga/view?usp=drive_link" },
      { year: 2019, label: "JELET 2021 Question Paper", url: "https://drive.google.com/file/d/1gKvvrXRorbxa5_v5ZEF0it0rgYFsbmAl/view?usp=drive_link" },
      { year: 2018, label: "JELET 2021 Question Paper", url: "https://drive.google.com/file/d/1hBRVMal7mx9E3u7d3E8yE6c-WLGlKERl/view?usp=drive_link" },
      { year: 2017, label: "JELET 2021 Question Paper", url: "https://drive.google.com/file/d/1BL6tQPI6A-r2qQlpjc_et1DsqdDG35j_/view?usp=drive_link" }
    ]
  }
};

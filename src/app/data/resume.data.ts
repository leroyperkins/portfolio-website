// src/app/data/resume.data.ts
export interface ResumeData {
  hero: {
    name: string;
    title: string;
    subtitle: string;
    clearance: string;
    ctas: { label: string; link: string; download?: boolean }[];
  };
  skills: {
    languages: string[];
    frameworks: string[];
    tools: string[];
    concepts: string[];
  };
  experience: {
    role: string;
    company: string;
    location: string;
    dates: string;
    bullets: string[];
  }[];
  projects: {
    title: string;
    role: string;
    impact: string;
    metrics?: string;
    tech: string[];
    links: { github?: string; live?: string };
  }[];
  education: { school: string; degree: string; graduation: string };
  extracurriculars: { name: string; role: string; dates: string; bullets: string[] }[];
}

export const RESUME_DATA: ResumeData = {
  hero: {
    name: "Carson Turner",
    title: "Full-Stack Software Engineer @ Lockheed Martin",
    subtitle: "Software Engineer",
    clearance: "Active Secret Clearance",
    ctas: [
      { label: "View Projects", link: "/projects" },
      { label: "Download Resume", link: "/assets/resume.pdf", download: true }
    ]
  },
  skills: {
    languages: [
      "C/C++", "C#", "Java", "Python", "SQL", "TypeScript", "Angular"
    ],
    frameworks: [
      ".NET", "Spring Boot", "NGRX Store", "Cypress", "CI/CD (GitLab)", "OpenShift", "Redux"
    ],
    tools: [
      "GitLab", "Jira", "Confluence", "Bitbucket", "OpenShift", "Docker"
    ],
    concepts: [
      "Full-Stack Development",
      "",
      "Automated Testing Frameworks",
      "CI/CD Pipelines",
      "Agile Leadership",
    ]
  },

  experience: [
    {
      role: "Software Engineer Asc",
      company: "Lockheed Martin",
      location: "Cape Canaveral, FL",
      dates: "JUN 2025 - CURRENT",
      bullets: [
        "Supporting the sustainment of FBM IS applications. Working with Navy customer to provide reliable software changes for military inventory program. Working in small team of developers to enhance end-user experience.",
        "Owning all aspects of development lifecycle: Report issues from end user, create change/enhancement requests, re-create software issues, implement changes, test, deploy and finalize software change.",
        "Monitoring pipelines and deploying between development environments for quarterly software releases.",
        "Development of test procedures for UAT testing and direct support for user-testing needs and conflicts.",
        "Handling fast-turnaround for critical software changes to meet customer needs."
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "Lockheed Martin",
      location: "Cape Canaveral, FL / Remote",
      dates: "MAY 2023 - JUN 2025",
      bullets: [
        "Streamlined testing process for IS applications. Worked directly with a team to convert hand-executed testing procedures into an automated process. Created a testing suite of processes, tools, and abilities – to pass on knowledge to the software team. Developed scripts and testing procedures to test key-functionality and to modularize existing and future test-cases.",
        "Full-stack application development using Angular and Java/Spring Boot and expanded agile methodologies in a team-based environment.",
        "Placed on Python API project to visualize flight-telemetry using test-data for FBM program. Tested front-end visualization for project file structure.",
        "Worked in sustainment software development team. Closed change requests and made significant changes to critical components used in application.",
        "Actively added key-functionality for Python tool for user-base ~50 test-engineers using trend-plots for reliability analysis.",
        "Cypress JavaScript E2E web-application testing.",
        "Continued in the aid of development for military inventory program in part-time fashion during semester of bachelor's degree."
      ]
    },
    {
      role: "Part-Time Software Engineer - Assistant Research",
      company: "University of Missouri",
      location: "Columbia, MO",
      dates: "AUG 2022 - MAY 2023",
      bullets: [
        "Assisted in the development of a GUI driven C# computer program for the analysis and design of blast resistant windows.",
        "GUI program is designed to model Static Resistance Function to enhance resilience of critical infrastructure against explosive events.",
        "Graphing, numerical input, user-defined glass types, blast load specificity."
      ]
    }
  ],

  projects: [
    {
      title: "Project F.R.E.A.K. - Senior Capstone Project",
      role: "Field-ready Rocket Evaluation and Analytics Kit",
      impact: "Worked in team of 6 students to design, test, and deliver software solution to Mizzou Space Program customer",
      metrics: "Reduced data dump time from 4+ hrs to 5 mins",
      tech: ["C#", "LabJack T4", "Live Graphs", "Safety Checks", "Sensor Health"],
      links: {}
    },
    {
      title: "L1 High Powered Rocket - Mizzou Space Program",
      role: "Designed, constructed, and tested L1 rocket to gain Tripoli L1 rocketry certification",
      impact: "Used machine tools, techniques and software to create rocket to pass key requirements for L1 flight",
      metrics: "Selective Process within club as an achievement for active participation, attendance, and contribution to projects/events",
      tech: ["Arduino", "Geiger Counter", "High-altitude Balloon"],
      links: {}
    },
    {
      title: "High Altitude Balloon - Mizzou Space Program",
      role: "High-altitude balloon traveling to ~75k feet to gather basic sensor data. Built from Arduino, included temperature, humidity, pressure and Geiger counter sensors.",
      impact: "Led development of sensor hardware within new-member team. Coded and tested to ensure sensors were functional prior to balloon launch.",
      metrics: "Achieved goal of recovering Balloon data, predictions prior to launch proved correct with recovery and processing of sensor data",
      tech: ["Arduino", "Geiger Counter"],
      links: {}
    }
  ],

  education: {
    school: "University of Missouri - Columbia, MO",
    degree: "B.S. in Computer Science",
    graduation: "MAY 2025"
  },

  extracurriculars: [
    {
      name: "Mizzou Space Program",
      role: "Student led high-powered rocketry design, construction and competitions",
      dates: "SEP 2022 - MAY 2024",
      bullets: [
        "Propulsion research, fuel development, shop tools & activities",
        "Local events and community outreach"
      ]
    },
    {
      name: "Mizzou Club Triathlon",
      role: "Weekly practices of swimming, biking, and running",
      dates: "AUG 2023 - Present",
      bullets: [
        "Bike & Run Coach",
        "Attend professional collegiate competitions"
      ]
    }
  ]
};
**Project Overview**

Echolens is a creative multimedia services website that offers Photography, Videography, and DJ/Sound Hire services.
It was developed to showcase Echolens’ portfolio, introduce the team, and allow clients to book services through a responsive and interactive website.

Echolens/
│
├── index.html          # Main webpage with all sections (Home, About, Services, Portfolio, Team, Contact)
├── styles.css          # Handles all styling, layout, colors, and responsive design
│
├── JS/
│   └── portfolio.js    # Contains portfolio slider, gallery lightbox, and other interactivity scripts
│
├── assets/             # Stores all images used across the site
└── README.md           # Project documentation

**Navigation Overview**

The website uses a simple single-page navigation bar that links to different sections within index.html:

Home – Introduction and hero section with a welcome message and CTA.

About Us – Details about Echolens’ vision, mission, and background.

Our Services – Lists the three main services (Photography, Videography, DJ/Sound Hire).

Portfolio – Showcases completed work and event highlights with interactive gallery (powered by portfolio.js).

Our Team – Displays information and roles of team members.

Contact Form – Allows users to book or make inquiries about services.

**How the Code Works**
1️⃣ index.html (Structure)

Built using HTML5 and organized into sections (<section id="home">, <section id="about">, etc.).

Includes navigation links that use smooth scrolling to navigate between sections.

Contains form fields for booking under the Contact section.

Uses semantic HTML elements for accessibility and SEO.

**Example:**

<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About Us</a></li>
    <li><a href="#services">Our Services</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#team">Our Team</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

2️⃣ styles.css (Design)

Manages layout, color schemes, fonts, and spacing.

Implements a modern and clean design consistent with the Echolens brand.

Includes media queries to ensure responsiveness on mobile, tablet, and desktop.

Adds hover animations and transparent backgrounds matching the brand style.

**Example:**

body {
  font-family: "Poppins", sans-serif;
  background-color: #0d0d0d;
  color: #fff;
  margin: 0;
  scroll-behavior: smooth;
}

button:hover {
  background-color: #ff5500;
  transition: 0.3s ease-in-out;
}

3️⃣ JS/portfolio.js (Functionality)

Controls portfolio gallery interactivity such as:

Image sliders

Lightbox popups (for viewing larger images)

Arrow navigation between portfolio items

Also handles small animations or transitions triggered when scrolling or clicking elements.

**Example:**

const images = document.querySelectorAll('.portfolio-item img');
images.forEach(img => {
  img.addEventListener('click', () => {
    // Opens image in lightbox
  });
});

4️⃣ Contact Form (Frontend Logic)

The Contact section includes:

Name

Phone Number

Email Address

Service Type (Dropdown: Photographer, Videographer, DJ/Sound Hire)

Event Location

Event Date (with calendar picker)

Additional Info (textarea)

Currently, the form uses frontend validation through HTML and JS.

Future versions can integrate MySQL or Firebase for actual data storage.

🧩 **Technologies Used**

| Category           | Tools / Languages       |
| ------------------ | ----------------------- |
| Frontend           | HTML5, CSS3, JavaScript |
| Design Tools       | Figma                   |
| Wireframing        | Balsamiq / Pencil       |
| Hosting            | Netlify                 |
| Project Management | Trello                  |

👩‍💻 **Project Team**
Name	        Role	                    Responsibilities
Moketane	    Developer / Project Lead	HTML, CSS, JS coding, Netlify deployment
Sebina	      UI/UX Designer	          Figma design, color schemes, layout
Zenani	      Content & QA	            Website text content, proofreading, testing and feedback

📅 **Project Timeline**

| Phase                        | Start Date  | End Date    | Status |
| ---------------------------- | ----------- | ----------- | ------ |
| Planning & Setup             | 22 Sep 2025 | 24 Sep 2025 | ✅ Done |
| Figma Wireframes             | 25 Sep 2025 | 27 Sep 2025 | ✅ Done |
| Frontend Development         | 28 Sep 2025 | 10 Oct 2025 | ✅ Done |
| Contact Form Setup           | 11 Oct 2025 | 13 Oct 2025 | ✅ Done |
| Portfolio Integration        | 14 Oct 2025 | 15 Oct 2025 | ✅ Done |
| Final Testing & Presentation | 16 Oct 2025 | 17 Oct 2025 | ✅ Done |

🌐 **Hosting**

The Echolens website is hosted on Netlify.
🔗 Live Link: (https://echolens-project.netlify.app/)

🚀 **Future Improvements**

Add backend database for booking management (MySQL or Firebase).

Create an admin page for managing bookings.

Implement email notifications for booking submissions.

Improve SEO and add Google Analytics tracking.

✅ Conclusion

The Echolens project represents a complete and responsive multimedia website, showcasing creativity and technical collaboration. It integrates HTML, CSS, and JavaScript effectively, and is designed to evolve with future backend integration.








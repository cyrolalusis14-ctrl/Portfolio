<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cyro Lalusis — Personal Portfolio</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Manrope:wght@700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="site-header">
    <nav class="nav container" aria-label="Primary">
      <a href="#home" class="nav-brand">
        <span class="nav-name">CYRO LALUSIS</span>
        <span class="nav-tagline">SOFTWARE DEVELOPER</span>
      </a>
      <button class="nav-toggle" aria-expanded="false" aria-controls="primary-navigation" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-list" id="primary-navigation">
        <li><a href="#home">Home</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#contact" class="nav-cta">Let's Talk ↗</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="home" class="hero">
      <div class="container">
        <p class="hero-label">CYRO LALUSIS — PERSONAL PORTFOLIO</p>
        <h1 class="hero-title">Building digital solutions with purpose.</h1>
        <p class="hero-text">I'm a fourth-year Information Technology student interested in software development, web technologies, and building practical digital experiences. I enjoy solving problems and turning ideas into functional applications.</p>
        <div class="hero-actions">
          <a href="#work" class="btn btn-primary">Explore Selected Work</a>
          <a href="#contact" class="btn btn-secondary">Get In Touch</a>
        </div>
        <div class="hero-meta">
          <span>BASED IN CALABARZON, PHILIPPINES</span>
          <span>AVAILABLE FOR INTERNSHIP OPPORTUNITIES</span>
        </div>
      </div>
      <div class="hero-portrait placeholder" aria-hidden="true"></div>
    </section>

    <section id="work" class="section selected-work">
      <div class="container">
        <p class="section-label">01 / SELECTED WORK</p>
        <h2 class="section-title">A selection of things I've worked on.</h2>
        <div class="projects-grid">
          <article class="project-card featured">
            <div class="project-media">
              <img src="https://via.placeholder.com/1200x675/171717/FFFFFF?text=TrabaHub" alt="Trabahub project screenshot">
            </div>
            <div class="project-body">
              <div class="project-meta">
                <span class="project-year">2026</span>
                <span class="project-type">CAPSTONE PROJECT</span>
              </div>
              <h3 class="project-title">PESO Digital Employment Facilitation and Job Matching System for Lipa City (Trabahub)</h3>
              <p class="project-desc">Developed a mobile and web platform for PESO Lipa City that supports digital employment facilitation and job matching between job seekers and employers. The mobile application was built with React Native, with emphasis on usability and UI/UX design.</p>
              <div class="project-tech">React Native · Mobile Development · UI/UX Design · Web Development</div>
            </div>
          </article>
          ... other projects
        </div>
      </div>
    </section>
    ...
  </main>
  <footer>...</footer>
  <script src="script.js"></script>
</body>
</html><!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cyro Lalusis - Personal Portfolio</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Navigation -->
  <nav class="navbar">
    <div class="container">
      <div class="logo">
        <h1>CYRO LALUSIS</h1>
        <p class="desc">SOFTWARE DEVELOPER</p>
      </div>
      <div class="nav-links">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div class="bottom-border"></div>
      <a href="#let's-talk" class="let-stalk">Let's Talk ↗</a>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="home" class="hero">
    <div class="container">
      <h2 class="label">CYRO LALUSIS — PERSONAL PORTFOLIO</h2>
      <p class="subtitle">Building digital solutions with purpose.</p>
      <p class="paragraph">I'm a fourth-year Information Technology student interested in software development, web technologies, and building practical digital experiences. I enjoy solving problems and turning ideas into functional applications.</p>
      <div class="cta-buttons">
        <a href="#work" class="btn btn-primary">Explore Selected Work</a>
        <a href="#contact" class="btn btn-secondary">Get In Touch</a>
      </div>
      <div class="metadata">
        <p>BASED IN CALABARZON, PHILIPPINES</p>
        <p>AVAILABLE FOR INTERNSHIP OPPORTUNITIES</p>
      </div>
    </div>
  </section>

  <!-- Section 01: SELECTED WORK -->
  <section id="work" class="section selected-work">
    <div class="container">
      <h3 class="label">01 / SELECTED WORK</h3>
      <h2 class="heading">A selection of things I've worked on.</h2>
      <div class="grid-projects">
        <article class="project-card featured">
          <h3 class="project-title">Trabahub</h3>
          <p class="project-type">CAPSTONE PROJECT</p>
          <p class="project-description">Developed a mobile and web platform for PESO Lipa City that supports digital employment facilitation and job matching between job seekers and employers. The mobile application was developed using React Native, with emphasis on usability and UI/UX design.</p>
          <div class="tech-tags">React Native · Mobile Development · UI/UX Design · Web Development</div>
          <img src="https://via.placeholder.com/400x250" alt="Trabahub screenshot" class="project-image">
        </article>
        <article class="project-card">
          <h3 class="project-title">Food Hub POS System</h3>
          <p class="project-type">WEB DEVELOPMENT</p>
          <p class="project-description">Developed and deployed a web-based Point of Sale system for Food Hub, hosted on Hostinger and integrated with third-party services for payments, analytics, email confirmation, and customer support.</p>
          <div class="tech-tags">Google Analytics · Google Search Console · Payment Gateway · Email Confirmation · Tawk.to Live Chat</div>
          <img src="https://via.placeholder.com/400x250" alt="POS System screenshot" class="project-image">
        </article>
        <article class="project-card">
          <h3 class="project-title">School Repository Management System</h3>
          <p class="project-type">WEB DEVELOPMENT</p>
          <p class="project-description">Designed and deployed a web-based repository management system for administrators, deans, and faculty. Included user authentication with email confirmations and analytics tracking. Hosted and maintained using Hostinger.</p>
          <div class="tech-tags">Hostinger · MySQL · PHP · React · Authentication</div>
          <img src="https://via.placeholder.com/400x250" alt="Repo System screenshot" class="project-image">
        </article>
        <article class="project-card">
          <h3 class="project-title">Library Management System</h3>
          <p class="project-type">LOCAL CONSOLE APPLICATION</p>
          <p class="project-description">Developed a local console-based library management application using NetBeans and Command Prompt. Implemented basic CRUD functionality for managing library records.</p>
          <div class="tech-tags">NetBeans · CMD · SQLite</div>
          <img src="https://via.placeholder.com/400x250" alt="Library System screenshot" class="image-placeholder">
        </article>
      </div>
    </div>
  </section>

  <!-- Section 02: ABOUT -->
  <section id="about" class="section about">
    <div class="container">
      <h3 class="label">02 / ABOUT</h3>
      <h2 class="heading">Curious by nature. Developer by practice.</h2>
      <p class="description">I'm currently pursuing a Bachelor of Science in Information Technology at National University Lipa. Throughout my academic journey, I've explored software development, web technologies, database management, networking, and system design. Working on academic and capstone projects has allowed me to gain practical experience building web and mobile applications, integrating third-party services, and developing user-focused solutions. I value continuous learning, problem-solving, and creating technology that serves a real purpose.</p>
      <blockquote class="highlight-quote">
        "I believe good software is not just about functionality. It's about making things work better for the people who use them."
      </blockquote>
      <div class="qualities">
        <ul>
          <li>Fast learner and adaptable to new technologies</li>
          <h3>Strong problem-solving and critical-thinking skills</h3>
          <ul>
            <li>Effective communication and teamwork</li>
            <li>Responsible, organized, and detail-oriented</li>
          </h3>
        </ul>
      </div>
      <p class="meta">Beyond the technical. — Fast learner, adaptable, problem-solver, communicator, responsible.</p>
      <div class="portrait-placeholder"></div>
    </div>
  </section>

  <!-- Section 03: EXPERTISE -->
  <section id="skills" class="section skills">
    <div class="container">
      <h3 class="label">03 / EXPERTISE</h3>
      <h2 class="heading">Tools and technologies I work with.</h2>
      <div class="skills-grid">
        <div class="skill-item"><strong>PROGRAMMING LANGUAGES:</strong> Java, Python, C++, JavaScript</div>
        <div class="skill-item"><strong>WEB DEVELOPMENT:</strong> HTML, CSS, PHP, React (Basic)</div>
        <div class="skill-item"><strong>MOBILE DEVELOPMENT:</strong > React Native</div>
        <div class="skill-item"><strong>DATABASE:</strong> MySQL</div>
        <div class="skill-item"><strong>NETWORKING:</strong> Cisco Packet Tracer, Basic Configuration & Troubleshooting</div>
      </div>
      <div class="tools">
        <ul>
          <li><a href="Visual Studio Code">Visual Studio Code</a></li>
<li><a href="GitHub">GitHub</a></li>
<li><a href="Android Studio">Android Studio</a></li>
<li><a<a href="Figma">Figma</a></li>
        </ul>
      </div>
      <div class="additional">
        <ul>
          <li>UI/UX Design</li>
<li>Troubleshooting</li>
          Microsoft Office</li>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
<parameter=AI-Assisted Programming
</parameter>
      </div>
    </div>
  </section>

  <!-- Section 04: EDUCATION -->
  <section id="education" class="section education">
    <div class="container">
      <h3 class="label">04 / EDUCATION</h3>
      <h2 class="heading">National University Lipa</h3>
      <p class="description">Bachelor of Science in Information Technology<br>2023 – Present<br>Current Standing: Fourth Year Student<br>Location: Ayala Highway, Brgy. Mataas na Lupa, Lipa City, Batangas, Philippines.<br>Relevant Coursework: Web Systems and Technologies, Database Management, Networking Fundamentals, Systems Analysis and Design, Human-Computer Interaction</p>
      <div class="timeline">2023–Present</n> <div class="course-list">Web Systems and Technologies · Database Management · Networking Fundamentals · Systems Analysis and Design · HCI</div>
    </div>
  </section>

  <!-- Section 05: CERTIFICATIONS & ACHIEVEMENTS -->
  <section id="recognition" class="section recognition">
    <div class="container">
      <h3 class="label">05 / RECOGNITION</h3>
      <h2 class="heading">Certifications & Achievements</h2>
      <div class="cert-list">
        <div class="cert-item"><strong>Information Technology Specialist in Networking (2025)</strong></div>
        <div class="cert-item"><strong>IC3 GS6 Level 1 (2024)</strong></div>
        <div class="cert-item"><strong>C)SA1: Certified Security Awareness 1 (2023)</strong></div>
      </div>
      <div class="dean-lister">
        <h3 class="label">Dean's Lister, National University Lipa — AY 2023–2026</h3>
      </div>
    </div>
  </section>

  <!-- Section 06: CONTACT -->
  <section id="contact" class="section contact">
    <div class="container">
      <h3 class="label">06 / CONTACT</h3>
      <h2 class="heading">Have an opportunity in mind? Let's connect.</h2>
      <p class="description">I'm always open to connecting with people, exploring opportunities, and learning about new projects.</p>
      <div class="contact-info">
        <p><a href="https://www.linkedin.com/in/cyro-lalusis-891a1b395/">LinkedIn</a></p>
        <p><em>Email: [placeholder] | GitHub: [placeholder]</em></p>
      </div>
      <button class="btn contact-btn">Send Message</button>
    </div>
    <form action="#" method="post">
      <input type="text" placeholder="Name" required>
      <input type="email" placeholder="Email" required>
      <textarea rows="4" placeholder="Message"></textarea>
      <button type="submit" class="btn">Send</button>
    </form>
    <div class="footer">
      <p>CYRO LALUSIS</p>
      <p>"Designed with intention. Built through curiosity."</p>
      <div class="social">
        <a href="https://www.linkedin.com/in/cyro-lalusis-891a1b395/">LinkedIn</a>
      </div>
      <p>&copy; <span id="year"></span> CYRO LALUSIS</p>
    </div>
    <div class="back-to-top"></div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <p>CYRO LALUSIS</p>
      <p>"Designed with intention. Built through curiosity."</p> 
    </div>
  </footer>

  <!-- Scroll indicator -->
  <div class="scroll-indicator">&#x25B2;</div>

</body>
</html><!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cyro Lalusis - Personal Portfolio</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Navigation -->
  <nav class="navbar">
    <div class="container">
      <div class="logo">
        <h1>CYRO LALUSIS</h1>
        <p class="desc">SOFTWARE DEVELOPER</p>
      </div>
      <div class="nav-links">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div class="bottom-border"></div>
      <a href="#let's-talk" class="let-stalk">Let's Talk ↗</a>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="home" class="hero">
    <div class="container">
      <h2 class="label">CYRO LALUSIS — PERSONAL PORTFOLIO</h2>
      <p class="subtitle">Building digital solutions with purpose.</p>
      <p class="paragraph">I'm a fourth-year Information Technology student interested in software development, web technologies, and building practical digital experiences. I enjoy solving problems and turning ideas into functional applications.</p>
      <div class="cta-buttons">
        <a href="#work" class="btn btn-primary">Explore Selected Work</a>
        <a href="#contact" class="btn btn-secondary">Get In Touch</a>
      </div>
      <div class="metadata">
        <p>BASED IN CALABARZON, PHILIPPINES</p>
        <p>AVAILABLE FOR INTERNSHIP OPPORTUNITIES</p>
      </div>
    </div>
  </section>

  <!-- Section 01: SELECTED WORK -->
  <section id="work" class="section selected-work">
    <div class="container">
      <h3 class="label">01 / SELECTED WORK</h3>
      <h2 class="heading">A selection of things I've worked on.</h2>
      <div class="grid-projects">
        <article class="project-card featured">
          <h3 class="project-title">Trabahub</h3>
          <p class="project-type">CAPSTONE PROJECT</p>
          <p class="project-description">Developed a mobile and web platform for PESO Lipa City that supports digital employment facilitation and job matching between job seekers and employers. The mobile application was developed using React Native, with emphasis on usability and UI/UX design.</p>
          <div class="tech-tags">React Native · Mobile Development · UI/UX Design · Web Development</div>
          <img src="https://via.placeholder.com/400x250" alt="Trabahub screenshot" class="project-image">
        </article>
        <article class="project-card">
          <h3 class="project-title">Food Hub POS System</h3>
          <p class="project-type">WEB DEVELOPMENT</p>
          <p class="project-description">Developed and deployed a web-based Point of Sale system for Food Hub, hosted on Hostinger and integrated with third-party services for payments, analytics, email confirmation, and customer support.</p>
          <div class="tech-tags">Google Analytics · Google Search Console · Payment Gateway · Email Confirmation · Tawk.to Live Chat</div>
          <img src="https://via.placeholder.com/400x250" alt="POS System screenshot" class="project-image">
        </article>
        <article class="project-card">
          <h3 class="project-title">School Repository Management System</h3>
          <p class="project-type">WEB DEVELOPMENT</p>
          <p class="project-description">Designed and deployed a web-based repository management system for administrators, deans, and faculty. Included user authentication with email confirmations and analytics tracking. Hosted and maintained using Hostinger.</p>
          <div class="tech-tags">Hostinger · MySQL · PHP · React · Authentication</div>
          <img src="https://via.placeholder.com/400x250" alt="Repo System screenshot" class="project-image">
        </article>
        <article class="project-card">
          <h3 class="project-title">Library Management System</h3>
          <p class="project-type">LOCAL CONSOLE APPLICATION</p>
          <p class="project-description">Developed a local console-based library management application using NetBeans and Command Prompt. Implemented basic CRUD functionality for managing library records.</p>
          <div class="tech-tags">NetBeans · CMD · SQLite</div>
          <img src="https://via.placeholder.com/400x250" alt="Library System screenshot" class="image-placeholder">
        </article>
      </div>
    </div>
  </section>

  <!-- Section 02: ABOUT -->
  <section id="about" class="section about">
    <div class="container">
      <h3 class="label">02 / ABOUT</h3>
      <h2 class="heading">Curious by nature. Developer by practice.</h2>
      <p class="description">I'm currently pursuing a Bachelor of Science in Information Technology at National University Lipa. Throughout my academic journey, I've explored software development, web technologies, database management, networking, and system design. Working on academic and capstone projects has allowed me to gain practical experience building web and mobile applications, integrating third-party services, and developing user-focused solutions. I value continuous learning, problem-solving, and creating technology that serves a real purpose.</p>
      <blockquote class="highlight-quote">
        "I believe good software is not just about functionality. It's about making things work better for the people who use them."
      </blockquote>
      <div class="qualities">
        <ul>
          <li>Fast learner and adaptable to new technologies</li>
          <h3>Strong problem-solving and critical-thinking skills</h3>
          <ul>
            <li>Effective communication and teamwork</li>
            <li>Responsible, organized, and detail-oriented</li>
          </h3>
        </ul>
      </div>
      <p class="meta">Beyond the technical. — Fast learner, adaptable, problem-solver, communicator, responsible.</p>
      <div class="portrait-placeholder"></div>
    </div>
  </section>

  <!-- Section 03: EXPERTISE -->
  <section id="skills" class="section skills">
    <div class="container">
      <h3 class="label">03 / EXPERTISE</h3>
      <h2 class="heading">Tools and technologies I work with.</h2>
      <div class="skills-grid">
        <div class="skill-item"><strong>PROGRAMMING LANGUAGES:</strong> Java, Python, C++, JavaScript</div>
        <div class="skill-item"><strong>WEB DEVELOPMENT:</strong> HTML, CSS, PHP, React (Basic)</div>
        <div class="skill-item"><strong>MOBILE DEVELOPMENT:</strong > React Native</div>
        <div class="skill-item"><strong>DATABASE:</strong> MySQL</div>
        <div class="skill-item"><strong>NETWORKING:</strong> Cisco Packet Tracer, Basic Configuration & Troubleshooting</div>
      </div>
      <div class="tools">
        <ul>
          <li><a href="Visual Studio Code">Visual Studio Code</a></li>
<li><a href="GitHub">GitHub</a></li>
<li><a href="Android Studio">Android Studio</a></li>
<li><a<a href="Figma">Figma</a></li>
        </ul>
      </div>
      <div class="additional">
        <ul>
          <li>UI/UX Design</li>
<li>Troubleshooting</li>
          Microsoft Office</li>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
<parameter=AI-Assisted Programming
</parameter>
      </div>
    </div>
  </section>

  <!-- Section 04: EDUCATION -->
  <section id="education" class="section education">
    <div class="container">
      <h3 class="label">04 / EDUCATION</h3>
      <h2 class="heading">National University Lipa</h3>
      <p class="description">Bachelor of Science in Information Technology<br>2023 – Present<br>Current Standing: Fourth Year Student<br>Location: Ayala Highway, Brgy. Mataas na Lupa, Lipa City, Batangas, Philippines.<br>Relevant Coursework: Web Systems and Technologies, Database Management, Networking Fundamentals, Systems Analysis and Design, Human-Computer Interaction</p>
      <div class="timeline">2023–Present</n> <div class="course-list">Web Systems and Technologies · Database Management · Networking Fundamentals · Systems Analysis and Design · HCI</div>
    </div>
  </section>

  <!-- Section 05: CERTIFICATIONS & ACHIEVEMENTS -->
  <section id="recognition" class="section recognition">
    <div class="container">
      <h3 class="label">05 / RECOGNITION</h3>
      <h2 class="heading">Certifications & Achievements</h2>
      <div class="cert-list">
        <div class="cert-item"><strong>Information Technology Specialist in Networking (2025)</strong></div>
        <div class="cert-item"><strong>IC3 GS6 Level 1 (2024)</strong></div>
        <div class="cert-item"><strong>C)SA1: Certified Security Awareness 1 (2023)</strong></div>
      </div>
      <div class="dean-lister">
        <h3 class="label">Dean's Lister, National University Lipa — AY 2023–2026</h3>
      </div>
    </div>
  </section>

  <!-- Section 06: CONTACT -->
  <section id="contact" class="section contact">
    <div class="container">
      <h3 class="label">06 / CONTACT</h3>
      <h2 class="heading">Have an opportunity in mind? Let's connect.</h2>
      <p class="description">I'm always open to connecting with people, exploring opportunities, and learning about new projects.</p>
      <div class="contact-info">
        <p><a href="https://www.linkedin.com/in/cyro-lalusis-891a1b395/">LinkedIn</a></p>
        <p><em>Email: [placeholder] | GitHub: [placeholder]</em></p>
      </div>
      <button class="btn contact-btn">Send Message</button>
    </div>
    <form action="#" method="post">
      <input type="text" placeholder="Name" required>
      <input type="email" placeholder="Email" required>
      <textarea rows="4" placeholder="Message"></textarea>
      <button type="submit" class="btn">Send</button>
    </form>
    <div class="footer">
      <p>CYRO LALUSIS</p>
      <p>"Designed with intention. Built through curiosity."</p>
      <div class="social">
        <a href="https://www.linkedin.com/in/cyro-lalusis-891a1b395/">LinkedIn</a>
      </div>
      <p>&copy; <span id="year"></span> CYRO LALUSIS</p>
    </div>
    <div class="back-to-top"></div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <p>CYRO LALUSIS</p>
      <p>"Designed with intention. Built through curiosity."</p>
    </div>
  </footer>

  <!-- Scroll indicator -->
  <div class="scroll-indicator">&#x25B2;</div>

</body>
</html>
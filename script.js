// Sayfa yüklendiğinde konsola mesaj yazdır
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded successfully!');

    // Create content panel
    const contentPanel = document.createElement('div');
    contentPanel.className = 'content-panel';
    document.querySelector('.container').appendChild(contentPanel);

    // Add close button to content panel
    const closeBtn = document.createElement('button');
    closeBtn.className = 'close-btn';
    closeBtn.innerHTML = '×';
    contentPanel.appendChild(closeBtn);

    // Content for each section
    const contents = {
        experience: `
            <h1>Experience</h1>
            <div class="section">
                <div class="section-header">
                    <h2>Yazılım Yapay Zeka Yaratıcılık Topluluğu</h2>
                    <p class="date">September 2024 - Present</p>
                </div>
                <div class="experience-item">
                    <h3>Sponsorship and Organization Team Member</h3>
                    <p>Antalya, Türkiye</p>
                    <ul>
                        <li>Planning and executing sponsorship processes</li>
                        <li>Event organization and coordination</li>
                    </ul>
                </div>
            </div>

            <div class="section">
                <div class="section-header">
                    <h2>METUOR Space</h2>
                    <p class="date">August 2024 - December 2024 · 5 months</p>
                </div>
                <div class="experience-item">
                    <h3>Electronics and Software Member</h3>
                    <p>Ankara, Türkiye · Remote</p>
                    <ul>
                        <li>Electronic circuit board design using EasyEDA and KiCad</li>
                        <li>Rocket systems software development using C and STM32CubeIDE</li>
                        <li>Technical competencies and teamwork experience</li>
                    </ul>
                </div>
            </div>

            <div class="section">
                <div class="section-header">
                    <h2>Deneyap Teknoloji Atölyeleri</h2>
                    <p class="date">February 2019 - June 2023 · 4 years 5 months</p>
                </div>
                <div class="experience-item">
                    <h3>Student</h3>
                    <p>Isparta, Türkiye · Hybrid</p>
                    <h3>Certificates</h3>
                    <ul>
                        <li>Aviation and Space Technologies</li>
                        <li>Nano Technology and Materials Engineering</li>
                        <li>Cyber Security</li>
                        <li>Software Technologies</li>
                        <li>Advanced Robotics</li>
                        <li>Electronic Programming and Internet of Things</li>
                        <li>Robotics and Coding</li>
                        <li>Design and Production</li>
                    </ul>
                </div>
            </div>
        `,
        education: `
            <h1>Education</h1>
            <div class="section">
                <div class="section-header">
                    <h2>Akdeniz University</h2>
                    <p class="date">September 2023 - June 2028</p>
                </div>
                <div class="education-item">
                    <h3>Bachelor's Degree, Computer Science & Engineering</h3>
                    <p>Antalya, Türkiye</p>
                </div>
            </div>
            <div class="section">
                <div class="section-header">
                    <h2>Deneyap Teknoloji Atölyeleri</h2>
                    <p class="date">February 2019 - June 2023 · 4 years 5 months</p>
                </div>
                <div class="education-item">
                    <h3>Student</h3>
                    <p>Isparta, Turkey · Hybrid</p>
                    <h3>Certificates</h3>
                    <ul>
                        <li>Aviation and Space Technologies</li>
                        <li>Nano Technology and Materials Engineering</li>
                        <li>Cyber Security</li>
                        <li>Software Technologies</li>
                        <li>Advanced Robotics</li>
                        <li>Electronic Programming and Internet of Things</li>
                        <li>Robotics and Coding</li>
                        <li>Design and Production</li>
                    </ul>
                </div>
            </div>
            <div class="section">
                <div class="section-header">
                    <h2>Isparta Gönen Fen Lisesi</h2>
                    <span class="date">September 2019 - June 2023</span>
                </div>
                <div class="education-item">
                    <h3>High School Diploma, Science and Mathematics</h3>
                    <p>Isparta, Türkiye</p>
                </div>
            </div>
            <div class="section">
                <h2>Seminars and Conferences</h2>
                
                <div class="section">
                    <div class="section-header">
                        <h2>Career Development Program</h2>
                        <span class="date">March 6, 2024</span>
                    </div>
                    <div class="education-item">
                        <h3>Professional Development Training</h3>
                        <p>Akdeniz University, Antalya</p>
                    </div>
                </div>

                <div class="section">
                    <div class="section-header">
                        <h2>GÜNKAF'24</h2>
                        <span class="date">February 23-24, 2024</span>
                    </div>
                    <div class="education-item">
                        <h3>Technology and Engineering Conference</h3>
                        <p>Presidency of Human Resources Office, Türkiye</p>
                    </div>
                </div>

                <div class="section">
                    <div class="section-header">
                        <h2>Big Data & Intelligent Data Course</h2>
                        <span class="date">January 25 - February 5, 2021</span>
                    </div>
                    <div class="education-item">
                        <h3>Data Analysis and Engineering with R Programming</h3>
                        <p>Kadir Has University Winter School for High School Students</p>
                    </div>
                </div>
            </div>
        `,
        skills: `
            <h1>Skills</h1>
            <div class="section">
                <h2>Technical Skills</h2>
                <div class="skills-grid">
                    <div class="skill-category">
                        <h3>Programming Languages</h3>
                        <ul>
                            <li>Python</li>
                            <li>Java</li>
                            <li>C</li>
                        </ul>
                    </div>
                    <div class="skill-category">
                        <h3>Web Technologies</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Responsive Design</li>
                            <li>Prompt Engineering</li>
                        </ul>
                    </div>
                </div>

                <div class="section">
                    <h2>Digital Skills Assessment Results</h2>
                    <div class="assessment-results">
                        <div class="skill-item">
                            <h3>Information and Data Literacy</h3>
                            <p class="skill-level">Advanced - Level 5</p>
                            <ul>
                                <li>Advanced search techniques and information evaluation</li>
                                <li>Content organization and management</li>
                                <li>Data analysis and interpretation</li>
                            </ul>
                        </div>
                        
                        <div class="skill-item">
                            <h3>Digital Content Creation</h3>
                            <p class="skill-level">Advanced - Level 5</p>
                            <ul>
                                <li>Document and multimedia content creation</li>
                                <li>Programming knowledge (Python, Visual Basic, Java)</li>
                                <li>Digital content editing and modification</li>
                            </ul>
                        </div>

                        <div class="skill-item">
                            <h3>Communication and Collaboration</h3>
                            <p class="skill-level">Advanced - Level 5</p>
                            <ul>
                                <li>Digital communication tools expertise</li>
                                <li>Online collaboration and document sharing</li>
                                <li>Professional digital platform usage</li>
                            </ul>
                        </div>

                        <div class="skill-item">
                            <h3>Safety</h3>
                            <p class="skill-level">Intermediate - Level 3</p>
                            <ul>
                                <li>Device and data protection</li>
                                <li>Privacy settings management</li>
                                <li>Security configuration expertise</li>
                            </ul>
                        </div>

                        <div class="skill-item">
                            <h3>Problem Solving</h3>
                            <p class="skill-level">Advanced - Level 5</p>
                            <ul>
                                <li>Technical problem resolution</li>
                                <li>Creative digital tool utilization</li>
                                <li>Online learning and skill development</li>
                            </ul>
                        </div>
                    </div>
                    <div class="assessment-note">
                        <p>Assessment Date: 21/01/2025</p>
                        <p>Source: <a href="https://ec.europa.eu/jrc/en/digcomp" target="_blank">European Digital Competence Framework</a></p>
                        <p>Take the test: <a href="https://europa.eu/europass/digitalskills/screen/home?referrer=epass&route=%2Fen" target="_blank">Europass Digital Skills Assessment</a></p>
                    </div>
                </div>
            </div>
        `,
        projects: `
            <h1>Projects</h1>
            <div id="github-projects"></div>
        `,
        services: `
            <div class="section">
                <div class="section-header">
                    <h2>Web Development</h2>
                    <span class="date">Primary Service</span>
                </div>
                <p>Full-stack web development services using modern technologies and best practices.</p>
                <ul>
                    <li>Custom website development</li>
                    <li>Frontend and backend integration</li>
                    <li>Responsive design implementation</li>
                </ul>
            </div>
            
            <div class="section">
                <div class="section-header">
                    <h2>Mobile Development</h2>
                    <span class="date">Specialized Service</span>
                </div>
                <p>Mobile application development for iOS and Android platforms.</p>
                <ul>
                    <li>Native and cross-platform development</li>
                    <li>UI/UX design for mobile apps</li>
                    <li>App maintenance and updates</li>
                </ul>
            </div>
            
            <div class="section">
                <div class="section-header">
                    <h2>Technical Consulting</h2>
                    <span class="date">Advisory Service</span>
                </div>
                <p>Technical consulting services for software development projects.</p>
                <ul>
                    <li>Project architecture planning</li>
                    <li>Technology stack selection</li>
                    <li>Performance optimization</li>
                </ul>
            </div>
        `,
        about: `
            <h1>About Me</h1>
            <div class="section">
                <h2>Who I Am</h2>
                <ul>
                    <li>I am a Computer Science & Engineering student at Akdeniz University.</li>
                    <li>I take pride in exploring software development and utilizing technology to craft impactful solutions for everyday challenges.</li>
                    <li>I aim to constantly learn, grow, and contribute to impactful projects in the field.</li>
                </ul>
            </div>
            <div class="section">
                <h2>Interests & Hobbies</h2>
                <ul>
                    <li>Artificial Intelligence</li>
                    <li>Software Development</li>
                    <li>Web Technologies</li>
                    <li>Prompt Engineering</li>
                    <li>Robotics</li>
                </ul>
            </div>
        `,
        contact: `
            <h1>Contact & Social Media</h1>
            <div class="contact-section">
                <div class="contact-item">
                    <div class="contact-icon">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <div class="contact-info">
                        <h2>Email</h2>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mertkamarli32@gmail.com" target="_blank">mertkamarli32@gmail.com</a>
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">
                        <i class="fas fa-phone"></i>
                    </div>
                    <div class="contact-info">
                        <h2>Phone</h2>
                        <a href="tel:+905425160390">+90 542 516 03 90</a>
                    </div>
                </div>
            </div>
            <div class="section">
                <h2>Social Media</h2>
                <div class="social-links">
                    <a href="https://github.com/kamarli-mert" target="_blank" class="social-link">
                        <i class="fab fa-github"></i>
                        <span>GitHub</span>
                    </a>
                    <a href="https://www.instagram.com/mertkamarli/" target="_blank" class="social-link">
                        <i class="fab fa-instagram"></i>
                        <span>Instagram</span>
                    </a>
                    <a href="https://linkedin.com/in/mertkamarlı" target="_blank" class="social-link">
                        <i class="fab fa-linkedin"></i>
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        `
    };

    // Menu items click handler
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const section = item.getAttribute('data-section');
            
            // Add active class to container
            document.querySelector('.container').classList.add('content-active');
            
            // Update content panel
            contentPanel.innerHTML = `
                <button class="close-btn">×</button>
                ${contents[section]}
            `;

            // Add close button event listener
            contentPanel.querySelector('.close-btn').addEventListener('click', closePanel);
        });
    });

    // Close panel function
    function closePanel() {
        document.querySelector('.container').classList.remove('content-active');
    }

    // Close panel when clicking close button
    closeBtn.addEventListener('click', closePanel);

    // Close panel when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closePanel();
        }
    });

    // Add GitHub projects loading function
    async function loadGitHubProjects() {
        const username = 'kamarli-mert';
        const container = document.getElementById('github-projects');
        
        try {
            const response = await fetch(`https://api.github.com/users/${username}/repos`);
            let projects = await response.json();
            
            // Define the fixed order projects
            const fixedOrderProjects = [
                'Rock_Paper_Scissors_Game',
                'kitap_tavsiye_websitesi',
                '3dEarth',
                'Calculating_the_Minimum_Euclidean_Distance',
                'Proje_Grubu',
                'for'
            ];
            
            // Get new projects (not in fixed list) sorted by date
            const newProjects = projects
                .filter(p => !fixedOrderProjects.includes(p.name))
                .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                
            // Get fixed order projects
            const fixedProjects = projects
                .filter(p => fixedOrderProjects.includes(p.name))
                .sort((a, b) => fixedOrderProjects.indexOf(a.name) - fixedOrderProjects.indexOf(b.name));
            
            // Combine arrays: new projects first, then fixed order projects
            projects = [...newProjects, ...fixedProjects];
            
            container.innerHTML = projects.map(project => `
                <div class="section">
                    <div class="section-header">
                        <h2>${project.name}</h2>
                    </div>
                    <div class="education-item">
                        <h3>${project.description || 'Personal Project'}</h3>
                        <div class="social-icons">
                            <a href="${project.html_url}" target="_blank" class="github-button">
                                <i class="fab fa-github"></i>
                                <span>Visit My GitHub Page</span>
                            </a>
                        </div>
                    </div>
                </div>
            `).join('');
        } catch (error) {
            container.innerHTML = '<div class="error">Projects could not be loaded</div>';
        }
    }

    // Load GitHub projects when the projects section is opened
    document.querySelector('[data-section="projects"]').addEventListener('click', loadGitHubProjects);
});
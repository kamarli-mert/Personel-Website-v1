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
                    <h2>Davraz Robotic</h2>
                    <p class="date">January 2025 - Present</p>
                </div>
                <div class="experience-item">
                    <h3>Co-Founder</h3>
                    <p>Isparta, Türkiye</p>
                    <ul>
                        <li>Co-founded Davraz Robotics with 4 team members</li>
                        <li>Participating in TEKNOFEST competitions across multiple categories</li>
                        <li>Leading specialized teams: IGM Davraz Roket Takımı, IGM Gölcük Su Altı Takımı, IGM Eğirdir Deniz Aracı Takımı</li>
                        <li>Competed in IGM Gölcük UWR Team and KOD 404 - Teknofest Doğal Dil İşleme Competition</li>
                    </ul>
                </div>
            </div>

            <div class="section">
                <div class="section-header">
                    <h2>Yazılım Yapay Zeka Yaratıcılık Community</h2>
                    <p class="date">August 2025 - Present</p>
                </div>
                <div class="experience-item">
                    <h3>Vice President</h3>
                    <p>Antalya, Türkiye</p>
                    <ul>
                        <li>Organizing trainings, seminars, and workshops for club members</li>
                        <li>Supporting club operations and event planning</li>
                        <li>Managing external relations and networking opportunities</li>
                    </ul>
                </div>
            </div>

            <div class="section">
                <div class="section-header">
                    <h2>Yazılım Yapay Zeka Yaratıcılık Community</h2>
                    <p class="date">September 2024 - August 2025</p>
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
                    <p class="date">September 2019 - June 2024</p>
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
                        <h2>Underwater Systems Training - T3 Foundation</h2>
                        <span class="date">August 2025 - İstanbul, Türkiye</span>
                    </div>
                    <div class="education-item">
                        <h3>5-day training on mechanical, software, and system aspects of unmanned marine vehicles</h3>
                        <p>4 days of theoretical education and 1 day of practical testing. Successfully operated and floated the vehicle on water.</p>
                    </div>
                </div>

                <div class="section">
                    <div class="section-header">
                        <h2>Image Processing with YOLOv12/v13 - T3 Foundation</h2>
                        <span class="date">August 2025 - Online</span>
                    </div>
                    <div class="education-item">
                        <h3>Computer Vision and Object Detection</h3>
                        <p>Hands-on experience with YOLO models for AI projects.</p>
                    </div>
                </div>

                <div class="section">
                    <div class="section-header">
                        <h2>BİLMÖK - Türkiye's Largest Student Congress</h2>
                        <span class="date">February 22-23, 2025 - Akdeniz University</span>
                    </div>
                    <div class="education-item">
                        <h3>21st Computer Engineering Students Congress</h3>
                        <p>Sessions on artificial intelligence, cybersecurity, software development and technology ethics.</p>
                    </div>
                </div>

                <div class="section">
                    <div class="section-header">
                        <h2>Aygaz Python Bootcamp: Next-Generation Project Camp</h2>
                        <span class="date">September 2024 - Online</span>
                    </div>
                    <div class="education-item">
                        <h3>Python Development Bootcamp</h3>
                        <p>Organized by Koç Holding, Aygaz A.Ş., 10million.AI, and Global AI Hub. Developed a Rock-Paper-Scissors game as final project.</p>
                    </div>
                </div>

                <div class="section">
                    <div class="section-header">
                        <h2>GenAI: Introduction to Prompt Engineering Project Bootcamp</h2>
                        <span class="date">March-April 2024 - Online</span>
                    </div>
                    <div class="education-item">
                        <h3>AI and Prompt Engineering</h3>
                        <p>Developed a book recommendation website using AI tools.</p>
                    </div>
                </div>
                
                <div class="section">
                    <div class="section-header">
                        <h2>Kodluyoruz - Yeni İşime Hazırlanıyorum</h2>
                        <span class="date">March 6, 2024 - Akdeniz University</span>
                    </div>
                    <div class="education-item">
                        <h3>Professional Development Training</h3>
                        <p>Organized by Kodluyoruz, Piksel Akademi, Antalya Teknokent, and Microsoft.</p>
                    </div>
                </div>

                <div class="section">
                    <div class="section-header">
                        <h2>GÜNKAF 24</h2>
                        <span class="date">February 23-24, 2024 - Mimar Sinan Convention Center</span>
                    </div>
                    <div class="education-item">
                        <h3>Technology and Engineering Conference</h3>
                        <p>Connected with leading companies, explored internship and job opportunities.</p>
                    </div>
                </div>

                <div class="section">
                    <div class="section-header">
                        <h2>Ankara University Computer Society - SektörX</h2>
                        <span class="date">February 12-17, 2024 - Online</span>
                    </div>
                    <div class="education-item">
                        <h3>Industry Insights Event</h3>
                        <p>Gained insights on cybersecurity, software development, artificial intelligence, data science, and system engineering.</p>
                    </div>
                </div>

                <div class="section">
                    <div class="section-header">
                        <h2>Kadir Has University Winter School</h2>
                        <span class="date">January 25 - February 5, 2021 - Online</span>
                    </div>
                    <div class="education-item">
                        <h3>Big Data - Intelligent Data & Brain Science, Neuroscience, and AI</h3>
                        <p>Data management and analysis using R, Introduction to Molecular Biology and Genetic Engineering.</p>
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
                    <div class="skill-category">
                        <h3>Design & Engineering Tools</h3>
                        <ul>
                            <li>Fusion 360</li>
                            <li>Autodesk CFD</li>
                            <li>EasyEDA</li>
                            <li>KiCad</li>
                        </ul>
                    </div>
                    <div class="skill-category">
                        <h3>Embedded Systems</h3>
                        <ul>
                            <li>STM32CubeIDE</li>
                            <li>Electronic Circuit Design</li>
                            <li>Rocket Systems Development</li>
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
        awards: `
            <h1>Awards & Honours</h1>
            
            <div class="section">
                <div class="section-header">
                    <h2>NASA Space Apps Challenge 2025</h2>
                    <p class="date">October 2025</p>
                </div>
                <div class="education-item">
                    <p>Developed a dynamic web application using AI and Large Language Models to analyze 608 publications on biological systems' adaptation to space environments for NASA's Lunar and Mars exploration missions. The project featured automatic content extraction, summary generation, and an interactive dashboard that enabled scientists and mission architects to quickly query thousands of experimental results and make critical decisions for future missions.</p>
                </div>
            </div>

            <div class="section">
                <div class="section-header">
                    <h2>TEKNOFEST Turkish Natural Language Processing Competition</h2>
                    <p class="date">Finalist</p>
                </div>
                <div class="education-item">
                    <p>Used Natural Language Processing (NLP) techniques and Large Language Models (LLMs) to transliterate Ottoman Turkish texts into the modern Latin alphabet. The project involved developing character recognition, root word analysis, and context-based letter mapping processes to make Ottoman Turkish texts more accessible and readable in digital environments.</p>
                </div>
            </div>

            <div class="section">
                <div class="section-header">
                    <h2>NASA Space Apps Challenge</h2>
                    <p class="date">May 10, 2024</p>
                </div>
                <div class="education-item">
                    <p>Participated as part of the METUOR Space team, contributing to a project focused on the interactions between natural phenomena and their long-term effects on humanity. Our team designed a 3D model and educational games to raise awareness about these interactions.</p>
                </div>
            </div>

            <div class="section">
                <div class="section-header">
                    <h2>TEKNOFEST Makeathon Competition</h2>
                    <p class="date">October 1, 2023 - 5th Place</p>
                </div>
                <div class="education-item">
                    <p>Achieved 5th place with Fırtına Team in the TEKNOFEST Makeathon competition. This experience showcased our teamwork, problem-solving, and project development skills.</p>
                </div>
            </div>
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
        volunteering: `
            <h1>Volunteering</h1>
            
            <div class="section">
                <div class="section-header">
                    <h2>BİLMÖK - Organizing Committee</h2>
                    <p class="date">February 22-23, 2025</p>
                </div>
                <div class="education-item">
                    <h3>Türkiye's Largest Student Congress at Akdeniz University</h3>
                    <p>Akdeniz University - Atatürk Conference Hall</p>
                    <p>Volunteered in organizing the 21st Computer Engineering Students Congress. Hosted sessions on artificial intelligence, cybersecurity, software development and technology ethics. Brought together hundreds of IT-enthusiast students and leading industry names.</p>
                </div>
            </div>

            <div class="section">
                <div class="section-header">
                    <h2>TEKNOFEST 2024 Drone Championship</h2>
                    <p class="date">August 24-25, 2024</p>
                </div>
                <div class="education-item">
                    <h3>Event Volunteer</h3>
                    <p>Isparta - Atatürk Stadium</p>
                    <p>Supported event organization by assisting with venue setup, participant coordination, and ensuring smooth event operations. Enhanced organizational skills and deepened interest in technology through valuable networking opportunities.</p>
                </div>
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
                        <a href="tel:-">-</a>
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
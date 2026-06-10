document.addEventListener('DOMContentLoaded', () => {
    const languageToggle = document.getElementById('language-toggle');
    const languageIcon = document.getElementById('language-icon');

    const applyLanguage = (language) => {
        if (language === 'en') {
            // Traduza o conteúdo para inglês
            document.getElementById('name').textContent = 'José Samuel Pereira';
            document.getElementById('personal-info-title').textContent = 'Personal Information';
            document.getElementById('contact-title').textContent = 'Contact';
            document.getElementById('professional-profile-title').textContent = 'Professional Profile';
            document.getElementById('sdgs-title').textContent = 'SDGs I Aim to Contribute';
            document.getElementById('skills-title').textContent = 'Skills';
            document.getElementById('education-title').textContent = 'Education';
            document.getElementById('experience-title').textContent = 'Experience';
            document.getElementById('projects-title').textContent = 'Projects';
            document.getElementById('age').textContent = 'Age: 26 years';
            document.getElementById('city').textContent = 'City: Cornélio Procópio, Paraná';
            document.getElementById('nationality').textContent = 'Nationality: Brazil';
            document.getElementById('languages').textContent = 'Languages: Portuguese (Native), English (Intermediate)';
            document.getElementById('hobbies').textContent = 'Hobbies and Interests: Reading, Dog Training';
            document.getElementById('email-label').textContent = 'Email:';
            document.getElementById('linkedin-label').textContent = 'LinkedIn:';
            document.getElementById('github-label').textContent = 'GitHub:';
            document.getElementById('whatsapp-label').textContent = 'WhatsApp:';
            document.getElementById('fone-number').textContent = '+55 (44) 98457-5871';
            document.getElementById('university').textContent = 'UTFPR - Federal University of Technology - Paraná';
            document.getElementById('courses-title').textContent = 'Courses at Alura';
            document.getElementById('professional-profile-text').textContent = 'Software Engineer with experience in web development, front-end and back-end. Communicative, punctual, and creative, with strong problem-solving skills. Adaptable to changes, with team spirit, quick learning, and active participation. Extroverted and proactive, passionate about technology and innovation, always seeking to learn new skills and contribute effectively to challenging projects and team success.';
            document.getElementById('degree').textContent = 'Bachelor\'s Degree in Software Engineering - in progress';
            document.getElementById('project-educacao-livre').nextSibling.textContent = ' - Web page that connects volunteer tutors with people who want to learn, offering courses and tutoring.';
            document.getElementById('project-email-bot').nextSibling.textContent = ' - Flask application that sends emails and tracks openings using a tracking pixel, configured to run in Docker and deployed on Google Cloud Run.';
            document.getElementById('project-workspaces').nextSibling.textContent = ' - Repository to record the evolution in the use of the NX tool, as well as in Typescript, NestJS, and React, in addition to the use of CI and unit tests.';
            document.getElementById('project-purepages').nextSibling.textContent = ' - Monorepository using NX to create multiple landing pages in a short period of time, reusing components between pages.';
            document.getElementById('footer-text').textContent = '© 2026 José Samuel Pereira. All rights reserved.';
            document.getElementById('SDG4').src = 'figs/objetivo-4-en.png';
            document.getElementById('SDG5').src = 'figs/objetivo-5-en.png';
            document.getElementById('SDG7').src = 'figs/objetivo-7-en.png';
            document.getElementById('SDG8').src = 'figs/objetivo-8-en.png';
            // ——— Category skills ———
            document.getElementById('skill-cat-languages').textContent = 'Programming Languages';
            document.getElementById('skill-cat-frameworks').textContent = 'Frameworks';
            document.getElementById('skill-cat-data').textContent = 'Data';
            document.getElementById('skill-cat-infra').textContent = 'Infra & Tools';
            document.getElementById('skill-cat-languages-spoken').textContent = 'Languages';
            // ——— Math degree ———
            document.getElementById('math-degree').textContent = "Bachelor's in Pure Mathematics";
            document.getElementById('math-status').textContent = "UTFPR - Federal University of Technology - Paraná (Incomplete)";
            // ——— Portfolio ———
            document.getElementById('portfolio-label').textContent = 'Portfolio:';
            document.getElementById('portfolio-link').textContent = 'Online Resume';
            // ——— Experience ———
            document.getElementById('job-fullstack-title').textContent = 'Full Stack Developer';
            document.getElementById('job-fullstack-date').textContent = 'Sep 2022 – Sep 2023';
            document.getElementById('job-fullstack-company').textContent = 'Tributech';
            document.getElementById('job-support-title').textContent = 'Database Support';
            document.getElementById('job-support-date').textContent = 'Mar 2022 – Sep 2022';
            document.getElementById('job-support-company').textContent = 'Tributech';
            document.getElementById('job-intern-title').textContent = 'Technology Intern';
            document.getElementById('job-intern-date').textContent = 'Jan 2022 – Mar 2022';
            document.getElementById('job-intern-company').textContent = 'Tributech';
            // ——— Experience bullets ———
            document.getElementById('exp-fs-1').textContent = 'Responsible for the complete development cycle: requirements gathering, architectural modeling, implementation, and continuous system maintenance';
            document.getElementById('exp-fs-2').textContent = 'Full stack development with Angular (front-end), Java/Spring Boot (back-end) and PostgreSQL (database)';
            document.getElementById('exp-fs-3').textContent = 'Integration of RESTful APIs for efficient communication between internal and external systems';
            document.getElementById('exp-fs-4').textContent = 'Definition of code standards, best practices and technical architecture for new projects';
            document.getElementById('exp-sup-1').textContent = 'Active monitoring and resolution of technical tickets, ensuring high data availability';
            document.getElementById('exp-sup-2').textContent = 'Optimization of complex PostgreSQL queries for report extraction performance';
            document.getElementById('exp-sup-3').textContent = 'Configuration and preparation of work environments for engineering team operations';
            document.getElementById('exp-int-1').textContent = 'Technical support for internal software and preparation of work environments';
            document.getElementById('exp-int-2').textContent = 'Creation and execution of PostgreSQL queries for strategic data extraction';
            document.getElementById('exp-int-3').textContent = 'Promoted to the Database team in just 2 months due to proactivity';
            languageIcon.src = 'icons/flag_pt.png';
            languageIcon.alt = 'Portuguese';
            languageToggle.classList.add('pt');
            languageToggle.classList.remove('en');
        } else {
            // Traduza o conteúdo para português
            document.getElementById('name').textContent = 'José Samuel Pereira';
            document.getElementById('personal-info-title').textContent = 'Informações Pessoais';
            document.getElementById('contact-title').textContent = 'Contato';
            document.getElementById('professional-profile-title').textContent = 'Perfil Profissional';
            document.getElementById('sdgs-title').textContent = 'ODS que pretendo contribuir';
            document.getElementById('skills-title').textContent = 'Habilidades';
            document.getElementById('education-title').textContent = 'Educação';
            document.getElementById('experience-title').textContent = 'Experiência';
            document.getElementById('projects-title').textContent = 'Projetos';
            document.getElementById('age').textContent = 'Idade: 26 anos';
            document.getElementById('city').textContent = 'Cidade: Cornélio Procópio, Paraná';
            document.getElementById('nationality').textContent = 'Nacionalidade: Brasil';
            document.getElementById('languages').textContent = 'Idiomas: Português (Nativo), Inglês (Intermediário)';
            document.getElementById('hobbies').textContent = 'Hobbies e Interesses: Leitura, Adestramento Canino';
            document.getElementById('email-label').textContent = 'Email:';
            document.getElementById('linkedin-label').textContent = 'Linkedin:';
            document.getElementById('github-label').textContent = 'GitHub:';
            document.getElementById('whatsapp-label').textContent = 'WhatsApp:';
            document.getElementById('fone-number').textContent = '(44) 98457-5871';
            document.getElementById('university').textContent = 'UTFPR - Universidade Tecnológica Federal do Paraná';
            document.getElementById('courses-title').textContent = 'Cursos na Alura';
            document.getElementById('professional-profile-text').textContent = 'Engenheiro de Software com experiência em desenvolvimento web, front-end e back-end. Comunicativo, pontual e criativo, com forte capacidade de resolver problemas. Adaptável a mudanças, com espírito de equipe, rápido aprendizado e participação ativa. Extrovertido e proativo, apaixonado por tecnologia e inovação, sempre buscando aprender novas habilidades e contribuir de maneira eficaz para projetos desafiadores e o sucesso da equipe.';
            document.getElementById('degree').textContent = 'Graduação em Engenharia de Software - em andamento';
            document.getElementById('project-educacao-livre').nextSibling.textContent = ' - Página web que conecta tutores voluntários com pessoas que querem aprender, oferecendo cursos e monitorias.';
            document.getElementById('project-email-bot').nextSibling.textContent = ' - Aplicação Flask que envia emails e rastreia aberturas usando um pixel de rastreamento, configurada para rodar em Docker e implantada no Google Cloud Run.';
            document.getElementById('project-workspaces').nextSibling.textContent = ' - Repositório para registrar a evolução no uso da ferramenta NX, bem como em Typescript, NestJS e React, além do uso de CI e testes unitários.';
            document.getElementById('project-purepages').nextSibling.textContent = ' - Monorepositório usando NX para criar múltiplas landing pages em curto período de tempo, reaproveitando componentes entre as páginas.';
            document.getElementById('footer-text').textContent = '© 2026 José Samuel Pereira. Todos os direitos reservados.';
            // ——— Category skills ———
            document.getElementById('skill-cat-languages').textContent = 'Linguagens de Programação';
            document.getElementById('skill-cat-frameworks').textContent = 'Frameworks';
            document.getElementById('skill-cat-data').textContent = 'Dados';
            document.getElementById('skill-cat-infra').textContent = 'Infra & Ferramentas';
            document.getElementById('skill-cat-languages-spoken').textContent = 'Idiomas';
            // ——— Math degree ———
            document.getElementById('math-degree').textContent = 'Bacharelado em Matemática Pura';
            document.getElementById('math-status').textContent = 'UTFPR - Universidade Tecnológica Federal do Paraná (Incompleto)';
            // ——— Portfolio ———
            document.getElementById('portfolio-label').textContent = 'Portfólio:';
            document.getElementById('portfolio-link').textContent = 'Currículo Online';
            // ——— Experience ———
            document.getElementById('job-fullstack-title').textContent = 'Programador Full Stack';
            document.getElementById('job-fullstack-date').textContent = 'Set 2022 – Set 2023';
            document.getElementById('job-fullstack-company').textContent = 'Tributech';
            document.getElementById('job-support-title').textContent = 'Suporte de Banco de Dados';
            document.getElementById('job-support-date').textContent = 'Mar 2022 – Set 2022';
            document.getElementById('job-support-company').textContent = 'Tributech';
            document.getElementById('job-intern-title').textContent = 'Estagiário de Tecnologia';
            document.getElementById('job-intern-date').textContent = 'Jan 2022 – Mar 2022';
            document.getElementById('job-intern-company').textContent = 'Tributech';
            // ——— Experience bullets ———
            document.getElementById('exp-fs-1').textContent = 'Responsável pelo ciclo completo de desenvolvimento: levantamento de requisitos, modelagem arquitetural, implementação e manutenção contínua de sistemas';
            document.getElementById('exp-fs-2').textContent = 'Desenvolvimento full stack com Angular (front-end), Java/Spring Boot (back-end) e PostgreSQL (banco de dados)';
            document.getElementById('exp-fs-3').textContent = 'Integração de APIs RESTful para comunicação eficiente entre sistemas internos e externos';
            document.getElementById('exp-fs-4').textContent = 'Definição de padrões de código, boas práticas e arquitetura técnica para novos projetos';
            document.getElementById('exp-sup-1').textContent = 'Monitoramento ativo e resolução de chamados técnicos, garantindo alta disponibilidade dos dados';
            document.getElementById('exp-sup-2').textContent = 'Otimização de consultas complexas em PostgreSQL para performance em extração de relatórios';
            document.getElementById('exp-sup-3').textContent = 'Configuração e preparação de ambientes de trabalho para operações da equipe de engenharia';
            document.getElementById('exp-int-1').textContent = 'Suporte técnico aos softwares internos e preparação de ambientes de trabalho';
            document.getElementById('exp-int-2').textContent = 'Criação e execução de queries PostgreSQL para extração de dados estratégicos';
            document.getElementById('exp-int-3').textContent = 'Promovido em apenas 2 meses à equipe de Banco de Dados devido à proatividade';
            document.getElementById('SDG4').src = 'figs/objetivo-4.svg';
            document.getElementById('SDG5').src = 'figs/objetivo-5.svg';
            document.getElementById('SDG7').src = 'figs/objetivo-7.svg';
            document.getElementById('SDG8').src = 'figs/objetivo-8.svg';
            languageIcon.src = 'icons/flag_en.png';
            languageIcon.alt = 'English';
            languageToggle.classList.remove('pt');
            languageToggle.classList.add('en');
        }
    };

    const savedLanguage = localStorage.getItem('language') || 'pt';
    applyLanguage(savedLanguage);

    languageToggle.addEventListener('click', () => {
        const newLanguage = languageIcon.alt === 'English' ? 'en' : 'pt';
        applyLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
    });
});
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
            document.getElementById('age').textContent = 'Age: 24 years';
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
            document.getElementById('frontend').textContent = 'Web Front-end Development';
            document.getElementById('backend').textContent = 'Web Back-end Development';
            document.getElementById('database').textContent = 'Database Architecture';
            document.getElementById('degree').textContent = 'Bachelor\'s Degree in Software Engineering - in progress';
            document.getElementById('internship').textContent = 'Technical Support Internship - 11/2021 to 01/2022 - Tributech';
            document.getElementById('support').textContent = 'Technical Support - 01/2022 to 08/2022 - Tributech';
            document.getElementById('fullstack').textContent = 'Full Stack Developer - 08/2022 to 08/2023 - Tributech';
            document.getElementById('project-educacao-livre').nextSibling.textContent = ' - Web page that connects volunteer tutors with people who want to learn, offering courses and tutoring.';
            document.getElementById('project-email-bot').nextSibling.textContent = ' - Flask application that sends emails and tracks openings using a tracking pixel, configured to run in Docker and deployed on Google Cloud Run.';
            document.getElementById('project-workspaces').nextSibling.textContent = ' - Repository to record the evolution in the use of the NX tool, as well as in Typescript, NestJS, and React, in addition to the use of CI and unit tests.';
            document.getElementById('project-purepages').nextSibling.textContent = ' - Monorepository using NX to create multiple landing pages in a short period of time, reusing components between pages.';
            document.getElementById('footer-text').textContent = '© 2024 José Samuel Pereira. All rights reserved.';
            document.getElementById('SDG4').src = 'figs/objetivo-4.svg';
            document.getElementById('SDG5').src = 'figs/objetivo-5.svg';
            document.getElementById('SDG7').src = 'figs/objetivo-7.svg';
            document.getElementById('SDG8').src = 'figs/objetivo-8.svg';
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
            document.getElementById('age').textContent = 'Idade: 24 anos';
            document.getElementById('city').textContent = 'Cidade: Cornélio Procópio, Paraná';
            document.getElementById('nationality').textContent = 'Nacionalidade: Brasil';
            document.getElementById('languages').textContent = 'Idiomas: Português (Nativo), Inglês (Intermediário)';
            document.getElementById('hobbies').textContent = 'Hobbies e Interesses: Leitura, Adestramento Canino';
            document.getElementById('email-label').textContent = 'Email:';
            document.getElementById('linkedin-label').textContent = 'Linkedin:';
            document.getElementById('github-label').textContent = 'Github:';
            document.getElementById('whatsapp-label').textContent = 'WhatsApp:';
            document.getElementById('fone-number').textContent = '(44) 98457-5871';
            document.getElementById('university').textContent = 'UTFPR - Universidade Tecnológica Federal do Paraná';
            document.getElementById('courses-title').textContent = 'Cursos na Alura';
            document.getElementById('professional-profile-text').textContent = 'Engenheiro de Software com experiência em desenvolvimento web, front-end e back-end. Comunicativo, pontual e criativo, com forte capacidade de resolver problemas. Adaptável a mudanças, com espírito de equipe, rápido aprendizado e participação ativa. Extrovertido e proativo, apaixonado por tecnologia e inovação, sempre buscando aprender novas habilidades e contribuir de maneira eficaz para projetos desafiadores e o sucesso da equipe.';
            document.getElementById('frontend').textContent = 'Desenvolvimento Web Front-end';
            document.getElementById('backend').textContent = 'Desenvolvimento Web back-end';
            document.getElementById('database').textContent = 'Arquitetura de Banco de dados';
            document.getElementById('degree').textContent = 'Graduação em Engenharia de Software - em andamento';
            document.getElementById('internship').textContent = 'Estágio de Suporte Técnico - 11/2021 à 01/2022 - Tributech';
            document.getElementById('support').textContent = 'Suporte Técnico - 01/2022 à 08/2022 - Tributech';
            document.getElementById('fullstack').textContent = 'Programador Full Stack - 08/2022 à 08/2023 - Tributech';
            document.getElementById('project-educacao-livre').nextSibling.textContent = ' - Página web que conecta tutores voluntários com pessoas que querem aprender, oferecendo cursos e monitorias.';
            document.getElementById('project-email-bot').nextSibling.textContent = ' - Aplicação Flask que envia emails e rastreia aberturas usando um pixel de rastreamento, configurada para rodar em Docker e implantada no Google Cloud Run.';
            document.getElementById('project-workspaces').nextSibling.textContent = ' - Repositório para registrar a evolução no uso da ferramenta NX, bem como em Typescript, NestJS e React, além do uso de CI e testes unitários.';
            document.getElementById('project-purepages').nextSibling.textContent = ' - Monorepositório usando NX para criar múltiplas landing pages em curto período de tempo, reaproveitando componentes entre as páginas.';
            document.getElementById('footer-text').textContent = '© 2024 José Samuel Pereira. Todos os direitos reservados.';
            document.getElementById('SDG4').src = 'figs/objetivo-4-en.png';
            document.getElementById('SDG5').src = 'figs/objetivo-5-en.png';
            document.getElementById('SDG7').src = 'figs/objetivo-7-en.png';
            document.getElementById('SDG8').src = 'figs/objetivo-8-en.png';
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
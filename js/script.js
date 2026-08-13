const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#navigation');
const languageToggle = document.querySelector('.language-toggle');

const translations = {
  en: {
    skip: 'Skip to content', homeLabel: 'Go to homepage', menu: 'Open menu', navLabel: 'Main navigation',
    navAbout: 'About', navExperience: 'Experience', navProjects: 'Projects', navEducation: 'Education', navContact: "Let's talk",
    heroTitle: 'Hi, I\'m <br> <em>Leandro Tiburske</em>',
    heroText: 'I build end-to-end products: robust Python APIs, data pipelines with Airflow and React experiences.',
    talkButton: 'Talk to me', githubButton: 'View GitHub', visualLabel: "A representation of Leandro's areas of expertise",
    aboutLabel: 'About',
    aboutTitle: 'I build software from <br> <span>end to end.</span>',
    aboutOne: "I'm a Software & Data Engineer who enjoys working across the stack: from data and backend systems to the interfaces people use. I've built full-stack applications, data platforms, automation systems, and large-scale processing workflows.",
    aboutTwo: 'I like understanding the whole problem and taking solutions from an idea to something reliable and useful in production. I\'ve worked in international and multidisciplinary teams, with English as my primary working language.',
    expertiseLabel: 'Expertise', expertiseTitle: 'From infrastructure<br>to experience.',
    expertiseIntro: 'Three areas that come together to deliver complete products.',
    backendText: 'Python services and APIs built for clarity, security, performance, and maintainability.',
    frontendText: 'Responsive React interfaces that make complex workflows simple and intuitive.',
    dataText: 'Orchestrated, observable pipelines that deliver reliable data to decision-makers.',
    experienceLabel: 'Experience', experienceTitle: 'Some of<br><span>my experience</span>',
    experienceIntro: 'Building software, automation, and data systems across international teams.',
    italyLocation: 'Milan, Italy', htRole: 'Bioinformatician (Software & Data Engineering)',
    htOne: 'Automated HPC workloads processing tens of terabytes with Airflow, replacing weeks of recurring manual work.',
    htTwo: 'Built Python, PostgreSQL, and Grafana systems for compute metrics.',
    htThree: "Reduced a compute-intensive pipeline's execution time through GPU acceleration.",
    htFour: 'Migrated spreadsheet-based operational workflows to a full-stack Python (NiceGUI) and PostgreSQL application, supporting production invoicing.',
    htFive: 'Maintained the development of a data processing pipeline on GitHub, overseeing PRs, code reviews, and release cycles.',
    htSix: 'Collaborated within an international and multidisciplinary team, using English as the primary working language.',
    brazilLocation: 'Curitiba, Brazil', biotropRole: 'Bioinformatics Analyst',
    biotropOne: 'Optimized large-scale Python workloads through parallelization, reducing execution time by more than 60%.',
    biotropTwo: "Configured Slurm on the company's HPC cluster to automate job scheduling and improve resource allocation.",
    biotropThree: 'Presented data analysis results to clients through reports and meetings, explaining technical findings to non-specialist audiences.',
    swedenLocation: 'Linköping, Sweden', liuRole: 'Intern',
    liuOne: 'Developed and automated large-scale data processing pipelines with R and Bash, including scheduling for HPC environments.',
    projectsLabel: 'Selected projects', projectsTitle: 'Systems built<br>from end to end.',
    projectsIntro: 'Projects where product thinking, infrastructure, and implementation meet.',
    aiProjectText: 'A cloud-native platform for monitoring AI models, GPU pricing, and industry intelligence, with infrastructure provisioned as code.',
    variantProjectText: 'A distributed full-stack platform with a React interface and FastAPI services, using RabbitMQ as the message broker and Celery workers for asynchronous processing.',
    stackLabel: 'Tech stack',
    viewProject: 'View project', viewPlatform: 'Platform', viewEngine: 'Processing engine',
    educationLabel: 'Education', educationTitle: '<span>My education</span>',
    educationIntro: 'A multidisciplinary foundation connecting software engineering, data, and science.',
    mbaTitle: 'MBA in Software Engineering',
    mbaText: 'Focus on Software Engineering, with a final project centered on developing a full-stack, distributed platform integrating frontend, backend, data persistence, and asynchronous processing of complex workloads.',
    bachelorTitle: "Bachelor's in Biomedical Sciences",
    bachelorText: 'A scientific foundation with emphasis on computational biology, data analysis, and bioinformatics.',
    available: 'Open to new connections', contactTitle: 'Let\'s stay in touch.',
    contactText: "If you'd like to talk about technology, projects, or opportunities, feel free to reach out.", linkedin: 'Connect on LinkedIn'
  },
  pt: {
    skip: 'Pular para o conteúdo', homeLabel: 'Ir para o início', menu: 'Abrir menu', navLabel: 'Navegação principal',
    navAbout: 'Sobre', navExperience: 'Experiência', navProjects: 'Projetos', navEducation: 'Educação', navContact: 'Vamos conversar',
    heroTitle: 'Oi, eu sou <br> <em>Leandro Tiburske</em>',
    heroText: 'Construo produtos de ponta a ponta: APIs robustas em Python, pipelines de dados com Airflow e experiências em React.',
    talkButton: 'Fale comigo', githubButton: 'Ver GitHub', visualLabel: 'Representação das especialidades de Leandro',
    aboutLabel: 'Sobre',
    aboutTitle: 'Construo software de <br> <span>ponta a ponta.</span>',
    aboutOne: 'Sou Engenheiro de Software e Dados e gosto de atuar em diferentes partes do desenvolvimento: desde dados e sistemas backend até as interfaces utilizadas pelos usuários. Já desenvolvi aplicações full stack, plataformas de dados, sistemas de automação e workflows de processamento em larga escala.',
    aboutTwo: 'Gosto de compreender o problema como um todo e transformar uma ideia em uma solução confiável e útil em produção. Tenho experiência em equipes internacionais e multidisciplinares, utilizando inglês como principal idioma de trabalho.',
    expertiseLabel: 'Especialidades', expertiseTitle: 'Da infraestrutura<br>à experiência.',
    expertiseIntro: 'Três frentes que se conectam para entregar produtos completos.',
    backendText: 'Serviços e APIs em Python com foco em clareza, segurança, desempenho e manutenção.',
    frontendText: 'Interfaces responsivas em React que tornam fluxos complexos simples e intuitivos.',
    dataText: 'Pipelines orquestrados e observáveis para levar dados confiáveis até quem decide.',
    experienceLabel: 'Experiência', experienceTitle: 'Um pouco sobre<br><span>minha trajetória</span>',
    experienceIntro: 'Construção de software, automações e sistemas de dados em equipes internacionais.',
    italyLocation: 'Milão, Itália', htRole: 'Bioinformata (Engenharia de Software e Dados)',
    htOne: 'Automatizei workloads de HPC que processam dezenas de terabytes com Airflow, substituindo semanas de trabalho manual recorrente.',
    htTwo: 'Construí sistemas com Python, PostgreSQL e Grafana para métricas computacionais.',
    htThree: 'Reduzi o tempo de execução de pipelines computacionalmente intensivas por meio de aceleração em GPU.',
    htFour: 'Migrei fluxos operacionais baseados em planilhas para uma aplicação full stack em Python (NiceGUI) e PostgreSQL, apoiando o faturamento em produção.',
    htFive: 'Mantive o desenvolvimento de uma pipeline de processamento de dados no GitHub, acompanhando PRs, revisões de código e ciclos de release.',
    htSix: 'Colaborei em uma equipe internacional e multidisciplinar, utilizando inglês como principal idioma de trabalho.',
    brazilLocation: 'Curitiba, Brasil', biotropRole: 'Analista de Bioinformática',
    biotropOne: 'Otimizei workloads Python de larga escala por meio de paralelização, reduzindo o tempo de execução em mais de 60%.',
    biotropTwo: 'Configurei Slurm no cluster HPC da empresa para automatizar o agendamento de jobs e melhorar a alocação de recursos.',
    biotropThree: 'Apresentei resultados de análises de dados a clientes por meio de relatórios e reuniões, explicando descobertas técnicas para públicos não especializados.',
    swedenLocation: 'Linköping, Suécia', liuRole: 'Estágio',
    liuOne: 'Desenvolvi e automatizei pipelines de processamento de dados em larga escala com R e Bash, incluindo agendamento em ambientes HPC.',
    projectsLabel: 'Projetos selecionados', projectsTitle: 'Sistemas construídos<br>de ponta a ponta.',
    projectsIntro: 'Projetos em que visão de produto, infraestrutura e implementação se encontram.',
    aiProjectText: 'Uma plataforma cloud-native para monitorar modelos de IA, preços de GPUs e inteligência do setor, com infraestrutura provisionada como código.',
    variantProjectText: 'Uma plataforma full stack distribuída com interface React e serviços FastAPI, usando RabbitMQ como broker de mensagens e workers Celery para processamento assíncrono.',
    stackLabel: 'Stack técnica',
    viewProject: 'Ver projeto', viewPlatform: 'Plataforma', viewEngine: 'Motor de processamento',
    educationLabel: 'Educação', educationTitle: '<span>Minha educação</span>',
    educationIntro: 'Uma formação multidisciplinar que conecta engenharia de software, dados e ciência.',
    mbaTitle: 'MBA em Engenharia de Software',
    mbaText: 'Foco em Engenharia de Software, com projeto final voltado ao desenvolvimento de uma plataforma full stack e distribuída, integrando frontend, backend, persistência de dados e processamento assíncrono de workloads complexos.',
    bachelorTitle: 'Bacharelado em Ciências Biomédicas',
    bachelorText: 'Base científica com ênfase em computação aplicada e análise de dados.',
    available: 'Disponível para novas conexões', contactTitle: 'Vamos manter contato.',
    contactText: 'Se quiser conversar sobre tecnologia, projetos ou oportunidades, fique à vontade para entrar em contato.', linkedin: 'Conectar no LinkedIn'
  }
};

const languageMeta = {
  en: { code: 'PT', name: 'Português', label: 'Mudar idioma para português', lang: 'en', description: "Leandro Tiburske's portfolio — Software Engineer experienced in Python, React, and Apache Airflow." },
  pt: { code: 'EN', name: 'English', label: 'Switch language to English', lang: 'pt-BR', description: 'Portfólio de Leandro Tiburske — Software Engineer com experiência em Python, React e Apache Airflow.' }
};

function setLanguage(language) {
  const selected = translations[language] ? language : 'en';
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.innerHTML = translations[selected][element.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    element.setAttribute('aria-label', translations[selected][element.dataset.i18nAria]);
  });

  const meta = languageMeta[selected];
  document.documentElement.lang = meta.lang;
  document.querySelector('meta[name="description"]').content = meta.description;
  languageToggle.querySelector('.language-code').textContent = meta.code;
  languageToggle.querySelector('.language-name').textContent = meta.name;
  languageToggle.setAttribute('aria-label', meta.label);
  languageToggle.dataset.language = selected;
  try {
    localStorage.setItem('portfolio-language', selected);
  } catch (error) {
    // Language switching still works when storage is unavailable.
  }
}

languageToggle.addEventListener('click', () => {
  setLanguage(languageToggle.dataset.language === 'en' ? 'pt' : 'en');
});

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('open', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('open');
    document.body.style.overflow = '';
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

let savedLanguage = 'en';
try {
  savedLanguage = localStorage.getItem('portfolio-language') || 'en';
} catch (error) {
  // English remains the default when storage is unavailable.
}
setLanguage(savedLanguage);
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
document.querySelector('#year').textContent = new Date().getFullYear();

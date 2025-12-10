import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, GraduationCap, Award, Languages, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('about');
  const [language, setLanguage] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const translations = {
    fr: {
      nav: {
        about: 'À propos',
        projects: 'Projets',
        experience: 'Expérience'
      },
      hero: {
        role: 'Étudiant en Informatique',
        description: 'Etudiant en ingénierie Informatique @ Polytech Diamniadio | Administrateur Réseau et Full Stack Dev , passionné par l\'Intelligence Artificielle, la cybersécurité et l\'IoT'
      },
      about: {
        title: 'À propos',
        p1: 'Bonjour ! Je suis Abdou Aziz Kane. Étudiant passionné par la cybersécurité, je m\'intéresse particulièrement à la sécurisation des systèmes, à la protection des réseaux et à l\'analyse des vulnérabilités.',
        p2: 'Mon objectif est de contribuer à la sécurisation des infrastructures informatiques et des systèmes embarqués, en développant des solutions fiables et résilientes face aux menaces numériques.',
        p3: 'Je consacre une partie de mon temps libre à atteindre cet objectif en effectuant des recherches sur le fonctionnement des systèmes informatiques et en analysant les vulnérabilités publiées en ligne.'
      },
      skills: {
        title: 'Compétences',
        languages: 'Langages',
        web: 'Web',
        tools: 'Outils',
        spokenLanguages: 'Langues'
      },
      education: {
        title: 'Formation',
        degree1: 'Diplôme d\'ingénieur Informatique',
        school1: 'École Supérieure Polytech Diamniadio',
        period1: '2023-en cours',
        degree2: 'Baccalauréat Scientifique',
        school2: 'Lycée Yeumbeul',
        period2: '2022-2023'
      },
      projects: {
        title: 'Projets',
        viewProject: 'Voir le projet',
        viewDemo: 'Voir la démo',
        project1: {
          title: 'Création et Administration d\'un réseau et de ces services',
          description: 'Projet de configuration compléte d\'un réseau sécurisé pour l\'entreprise fictive SMARTTECH,comprenant DMZ,LAN,VPN,ToIP,authentification Wi-Fi via FreeRADIUS et FreeIPA.\n Mise en oeuvre dans GNS3 sous VMware(Ubuntu) avec conteneurs Docker:VPN IPsec,firewall nftables,logs auditd,authentification Kerberos/LDAP.'
        },
        project2: {
          title: 'Détection automatisée des maladies de l\'arachide via Deep Learning',
          description: 'Développement d\'un modèle de détection des maladies des plants d\'arachide à partir de photos, utilisant un réseau neuronal convolutif (CNN) pour l\'apprentissage supervisé.\n Création d\'une interface graphique autonome (.exe) permettant un diagnostic rapide et accessible, facilitant l\'identification des maladies par les agriculteurs.'
        },
        project3: {
          title: 'Mini Projet: Chiffrement DES',
          description: 'Implémentation du chiffrement DES (Data Encryption Standard) en Python, permettant de chiffrer et déchiffrer des fichiers en utilisant une clé secrète de 56 bits.\n Le projet inclut la gestion du padding, la conversion entre fichier et binaire, ainsi qu\'une interface utilisateur simple pour faciliter l\'utilisation.'
        },
        project4: {
          title: 'Mini Projet: Typing Game',
          description: 'Création d\'un jeu interactif permettant aux utilisateurs de tester et d\'améliorer leur vitesse de frappe en temps réel. Le projet est développé en HTML, CSS et JavaScript, offrant une interface utilisateur simple et réactive.\n Il est déployé sur Vercel pour une accessibilité optimale.'
        }
      },
      experience: {
        title: 'Expérience',
        certifications: 'Certifications et Badges',
        exp1: {
          company: 'CAMES',
          role: 'Membre de l\'équipe téchnique',
          period: 'Octobre 2025',
          description: 'Gestion du Son , de l\'image et de la connexion internet lors du Concours d\'Agrégation du CAMES'
        },
        exp2: {
          company: 'UCAD',
          role: 'Stagiaire Téchnicien Réseau',
          period: 'Août - Octobre 2025',
          description: 'Participation à la maintenance, à la configuration et à l\'installation de l\'infrastructure réseau, incluant le câblage, la mise en place des équipements actifs et le diagnostic des incidents de connectivité.'
        }
      },
      footer: 'Tous droits réservés.',
      spokenLangs: ['Français', 'Anglais', 'Wolof']
    },
    en: {
      nav: {
        about: 'About',
        projects: 'Projects',
        experience: 'Experience'
      },
      hero: {
        role: 'Computer Science Student',
        description: 'Computer Engineering student @ Polytech Diamniadio | Network Administrator and Full Stack Dev, passionate about Artificial Intelligence, cybersecurity and IoT'
      },
      about: {
        title: 'About',
        p1: 'Hello! I\'m Abdou Aziz Kane. A passionate student in cybersecurity, I\'m particularly interested in securing systems, network protection, and vulnerability analysis.',
        p2: 'My goal is to contribute to the security of IT infrastructures and embedded systems, developing reliable and resilient solutions against digital threats.',
        p3: 'I dedicate part of my free time to achieving this goal by researching how computer systems work and analyzing vulnerabilities published online.'
      },
      skills: {
        title: 'Skills',
        languages: 'Languages',
        web: 'Web',
        tools: 'Tools',
        spokenLanguages: 'Spoken Languages'
      },
      education: {
        title: 'Education',
        degree1: 'Computer Engineering Degree',
        school1: 'École Supérieure Polytech Diamniadio',
        period1: '2023-present',
        degree2: 'Scientific Baccalaureate',
        school2: 'Lycée Yeumbeul',
        period2: '2022-2023'
      },
      projects: {
        title: 'Projects',
        viewProject: 'View project',
        viewDemo: 'View demo',
        project1: {
          title: 'Network Creation and Administration with its Services',
          description: 'Complete configuration project of a secure network for the fictional company SMARTTECH, including DMZ, LAN, VPN, VoIP, Wi-Fi authentication via FreeRADIUS and FreeIPA.\n Implementation in GNS3 under VMware(Ubuntu) with Docker containers: IPsec VPN, nftables firewall, auditd logs, Kerberos/LDAP authentication.'
        },
        project2: {
          title: 'Automated Detection of Peanut Diseases via Deep Learning',
          description: 'Development of a detection model for peanut plant diseases from photos, using a convolutional neural network (CNN) for supervised learning.\n Creation of a standalone graphical interface (.exe) enabling quick and accessible diagnosis, facilitating disease identification for farmers.'
        },
        project3: {
          title: 'Mini Project: DES Encryption',
          description: 'Implementation of DES (Data Encryption Standard) encryption in Python, allowing file encryption and decryption using a 56-bit secret key.\n The project includes padding management, file-to-binary conversion, and a simple user interface for ease of use.'
        },
        project4: {
          title: 'Mini Project: Typing Game',
          description: 'Creation of an interactive game allowing users to test and improve their typing speed in real time. The project is developed in HTML, CSS and JavaScript, offering a simple and responsive user interface.\n It is deployed on Vercel for optimal accessibility.'
        }
      },
      experience: {
        title: 'Experience',
        certifications: 'Certifications and Badges',
        exp1: {
          company: 'CAMES',
          role: 'Technical Team Member',
          period: 'October 2025',
          description: 'Management of sound, video and internet connection during the CAMES Agrégation Competition (African & Malagasy Council for Higher Education).'
        },
        exp2: {
          company: 'UCAD',
          role: 'Network Technician Intern',
          period: 'August - October 2025',
          description: 'Participation in the maintenance, configuration and installation of network infrastructure, including cabling, installation of active equipment and diagnosis of connectivity incidents.'
        }
      },
      footer: 'All rights reserved.',
      spokenLangs: ['French', 'English', 'Wolof']
    }
  };

  const t = translations[language];

  const projects = [
    {
      title: t.projects.project1.title,
      description: t.projects.project1.description,
      demo: "https://github.com/azizkane01/Configuration-d-un-resau",
      isInternal: false
    },
    {
      title: t.projects.project2.title,
      description: t.projects.project2.description,
      demo: "https://github.com/azizkane01/Projet_Datascience",
      isInternal: false
    },
    {
      title: t.projects.project3.title,
      description: t.projects.project3.description,
      path: "/chiffrement-des",
      isInternal: true
    },
    {
      title: t.projects.project4.title,
      description: t.projects.project4.description,
      path: "/typing-game",
      isInternal: true
    }
  ];

  const experience = [
    {
      company: t.experience.exp1.company,
      role: t.experience.exp1.role,
      period: t.experience.exp1.period,
      description: t.experience.exp1.description
    },
    {
      company: t.experience.exp2.company,
      role: t.experience.exp2.role,
      period: t.experience.exp2.period,
      description: t.experience.exp2.description
    }
  ];

  const education = [
    {
      school: t.education.school1,
      degree: t.education.degree1,
      period: t.education.period1
    },
    {
      school: t.education.school2,
      degree: t.education.degree2,
      period: t.education.period2
    }
  ];

  const skills = {
    [t.skills.languages]: ["Python", "C", "Java", "JavaScript", "PHP", "Scala"],
    [t.skills.web]: ["React", "HTML/CSS", "Node.js"],
    [t.skills.tools]: ["Git/GitHub", "VMware", "Docker", "Nmap", "Burp Suite", "wireshark", "Arduino IDE", "etc"],
    [t.skills.spokenLanguages]: t.spokenLangs
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-blue-500/20 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">

            {/* Logo/Brand */}
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              knert01
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6 items-center">
              {['about', 'projects', 'experience'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize hover:text-blue-400 transition-colors ${activeSection === section ? 'text-blue-400 font-semibold' : 'text-gray-300'
                    }`}
                >
                  {t.nav[section]}
                </button>
              ))}
              <button
                onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                className="flex items-center gap-2 px-3 py-1 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-gray-300 hover:text-blue-400"
                title={language === 'fr' ? 'Switch to English' : 'Passer au français'}
              >
                <Languages className="w-4 h-4" />
                <span className="text-sm font-medium">{language === 'fr' ? 'EN' : 'FR'}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-blue-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-blue-500/20 animate-fadeIn">
              <div className="flex flex-col gap-4 pt-4">
                {['about', 'projects', 'experience'].map((section) => (
                  <button
                    key={section}
                    onClick={() => {
                      setActiveSection(section);
                      setIsMenuOpen(false);
                    }}
                    className={`text-left capitalize hover:text-blue-400 transition-colors ${activeSection === section ? 'text-blue-400 font-semibold' : 'text-gray-300'
                      }`}
                  >
                    {t.nav[section]}
                  </button>
                ))}
                <button
                  onClick={() => {
                    setLanguage(language === 'fr' ? 'en' : 'fr');
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 w-fit"
                >
                  <Languages className="w-4 h-4" />
                  <span className="text-sm font-medium">{language === 'fr' ? 'English' : 'Français'}</span>
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-4xl font-bold">
              AK
            </div>
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Abdou Aziz Kane
            </h2>
            <p className="text-xl text-blue-300 mb-6">{t.hero.role}</p>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {t.hero.description}
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <a href="https://github.com/azizkane01/" target="_blank" rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/abdou-aziz-kane-33423a355" target="_blank" rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:kane.aziz@uam.edu.sn"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-20 max-w-6xl">
        {/* About Section */}
        {activeSection === 'about' && (
          <div className="space-y-12 animate-fadeIn">
            <section className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Code2 className="text-blue-400" />
                {t.about.title}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t.about.p1}
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t.about.p2}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t.about.p3}
              </p>
            </section>

            {/* Skills */}
            <section className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20">
              <h3 className="text-3xl font-bold mb-6">{t.skills.title}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="text-blue-400 font-semibold mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-slate-700 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <GraduationCap className="text-blue-400" />
                {t.education.title}
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-blue-500 pl-4">
                    <p className="text-blue-400 text-sm">{edu.period}</p>
                    <h4 className="text-xl font-semibold mb-1">{edu.degree}</h4>
                    <p className="text-gray-400">{edu.school}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <div className="animate-fadeIn">
            <h3 className="text-3xl font-bold mb-8">{t.projects.title}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all hover:transform hover:scale-105">
                  <h4 className="text-2xl font-bold mb-3">{project.title}</h4>
                  <p style={{ whiteSpace: "pre-line" }} className="text-gray-300 mb-4">{project.description}</p>

                  {project.isInternal ? (
                    <button
                      onClick={() => navigate(project.path)}
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors bg-transparent border-none cursor-pointer text-base"
                    >
                      {t.projects.viewProject} <ExternalLink className="w-4 h-4" />
                    </button>
                  ) : (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                      {t.projects.viewDemo} <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <div className="animate-fadeIn">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="text-blue-400" />
              {t.experience.title}
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-2xl font-bold">{exp.role}</h4>
                      <p className="text-blue-400 text-lg">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 text-sm">{exp.period}</span>
                  </div>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Award className="text-blue-400" />
                {t.experience.certifications}
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li><a target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors" href='https://www.etsglobal.org/fr/en/digital-score-report/8625B1CFBBB0C8DC84D4A78BE09B37F18BB10DA578D9ECCCFCADE35BC00648F1OFFOUXpydmM0bGJybWEybGVNQ2dqT3ZwTm5VeFFRQk5MMCtNQ1Zlb1IvcXRTdEdh?utm_campaign=sharing_dsr&utm_medium=qr-code&utm_source=dsr'>• TOEIC TEST <ExternalLink className="w-4 h-4" /></a></li>
                <li><a target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors" href='https://academy.hackthebox.com/achievement/badge/a0c3e8bc-fb83-11ef-864f-bea50ffe6cb4'>• LEARNING PENTESTING <ExternalLink className="w-4 h-4" /></a></li>
                <li><a target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors" href='https://academy.hackthebox.com/achievement/badge/7d31f3bc-8686-11f0-9254-bea50ffe6cb4'>• Web Proxies for Web Explotation <ExternalLink className="w-4 h-4" /></a></li>
                <li><a target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors" href='https://academy.hackthebox.com/achievement/badge/b8352795-8b50-11f0-9254-bea50ffe6cb4'>• Information gathering (OSINT and Active Reconnaissance) <ExternalLink className="w-4 h-4" /></a></li>
                <li><a target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors" href='https://academy.hackthebox.com/achievement/badge/dd3517d2-15ff-11f0-864f-bea50ffe6cb4'>• Network Enumaration with Nmap <ExternalLink className="w-4 h-4" /></a></li>
                <li><a target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors" href='https://academy.hackthebox.com/achievement/badge/a1865c84-c3fd-11f0-9254-bea50ffe6cb4'>•  Cross-Site Scripting (XSS) <ExternalLink className="w-4 h-4" /></a></li>
                <li className="pl-1">• etc...</li>
              </ul>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-blue-500/20 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2025 Abdou Aziz Kane. {t.footer}</p>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
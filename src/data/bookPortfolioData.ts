export interface PageData {
  type: string;
  title?: string;
  subtitle?: string;
  author?: string;
  content?: string;
  year?: string;
  award?: string;
  link?: string;
  description?: string;
  cta?: Array<{
    label: string;
    link: string;
    variant?: string;
  }>;
  skills?: Array<{
    name: string;
    icon?: string;
    skillDescription?: string;
    highlightProject?: number;
    skillKey?: string;
  }>;
  items?: Array<{
    date: string;
    title: string;
    desc: string;
    subtitle?: string;
  }>;
  technologies?: string[];
  projectSkills?: string[];
  projectId?: number;
  socials?: Array<{
    platform: string;
    url: string;
    icon: string;
  }>;
  projects?: Array<{
    id: number;
    title: string;
    year?: string;
    description: string;
    technologies: string[];
    projectSkills: string[];
    link?: string;
    award?: string;
  }>;
}

// Mapping entre les clés de compétences et les noms affichés dans les projets
export const skillKeyMapping: Record<string, string> = {
  'Développement': 'realiser',
  'Logique': 'realiser',
  'Optimisation': 'optimiser',
  'Innovation': 'optimiser',
  'Infrastructure': 'administrer',
  'Données': 'gerer',
  'Pilotage': 'gerer',
  'Travail d\'équipe': 'collaborer',
  'Communication': 'collaborer',
};

// Mapping inverse pour trouver la clé à partir du nom
export const getSkillKey = (skillName: string): string => {
  const mapping: Record<string, string> = {
    'Développement': 'realiser',
    'Logique': 'realiser',
    'Optimisation': 'optimiser',
    'Innovation': 'optimiser',
    'Infrastructure': 'administrer',
    'Données': 'gerer',
    'Pilotage': 'gerer',
    'Travail d\'équipe': 'collaborer',
    'Communication': 'collaborer',
  };
  return mapping[skillName] || skillName.toLowerCase();
};

// Liste des compétences avec leurs clés
export const skillsList = [
  { name: 'Réaliser', key: 'realiser' },
  { name: 'Optimiser', key: 'optimiser' },
  { name: 'Administrer', key: 'administrer' },
  { name: 'Gérer', key: 'gerer' },
  { name: 'Conduire', key: 'conduire' },
  { name: 'Collaborer', key: 'collaborer' },
];

export const pages: PageData[] = [
  {
    type: 'accueil',
    title: 'Naïla Bon',
    subtitle: 'Développeuse Full-Stack Créative',
    content: `Étudiante en 3ème année de BUT Informatique à l'Université Toulouse - Jean Jaurès, je suis actuellement en alternance chez Collins Aerospace à Toulouse.`,
    socials: [
      { platform: 'GitHub', url: 'https://github.com/naila-bon', icon: 'Github' },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/naïla-bon-56015b262/', icon: 'Linkedin' },
      { platform: 'Email', url: 'mailto:naila.ambn@gmail.com', icon: 'Mail' }
    ],
    technologies: [
      'java',
      'python',
      'arduino',
      'bash',
      'docker',
      'sql',
      'neo4j',
      'react',
      'ts',
      'angular',
      'vue.js',
      'godot'
    ]
  },
  {
    type: 'parcours',
    title: 'Mon Parcours',
    items: [
      { 
        date: '2024 - Maintenant', 
        title: 'Développeuse Full-Stack en Alternance', 
        subtitle: 'Collins Aerospace, Toulouse',
        desc: 'Développement d\'applications React et TypeScript. Participation aux sprints agiles, code reviews et collaboration quotidienne avec une équipe de 8 développeurs.' 
      },
      { 
        date: '2023 - 2026', 
        title: 'BUT Informatique - Réalisation d\'applications', 
        subtitle: 'Université Toulouse - Jean Jaurès',
        desc: 'Parcours: Conception, développement, validation d\'applications. Spécialisation en développement web.' 
      },
      { 
        date: '2020 - 2023', 
        title: 'Bac STI2D SIN', 
        subtitle: 'Lycée',
        desc: 'Sciences et Technologies de l\'Industrie et du Développement Durable - Systèmes d\'Information et Numérique.' 
      }
    ]
  },
  {
    type: 'skills-left',
    title: 'Mes Compétences',
    skills: [
      { 
        name: 'Réaliser', 
        icon: 'Code',
        skillDescription: 'Développement & Conception',
        highlightProject: 3,
        skillKey: 'realiser'
      },
      { 
        name: 'Optimiser', 
        icon: 'Zap',
        skillDescription: 'Performance & Efficacité',
        highlightProject: 4,
        skillKey: 'optimiser'
      },
      { 
        name: 'Administrer', 
        icon: 'Server',
        skillDescription: 'Infrastructure & Systèmes',
        highlightProject: 3,
        skillKey: 'administrer'
      }
    ]
  },
  {
    type: 'skills-right',
    title: 'Mes Compétences',
    skills: [
      { 
        name: 'Gérer', 
        icon: 'Database',
        skillDescription: 'Données & Pilotage',
        highlightProject: 3,
        skillKey: 'gerer'
      },
      { 
        name: 'Conduire', 
        icon: 'Briefcase',
        skillDescription: 'Organisation & Coordination',
        highlightProject: 5,
        skillKey: 'conduire'
      },
      { 
        name: 'Collaborer', 
        icon: 'Users',
        skillDescription: 'Communication & Équipe',
        highlightProject: 5,
        skillKey: 'collaborer'
      }
    ]
  },
  {
    type: 'projects-grid-left',
    title: 'Mes Projets',
    projects: [
      {
        id: 3,
        title: 'Bomberman Game',
        year: '2025',
        description: 'Jeu Bomberman développé en équipe avec gestion complète de la logique de gameplay.',
        technologies: ['Godot', 'GDScript'],
        projectSkills: ['Développement', 'Logique', 'Travail d\'équipe'],
        link: 'https://github.com/Romy514/bomberman'
      },
      {
        id: 4,
        title: 'Dashboard IoT',
        year: '2024',
        description: 'Application web pour visualiser en temps réel les données de capteurs du bâtiment.',
        technologies: ['React', 'Python', 'InfluxDB'],
        projectSkills: ['Développement', 'Données', 'Optimisation'],
        link: 'https://github.com/IUT-Blagnac/SAE-ALT-S3-Dev-24-25-DB-Recherche-Equipe-3A02'
      }
    ]
  },
  {
    type: 'projects-grid-right',
    title: 'Mes Projets',
    projects: [
      {
        id: 5,
        title: 'Station Recharge Vélos',
        year: '2023',
        description: 'Prototype récompensé aux Olympiades nationales de Sciences de l\'Ingénieur.',
        technologies: ['Arduino', 'C/C++'],
        projectSkills: ['Optimisation', 'Innovation'],
        award: '🏆 Prix hybridation - Olympiades 2023',
        link: undefined
      }
    ]
  },
  {
    type: 'contact-left',
    title: 'Restons en contact !',
    content: 'N\'hésitez pas à me contacter pour discuter de projets, d\'opportunités de stage ou simplement échanger autour du développement.'
  },
  {
    type: 'contact-right',
    socials: [
      { platform: 'Email', url: 'mailto:naila.ambn@gmail.com', icon: 'Mail' },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/naïla-bon-56015b262/', icon: 'Linkedin' },
      { platform: 'GitHub', url: 'https://github.com/naila-bon', icon: 'Github' }
    ],
    items: [
      { date: 'Toulouse, France', title: 'Localisation', desc: '' },
    ]
  }
];

export const navigationLabels = ['Accueil', 'Parcours', 'Compétences', 'Projets', 'Contact'];


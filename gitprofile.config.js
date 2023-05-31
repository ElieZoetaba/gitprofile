// gitprofile.config.js

const config = {
  github: {
    username: 'ElieZoetaba', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 12, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'zoetaba-w-elie-25775923a',
    twitter: 'Mr_ZOETABA_Elie',
    mastodon: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: '',
    phone: '+226 53 27 26 46',
    email: 'zoetabaelie@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'MySQL',
    'Git',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Art Numerique',
      position: 'Position',
      from: 'May 2023',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'CVP',
      position: 'Position',
      from: 'October 2022',
      to: 'April 2023',
      companyLink: 'https://cvp.bf',
    },
    {
      company: 'JodArmy',
      position: 'Position',
      from: 'September 2021',
      to: 'December 2021',
      companyLink: 'https://example.com',
    },
  ],
   certifications: [
    {
      name: 'Make_sence Africa',
      body: "Professional integration training",
      year: 'March  2022',
      link: 'https://africa.makesense.org',
    },
    {
      name: 'Simplon Burkina',
      body: 'Training in web development and mobile web at Simplon',
      year: 'January 2022',
      link: 'https://burkina-faso.simplon.co',
    },
  ],
  education: [
    {
      institution: '',
      degree: 'Degree',
      from: '',
      to: '2022',
    },
    {
      institution: 'Make_sence Africa',
      degree: 'Degree',
      from: '',
      to: '2022',
    },
    {
      institution: 'Lycée Wend-Puire De Saaba',
      degree: 'Degree',
      from: '2020',
      to: '2021',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/ElieZoetaba"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;

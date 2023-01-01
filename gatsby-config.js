module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://www.edwardcorbett.com`,
    // Your Name
    name: 'Edward Corbett',
    // Main Site Title
    title: `Edward Corbett | Software Developer`,
    // Description that goes under your name in main bio
    description: `Software Developer`,
    // Optional: Twitter account handle
    author: `@edwardwcorbett`,
    // Optional: Github account URL
    github: `https://github.com/edwardwcorbett`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/edwardwcorbett`,
    // Content of the About Me section
    about: `Security focused software developer interested in technical aspects of cyber security such as code analysis and reverse engineering. Currently enrolled in "Advanced Web Attacks and Exploitation" online security training course in pursuit of the Offensive Security Web Expert (OSWE) certification.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'edwardcorbett.com - based on the Devfolio template',
        description:
          'Showcasing my ability to use git, read technical documentation, edit Javascript, and configure DNS to set up a zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS.',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'NAVSUP Business Systems Center (DoD - Federal Civilian)',
        description: 'Senior Software Developer - Identity Management, January 2017 - Present',
        link: 'https://www.navsup.navy.mil/NAVSUP-Enterprise/NAVSUP-Business-Systems-Center/',
      },
      {
        name: 'Ark Safety (Part Time)',
        description: 'Software Developer/System Administrator, December 2018 - Present',
        link: 'https://www.arksafety.com',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Java, C#/.NET, PL/SQL, Javascript, Python, PHP',
      },
      {
        name: 'Databases',
        description: 'Oracle, SQL Server, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Ansible, API Design & Integration, Enterprise Architecture, Risk Assessment, IT Policy and Planning, PKI Certificates',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
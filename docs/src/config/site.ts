export const COLORS_BY_TAGS = {
  React: 'dark:bg-sky-300 bg-sky-600/50',
  Redux: 'dark:bg-yellow-300 bg-yellow-500/50'
  // JavaScript: 'dark:bg-yellow-300 bg-yellow-600/50',
  // Browser: 'dark:bg-red-300 bg-red-600/50',
  // Network: 'dark:bg-purple-300 bg-purple-600/50',
  // Toolchain: 'dark:bg-cyan-300 bg-cyan-600/50',
  // Structure: 'dark:bg-green-300 bg-green-600/50',
  // EVENT: 'dark:bg-purple-300 bg-purple-600/50'
} as const;

export const TITLES_BY_TAG: {
  [key: string]: string;
} = {
  Redux:
    'bg-clip-text text-transparent select-none bg-gradient-to-r from-yellow-600 to-yellow-500 dark:from-yellow-300 dark:to-yellow-100',
  React:
    'bg-clip-text text-transparent select-none bg-gradient-to-r from-sky-400 to-sky-500 dark:from-sky-500 dark:to-sky-200'
  // Algo: 'bg-clip-text text-transparent select-none bg-gradient-to-r from-green-600 to-green-500 dark:from-green-300 dark:to-green-100',
  // Structure:
  //   'bg-clip-text text-transparent select-none bg-gradient-to-r from-green-600 to-green-500 dark:from-green-300 dark:to-green-100',
  // Browser:
  //   'bg-clip-text text-transparent select-none bg-gradient-to-r from-red-600 to-red-500 dark:from-red-300 dark:to-red-100',
  // Network:
  //   'bg-clip-text text-transparent select-none bg-gradient-to-r from-purple-600 to-purple-500 dark:from-purple-400 dark:to-purple-100',
  // Toolchain:
  //   'bg-clip-text text-transparent select-none bg-gradient-to-r from-cyan-600 to-cyan-500 dark:from-cyan-400 dark:to-cyan-100'
} as const;

export const BUTTON_BY_TAGS = {
  React:
    'bg-sky-500/10 text-sky-700 hover:text-sky-700 dark:text-sky-300 dark:bg-sky-300/10 hover:bg-sky-500/20 dark:hover:bg-sky-300/20',
  Redux:
    'bg-yellow-500/10 text-yellow-700 hover:text-yellow-700 dark:text-yellow-300 dark:bg-yellow-300/10 hover:bg-yellow-500/20 dark:hover:bg-yellow-300/20'
  // Structure:
  //   'bg-green-500/10 text-green-700 hover:text-green-700 dark:text-green-300 dark:bg-green-300/10 hover:bg-green-500/20 dark:hover:bg-green-300/20',
  // Browser:
  //   'bg-red-500/10 text-red-700 hover:text-red-700 dark:text-red-300 dark:bg-red-300/10 hover:bg-red-500/20 dark:hover:bg-red-300/20',
  // Toolchain:
  //   'bg-cyan-500/10 text-cyan-700 hover:text-cyan-700 dark:text-cyan-300 dark:bg-cyan-300/10 hover:bg-cyan-500/20 dark:hover:bg-cyan-300/20',
  // MEDIUM:
  //   'bg-yellow-500/10 text-yellow-700 hover:text-yellow-700 dark:text-yellow-300 dark:bg-yellow-300/10 hover:bg-yellow-500/20 dark:hover:bg-yellow-300/20',
  // Network:
  //   'bg-purple-500/10 text-purple-700 hover:text-purple-700 dark:text-purple-300 dark:bg-purple-300/10 hover:bg-purple-500/20 dark:hover:bg-purple-300/20',
  // EVENT:
  //   'bg-purple-500/10 text-purple-700 hover:text-purple-700 dark:text-purple-300 dark:bg-purple-300/10 hover:bg-purple-500/20 dark:hover:bg-purple-300/20'
} as const;

export const BORDERS_BY_DIFFICULTY: {
  [key: string]: string;
} = {
  React:
    'dark:hover:border-sky-200 hover:border-sky-500 dark:group-focus:border-sky-200 group-focus:border-sky-500',
  Redux:
    'dark:hover:border-yellow-200 hover:border-yellow-500 dark:group-focus:border-yellow-200 group-focus:border-yellow-500',
  Structure:
    'dark:hover:border-green-200 hover:border-green-500 dark:group-focus:border-green-200 group-focus:border-green-500',
  aa: 'dark:hover:border-yellow-200 hover:border-yellow-500 dark:group-focus:border-yellow-200 group-focus:border-yellow-500',
  Browser:
    'dark:hover:border-red-200 hover:border-red-500 dark:group-focus:border-red-200 group-focus:border-red-500',
  Network:
    'dark:hover:border-purple-200 hover:border-purple-500 dark:group-focus:border-purple-200 group-focus:border-purple-500',
  Toolchain:
    'dark:hover:border-cyan-200 hover:border-cyan-500 dark:group-focus:border-cyan-200 group-focus:border-cyan-500'
};

export const SHADOWS_BY_DIFFICULTY: {
  [key: string]: string;
} = {
  React:
    'hover:shadow-[0_0_16px_-2.4px_#bae6fd]  dark:hover:shadow-[0_0_16px_-2.4px_#bae6fd] dark:group-focus:shadow-[0_0_16px_-2.4px_#bae6fd]',
  Structure:
    'hover:shadow-[0_0_16px_-2.4px_#FBDBA7] hover:shadow-green-200 group-focus:shadow-easy dark:hover:shadow-easy-dark dark:group-focus:shadow-easy-dark',
  JavaScript:
    'hover:shadow-[0_0_16px_-2.4px_#FBDBA7]  group-focus:shadow-[0_0_16px_-2.4px_#FBDBA7] dark:hover:shadow-[0_0_16px_-2.4px_#FBDBA7] dark:group-focus:shadow-[0_0_16px_-2.4px_#FBDBA7]',
  Browser:
    'hover:shadow-[0_0_16px_-2.4px_#fecaca] group-focus:shadow-[0_0_16px_-2.4px_#fecaca] dark:hover:shadow-[0_0_16px_-2.4px_#fecaca] dark:group-focus:shadow-[0_0_16px_-2.4px_#fecaca]',
  Network:
    'hover:shadow-[0_0_16px_-2.4px_#e9d5ff] group-focus:shadow-[0_0_16px_-2.4px_#e9d5ff] dark:hover:shadow-[0_0_16px_-2.4px_#e9d5ff] dark:group-focus:shadow-[0_0_16px_-2.4px_#e9d5ff]',
  Toolchain:
    'hover:shadow-[0_0_16px_-2.4px_#bae6fd] group-focus:shadow-[0_0_16px_-2.4px_#bae6fd] dark:hover:shadow-[0_0_16px_-2.4px_#bae6fd] dark:group-focus:shadow-[0_0_16px_-2.4px_#bae6fd]'
};

type TypeSiteConfigNavItem = {
  title: string;
  link: string;
  label: keyof typeof COLORS_BY_TAGS;
};

export const siteConfig = {
  title: 'NantTech Roadmap',
  name: 'Roadmap of Nant Tech',
  description: 'Roadmap that everything of Nant Tech blog',
  siteUrl: 'https://wangbaoqi.tech',
  author: 'WangBaoQi',
  email: 'wangbaoqi8839@gmail.com',
  github: 'https://github.com/wangbaoqi',
  links: {
    github: 'https://github.com/wangbaoqi',
    twitter: 'https://twitter.com/wangbaoqi',
    discord: 'https://discord.gg/9b6yyZKmH4'
  }
};

export const siteConfigNav: TypeSiteConfigNavItem[] = [
  {
    title: 'React',
    link: '/docs/react',
    label: 'React'
  },
  {
    title: 'React-Redux',
    link: '/docs/react-redux',
    label: 'Redux'
  }
];

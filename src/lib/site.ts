export const siteConfig = {
  name: "DOCZIS",
  url: "https://doczis.is-a.software",
  title: "DOCZIS - Smart Document Hub | PDF Tools & Document Manager",
  description:
    "DOCZIS is a powerful offline PDF and document management app for Android. Convert, edit, merge, split, compress, secure, and organize PDFs with 12+ professional tools. No server required.",
  shortDescription:
    "Powerful offline PDF and document management app with 12+ professional tools. Convert, edit, merge, split, compress, and secure documents on your Android device.",
  repoUrl: "https://github.com/rahulrakshi3-netizen/Doczis",
  developer: {
    name: "Rahul Raj",
    role: "Android & Full Stack Developer",
    bio: "Rahul Raj is a BCA student and Android/full-stack developer from Bangalore, India. He builds privacy-first, offline-first software and is the developer of DOCZIS.",
    location: "Bangalore, Karnataka, India",
    portfolioUrl: "https://rahul-raj.is-a.dev",
    githubUrl: "https://github.com/rahulrakshi3-netizen",
    linkedInUrl: "https://www.linkedin.com/in/rahulraj-linked/",
    email: "rahulrakshi3@gmail.com",
    appEmail: "doczis.app@gmail.com",
  },
} as const;

export const developerSameAs: string[] = [
  siteConfig.developer.portfolioUrl,
  siteConfig.developer.githubUrl,
  siteConfig.developer.linkedInUrl,
  siteConfig.repoUrl,
];

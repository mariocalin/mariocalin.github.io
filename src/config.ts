import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://mariocalin.github.io/",
  author: "Mario Calín Sánchez",
  desc: "Mi página personal y profesional.",
  title: "Mario",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 60,
  height: 56,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/mariocalin",
    linkTitle: `Perfil en Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mario-cal%C3%ADn-s%C3%A1nchez/",
    linkTitle: `Perfil en LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:mariocalmsc@protonmail.com",
    linkTitle: `Contacta conmigo a través del correo electrónico`,
    active: true,
  }
];

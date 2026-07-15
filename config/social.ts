export const social = {
  facebook: {
    name: "Facebook",
    url: "https://facebook.com/leadflowproteam",
    username: "leadflowproteam",
  },

  linkedin: {
    name: "LinkedIn",
    url: "https://linkedin.com/company/leadflowproteam",
    username: "leadflowproteam",
  },

  x: {
    name: "X",
    url: "https://x.com/leadflowproteam",
    username: "leadflowproteam",
  },

  instagram: {
    name: "Instagram",
    url: "https://instagram.com/leadflowproteam",
    username: "leadflowproteam",
  },

  youtube: {
    name: "YouTube",
    url: "https://youtube.com/@leadflowproteam",
    username: "@leadflowproteam",
  },

  github: {
    name: "GitHub",
    url: "https://github.com/leadflowproteam",
    username: "leadflowproteam",
  },
} as const;

export type Social = typeof social;
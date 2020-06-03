let categories = [
  {
    name: "Illustrations",
    url: "illu",
    description: "Repenser ses modes de consommation. Mais toujours avec légèreté.",
    intro: "blablabla c illustrations",
    subSections: [
      { name: "test", text: "cc je suis subsection" },
      { name: "test test", text: "cc je suis aussi subsection" },
    ],
    bgUrl: "./../assets/images/1.png",
  },
  {
    name: "Typographie",
    url: "typo",
    description: "Simple et accessible. Avec elle, on redonne du sens aux étiquettes.",
    intro: "blablabla c typo",
    subSections: [{ name: "test", text: "cc je suis subsection" }],
    bgUrl: "./../assets/images/2.png",
  },

  {
    name: "Couleurs",
    url: "couleurs",
    description: "Une consommation responsable, ça donne une palette qui respire la santé.",
    intro: "La palette de couleurs de Yuka reflète la fraîcheur et l'authenticité de la marque et de l'équipe qui la porte. Vives et naturelles, elles accompagnent l'utilisateur·rice dans son expérience de consommation, pour la rendre à la fois plus saine et plus ludique.",
    subSections: [
      {
        name: "Couleurs principales",
        text: "Les couleurs du logo servent de base à la palette de Yuka et sont déclinées sur l'application, le site et les réseaux sociaux de la marque. Ce orange et ce vert saturés évoquent la fraîcheur et renvoient aux ambitions de Yuka d'encourager une consommation plus saine.",
        components: [
          {
            name: "PaletteContainer",
            props: {
              colors: [
                {
                  name: "Orange",
                  primary: "#FF9101",
                  secondary: "#FFAF47",
                },
                {
                  name: "Vert",
                  primary: "#59D67D",
                  secondary: "#90DDA6",
                },
              ],
            },
          },
        ],
      },
      {
        name: "Couleurs secondaires",
        text: "Pour complimenter les couleurs principales, la palette secondaire se compose de tons neutres et naturels.",
        components: [
          {
            name: "PaletteContainer",
            props: {
              colors: [
                {
                  name: "Bisque",
                  primary: "#FFEED5",
                  secondary: "#FFF8EE",
                },
                {
                  name: "Bleu polaire",
                  primary: "#D8E9EA",
                  secondary: "#EBF7FA",
                },
                {
                  name: "Granit",
                  primary: "#827E79",
                  secondary: "#B5B1AD",
                },
                {
                  name: "Argent",
                  primary: "#CDD1D3",
                  secondary: "#EAECED",
                },
              ],
            },
          },
        ],
      },
    ],
    bgUrl: "./../assets/images/3.png",
  },

  {
    name: "Animations",
    url: "anim",
    description: "Faire bouger des boutons pour bousculer des habitudes de consommation.",
    intro: "",
    subSections: [
      { name: "Jauge", 
      text: "cc je suis subsection", 
      components: [
        {
          name: "JaugeAnim",
          text: "blabla jauge qui se remplit",
          src: "video/jaugev2.mp4"
        }]},
      { name: "test test", text: "cc je suis aussi subsection" },
    ],
    bgUrl: "./../assets/images/4.png",
  },

  {
    name: "Composants",
    url: "compo",
    description: "Les garants de la fluidité de l'expérience utilisateur.",
    intro: "",
    subSections: [{ name: "test", text: "cc je suis subsection" }],
    bgUrl: "./../assets/images/5.png",
  },

  {
    name: "Data-visualisation",
    url: "dataviz",
    description: "Des visuels simples pour éclairer des choix compliqués.",
    intro: "",
    subSections: [
      { name: "test", text: "cc je suis subsection" },
      { name: "test test", text: "cc je suis aussi subsection" },
    ],
    bgUrl: "./../assets/images/6.png",
  },
];

export default categories;

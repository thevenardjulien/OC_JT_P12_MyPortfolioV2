import sophieImage from "../../assets/img/projets/sophiebluel/sophie-bluel.webp";
import kasaImage from "../../assets/img/projets/kasa/kasa.webp";
import ninaImage from "../../assets/img/projets/ninacarducci/nina.webp";
import eventsImage from "../../assets/img/projets/77events/77events.webp";
import argentBankImage from "../../assets/img/projets/argentbank/argentbank.webp";
import javascriptLogo from "../../assets/img/skills/javascript.webp";
import hemadexImage from "../../assets/img/projets/hemadex/hemadex.webp";
import reactLogo from "../../assets/img/skills/react.webp";
import sassLogo from "../../assets/img/skills/sass.webp";

export const projets = [
  {
    title: "Sophie Bluel",
    stack: [
      {
        img: javascriptLogo,
        alt: "JavaScript",
      },
    ],
    stackAlt: "JavaScript",
    img: sophieImage,
    url: "https://github.com/thevenardjulien/OC_JT_Portfolio-architecte-sophie-bluel-V2",
    github: true,
    description:
      "Création d'une page web dynamique avec JavaScript. Gestion des évènements, manipulation du DOM, traitement des données de formulaires...",
  },
  {
    title: "Kasa",
    stack: [
      {
        img: reactLogo,
        alt: "React",
      },
      {
        img: sassLogo,
        alt: "Sass",
      },
    ],
    stackAlt: "JavaScript",
    img: kasaImage,
    url: "https://thevenardjulien.github.io/OC_JT_P8_KASA",
    github: false,
    description:
      "Application web de location immobilière avec React. Navigation avec React Router, création de composants, animations CSS avec Sass...",
  },
  {
    title: "Nina Carducci",
    stack: [
      {
        img: javascriptLogo,
        alt: "JavaScript",
      },
    ],
    stackAlt: "JavaScript",
    img: ninaImage,
    url: "https://thevenardjulien.github.io/OC_JT_P9_NC/",
    github: false,
    description:
      "Optimisation du référencement naturel d'un site de photographe. Performances, optimisations et bonnes pratiques...",
  },
  {
    title: "77events",
    stack: [
      {
        img: reactLogo,
        alt: "React",
      },
      {
        img: sassLogo,
        alt: "Sass",
      },
    ],
    stackAlt: "JavaScript",
    img: eventsImage,
    url: "https://github.com/thevenardjulien/OC_JT_P10_724events",
    github: true,
    description:
      "Debugg du site d'une agence événementiel. Rédaction de cahier de recette et déploiement de tests unitaires. ",
  },
  {
    title: "ArgentBank",
    stack: [
      {
        img: reactLogo,
        alt: "React",
      },
      {
        img: sassLogo,
        alt: "Sass",
      },
    ],
    stackAlt: "JavaScript",
    img: argentBankImage,
    url: "https://github.com/thevenardjulien/OC_JT_P11_ArgentBank",
    github: true,
    description:
      "Implémentation du front-end d'une application bancaire. Récupération de données via appels API et centralisation avec Redux.  ",
  },
  {
    title: "Hemadex",
    stack: [
      {
        img: reactLogo,
        alt: "React",
      },
      {
        img: sassLogo,
        alt: "Sass",
      },
    ],
    stackAlt: "JavaScript",
    img: hemadexImage,
    url: "https://hemadex.com/",
    github: false,
    description:
      "Dévelopement d'une application web communautaire, plateforme de partage de vidéo et contenus autour des arts martiaux européens.",
  },
];

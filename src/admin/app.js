import RatinLogo from './extensions/ratinstrapi.png';


const config = {
  auth: {
    logo: RatinLogo,
  },
  menu: {
    logo: RatinLogo,
  },
  head: {
    favicon: RatinLogo,
  },
  theme: {
    light: {
      colors: {
        primary100: '#B45032', // buttons background
        primary200: '#B45032',
        primary500: '#B45032',
        primary600: '#B45032',
        primary700: '#B45032',
        buttonPrimaryText: '#ffffff', // make button text white
      },
    },
  },
  translations: {
    en: {
      'auth.form.welcome.title': 'Welcome to RATIN',
      'auth.form.welcome.subtitle': 'Manage the Website content',
      'app.components.LeftMenu.navbrand.title': 'RATIN CMS',
      'app.components.LeftMenu.navbrand.workplace': 'Dashboard',
    },
  },
};

const bootstrap = () => {};

export default { config, bootstrap };

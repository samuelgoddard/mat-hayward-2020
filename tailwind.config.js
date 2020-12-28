module.exports = {
  purge: {
    content: ['./src/**/*.js',],
    options: {
      whitelist: ['is-active'],
    }
  },
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px"
    },
    extend: {
      fontFamily: {
        'sans': ['Mier', 'Helvetica', 'Arial', 'sans-serif'],
        'display': ['Sainte Colombe', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        'serif': ['abril-text', 'Cambria', 'Times New Roman', 'serif'],
      },
      fontSize: {
        'xsvw': '0.5vw',
        'smvw': '1vw',
        'basevw': '1.5vw',
        'lgvw': '2vw',
        'xlvw': '2.5vw',
        '2xlvw': '3vw',
        '3xlvw': '3.5vw',
        '4xlvw': '4vw',
        '5xlvw': '4.5vw',
        '6xlvw': '5vw',
        '7xlvw': '5.5vw',
        '8xlvw': '7vw',
        '9xlvw': '8.25vw',
        '10xlvw': '9.55vw',
      },
      spacing: {
        '1vw': '1vw',
        '2vw': '2vw',
        '3vw': '3vw',
        '4vw': '4vw',
        '5vw': '5vw',
        '6vw': '6vw',
        '7vw': '7vw',
        '8vw': '8vw',
        '9vw': '9vw',
        '10vw': '10vw',
        '15vw': '15vw',
        '20vw': '18.5vw',
        '25vw': '25vw',
      
        '20vh': '20vh',
        '25vh': '25vh',
        '35vh': '35vh',
        '45vh': '45vh',
        '55vh': '55vh',
        '65vh': '65vh',
        '75vh': '75vh',
        '85vh': '85vh',
        '72': '22rem',
      },
      lineHeight: {
        minimal: 1.04,
      },
    }
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    margin: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    padding: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus']
  },
  corePlugins: {
    container: false
  }
}
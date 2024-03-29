export const theme = {
  colors: {
    primaryColor: '#8f1c12',
    secondaryColor: '#0a1128',
    white: '#ffffff',
    black: '#000000',
    mediumGray: '#dddddd',
    gray: '#898989',
    ligthOrange: '#f7f1e6',
  },
  font: {
    family: {
      default: "'Open sans',sans-serif",
      sansSerif: 'sans-serif',
      openSans: "'Open sans'",
      montserrat: "'Montserrat'",
    },
    sizes: {
      xxsmall: '.8rem',
      xsmall: '1rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },
  },
  medias: {
    lteMedium: '(max-width: 768px)',
  },
  spacing: {
    xxsmall: '.8rem',
    xsmall: '1rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
  },
} as const;

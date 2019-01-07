// doczrc.js
import { css } from 'docz-plugin-css';

export default {
  title: 'Nostromo CSS',
  description: 'Documentation for Nostromo css',
  // themeConfig: {
  //   colors: {
  //     primary: '#3498db',
  //     secondary: '#3D3B30', //4D5061
  //     gray: '#BCC1BA',
  //   },
  // },
  plugins: [
    css({
      preprocessor: 'sass',
    }),
  ],
};

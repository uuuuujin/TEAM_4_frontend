import { DefaultTheme } from 'styled-components';
import device from './media';

const theme: DefaultTheme = {
  borderRadius: '5px',
  device,
  colors: {
    main: 'orange',
    secondary: 'magenta',
  },
};

export default theme;

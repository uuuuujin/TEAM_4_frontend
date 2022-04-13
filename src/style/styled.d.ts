import 'styled-components';

// 공동 스타일 속성 interface 샘플
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    device: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    colors: {
      main: string;
      secondary: string;
    };
  }
}

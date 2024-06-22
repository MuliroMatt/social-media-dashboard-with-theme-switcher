import 'styled-components';

declare module 'styled-components' {
   export interface DafaultTheme {
      title: string;
      colors: {
         background: string;
         backgroundPattern: string;
         cardBg: string;
         textPrimary: string;
         textSecondary: string;
         toggle: string;
      };
   }
}

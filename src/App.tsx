import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { Global } from './components/styles/Global';
import { Container } from './components/styles/Container';
import SocialCards from './components/SocialCards';
import Overview from './components/Overview';
import dark from './components/styles/themes/dark';
import light from './components/styles/themes/light';
import { useState } from 'react';

const App = () => {
   const [theme, setTheme] = useState(dark)

   const toggleTheme = () => {
      console.log('toggle');
      
      setTheme(theme.title === 'dark' ? light : dark)
   }

   return (
      <ThemeProvider theme={theme}>
         <Global />
         <Container>
            <Header toggleTheme={toggleTheme}/>
            <main>
               <SocialCards/>
               <Overview/>
            </main>
         </Container>
      </ThemeProvider>
   );
};

export default App;

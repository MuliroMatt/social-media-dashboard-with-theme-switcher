import { useContext } from "react";
import { StyledHeader, SwitchContainer } from "./styles/Header.styled";
import { ThemeContext } from "styled-components";

interface Props { 
   toggleTheme(): void;
}

const Header = ({ toggleTheme }: Props)  => {
   const { title } = useContext(ThemeContext)

   return (
      <StyledHeader>
         <div>
            <h1>Social Media Dashboard</h1>
            <p>Total Followers: 23,004</p>
         </div>
         <hr />
         <SwitchContainer>
            <span>Dark Mode</span>
            <label>
               <input type='checkbox' 
                  onChange={toggleTheme}
                  checked={title === 'light'}
               />
            </label>
         </SwitchContainer>
      </StyledHeader>
   );
};

export default Header;

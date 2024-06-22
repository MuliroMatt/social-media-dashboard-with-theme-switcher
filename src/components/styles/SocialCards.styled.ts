import styled from 'styled-components';

export const SocialCardsStyled = styled.section`
   /* background-color: blue; */
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 1.75rem;
   @media (max-width: 975px){
        grid-template-columns: repeat(2, 1fr);
   }
   @media (max-width: 575px){
      grid-template-columns: repeat(1, 1fr);
   }
`;

export const SocialCardStyled = styled.article<{ isNegative: boolean; borderColor: string}>`
   border-radius: 4px;
   position: relative;
   overflow: hidden;
   cursor: pointer;
   background-color: ${({ theme }) => theme.colors.cardBg};
   &:hover{
      background-color: ${({ theme }) => theme.colors.cardBgHover};
   }
   &::before{
      content: '';
      /* position: absolute; */
      display: block;
      height: 4px;
      width: 100%;
      background: ${({ borderColor }) => borderColor};
   }
   header {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.75rem 0 1.25rem;
      gap: 0.5rem;
      span {
         font-weight: 700;
         font-size: 0.75rem;
         color: ${({ theme }) => theme.colors.textSecondary};
      }
   }
   div {
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
         font-size: 3.285rem;
         color: ${({ theme }) => theme.colors.textPrimary};
      }

      p {
         text-transform: uppercase;
         font-size: 0.75rem;
         letter-spacing: 5px;
         color: ${({ theme }) => theme.colors.textSecondary};
      }
   }

   footer {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem 0;

      span {
         font-size: 12px;
         font-weight: 700;
         margin-left: 4px;
         color: ${({ isNegative, theme}) => (isNegative ? theme.colors.BrightRed : theme.colors.LimeGreen)};
      }
   }
`;

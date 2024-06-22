import styled from 'styled-components';

export const StyledHeader = styled.header`
   /* background-color: blue; */
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 2.25rem 0 2.75rem;
   @media (max-width: 575px) {
      flex-direction: column;
      align-items: normal;
   }

   hr {
      display: none;
      @media (max-width: 575px) {
         display: block;
         border: none;
         height: 1px;
         background-color: ${({ theme }) => theme.colors.textSecondary};
         margin: 1.25rem 0;
      }
   }

   h1 {
      font-size: 1.75rem;
      font-weight: 700;
      margin-bottom: 0.25rem;
      color: ${({ theme }) => theme.colors.textPrimary};
      @media (max-width: 575px) {
         font-size: 1.5rem;
      }
   }

   p {
      font-size: 0.875rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.textSecondary};
   }
`;

export const SwitchContainer = styled.div`
   /* background-color: blue; */
   display: flex;
   align-items: center;

   @media (max-width: 575px) {
      justify-content: space-between;
   }

   span {
      font-weight: 700;
      font-size: 0.938rem;
      margin-right: 1rem;
      color: ${({ theme }) => theme.colors.textSecondary};
   }

   label {
      background: ${({ theme }) => theme.colors.toggle};
      position: relative;
      width: 48px;
      height: 24px;
      border-radius: 200px;
      cursor: pointer;
      &:hover {
         background: linear-gradient(
            to right,
            hsl(210, 78%, 56%),
            hsl(146, 68%, 55%)
         );
      }
      &::after {
         content: '';
         display: block;
         height: 18px;
         width: 18px;
         position: absolute;
         top: 3px;
         left: 3px;
         border-radius: 20px;
         transition: 0.3s;
         background-color: ${({ theme }) => theme.colors.cardBg};
      }
      &:has(input:checked) {
         &::after {
            transform: translateX(24px);
         }
      }
      input {
         opacity: 0;
         z-index: -1;
         position: absolute;
         cursor: pointer;
         left: 18px;
         top: 5px;
      }
   }
`;

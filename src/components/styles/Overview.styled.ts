import styled from 'styled-components';

export const OverviewStyled = styled.section`
   /* background-color: red; */
   margin-top: 3rem;
   h2 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      color: ${({ theme }) => theme.colors.textPrimary};
   }
`;

export const OverviewGrid = styled.div`
   /* background-color: blue; */
   display: grid;
   gap: 1.75rem;
   grid-template-columns: repeat(4, 1fr);
   @media  (max-width: 975px){
        grid-template-columns: repeat(2, 1fr);
   }
   @media (max-width: 575px){
      grid-template-columns: repeat(1, 1fr);
   }
`;

export const OverviewCardStyled = styled.div<{ isNegative: boolean }>`
    padding: 1.563rem 2rem 1.25rem 1.5rem;
    border-radius: 4px;
   background-color: ${({ theme }) => theme.colors.cardBg};
   cursor: pointer;
   &:hover{
      background-color: ${({ theme }) => theme.colors.cardBgHover};
   }
    header{
        /* background-color: blue; */
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.75rem;

        span{
            font-size: 0.875rem;
            font-weight: 700;
            color: ${({ theme }) => theme.colors.textSecondary};
        }
    }
    
    div{
        display: flex;
        align-items: end;
        justify-content: space-between;

        h3{
            font-size: 2rem;
            line-height: 90%;
            color: ${({ theme }) => theme.colors.textPrimary};
        }

        span{
            font-size: 12px;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 2px;
            color: ${({ theme, isNegative}) => (isNegative ? theme.colors.BrightRed : theme.colors.LimeGreen)};
        }
    }
`
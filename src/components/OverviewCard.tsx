import { ReactNode } from 'react';
import { OverviewCardStyled } from './styles/Overview.styled';
import DownIcon from './icons/DownIcon';
import UpIcon from './icons/UpIcon';

interface OverviewProps {
   text: string;
   icon: ReactNode;
   number: string;
   percent: number;
}

const OverviewCard = ({ text, icon, number, percent }: OverviewProps) => {

   const isNegative = percent < 0;
   if(isNegative) {
      percent = percent * -1
   }

   return (
      <OverviewCardStyled isNegative={isNegative}>
         <header>
            <span>{text}</span>
            {icon}
         </header>
         <div>
            <h3>{number}</h3>
            <span>
            {isNegative ? <DownIcon/> : <UpIcon />} {percent}%
            </span>
         </div>
      </OverviewCardStyled>
   );
};

export default OverviewCard;

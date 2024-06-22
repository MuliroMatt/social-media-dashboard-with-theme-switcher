import { ReactNode} from 'react';
import UpIcon from './icons/UpIcon';
import { SocialCardStyled } from './styles/SocialCards.styled';
import DownIcon from './icons/DownIcon';


interface SocialCardProps {
   icon: ReactNode;
   profile: string;
   followers: string;
   newFollowers: number;
   borderColor: string;
}

const SocialCard: React.FC<SocialCardProps>  = ({ icon, profile, followers, newFollowers, borderColor }) => {

   const isNegative = newFollowers < 0
   const absNewFollowers = isNegative ? -newFollowers : newFollowers; 

   return (
      <SocialCardStyled isNegative={isNegative} borderColor={borderColor}>
         <header>
            {icon}
            <span>{profile}</span>
         </header>
         <div>
            <h2>{followers}</h2>
            <p>Followers</p>
         </div>
         <footer>
            {isNegative ? <DownIcon/> : <UpIcon />}
            <span>{absNewFollowers} Today</span>
         </footer>
      </SocialCardStyled>
   );
};

export default SocialCard;

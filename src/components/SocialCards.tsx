import { useContext } from 'react';
import SocialCard from './SocialCard';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';
import TwitterIcon from './icons/TwitterIcon';
import YoutubeIcon from './icons/YoutubeIcon';
import { SocialCardsStyled } from './styles/SocialCards.styled';
import { ThemeContext } from 'styled-components';

const SocialCards = () => {

   const { colors } = useContext(ThemeContext)

   return (
      <SocialCardsStyled>
         <SocialCard
            icon={<FacebookIcon />}
            profile='@nathanf'
            followers={'1987'}
            newFollowers={12}
            borderColor={colors.Facebook}
         />
         <SocialCard
            icon={<TwitterIcon />}
            profile='@nathanf'
            followers={'1044'}
            newFollowers={99}
            borderColor={colors.Twitter}
         />
         <SocialCard 
            icon={<InstagramIcon/>}
            profile="@realnathanf"
            followers={'11k'}
            newFollowers={1099}
            borderColor={colors.Instagram}
         />
         <SocialCard 
            icon={<YoutubeIcon/>}
            profile="Nathan F."
            followers={'8239'}
            newFollowers={-144}
            borderColor={colors.YouTube}
         />
      </SocialCardsStyled>
   );
};

export default SocialCards;

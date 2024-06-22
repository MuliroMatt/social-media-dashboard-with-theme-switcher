import OverviewCard from './OverviewCard';
import DownIcon from './icons/DownIcon';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';
import TwitterIcon from './icons/TwitterIcon';
import UpIcon from './icons/UpIcon';
import YoutubeIcon from './icons/YoutubeIcon';
import { OverviewGrid, OverviewStyled } from './styles/Overview.styled';

const Overview = () => {
   return (
      <OverviewStyled>
         <h2>Overview - Today</h2>
         <OverviewGrid>
            <OverviewCard
               text={'Page Views'}
               icon={<FacebookIcon />}
               number={'87'}
               percent={3}
            />
            <OverviewCard
               text={'Likes'}
               icon={<FacebookIcon />}
               number={'52'}
               percent={-2}
            />
            <OverviewCard
               text='Likes'
               icon={<InstagramIcon />}
               number={'5462'}
               percent={2257}
            />
            <OverviewCard
               text='Profile Views'
               icon={<InstagramIcon />}
               number={'52k'}
               percent={1375}
            />
            <OverviewCard
               text='Retweets'
               icon={<TwitterIcon />}
               number={'117'}
               percent={303}
            />
            <OverviewCard 
               text='Likes'
               icon={<TwitterIcon/>}
               number={'507'}
               percent={553}
            />
            <OverviewCard 
               text='Likes'
               icon={<YoutubeIcon/>}
               number={'107'}
               percent={-19}
            />
            <OverviewCard 
               text='Total Views'
               icon={<YoutubeIcon/>}
               number={'1407'}
               percent={-12}
            />
         </OverviewGrid>
      </OverviewStyled>
   );
};

export default Overview;

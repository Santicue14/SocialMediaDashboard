import facebookLogo from '../assets/images/icon-facebook.svg'
import instagramLogo from '../assets/images/icon-instagram.svg'
import twitterLogo from '../assets/images/icon-twitter.svg'
import youtubeLogo from '../assets/images/icon-youtube.svg'
import iconUp from '../assets/images/icon-up.svg'
import iconDown from '../assets/images/icon-down.svg'


const networkLogos = {
    facebook: facebookLogo,
    instagram: instagramLogo,
    twitter: twitterLogo,
    youtube: youtubeLogo
}

const networkColors = {
    facebook: 'bg-Facebook',
    instagram: 'bg-Instagram',
    twitter: 'bg-Twitter',
    youtube: 'bg-YouTube'
}
export const OverviewCard = ({ network, user, audienceType, audience, today, isUp }) => {

    return (
        <article className='bg-Light-Grayish-Blue w-[326px] h-[216px] mb-4 rounded-[5px] overflow-hidden text-center dark:bg-Dark-Desaturated-Blue hover:brightness-95 cursor-pointer hover:dark:brightness-125'>
            <div className={`${networkColors[network]} h-[4px] mb-8`}></div>
            <div className="flex items-center place-content-center gap-2 ">
                <img src={networkLogos[network]} alt={`Logo of ${network}`} />
                <p className='text-xs text-Dark-Grayish-Blue font-bold'>{user}</p>
            </div>
            <p className='text-[56px] font-bold text-Very-Dark-Blue dark:text-White'>{audience}</p>
            <p className='uppercase tracking-[5px] text-Dark-Grayish-Blue text-xs mb-6'>{audienceType}</p>
            <div className={`flex items-center place-content-center gap-1 `}>
                <img src={isUp ? iconUp : iconDown} alt={`${isUp ? 'up' : 'down'} image arrow`} />
                <p className={`${isUp ? 'text-Lime-Green' : 'text-Bright-Red'} text-xs font-bold`}>{today} Today</p>
            </div>
        </article>
    )
}

export const OverviewTodayCard = ({ network, statsType, stats, percentage, isUp }) => {
    return (
        <article className='bg-Light-Grayish-Blue w-[326px] mb-4 h-[125px] mx-auto rounded-[5px] p-[27px] dark:bg-Dark-Desaturated-Blue cursor-pointer hover:dark:brightness-125 hover:brightness-95'>
            <div className='flex items-center justify-between mb-[21px]'>
                <p className='font-bold dark:text-Desaturated-Blue text-Dark-Grayish-Blue
                '>{statsType}</p>
                <img src={networkLogos[network]} alt={`Logo of ${network}`} />
            </div>
            <div className=' flex justify-between'>
                <p className='font-bold text-4xl text-Very-Dark-Blue dark:text-White'>{stats}</p>
                <div className={`flex items-center place-content-center gap-1`}>
                    <img src={isUp ? iconUp : iconDown} alt={`${isUp ? 'up' : 'down'} image arrow`} />
                    <p className={`${isUp ? 'text-Lime-Green' : 'text-Bright-Red'} text-xs font-bold`}>{percentage}%</p>
                </div>
            </div>
        </article>
    )
}


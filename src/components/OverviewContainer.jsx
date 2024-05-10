import OverviewData from '../../data/data.json'
import { OverviewCard, OverviewTodayCard } from './OverviewCard'

const data = OverviewData
const convertNumberToK = (number) => {
  if (number >= 10000) {
    number = number / 1000
    return `${number}k`
  }
  return number;
}
export const OverviewContainer = () => {
  return (
    <section className='max-w-[1440px] flex flex-wrap top-[191px] left-0 right-0 mx-auto gap-[30px] place-content-center'>
      {
        data.overview.map(object =>
          <OverviewCard
            key={object.id}
            network={object.network}
            user={object.username}
            audienceType={object.audienceType}
            audience={convertNumberToK(object.audience)}
            today={object.today}
            isUp={object.isUp}
          />
        )
      }
    </section>
  )
}

export const OverviewTodayContainer = () => {
  return (
    <section>
      <h2 className='font-bold text-Dark-Grayish-Blue dark:text-White text-2xl mb-[27px] ml-8 '>Overview - Today</h2>
      <div className='flex flex-wrap max-w-[1440px] place-content-center mx-auto'>
        {
          data['overview-today'].map(object =>
            <OverviewTodayCard
              key={object.id}
              network={object.network}
              statsType={object.statsType}
              stats={convertNumberToK(object.stats)}
              percentage={object.percentage}
              isUp={object.isUp}
            />
          )
        }
      </div>
    </section>
  )
}




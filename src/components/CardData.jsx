import Download from "./Download"
import LatestDataLeak from "./LatestDataLeak"
import ProfileMonitoring from "./ProfileMonitoring"
import TodayTopTopic from "./TodayTopTopic"
import TopAvatarMention from "./TopAvatarMention"
import TopDataLeak from "./TopDataLeak"

const CardData = () => {
  return (
    <div className='mt-5 grid grid-cols-3'>
      <TodayTopTopic />
      <TopDataLeak />
      <Download />
      <ProfileMonitoring />
      <LatestDataLeak />
      <TopAvatarMention />
    </div>
  )
}

export default CardData

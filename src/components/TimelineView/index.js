// Write your code here
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import './index.css'

const TimeLineView = props => {
  const {timelineItemsList} = props

  const items = timelineItemsList.map(item => {
    if (item.categoryType === 'PROJECT') {
      return {
        title: item.title,
        cardItemProps: {
          component: <ProjectTimelineCard data={item} />,
        },
      }
    }
    return {
      title: item.title,
      cardItemProps: {
        component: <CourseTimelineCard data={item} />,
      },
    }
  })

  return (
    <div className="bg-container">
      <div className="title-cont">
        <h1 className="ccbp-title">
          MY JOURNEY OF <br /> CCBP 4.0
        </h1>
      </div>
      <div style={{width: '500px', height: '950px'}}>
        <Chrono items={items} mode="VERTICAL_ALTERNATING" />
      </div>
    </div>
  )
}

export default TimeLineView

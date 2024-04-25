// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {data} = props
  const {courseTitle, description, duration, tagsList} = data

  return (
    <div className="course-card-cont">
      <div className="course-title-cont">
        <h1>{courseTitle}</h1>
        <div className="duration-cont">
          <p>
            <AiFillClockCircle /> {duration}
          </p>
        </div>
      </div>
      <p>{description}</p>
      <ul className="tagslist-cont">
        {tagsList.map(eachTag => (
          <li>{eachTag.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard

// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProductTimelineCard = props => {
  const {data} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = data

  return (
    <div className="project-card-cont">
      <img src={imageUrl} className="project-img" alt="project" />
      <div className="project-title-cont">
        <h1>{projectTitle}</h1>
        <div className="duration-cont">
          <p>
            <AiFillCalendar /> {duration}
          </p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProductTimelineCard

import { Styles } from '../Styles/Styles';

export default function Projects({ name , image , description, link }) {
  return (
    <div className={`${Styles.paragraphContainer}`}>
      <div>
        <figure className="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
          <a href={link} target="_blank">
            <img className="rounded-lg" src={image} alt="image description"/>
          </a>
        </figure>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>    
  )
}



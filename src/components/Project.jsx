import { Styles } from '../Styles/Styles';

export default function Projects({ name , image , description, link }) {
  return (
    <div className={`${Styles.paragraphContainer} sm:col-span-1 col-span-2`}>
      <div>
        <figure className="relative transition-all duration-300 cursor-pointer sm:filter sm:grayscale sm:hover:grayscale-0">
          <a href={link} target="_blank">
            <img className="rounded-lg" src={image} alt="image description"/>
          </a>
        </figure>
        <h2 className='text-center sm:text-2xl text-xl font-semibold underline'>{name}</h2>
        <p>{description}</p>
      </div>
    </div>    
  )
}



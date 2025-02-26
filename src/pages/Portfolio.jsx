import { Styles } from '../Styles/Styles';
import { ProjectsList } from '../assets/ProjectsList';
import Projects from '../components/Project';

export default function Portfolio() {
  return (
    <div className={Styles.container}>
      <div className='grid grid-cols-2 gap-4'>
        {ProjectsList.map((project, index) => (
          <Projects
            key={index}
            name={project.name}
            image={project.image}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  )
}
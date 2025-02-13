{/* Importing SVGs to use later */ }
import { FaHtml5, FaCss3Alt, FaJs, FaNode, FaNodeJs, FaServer, FaGithub} from "react-icons/fa";
import { SiTypescript, SiReact,  } from "react-icons/si";
import { AiOutlineCloudServer } from "react-icons/ai";

export default function AboutMe() {
  return (
    <div className="flex items-center">
      <div className="bg-main p-4 min-xl:w-[65%] max-sm:w-[90%] w-[80%] mx-auto my-10 rounded-lg shadow-lg text-white">
        <img className="mx-auto block h-24 rounded-full my-3" src="/src/assets/profile.png"/>
        <h1 className="text-center mt-10 text-3xl font-bold font-mono underline">
          About Me
        </h1>
        <div className="text-xl/10 w-[90%] items-center mx-auto my-10">
          {/* About me paragraph */}
          <p className="bg-accent p-4 rounded-lg">
          My full name is Jonathan Correa Iglesias. I am in my early 20s. I was born in Havana, Cuba but now I'm in Houston, Texas where I was raised and currently live. 
          I am a very hard working and dedicated person. I am always looking to improve myself and learn new things.
          I am a very quick learner and like to take inspiration from wherever I can. Always open to criticism and feedback as I believe that is the best way to grow.
          </p>
          <p className="bg-accent p-4 rounded-lg mt-4">
          I am currently enrolled in a Full Stack Web Development program. I am learning a lot and enjoying the process.
          So far, I have learned:
          
          {/* List of Languages I've learned */}
          <ul className="list-disc ml-8">
          <li><span className="inline-flex"><FaGithub /></span> GitHub</li>
            <li><span className="inline-flex"><FaHtml5 /></span> HTML</li>
            <li><span className="inline-flex"><FaCss3Alt /></span> CSS</li>
            <li><span className="inline-flex"><FaJs /></span> JavaScript</li>
            <li><span className="inline-flex"><SiTypescript /></span> Typescript</li>
            <li><span className="inline-flex"><SiReact /></span> React</li>
            <li><span className="inline-flex"><FaNode /></span> Node.js</li>
            <li><span className="inline-flex"><FaNodeJs /></span> Express.js</li>
            <li><span className="inline-flex"><FaServer /></span> SQL</li>
            <li><span className="inline-flex"><AiOutlineCloudServer /></span> APIs</li>
          </ul>
          </p>

          {/* Work experience */}
          <p className="bg-accent p-4 rounded-lg mt-4">
          I've been working as a Diesel Technician for over 4 years. I have a lot of experience in the field and have learned a lot. I am very good at troubleshooting and problem solving. I mostly worked on the software side of things. 
          I have experience with a lot programming softwares used to reprogram, tune, troubleshoot, and diagnose vehicles. I have experience with softwares like Cummins Insite, Calterm, Detroit Diesel Diagnostic Link, Volvo PTT, and many more.
          Through this, I am able to quickly learn new softwares and programs. I am very good at following instructions and procedures.
          </p>
    
        </div>
      </div>
    </div>
  )
}

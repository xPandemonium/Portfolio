import { Styles } from "../Styles/Styles";
import { FaHtml5, FaCss3Alt, FaJs, FaNode, FaNodeJs, FaServer, FaGithub} from "react-icons/fa";
import { SiTypescript, SiReact,  } from "react-icons/si";
import { AiOutlineCloudServer } from "react-icons/ai";

export default function Resume() {
    return (
        <div className="flex items-center">
            <div className={Styles.container}>
                <h1 className={Styles.pageTittle}>Resume</h1>
                <div className={Styles.paragraphContainer}>
                    <p>My resume is available for download <a href="/resume.pdf" className={Styles.link}>here</a>.</p>
                </div>
                <div className={Styles.paragraphContainer}>
                    <h2>Experience</h2>
                    <p>Known Languages and Skills:</p>
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
                        <li><span className="inline-flex"><AiOutlineCloudServer /></span> Web APIs</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
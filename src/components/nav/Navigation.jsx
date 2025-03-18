import { Link } from 'react-router-dom';
import { Styles } from '../../Styles/Styles';

export default function Navigation( { toggleOpen } ) {

    return (
        <div className='nav-links hidden p-2 sm:flex sm:bg-header bg-headerMenu rounded-lg'>
            <ul className="block sm:flex text-md sm:text-lg">
                <li className={Styles.navLinks}>
                    <Link to="/" onClick={toggleOpen} className='block'>About Me</Link>
                </li>
                <li className={Styles.navLinks}>
                    <Link to="/portfolio"  onClick={toggleOpen} className='block'>Portfolio</Link>
                </li>
                <li className={Styles.navLinks}>
                    <Link to="/resume"  onClick={toggleOpen} className='block'>Resume</Link>
                </li>
                <li className={Styles.navLinks}>
                    <Link to="/contact" onClick={toggleOpen} className='block'>Contact</Link>
                </li>
            </ul>             
        </div>
    )
}
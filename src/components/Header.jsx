import { Link } from 'react-router-dom';
import Nav from './Nav';
import { Styles } from '../Styles/Styles';

export default function Header() {
    return (
        <header className="bg-header text-white p-4">
            <Nav 
                links = {[
                    <li key={1} className="mx-4">
                        <Link to="/" className={Styles.navLinks} >About Me</Link>
                    </li>,
                    <li key={2} className="mx-4">
                        <Link to="/portfolio" className={Styles.navLinks} >Portfolio</Link>
                    </li>,
                    <li key={3} className="mx-4">
                        <Link to="/resume" className={Styles.navLinks} >Resume</Link>
                    </li>,
                    <li key={4} className="mx-4">
                        <Link to="/contact" className={Styles.navLinks} >Contact</Link>
                    </li>
                ]}
            />
        </header>
    )
}
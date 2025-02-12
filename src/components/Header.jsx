import { Link } from 'react-router-dom';
import Nav from './Nav';

export default function Header() {
    return (
        <header className="bg-header text-white p-4">
            <Nav 
                links = {[
                    <li key={1} className="mx-4">
                        <Link to="/" className="hover:text-bg hover:underline" >About Me</Link>
                    </li>,
                    <li key={2} className="mx-4">
                        <Link to="/portfolio" className="hover:text-bg hover:underline" >Portfolio</Link>
                    </li>,
                    <li key={3} className="mx-4">
                        <Link to="/resume" className="hover:text-bg hover:underline" >Resume</Link>
                    </li>,
                    <li key={4} className="mx-4">
                        <Link to="/contact" className="hover:text-bg hover:underline" >Contact</Link>
                    </li>
                ]}
            />
        </header>
    )
}
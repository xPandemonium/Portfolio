import {FaGithub, FaLinkedin, FaStackOverflow} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-footer text-white p-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-4 mx-[40%] text-xl">
                    <div className="col-span-1 mx-auto">
                        <a href="https://github.com/xPandemonium" target="blank" className="hover:text-bg"><FaGithub /></a>
                    </div>
                    <div className="col-span-1 mx-auto">
                        <a href="/" target="blank" className="hover:text-bg"><FaLinkedin /></a>
                    </div>
                    <div className="col-span-1 mx-auto">
                        <a href="/" target="blank" className="hover:text-bg"><FaStackOverflow /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
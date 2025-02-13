export default function Nav({ links }) {
    return (
        <nav className="flex justify-between space-between">
            <div className="w-16 font-bold text-red-500 text-2xl ml-4 ">
                <p>Jonathan</p>
            </div>
            <div className="nav-links ">
            <ul className="flex md:flex-row flex-col md:items-center md:justify-center text-lg">
                {links.map((link) => link)}
            </ul>             
            </div>
        </nav>
    )
}
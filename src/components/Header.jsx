import { useState } from 'react';
import { IoMenu, IoCloseOutline } from "react-icons/io5";
import Navigation from './nav/Navigation';

export default function Header() {
    const [openMenu, setOpenMenu] = useState("block");
    const [closeMenu, setCloseMenu] = useState("hidden");
    
    function toggleOpen() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('hidden');
        checkOpen();
    }

    function checkOpen(){
        const navLinks = document.querySelector('.nav-links');
        if (navLinks.classList.contains('hidden')) {
            setOpenMenu("block");
            setCloseMenu("hidden");
        } else {
            setOpenMenu("hidden");
            setCloseMenu("block");
        }    
    }

    return (
        <header className="bg-header text-white p-4 sm:flex sm:justify-between sm:items-center">
            <div className='flex justify-between'>
                <div className="font-bold text-2xl sm:ml-4">
                    <h1>Jonathan</h1>
                </div>
                <div className='sm:hidden block'>
                    <button onClick={toggleOpen} className='text-3xl mr-4 hover:text-bg'>
                        <IoMenu className={openMenu}/> 
                        <IoCloseOutline className={closeMenu}/>
                    </button>
                </div>
            </div>
            <Navigation toggleOpen={toggleOpen}/>

        </header>
    )
}
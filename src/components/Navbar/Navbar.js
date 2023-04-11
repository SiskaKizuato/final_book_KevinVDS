import React, { useState } from 'react';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import { CgShoppingBag } from "react-icons/cg";
import Link from 'next/link';

export default function Navbar() {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    function toggleSidebar() {
        setSidebarVisible(!sidebarVisible);
    }

    return (
        <div className='containerNav'>
            <div className='navLeftContainer'>
                <div className='burgerContainer flex items-center' onClick={toggleSidebar}>
                    <div className='burger flex flex-col justify-center'>
                        <div className='burger1'></div>
                        <div className='burger2'></div>
                        <div className='burger3'></div>
                    </div>
                </div>
                <div className='flex items-center'>
                    <Link href={"/"} className='philo titreSiteNav'>BOOKSHELF.</Link>
                </div>
            </div>
            <div className='navMidContainer'>
                <div className='paddSearch'>
                    <div className='containerSearchBar'>
                        <div className='containerSearch'><BsSearch className='btnSearchNav' /></div>
                        <input type="search" className='searchInput focus:ring-0' placeholder='Search your book here' />
                    </div>
                </div>
            </div>
            <div className='navRightContainer'>
                <Link href={"/allBooks"} className='containerThemeMode'>
                    <div className='barreMode'><div className='bouleMode'></div></div>
                </Link>
                <div className='containerPhoneNav'>
                    <MdOutlinePhoneInTalk className='logoTelNav' />
                    <p><a className='pop numNav' href="tel:0123456789">+01234567890</a></p>
                </div>
                <div className='containerPanierLogo'>
                    <div className='containerQuantiteNav'><p className='quantiteNav pop'>0</p></div>
                    <div className='efface'></div>
                    <div className='containerLogoPanierNav'><CgShoppingBag className='bag' /></div>
                </div>
            </div>
            <div className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
                <div className='enTeteSideBar'>
                    <Link href={"/"} className='containerTitreSide'>
                        <p className='philo'>Bookshelf</p>
                    </Link>
                    <div onClick={toggleSidebar} className='containerCross'>
                        <GrClose className='cross'/>
                    </div>
                </div>
                <div className='listeSideBar'>
                    <div className='pop catSideBar'>
                        <p>Bookshelf Minimal</p>
                    </div>
                    <div className='pop catSideBar'>
                        <p>Bookshelf Modern</p>
                    </div>
                    <div className='pop catSideBar'>
                        <p>Bookshelf Classic</p>
                    </div>
                    <Link href={"/allBooks"} className='pop catSideBar'>
                        <p>All Books</p>
                    </Link>
                    <div className='pop catSideBar'>
                        <p>Sign In</p>
                    </div>
                </div>
            </div>
            <div onClick={toggleSidebar} className={`bgSideBar ${sidebarVisible ? '' : 'hidden'}`}></div>
        </div>
    );
}

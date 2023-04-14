import React, { useState, useEffect } from 'react';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import { CgShoppingBag } from "react-icons/cg";
import { BsFillSunFill } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchVal } from '@/features/searchSlice/searchSlice';

export default function Navbar({ darkMode, toggleMode }) {

    const searchVal=useSelector((state)=> state.searchVal.value)
    const dispatch=useDispatch()
    const [sidebarVisible, setSidebarVisible] = useState(false);

    function toggleSidebar() {
        setSidebarVisible(!sidebarVisible);
    }
    const [stickyNav, setStickyNav] = useState(false);

    const stickOnScroll = () => {
        if (window.scrollY >= 150) {
            setStickyNav(true);
        } else {
            setStickyNav(false);
        }
    };
    const [searchVisible, setSearchVisible] = useState(false);


    useEffect(() => {
        window.addEventListener('scroll', stickOnScroll);
        return () => {
            window.removeEventListener('scroll', stickOnScroll);
        };
    }, []);

    return (
        <div className={`containerNav ${darkMode ? 'containerNavB' : ''} ${stickyNav ? "fixed" : ""}`}>
            <div className='navLeftContainer'>
                <div className='burgerContainer flex items-center' onClick={toggleSidebar}>
                    <div className='burger flex flex-col justify-center'>
                        <div className={`burger1 ${darkMode ? 'burgerB' : ''}`}></div>
                        <div className={`burger2 ${darkMode ? 'burgerB' : ''}`}></div>
                        <div className={`burger3 ${darkMode ? 'burgerB' : ''}`}></div>
                    </div>
                </div>
                <div className='flex items-center'>
                    <Link href={"/"} className={`philo titreSiteNav ${darkMode ? 'titreSiteNavB' : ''}`}>BOOKSHELF.</Link>
                </div>
            </div>
            <div className={`navMidContainer ${searchVisible ? 'hidden' : ''}`}>
                <div className='paddSearch'>
                    <div className={`containerSearchBar ${darkMode ? 'containerSearchBarB' : ''}`}>
                        <div className='containerSearch'><BsSearch className={`btnSearchNav ${darkMode ? 'btnSearchNavB' : ''}`} /></div>
                        <input value={searchVal} onChange={(e) => {dispatch(setSearchVal(e.target.value))}} type="search" className={`searchInput focus:ring-0 ${darkMode ? 'searchInputB' : ''}`} placeholder='Search your book here' />
                    </div>
                </div>
            </div>
            <div className='navRightContainer'>
                <div className='containerThemeMode'>
                    <div className='barreMode'>
                        <div onClick={toggleMode} className={`bouleMode ${!darkMode ? '' : 'right'}`}>
                        </div>
                    </div>
                    <div className='sun'>
                        <BsFillSunFill />
                    </div>
                    <div className='moon'>
                        <BsMoon />
                    </div>
                </div>
                <div className='containerPhoneNav'>
                    <MdOutlinePhoneInTalk className={`logoTelNav ${darkMode ? 'logoTelNavB' : ' '}`} />
                    <p><a className={`pop numNav ${darkMode ? 'numNavB' : ''}`} href="tel:0123456789">+01234567890</a></p>
                </div>
                <div className='containerPanierLogo'>
                    <div className={`containerQuantiteNav ${darkMode ? 'containerQuantiteNavB' : ''}`}><p className='quantiteNav pop'>0</p></div>
                    <div className='efface'></div>
                    <div className='containerLogoPanierNav'><CgShoppingBag className={`bag ${darkMode ? 'bagB' : ''}`} /></div>
                </div>
            </div>
            <div className={`sidebar ${sidebarVisible ? 'visible' : ''} ${darkMode ? 'sidebarB' : ''}`}>
                <div className={`enTeteSideBar ${darkMode ? 'enTeteSideBarB' : ''}`}>
                    <Link href={"/"} className={`containerTitreSide ${darkMode ? 'containerTitreSideB' : '' }`}>
                        <p className='philo'>Bookshelf</p>
                    </Link>
                    <div onClick={toggleSidebar} className='containerCross'>
                        <GrClose className='cross' />
                    </div>
                </div>
                <div className='listeSideBar'>
                    <div className={`pop catSideBar ${darkMode ? 'catSideBarB' : ''}`}>
                        <p>Bookshelf Minimal</p>
                    </div>
                    <div className={`pop catSideBar ${darkMode ? 'catSideBarB' : ''}`}>
                        <p>Bookshelf Modern</p>
                    </div>
                    <div className={`pop catSideBar ${darkMode ? 'catSideBarB' : ''}`}>
                        <p>Bookshelf Classic</p>
                    </div>
                    <Link href={"/allBooks"} onClick={() => setSearchVisible(!searchVisible)} className={`pop catSideBar ${darkMode ? 'catSideBarB' : ''}`}>
                        <p>All Books</p>
                    </Link>
                    <Link href={"/sign"} className={`pop catSideBar ${darkMode ? 'catSideBarB' : ''}`}>
                        <p>Sign In/Sign Up</p>
                    </Link>
                </div>
            </div>
            <div onClick={toggleSidebar} className={`bgSideBar ${sidebarVisible ? '' : 'hidden'}`}></div>
        </div>
    );
}

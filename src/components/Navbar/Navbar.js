import React from 'react'
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { CgShoppingBag } from "react-icons/cg";


export default function Navbar() {
    return (
        <div className='containerNav'>
            <div className='navLeftContainer'>
                <div className='burgerContainer flex items-center'>
                    <div className='burger flex flex-col justify-center'>
                        <div className='burger1'></div>
                        <div className='burger2'></div>
                        <div className='burger3'></div>
                    </div>
                </div>
                <div className='flex items-center'>
                    <p className='philo titreSiteNav'>BOOKSHELF.</p>
                </div>
            </div>
            <div className='navMidContainer'>
                <div className='paddSearch'>
                    <div className='containerSearchBar'>
                        <div className='containerSearch'><BsSearch className='btnSearchNav'/></div>
                        <input type="text" className='searchInput' placeholder='Search your book here'/>
                    </div>
                </div>
            </div>
            <div className='navRightContainer'>
                <div className='containerThemeMode'>
                    <div className='barreMode'><div className='bouleMode'></div></div>
                </div>
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
        </div>
    )
}

import React from 'react'
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { CgShoppingBag } from "react-icons/cg";
import Link from 'next/link';


export default function Navbar2() {
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
                    <Link href={"/"} className='philo titreSiteNav'>BOOKSHELF.</Link>
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

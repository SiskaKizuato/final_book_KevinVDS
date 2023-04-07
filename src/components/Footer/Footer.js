import React from 'react'
import { FaBuffer } from 'react-icons/fa';
import { IoHelpBuoy } from 'react-icons/io5';
import Link from 'next/link';
import { AiFillHeart } from 'react-icons/ai';

export default function index() {
    return (
        <div className='containerFooter'>
            <div className='divSupF'>

            </div>
            <div className='divMidF'>
                <div className='subDivMidF'>
                    <div className='containerLogoF'><FaBuffer className='logoF'/></div>
                    <div className='txtFooterMid'>
                        <p className='philo titreF'>Book Information?</p>
                        <p className='pop texteF'>Please send us an email at <a className='transitionVFooter' href="mailto:support@gmail.com">support@gmail.com</a></p>
                    </div>
                </div>
                <div className='subDivMidF'>
                    <div className='w-[20px]'></div>
                    <div className='containerLogoF'><IoHelpBuoy className='logoF'/></div>
                    <div className='txtFooterMid'>
                        <p className='philo titreF'>Need Help?</p>
                        <p className='pop texteF'>Please call us at <a className='transitionVFooter' href="tel:0123456789">0123456789</a></p>
                    </div>
                </div>
            </div>
            <div className='divInfF'>
                <div className='linkToBookShelfF philo'>
                    <Link href={"/"}>Bookshelf</Link>
                </div>
                <div className='flex items-center copyrightF'>
                    <p className='pop'>© 2023 All right reserved. Made with love by </p>
                    <div className='containerHeartF'><AiFillHeart className='mx-[5px]' /></div>
                    <a href="https://themeforest.net/user/themeatelier" className='transitionVFooter pop'> ThemeAtelier</a>
                </div>
            </div>
        </div>
    )
}

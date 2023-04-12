import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


export default function Join({darkMode}) {
    return (
        <div className={`containerJoin ${darkMode ? 'containerJoinB' : ''}`}>
            <div className={`communityCadre ${darkMode ? 'communityCadreB' : ''}`}>
                <div className='partLeftJoin'>
                    
                </div>
                <div className='partRightJoin'>
                    <div className={`join philo ${darkMode ? 'joinB' : ''}`}>
                        <p>Join Our Community</p>
                    </div>
                    <div className={`getOF pop ${darkMode ? 'getOFB' : ''}`}>
                        <p>Sign up & get 10% of your first books.</p>
                    </div>
                    <div className='containerInputBtnCommunity'>
                        <form className={`formCommu ${darkMode ? 'formCommuB' : ''}`}>
                            <div className='inputComm'>
                                <input type="email" required="" placeholder="Your email" class={`focus:ring-0 email-input pop" ${darkMode ? 'email-inputB' : ''}`} />
                            </div>
                            <button type="submit" className='containerBtnCommu'>
                                <div className='changementFondBtnCommu'></div>
                                <p className='subs pop'>Subscribe</p>
                            </button>
                        </form>
                    </div>
                    <div className='errorComminuty py-[15px] px-[20px]'>
                        <p>0 - Please enter a value</p>
                    </div>
                    <div className='validCommunity py-[15px] px-[20px]'>
                        <p className='pop'>Almost finished... We need to confirm your email address. To complete the subscription process, please click the link in the email we just sent you.</p>
                    </div>
                    <div className='containerWidgetCommunity'>
                        <a href='https://www.facebook.com/' className='widgetCommu'>
                            <FaFacebookF/>
                        </a>
                        <a href='https://twitter.com/home?lang=fr' className='widgetCommu'>
                            <FaTwitter/>
                        </a>
                        <a href='https://www.instagram.com/' className='widgetCommu'>
                            <FaInstagram/>
                        </a>
                        <a href='https://www.linkedin.com/feed/' className='widgetCommu'>
                            <FaLinkedinIn/>
                        </a>
                        <a href='https://www.youtube.com/' className='widgetCommu'>
                            <FaYoutube/>
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

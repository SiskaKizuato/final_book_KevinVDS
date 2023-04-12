    import React, { useState, useEffect } from 'react'
    import Image from 'next/image';
    import img1 from '../../../public/1.png';
    import img2 from '../../../public/2.png';
    import img3 from '../../../public/3.png';
    import img4 from '../../../public/4.png';
    import Link from 'next/link';

    export default function Carousel({ darkMode }) {

        const [compteurCrsl, setCompteurCrsl] = useState(0)

        return (
            <div className={`containerCarousel ${darkMode ? 'containerCarouselB' : ''}`}>
                <div className="containerPerles">
                    <div className={`perle ${compteurCrsl === 0 ? "perleActive" : ""} ${darkMode ? 'perleActiveB' : ''}`}></div>
                    <div className={`perle ${compteurCrsl === 1 ? "perleActive" : ""} ${darkMode ? 'perleActiveB' : ''}`}></div>
                    <div className={`perle ${compteurCrsl === 2 ? "perleActive" : ""} ${darkMode ? 'perleActiveB' : ''}`}></div>
                    <div className={`perle ${compteurCrsl === 3 ? "perleActive" : ""} ${darkMode ? 'perleActiveB' : ''}`}></div>
                </div>

                <div id="default-carousel" class={`relative z-0 ${darkMode ? 'defB' : ''}`} data-carousel="slide">
                    <div class="relative cadre">
                        <div
                            class="hidden duration-700 ease-in-out carousel1"
                            data-carousel-item
                            onTransitionEnd={() => {
                                setCompteurCrsl(0);
                            }}
                        >
                            <div class="absolute containerCarouselPart block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                                <div className='carouselPartL1'>
                                    <div className={`investment ${darkMode ? 'investmentB' : ''}`}>
                                        <p className='pop'>LET'S MAKE THE BEST INVESTMENT</p>
                                    </div>
                                    <div className={`loyal ${darkMode ? 'loyalB' : ''}`}>
                                        <p className='philo'>There Is No Friend As Loyal As A Book</p>
                                    </div>
                                    <div className={`lorem ${darkMode ? 'loremB' : ''}`}>
                                        <p>Lorem ipsum dolor sit, amete consectetur adipisicing elit. Ad harum quibusdam, assumenda quia explicabo.</p>
                                    </div>
                                    <Link href="/allBooks" className={`btnAddCar`}>
                                        <div className='containerNTMCar'>
                                            <p className='pop'>Shop now</p>
                                        </div>
                                        <div className='animationBtnCar'></div>
                                    </Link>
                                </div>
                                <div className='carouselPartRA'>
                                    <div className='containerImgCarousel1'></div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="hidden duration-700 ease-in-out carousel2"
                            data-carousel-item
                            onTransitionEnd={() => {
                                setCompteurCrsl(1);
                            }}
                        >
                            <div class="absolute containerCarouselPart block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                                <div className='carouselPartL1'>
                                    <div className={`investment ${darkMode ? 'investmentB' : ''}`}>
                                        <p className='pop'>LET'S MAKE THE BEST INVESTMENT</p>
                                    </div>
                                    <div className={`loyal ${darkMode ? 'loyalB' : ''}`}>
                                        <p className='philo'>There Is No Friend As Loyal As A Book</p>
                                    </div>
                                    <div className={`lorem ${darkMode ? 'loremB' : ''}`}>
                                        <p>Lorem ipsum dolor sit, amete consectetur adipisicing elit. Ad harum quibusdam, assumenda quia explicabo.</p>
                                    </div>
                                    <Link href="/allBooks" className={`btnAddCar`}>
                                        <div className='containerNTMCar'>
                                            <p className='pop'>Shop now</p>
                                        </div>
                                        <div className='animationBtnCar'></div>
                                    </Link>
                                </div>
                                <div className='carouselPartRB'>
                                    <div className='testBorder'></div>
                                    <div className='containerImgCarousel2Radius'>
                                        <div className='containerImgCarousel2'></div>
                                    </div>
                                    <div className={`texture ${darkMode ? 'textureB' : ''}`}></div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="hidden duration-700 ease-in-out carousel3"
                            data-carousel-item
                            onTransitionEnd={() => {
                                setCompteurCrsl(2);
                            }}
                        >
                            <div class="absolute containerCarouselPart block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                                <div className='carouselPartL1'>
                                    <div className={`investment ${darkMode ? 'investmentB' : ''}`}>
                                        <p className='pop'>LET'S MAKE THE BEST INVESTMENT</p>
                                    </div>
                                    <div className={`loyal ${darkMode ? 'loyalB' : ''}`}>
                                        <p className='philo'>There Is No Friend As Loyal As A Book</p>
                                    </div>
                                    <div className={`lorem ${darkMode ? 'loremB' : ''}`}>
                                        <p>Lorem ipsum dolor sit, amete consectetur adipisicing elit. Ad harum quibusdam, assumenda quia explicabo.</p>
                                    </div>
                                    <Link href="/allBooks" className={`btnAddCar`}>
                                        <div className='containerNTMCar'>
                                            <p className='pop'>Shop now</p>
                                        </div>
                                        <div className='animationBtnCar'></div>
                                    </Link>
                                </div>
                                <div className='carouselPartRA'>
                                    <div className='containerImgCarousel3'></div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="hidden duration-700 ease-in-out carousel4"
                            data-carousel-item
                            onTransitionEnd={() => {
                                setCompteurCrsl(3);
                            }}
                        >
                            <div class="absolute containerCarouselPart block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                                <div className='carouselPartL1'>
                                    <div className={`investment ${darkMode ? 'investmentB' : ''}`}>
                                        <p className='pop'>LET'S MAKE THE BEST INVESTMENT</p>
                                    </div>
                                    <div className={`loyal ${darkMode ? 'loyalB' : ''}`}>
                                        <p className='philo'>There Is No Friend As Loyal As A Book</p>
                                    </div>
                                    <div className={`lorem ${darkMode ? 'loremB' : ''}`}>
                                        <p>Lorem ipsum dolor sit, amete consectetur adipisicing elit. Ad harum quibusdam, assumenda quia explicabo.</p>
                                    </div>
                                    <Link href="/allBooks" className={`btnAddCar`}>
                                        <div className='containerNTMCar'>
                                            <p className='pop'>Shop now</p>
                                        </div>
                                        <div className='animationBtnCar'></div>
                                    </Link>
                                </div>
                                <div className='carouselPartRB'>
                                    <div className='containerImgCarousel4Radius'>
                                        <div className='containerImgCarousel4'></div>
                                    </div>
                                    <div className={`texture ${darkMode ? 'textureB' : ''}`}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                    </div>
                    <button type="button" class="absolute z-30 flex items-center justify-center cursor-pointer group focus:outline-none btnCarouselPrevious" data-carousel-prev>
                        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 btnTest">
                            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                            <span class="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" class="absolute z-30 flex items-center justify-center cursor-pointer group focus:outline-none btnCarouselNext" data-carousel-next>
                        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 btnTest">
                            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                            <span class="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div>
        )
    }

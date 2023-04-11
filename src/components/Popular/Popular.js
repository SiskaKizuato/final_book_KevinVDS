import React, { useState } from 'react'
import Link from 'next/link';

export default function Popular() {

    const [evolution, setEvolution] = useState(0);

    const handleDiv1Click = () => {
        setEvolution(1);
    };

    const handleDiv2Click = () => {
        setEvolution(2);
    };

    const handleDiv3Click = () => {
        setEvolution(0);
    };

    return (
        <div className='containerPopular'>
            <div className='popularUp'>
                <p className='pop booksGallery'>BOOKS GALLERY</p>
                <div className='h-[30px] flex items-center justify-center'>
                    <p className='philo popuplarBooks'>Popular Books</p>
                </div>
                <div className='ligneBizarre'>
                    <div className='carreA'></div>
                    <div className='carreB'></div>
                    <div className='ligneVerte'></div>
                </div>
            </div>

            <div className='h-[600px] containerRandomBooks'>

            </div>

            <div className='containerEvolution'>
                <div className={`form ${evolution === 0 ? 'shown' : 'hidden'}`}>
                    <div className='btnTest' onClick={handleDiv1Click}>Load More</div>
                </div>
                <div className={`form ${evolution === 1 ? 'shown' : 'hidden'}`}>
                    <div className='btnTest' onClick={handleDiv2Click}>Load More</div>
                </div>
                <Link href={"/allBooks"} className={`form ${evolution === 2 ? 'shown' : 'hidden'}`}>
                    <div className='btnTest' onClick={handleDiv3Click}>View More</div>
                </Link>
            </div>
        </div>
    )
}

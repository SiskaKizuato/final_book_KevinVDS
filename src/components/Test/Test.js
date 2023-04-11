import React, { useState } from 'react';

export default function Test() {

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
        <div className='yol'>
            <div className={`form ${evolution === 0 ? 'shown' : 'hidden'}`}>
                <div className='btnTest' onClick={handleDiv1Click}>Load More</div>
            </div>
            <div className={`form ${evolution === 1 ? 'shown' : 'hidden'}`}>
                <div className='btnTest' onClick={handleDiv2Click}>Load More</div>
            </div>
            <div className={`form ${evolution === 2 ? 'shown' : 'hidden'}`}>
                <div className='btnTest' onClick={handleDiv3Click}>View More</div>
            </div>
        </div>
    );
}


import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

export default function Choice() {
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.darkMode.value)

    return (
        <div className={`containerSign ${darkMode ? 'bgN' : ''}`}>
            <div className='containerChoice'>
                <button type="submit" className='containerBtnCommuSign'>
                    <div className='changementFondBtnCommuSign'></div>
                    <p className='subsSign pop'>Sign In</p>
                </button>
                <button type="submit" className='containerBtnCommuSign'>
                    <div className='changementFondBtnCommuSign'></div>
                    <p className='subsSign pop'>Sign Up</p>
                </button>
            </div>
        </div>
    )
}

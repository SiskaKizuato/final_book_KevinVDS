import React from 'react'
import SigninForm from '@/components/SigninForm/SigninForm'
import SignupForm from '@/components/SignupForm/SignupForm'
import Choice from '@/components/Choice/Choice'
import Navbar2 from '@/components/Navbar2/Navbar2'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { switchDarkMode } from '@/features/darkMode/darkModeSlice'
// import {displayChoice, displayUp, displayIn} from '@/features/displaySign.slice'

export default function sign() {
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.darkMode.value)


    function toggleMode() {
        dispatch(switchDarkMode())
    }

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, [])

    if (loading) {
        return (
            <div className='containerLoader'>
                <div class="loader">
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                    <div class="loader-square"></div>
                </div>
            </div>
        )
    }
    return (
        <>
            <Navbar2 darkMode={darkMode} toggleMode={toggleMode} />
            <Choice darkMode={darkMode} />
            {/* <SignupForm darkMode={darkMode} /> */}
            {/* <SigninForm darkMode={darkMode} /> */}
        </>
    )
}

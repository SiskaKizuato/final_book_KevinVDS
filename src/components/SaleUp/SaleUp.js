import React from 'react'

export default function SaleUp({ darkMode }) {
    return (
        <div className={`containerSaleUp ${darkMode ? 'containerSaleUpB' : ''}`}>
            <div className={`divSale ${darkMode ? 'divSaleB' : ''}`}>
                <div className='casseCouille'>
                    <div className='divSaleL img1'>
                    </div>
                </div>
                <div className={`divSaleR ${darkMode ? 'divSaleRB' : '' }`}>
                    <p className={`saleUp pop ${darkMode ? 'saleUpB' : ''}`}>SALE UP TO 15%</p>
                    <p className={`hardCover philo ${darkMode ? 'hardCoverB' : ''}`}>Innovation in Education (Hardcover)</p>
                    <p className={`starting pop ${darkMode ? 'startingB' : ''}`}>Starting at: <span className={`prixSaleUp pop ${darkMode ? 'saleUpB' : ''}`}>$65.09</span></p>
                </div>
            </div>
            <div className={`divSale ${darkMode ? 'divSaleB' : ''}`}>
                <div className='casseCouille'>
                    <div className='divSaleL img2'>
                    </div>
                </div>
                <div className={`divSaleR ${darkMode ? 'divSaleRB' : '' }`}>
                    <p className={`saleUp pop ${darkMode ? 'saleUpB' : ''}`}>SALE UP TO 10%</p>
                    <p className={`hardCover philo ${darkMode ? 'hardCoverB' : ''}`}>Innovation in Education (Hardcover)</p>
                    <p className={`starting pop ${darkMode ? 'startingB' : ''}`}>Starting at: <span className={`prixSaleUp pop ${darkMode ? 'saleUpB' : ''}`}>$50.09</span></p>
                </div>
            </div>
        </div>
    )
}

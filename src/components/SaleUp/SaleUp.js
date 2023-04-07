import React from 'react'

export default function SaleUp() {
    return (
        <div className='containerSaleUp'>
            <div className='divSale'>
                <div className='casseCouille'>
                    <div className='divSaleL img1'>
                    </div>
                </div>
                <div className='divSaleR'>
                    <p className='saleUp pop'>SALE UP TO 15%</p>
                    <p className='hardCover philo'>Innovation in Education (Hardcover)</p>
                    <p className='starting pop'>Starting at: <span className='prixSaleUp pop'>$65.09</span></p>
                </div>
            </div>
            <div className='divSale'>
                <div className='casseCouille'>
                    <div className='divSaleL img2'>
                    </div>
                </div>
                <div className='divSaleR'>
                    <p className='saleUp pop'>SALE UP TO 10%</p>
                    <p className='hardCover philo'>Innovation in Education (Hardcover)</p>
                    <p className='starting pop'>Starting at: <span className='prixSaleUp pop'>$50.09</span></p>
                </div>
            </div>
        </div>
    )
}

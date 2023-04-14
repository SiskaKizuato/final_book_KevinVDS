import React from 'react'
import Navbar2 from '@/components/Navbar2/Navbar2';
import Head from 'next/head'


export async function getStaticProps(context) {
    const slug = context.params.id;

    // const res = await fetch("https://example-data.draftbit.com/books%22");
    const data = await import("../../data/books.json");
    // const data = await res.json();
    const dataArray = Array.from(data);


    const bookSelected = dataArray.find(item => item.title === slug);

    return {
        props: {
            bookSelected
        }
    }
}


export async function getStaticPaths() {
    // const res = await fetch("https://example-data.draftbit.com/books%22");
    const data = await import("../../data/books.json");
    const dataArray = Array.from(data);

    // const data = await res.json();

    const paths = dataArray.filter((item) => item.title).map((item) => ({ params: { id: item.title } }))

    return {
        paths,
        fallback: false
    }
}

export default function Details({ bookSelected }) {
    console.log(bookSelected);
    return (
        <div>
            <Head>
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />

                <title>FinalBook</title>
                <link rel="icon" href="/fav2.png" />
            </Head>
            <Navbar2 />
            <div className='containerDynamique'>
                <div className='cardDynamique'>
                    <div className='dynamiqueLeft'>
                        <div className='containerImgDynamique bg-center bg-no-repeat bg-cover'
                            style={{ backgroundImage: `url(${bookSelected.image_url})` }}>
                        </div>
                    </div>
                    <div className='dynamiqueRight'>
                        <h1 className='vert philo'>Title : <span className='black pop'>{bookSelected.title}</span> </h1>
                        <h2 className='vert philo'>Author : <span className='black pop'>{bookSelected.authors}</span></h2>
                        <h3 className='vert philo'>Edition : <span className='black pop'>{bookSelected.edition}</span></h3>
                        <h3 className='vert philo'>Synopsis : <span className='black pop'>{bookSelected.description}</span></h3>
                        <h3 className='vert philo'>Format : <span className='black pop'>{bookSelected.format}</span></h3>
                        <h3 className='vert philo'>Pages : <span className='black pop'>{bookSelected.num_pages}</span></h3>
                        <h3 className='vert philo'>Rating : <span className='black pop'>{bookSelected.rating}</span></h3>
                        <h3 className='vert philo'>Genres : <span className='black pop'>{bookSelected.genres}</span></h3>
                        <h3 className='vert philo'>Price : <span className='black pop'>${bookSelected.Price}</span></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

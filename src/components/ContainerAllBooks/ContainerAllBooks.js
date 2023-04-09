import React, { useState } from 'react'
import books from '../../../data/books.json'


export default function ContainerAllBooks() {

    const genresList = ['Classics', 'Fiction', 'Cultural', 'Russia', 'Literature', 'Academic', 'School', 'Historical', 'Historical Fiction', 'Horror', 'Fantasy', 'Paranormal', 'Vampires', 'Science Fiction', 'Dystopia', 'Novels', 'Philosophy', 'Magical Realism', 'Childrens', 'Romance', 'Humor', 'Young Adult', 'Middle Grade', 'Mystery', 'Contemporary', 'Picture Books', 'Adventure', 'Poetry', 'Mythology', 'Gothic', 'Feminism', 'Psychology', 'Mental Health', 'Mental Illness', 'American', 'Time Travel', 'Thriller', 'Crime', 'Detective', 'Autobiography', 'Memoir', 'Biography', 'Nonfiction', 'Africa', 'Religion', 'Spirituality', 'Politics', 'European Literature', 'Spanish Literature', 'Literary Fiction', 'Christian'].sort();

    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    }

    return (
        <div className='containerAllBooks'>
            <div className='cadreAllBooks'>
                <div className='containerCategory'>
                    <div className='searchCategory'>
                        <input type="search" className='inputSearchCat pop' placeholder='Search' />
                    </div>
                    <p className='philo titreCat'>Category</p>
                    {genresList.map((category) => (
                        <p key={category} className={`pop categories ${selectedCategory === category ? 'selected' : ''}`}
                            onClick={() => handleCategoryClick(category)}>{category}</p>
                    ))}
                    <p className='philo titreCat'>Author</p>
                    <div className='authorList'>

                    </div>
                    <p className='philo titreCat'>Price</p>
                    <p className='fourchettePrix pop'>USA 0.00</p>
                    <div className='containerBarreFourchette'>
                        <div className='barreBouleFourch'>
                            <div className='barreFourch'></div>
                            <div className='bouleFourch'></div>
                        </div>
                    </div>
                </div>
                <div className='containerBooksByCat'>
                    {books.map((item) => (
                        <div className='cards'>
                            <div className='containerCadreImgCards'>
                                <div className='bgDual'>
                                    <div className='beige'></div>
                                    <div className='gris'></div>
                                </div>
                                <div className='cadreImgCards' style={{ backgroundImage: `url(${item.image_url})` }}>
                                </div>
                                <div className='ombreLivre'></div>
                            </div>
                            <p key={item.id}>{item.title}</p>
                            <p key={item.id}>{item.authors}</p>
                            <p key={item.id}>{item.num_pages} pages</p>
                            <p key={item.id}>{item.Price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

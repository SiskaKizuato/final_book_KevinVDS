import React, { useState } from 'react'
import Link from 'next/link';
import books from '../../../data/books.json'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgTrashEmpty } from "react-icons/cg";
import { AiOutlineFullscreen } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount, decrementByAmount, reset } from "../../features/counter/counter.slice";


export default function Popular({ darkMode }) {

    const searchVal = useSelector((state) => state.searchVal.value)

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

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

    const [amount, setAmount] = useState(0);


    const auteurs = ["All", "Fyodor Dostoyevsky", "John Steinbeck", "Bram Stoker", "Aldous Huxley", "Gabriel García Márquez", "Antoine de Saint-Exupéry", "William Goldman", "Frances Hodgson Burnett", "J.D. Salinger", "Khaled Hosseini", "Madeleine L'Engle", "Ray Bradbury", "Alfredo Crespo", "George R.R. Martin", "Rick Riordan", "Mark Twain", "Alice Sebold", "Maurice Sendak", "Dr. Seuss", "J.K. Rowling", "Yann Martel", "Charles Dickens", "S.E. Hinton", "Sara Gruen", "Homer", "Vladimir Nabokov", "Kurt Vonnegut", "Joseph Heller", "Mary Wollstonecraft Shelley", "Ken Follett", "Stephen King", "Lois Lowry", "Richard Adams", "Margaret Atwood", "Arthur Conan Doyle", "Jodi Picoult", "Ken Kesey", "Sylvia Plath", "Diana Gabaldon", "Stieg Larsson", "Daphne du Maurier", "Betty Smith", "Matilda", "Alice Walker", "J.R.R. Tolkien", "Louisa May Alcott", "Cormac McCarthy", "Frank McCourt", "A Clockwork Orange", "Frank Herbert", "Richelle Mead", "Barbara Kingsolver", "Hermann Hesse", "Ayn Rand", "Don Quixote", "Philip Pullman", "Nicholas Sparks", "Ernest Hemingway", "Edgar Allan Poe", "John Irving", "A.A. Milne", "Leo Tolstoy", "Herman Melville", "Anne Rice", "George Orwell", "Anita Diamant"];

    auteurs.sort(function (a, b) {
        if (a === 'All') {
            return -1; // le premier élément 'All' doit rester en première position
        } else if (b === 'All') {
            return 1; // si b est 'All', il doit être déplacé vers la première position
        } else {
            return a.localeCompare(b); // sinon, tri alphabétique normal
        }
    });

    const genresList = ['All', 'Classics', 'Fiction', 'Cultural', 'Russia', 'Literature', 'Academic', 'School', 'Historical', 'Historical Fiction', 'Horror', 'Fantasy', 'Paranormal', 'Vampires', 'Science Fiction', 'Dystopia', 'Novels', 'Philosophy', 'Magical Realism', 'Childrens', 'Romance', 'Humor', 'Young Adult', 'Middle Grade', 'Mystery', 'Contemporary', 'Picture Books', 'Adventure', 'Poetry', 'Mythology', 'Gothic', 'Feminism', 'Psychology', 'Mental Health', 'Mental Illness', 'American', 'Time Travel', 'Thriller', 'Crime', 'Detective', 'Autobiography', 'Memoir', 'Biography', 'Nonfiction', 'Africa', 'Religion', 'Spirituality', 'Politics', 'European Literature', 'Spanish Literature', 'Literary Fiction', 'Christian'];

    genresList.sort(function (a, b) {
        if (a === 'All') {
            return -1; // le premier élément 'All' doit rester en première position
        } else if (b === 'All') {
            return 1; // si b est 'All', il doit être déplacé vers la première position
        } else {
            return a.localeCompare(b); // sinon, tri alphabétique normal
        }
    });

    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedAuteur, setSelectedAuteur] = useState('All');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    }
    const handleAuteurClick = (auteur) => {
        setSelectedAuteur(auteur);
        setIsOpen(!isOpen)
    }
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenuAuteurs() {
        setIsOpen(!isOpen);
    }

    const [disableAdd, setDisableAdd] = useState(0)
    const handleDisableAdd = () => {
        dispatch(increment());
        setDisableAdd(1);
    };
    const handleEnableAdd = () => {
        dispatch(decrement());
        setDisableAdd(0);
    }

    const [total, setTotal] = useState(0)

    function prixTotal(params) {
        console.log(params);
        setTotal(params * count)
    }

    const filteredBooks = selectedCategory === 'All' ? books :
        books.filter(book => book.genres.includes(selectedCategory));

    return (
        <div className={`containerPopular ${darkMode ? 'containerPopularB' : ''}`}>
            <div className='popularUp'>
                <p className={`pop booksGallery ${darkMode ? 'booksGalleryB' : ''}`}>BOOKS GALLERY</p>
                <div className='h-[30px] flex items-center justify-center'>
                    <p className={`philo popuplarBooks popuplarBooksTypo ${darkMode ? 'popuplarBooksTypoB' : ''}`}>Popular Books</p>
                </div>
                <div className='ligneBizarre'>
                    <div className='carreA changementCouleur'></div>
                    <div className='carreB changementCouleur'></div>
                    <div className='ligneVerte'></div>
                </div>
            </div>

            <div className={`containerRandomBooks ${evolution === 1 ? 'taille2' : ''} ${evolution === 2 ? 'taille3' : ''}`}>
                <div className='containerBooksByCatPopular'>

                    {books.filter(book => {
                        return searchVal === "" ? book :
                            book.title.toLowerCase().includes(searchVal.toLowerCase()) 
                            ||
                            book.authors.toLowerCase().includes(searchVal.toLowerCase())
                    }).map((item) => (
                        <div key={item.id} className='filtrerDiv'>
                            <div className='cards2' key={item.id}>
                                <div className='containerWidgetCards'>
                                    <div className='btnDynamique text-[19px] pr-[1px] widgetPanier'>
                                        <AiOutlineShoppingCart />
                                    </div>
                                    <div className='btnDynamique text-[20px] widgetFullScreen'>
                                        <AiOutlineFullscreen />
                                    </div>
                                </div>
                                <div className='containerCadreImgCards'>
                                    <div className='bgDual'>
                                        <div className='beige'></div>
                                        <div className='gris'></div>
                                    </div>
                                    <div className='cadreImgCards' style={{ backgroundImage: `url(${item.image_url})` }}>
                                    </div>
                                    <div className='ombreLivre'></div>
                                </div>
                                <div className={`containerInfoBooksA ${darkMode ? 'containerInfoBooksAB' : ''}`}>
                                    <div className='containerInfoBooks'>
                                        <div className='containertitreLivre'>
                                            <p className={`philo titreLivre ${darkMode ? 'titreLivreB' : ''}`} key={item.id}>{item.title}</p>
                                        </div>
                                        <div className='containerAuteurLivre'>
                                            <p className={`pop auteurLivre ${darkMode ? 'vc' : ''}`} key={item.id}>By: <span className={`spanAuteur pop ${darkMode ? 'bc' : ''}`}>{item.authors}</span></p>
                                        </div>
                                        <div className='containerAuteurLivre'>
                                            <p className={`pop nbrPages auteurLivre ${darkMode ? 'vc' : ''}`} key={item.id}>pages: <span className={`pop spanAuteur ${darkMode ? 'bc' : ''}`}>{item.num_pages}</span></p>
                                        </div>
                                        <div className='containerAuteurLivre'>
                                            <p className={`pop prixLivre auteurLivre ${darkMode ? 'vc' : ''}`} key={item.id}>price: <span className={`spanAuteur pop ${darkMode ? 'bc' : ''}`}>${item.Price}</span></p>
                                        </div>
                                        <div className={`containeraBtnAdd ${darkMode ? 'containeraBtnAddB' : ''}`}>
                                            <div onClick={(e) => { e.preventDefault(); setTotal(item.Price); handleDisableAdd() }} className={`btnAdd ${darkMode ? 'btnAddB' : ''} ${disableAdd === 0 ? '' : 'hidden'}`}>
                                                <div className='containerNTM'>
                                                    <AiOutlineShoppingCart className='logoPanierBtnAdd' />
                                                    <p className='pop'>Add to cart</p>
                                                </div>
                                                <div className='animationBtn'></div>
                                            </div>
                                            <div className={`containerAjoutPanierA ${disableAdd === 0 ? 'hidden' : ''}`}>
                                                <div className='containerAjoutPanier'>
                                                    <div className='containerCompteur'>
                                                        <div className='containerMoinsDelete'>
                                                            <div onClick={() => dispatch(decrement())} className={`testA ${count > 1 ? '' : 'hidden'}`}>
                                                                <div className={`moins pop`}>
                                                                    <p className={`pBtnMoins`}>-</p>
                                                                </div>
                                                            </div>
                                                            <div onClick={handleEnableAdd} className={`testB ${count > 1 ? 'hidden' : ''}`}>
                                                                <div className={`trashBtn pop`}>
                                                                    <CgTrashEmpty className={`trash`} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='compteur pop'>
                                                            <p>{count}</p>
                                                        </div>
                                                        <div onClick={(e) => { e.preventDefault(); dispatch(increment()); prixTotal(item.Price) }} className='plus pop'>
                                                            <p>+</p>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <p className='pop totalLivre'>${total} </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='containerEvolution'>
                <div className={`form ${evolution === 0 ? 'shown' : 'hidden'}`}>
                    <div className='btnTest2' onClick={handleDiv1Click}>Load More</div>
                </div>
                <div className={`form ${evolution === 1 ? 'shown' : 'hidden'}`}>
                    <div className='btnTest2' onClick={handleDiv2Click}>Load More</div>
                </div>
                <Link href={"/allBooks"} className={`form ${evolution === 2 ? 'shown' : 'hidden'}`}>
                    <div className='btnTest2' onClick={handleDiv3Click}>View More</div>
                </Link>
            </div>
        </div>
    )
}

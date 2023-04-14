import React, { useState, useEffect } from 'react';
import books from '../../../data/books.json'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CgTrashEmpty } from "react-icons/cg";
import { AiOutlineFullscreen } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount, decrementByAmount, reset } from "../../features/counter/counter.slice";
import { BsFillGridFill } from "react-icons/bs"
import { HiOutlineBars4 } from "react-icons/hi2";
import { setSearchVal } from '@/features/searchSlice/searchSlice';
import Link from 'next/link';

export default function ContainerAllBooks() {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);
    const searchVal = useSelector((state) => state.searchVal.value)
    const darkMode = useSelector((state) => state.darkMode.value)

    const auteurs = ["All", "Fyodor Dostoyevsky", "John Steinbeck", "Bram Stoker", "Aldous Huxley", "Gabriel García Márquez", "Antoine de Saint-Exupéry", "William Goldman", "Frances Hodgson Burnett", "J.D. Salinger", "Khaled Hosseini", "Madeleine L'Engle", "Ray Bradbury", "Alfredo Crespo", "George R.R. Martin", "Rick Riordan", "Mark Twain", "Alice Sebold", "Maurice Sendak", "Dr. Seuss", "J.K. Rowling", "Yann Martel", "Charles Dickens", "S.E. Hinton", "Sara Gruen", "Homer", "Vladimir Nabokov", "Kurt Vonnegut", "Joseph Heller", "Mary Wollstonecraft S.", "Ken Follett", "Stephen King", "Lois Lowry", "Richard Adams", "Margaret Atwood", "Arthur Conan Doyle", "Jodi Picoult", "Ken Kesey", "Sylvia Plath", "Diana Gabaldon", "Stieg Larsson", "Daphne du Maurier", "Betty Smith", "Matilda", "Alice Walker", "J.R.R. Tolkien", "Louisa May Alcott", "Cormac McCarthy", "Frank McCourt", "A Clockwork Orange", "Frank Herbert", "Richelle Mead", "Barbara Kingsolver", "Hermann Hesse", "Ayn Rand", "Don Quixote", "Philip Pullman", "Nicholas Sparks", "Ernest Hemingway", "Edgar Allan Poe", "John Irving", "A.A. Milne", "Leo Tolstoy", "Herman Melville", "Anne Rice", "George Orwell", "Anita Diamant"];

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

    const [changePageShape, setChangePageShape] = useState(1)

    const toggleChangePageShape1 = () => {
        setChangePageShape(1);
    };

    const toggleChangePageShape2 = () => {
        setChangePageShape(2);
    };


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

    const [showMenu, setShowMenu] = useState(false);
    const [sortOrder, setSortOrder] = useState("(a-z)");

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };

    const handleSortClick = (sort) => {
        setSortOrder(sort);
        setShowMenu(false);
    };

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
        <div className={`containerAllBooks bgBf ${darkMode ? 'bgBn' : ''} ${isOpen ? 'mHeight' : ''}`}>
            <div className='cadreAllBooks'>
                <div className='containerCategory'>
                    <div className='searchCategory focus:ring-0'>
                        <input value={searchVal} onChange={(e) => { dispatch(setSearchVal(e.target.value)) }} type="search" className={`focus:ring-0 inputSearchCat pop ${darkMode ? 'inputSearchCatB' : ''}`} placeholder='Search' />
                    </div>
                    <p className={`philo titreCat ${darkMode ? 'colorBf' : ''}`}>Category</p>
                    {genresList.map((category) => (
                        <p key={category} className={`pop categories ${selectedCategory === category ? 'selected' : ''} ${darkMode ? 'categoriesB' : ''}`}
                            onClick={() => handleCategoryClick(category)}>{category}</p>
                    ))}
                    <p className={`philo titreCat ${darkMode ? 'colorBf' : ''}`}>Author</p>
                    <div className={`authorList ${darkMode ? 'authorListB' : ''}`}>
                        <div className='selectionAuteur' onClick={toggleMenuAuteurs}>
                            <div className='h-[100%] flex items-center'><p className='pop'>{selectedAuteur}</p></div>
                            <div className='h-[100%] flex items-center'><MdOutlineKeyboardArrowDown /></div>
                        </div>
                        <div className={`containerListeAuteursA ${isOpen ? '' : 'hidden'} ${darkMode ? 'bgV' : ''}`}>
                            {isOpen && (
                                <ul className='containerListeAuteursB'>
                                    {auteurs.map((auteur) => (
                                        <li key={auteur} className={`pop auteursSkin ${darkMode ? 'colorBc' : ''}`} onClick={() => handleAuteurClick(auteur)}>{auteur}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    {/* <p className='philo titreCat'>Price</p>
                    <p className='fourchettePrix pop'>USA 0.00</p>
                    <div className='containerBarreFourchette'>
                        <div className='barreBouleFourch'>
                            <div className='barreFourch'></div>
                            <div className='bouleFourch'></div>
                        </div>
                    </div> */}
                </div>
                <div className='containerContainerBooksByCat'>
                    <div className='containerMiseEnPage'>
                        <div className='miseEnpage'>
                            <div onClick={toggleChangePageShape1} className={`cadreMeP cursor-pointer miseEnPage1 ${changePageShape === 1 ? 'cadreMePV' : ''} ${darkMode ? 'borderBc' : ''}`}>
                                <div className={`logoMEP mep1 ${changePageShape === 1 ? 'logoMEPV' : ''} ${darkMode ? 'colorBc' : ''}`}>
                                    <BsFillGridFill />
                                </div>
                            </div>
                            <div onClick={toggleChangePageShape2} className={`cadreMeP cursor-pointer miseEnPage2 ${changePageShape === 2 ? 'cadreMePV' : ''} ${darkMode ? 'cadreMeP' : ''}`}>
                                <div className={`logoMEP mep2 ${changePageShape === 2 ? 'logoMEPV' : ''} ${darkMode ? 'colorBc' : ''}`}>
                                    <HiOutlineBars4 />
                                </div>
                            </div>
                        </div>
                        <div className={`containerAvailable pop ${darkMode ? 'colorVc' : ''}`}>
                            <p>Products Available</p>
                        </div>
                        <div className='containerFiltreMiseEnPage'>

                            <div className="dropdownMeP">
                                <div className={`menuMeP ${darkMode ? 'bgV' : ''}`} onClick={handleMenuClick}>
                                    <p className='pop'>{sortOrder}</p>
                                </div>
                                {showMenu && (
                                    <div className={`dropdown-menuMeP ${darkMode ? 'bgVc' : ''}`}>
                                        <div className={`alphabetA pop alpHover ${darkMode ? 'colorBc' : ''}`} onClick={() => handleSortClick("(a-z)")}>
                                            <p>(a-z)</p>
                                        </div>
                                        <div className={`alphabetZ pop alpHover ${darkMode ? 'colorBc' : ''}`} onClick={() => handleSortClick("(z-a)")}>
                                            <p>(z-a)</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                    <div className={` ${changePageShape === 1 ? 'containerBooksByCat' : ''} ${changePageShape === 2 ? 'containerBooksByCat2' : ''}`}>
                        {books.filter(book => {
                            return searchVal === "" ? book :
                                book.title.toLowerCase().includes(searchVal.toLowerCase())
                                ||
                                book.authors.toLowerCase().includes(searchVal.toLowerCase())
                        }).map((item) => (<div key={item.id} className='filtrerDiv'>
                            {item.genres.includes(selectedCategory) && (
                                <div className={`${changePageShape === 1 ? 'cards' : ''} ${changePageShape === 2 ? 'cardsHorizontale' : ''} ${darkMode ? 'cardsB' : ''}`} key={item.id}>
                                    <div className='containerWidgetCards'>
                                        <div className='btnDynamique text-[19px] pr-[1px] widgetPanier'>
                                            <AiOutlineShoppingCart />
                                        </div>
                                        <div className='btnDynamique text-[20px] widgetFullScreen'>
                                            <AiOutlineFullscreen />
                                        </div>
                                    </div>
                                    <Link href={`/${item.title}`} className={`${changePageShape === 2 ? 'containerCadreImgCards2Cont' : ''}`}>
                                        <div className={`${changePageShape === 1 ? 'containerCadreImgCards' : ''} ${changePageShape === 2 ? 'containerCadreImgCards2' : ''}`}>
                                            <div className='bgDual'>
                                                <div className='beige'></div>
                                                <div className='gris'></div>
                                            </div>
                                            <div className={` ${changePageShape === 1 ? 'cadreImgCards' : ''} ${changePageShape === 2 ? 'cadreImgCardsHorizontal' : ''}`} style={{ backgroundImage: `url(${item.image_url})` }}>
                                            </div>
                                            <div className='ombreLivre'></div>
                                        </div>
                                    </Link>
                                    <div className={` ${changePageShape === 1 ? 'containerInfoBooksA' : ''} ${changePageShape === 2 ? 'containerInfoBooksAHorizontal' : ''} ${darkMode ? 'containerInfoBooksAB' : ''}`}>
                                        <div className={` ${changePageShape === 1 ? 'containerInfoBooks' : ''} ${changePageShape === 2 ? 'containerInfoBooksHorizontal' : ''} ${darkMode ? 'containerInfoBooksB' : ''}`}>
                                            <div className={` ${changePageShape === 1 ? 'containertitreLivre' : ''} ${changePageShape === 2 ? 'containertitreLivreHorizontal' : ''}`}>
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
                                            <div className={` ${changePageShape === 1 ? 'containeraBtnAdd' : ''} ${changePageShape === 2 ? 'containeraBtnAddHorizontal' : ''} ${darkMode ? 'containeraBtnAddB' : ''}`}>
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
                                                            <p className={`pop totalLivre ${darkMode ? 'vertCommu' : ''}`}>${total} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

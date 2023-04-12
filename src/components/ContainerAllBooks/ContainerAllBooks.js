import React, { useState, useEffect } from 'react';
import books from '../../../data/books.json'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CgTrashEmpty } from "react-icons/cg";
import { AiOutlineFullscreen } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount, decrementByAmount, reset } from "../../features/counter/counter.slice";

export default function ContainerAllBooks() {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();
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

    // console.log(auteurs);

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
    // console.log(selectedCategory);

    const handleAuteurClick = (auteur) => {
        setSelectedAuteur(auteur);
        setIsOpen(!isOpen)
    }
    // console.log(selectedAuteur);

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
        setTotal(params*count)
    }

    const filteredBooks = selectedCategory === 'All' ? books : 
    books.filter(book => book.genres.includes(selectedCategory));

    return (
        <div className='containerAllBooks'>
            <div className='cadreAllBooks'>
                <div className='containerCategory'>
                    <div className='searchCategory focus:ring-0'>
                        <input type="search" className='focus:ring-0 inputSearchCat pop' placeholder='Search' />
                    </div>
                    <p className='philo titreCat'>Category</p>
                    {genresList.map((category) => (
                        <p key={category} className={`pop categories ${selectedCategory === category ? 'selected' : ''}`}
                            onClick={() => handleCategoryClick(category)}>{category}</p>
                    ))}
                    <p className='philo titreCat'>Author</p>

                    <div className='authorList'>
                        <div className='selectionAuteur' onClick={toggleMenuAuteurs}>
                            <div className='h-[100%] flex items-center'><p className='pop'>{selectedAuteur}</p></div>
                            <div className='h-[100%] flex items-center'><MdOutlineKeyboardArrowDown /></div>
                        </div>
                        <div className={`containerListeAuteursA ${isOpen ? '' : 'hidden'}`}>
                            {isOpen && (
                                <ul className='containerListeAuteursB'>
                                    {auteurs.map((auteur) => (
                                        <li key={auteur} className={`pop auteursSkin `} onClick={() => handleAuteurClick(auteur)}>{auteur}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
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
                        <div key={item.id} className='filtrerDiv'>
                        {item.genres.includes(selectedCategory) && (
                            <div className='cards' key={item.id}>
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
                            <div className='containerInfoBooksA'>
                                <div className='containerInfoBooks'>
                                    <div className='containertitreLivre'>
                                        <p className='philo titreLivre' key={item.id}>{item.title}</p>
                                    </div>
                                    <div className='containerAuteurLivre'>
                                        <p className='pop auteurLivre' key={item.id}>By: <span className='spanAuteur pop'>{item.authors}</span></p>
                                    </div>
                                    <div className='containerAuteurLivre'>
                                        <p className='pop nbrPages auteurLivre' key={item.id}>pages: <span className='pop spanAuteur'>{item.num_pages}</span></p>
                                    </div>
                                    <div className='containerAuteurLivre'>
                                        <p className='pop prixLivre auteurLivre' key={item.id}>price: <span className='spanAuteur pop'>${item.Price}</span></p>
                                    </div>
                                    <div className='containeraBtnAdd'>
                                        <div onClick={(e) => {e.preventDefault();  setTotal(item.Price); handleDisableAdd()}} className={`btnAdd ${disableAdd === 0 ? '' : 'hidden'}`}>
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
                                                    <div onClick={(e) => {e.preventDefault(); dispatch(increment()); prixTotal(item.Price)}} className='plus pop'>
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
                        )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
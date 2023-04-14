
// import React from "react";
// import styles from "./panier.module.css";
// import { AiOutlineClose } from "react-icons/ai";
// import Link from "next/link";
// import { useSelector, useDispatch } from "react-redux";
// import books from "../../../data/books.json"
// import { useState } from "react";
// import { ajouter ,remove, removeall } from "@/features/panierSlice";


// export default function Panier({ ispanierOpen, handlepanierClose, affichermodal, afficher }) {
//     const favoritcar = useSelector((state) => state.panier.value)

//     function isFavorite(car) {
//         let result = false;
//         favoritcar.forEach(element => {
//             if (element.id == car.id) {
//                 result = true;
//             }
//         });

//         return result;
//     }

//     const [panier, setPanier] = useState(books);

//     const dispatch = useDispatch();

//     const handleRemove = (index) => {
//         dispatch(remove(index));
//     };

//     const handleRemoveAll = (index) => {
//         dispatch(removeall(index));
//     };
//     return (
//         <div className={afficher ? styles.modalpaniercache : styles.modalpanier}>
//             <div
//                 className={`${styles.menupanier} ${ispanierOpen ? styles.open : ""}`}
//             >
//                 <div className={styles.closepanier}>
//                     <h1 className="absolute left-0 top-1 ">
//                         <AiOutlineClose
//                             onClick={() => {
//                                 affichermodal(true);
//                             }}
//                         />
//                     </h1>
//                     <h4>panier</h4>
//                 </div>
//                 <div className={styles.milieu}>
//                     {favoritcar.map((element, index) => {
//                         return (
//                             <div key={index} className={styles.elementpanier}>
//                                 <div className={styles.elementpanierimg}>
//                                     <img src={element.image} alt="" />
//                                 </div>
//                                 <div className={styles.elementpanierright}>
//                                     <h5>{element.make_id}</h5>
//                                     <p>nom vendeur: {element.seller}</p>
//                                     <div className={styles.elementpanierbtnindex}>
//                                         <div onClick={() => {
//                                             if (isFavorite(element)) {
//                                                 dispatch(remove(element))
//                                             }
//                                         }}>remove</div>
//                                     </div>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>
//                 <div className={styles.elementpanierbtn} onClick={() => handleRemoveAll()}>
//                     remove all
//                 </div>
//             </div>
//             <div
//                 className={styles.restedumodalpanier}
//                 onClick={handlepanierClose}
//             ></div>
//         </div>
//     )}

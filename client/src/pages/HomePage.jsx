/**
 * 
 * HomePage.jsx
 * 
 * Pagina di homepage dell'applicazione dove viene mostrato il titolo del sito
 * con sotto una gallery scorrevole di immagini del vestiario caricato dall'utente e sotto una sezione di ricerca degli
 * outfit in base anche alle varie categorie
 * 
 */

import { useEffect, useState } from 'react';
import '../assets/styles/pages/homepage.css' // Import stile pagina
import SearchBar from '../components/SearchBar';
import useGalleryImages from '../hooks/useGalleryImages';
import { vestiti } from '../constants/vestiti';
import FilterButton from '../components/FilterButton';
import { categorie } from '../constants/vestiti';
import DressCard from '../components/DressCard';

export default function HomePage() {
    const images = useGalleryImages(); // Recuperiamo l'array di immagini preso dall'hook useGalleryImages
    const [currentIndex, setCurrentIndex] = useState(0); // Stato per l'index della foto
    const [isPlaying, setIsPlaying] = useState(true); // Stato per indicare se è attivo il cambio automatico


    /**
     * 
     * useEffect per poter gestire il timer tra una foto e l'altra impostando l'intervallo.
     * Prima di tutto parte da un controllo if per verificare che se lo stato isPlaying è false e
     * quindi lo scorrimento automatico non è partito oppure l'array di immagini è minore di 2
     * ritornerà un undefinend e non imposterà alcun timer
     * altrimenti proseguirà con il codice creando una costante chiamata intervalId dove salverà l'id dell'intervallo
     * dove ad ogni cambio l'index aumenterà o tornerà all'inizio in base al calcolo impostato (index + 1) % images.length
     * 
     */
    useEffect(() => {
        if (!isPlaying || images.length < 2) {
            return undefined;
        }

        const intervalId = window.setInterval(() => { // Settiamo l'intervallo
            setCurrentIndex((index) => (index + 1) % images.length); // Impostiamo l'index dopo 4 secondi a quello successivo
        }, 4000);

        return () => window.clearInterval(intervalId);
    }, [images.length, isPlaying]); // Array di dipendenze che richiamerà lo useEffect ogni volta che verrà fatto il rendering dei due valori

    const showImage = (index) => {
        setCurrentIndex((index + images.length) % images.length);
    };

    return(
        <>
            <h1 id="homepage-title">NHUCNA - Fit</h1>
            <p id="paragraph">
                Benvenuto in NHUCNA - Fit l'applicazione che ti permette di salvare i tuoi outfit
                poterne creare di nuovi ed innovativi, farli generare casualmente o poterli visualizzare o caricare
                di nuovi!
            </p>
            <section
                className="image-gallery"
                aria-label="Galleria di immagini"
                aria-roledescription="carosello"
            >
                <div
                    className="image-gallery-track"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div
                            key={image.id}
                            className="image-gallery-slide"
                            role="group"
                            aria-roledescription="slide"
                            aria-label={`${index + 1} di ${images.length}`}
                        >
                            <img
                                src={image.src}
                                alt={`Immagine di esempio ${index + 1}`}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
                <div className="image-gallery-controls">
                    <button type="button" onClick={() => showImage(currentIndex - 1)} aria-label="Immagine precedente">
                        ‹
                    </button>
                    <span aria-live="polite">{currentIndex + 1} / {images.length}</span>
                    <button type="button" onClick={() => showImage(currentIndex + 1)} aria-label="Immagine successiva">
                        ›
                    </button>
                    <button
                        type="button"
                        onClick={() => setIsPlaying((playing) => !playing)}
                        aria-label={isPlaying ? 'Metti in pausa la galleria' : 'Fai ripartire la galleria'}
                    >
                        {isPlaying ? 'Pausa' : 'Riprendi'}
                    </button>
                </div>
            </section>
            <div id='search-section'>
                <h2>Ricerca il tuo vestito</h2>
                <SearchBar />
                <div id='filter-buttons-div'>
                    {categorie.map((category) => (
                        <FilterButton key={category} category={category} />
                    ))}
                </div>
                <div id='card-section'>
                {
                    vestiti.map((vestito) => (
                        <DressCard {...vestito} />
                    ))
                }
                </div>
            </div>
        </>
        
    );
}
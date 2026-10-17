import '../assets/styles/components/header.css';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen , setMenuOpen] = useState(false);

    return(
        <header className="header">
            <div className='navbar'>
                <span className="header-title">NHUCNA - Fit</span>
                <div className="menu-container">
                    <button 
                        className="menu-button" 
                        type="button" 
                        aria-label={isMenuOpen ? 'Chiudi il menu' : 'Apri il menu'}
                        aria-expanded={isMenuOpen}
                        onClick={() => setMenuOpen(!isMenuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="menu-overlay">
                    <button
                        className="menu-backdrop"
                        type="button"
                        aria-label="Chiudi il menu"
                        onClick={() => setMenuOpen(false)}
                    />
                    <aside className="dropdown-menu" role="dialog" aria-modal="true" aria-label="Menu di navigazione">
                        <button
                            className="menu-close"
                            type="button"
                            aria-label="Chiudi il menu"
                            onClick={() => setMenuOpen(false)}
                        >
                            ×
                        </button>
                        <nav>
                            <ul>
                                <li>Home</li>
                                <li>Armadio</li>
                                <li>Outfit</li>
                                <li>Importa outfit</li>
                                <li>Gestisci Outfit</li>
                            </ul>
                        </nav>
                    </aside>
                </div>
            )}
        </header>
    );
}
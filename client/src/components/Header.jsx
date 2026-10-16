import '../assets/styles/components/header.css';

export default function Header() {
    return(
        <header className="header">
            <span className="header-title">NHUCNA - Fit</span>
            <div className="menu-container">
                <button className="menu-button" type="button" aria-label="Apri il menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
}
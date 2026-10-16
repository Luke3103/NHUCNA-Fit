import { useState } from 'react';
import '../assets/styles/components/filter-button.css';

export default function FilterButton({category}) {
    const [isSelected, setIsSelected] = useState(false);

    return(
        <button
            type="button"
            className={`filter-button${isSelected ? ' filter-button--selected' : ''}`}
            aria-pressed={isSelected}
            onClick={() => setIsSelected((selected) => !selected)}
        >
            {category}
        </button>
    );
}
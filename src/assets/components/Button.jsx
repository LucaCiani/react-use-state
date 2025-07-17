import { useState } from "react";

export default function Button({ language, setLanguage, index }) {
    const [isActive, setIsActive] = useState();
    const handleClick = (index) => {
        setIsActive(index);
        setLanguage(language);
    };
    return (
        <button
            onClick={() => handleClick(index)}
            className={isActive == index ? "btn selected" : "btn btn-primary"}
            type="button"
        >
            {language.title}
        </button>
    );
}

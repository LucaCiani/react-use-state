import data from "../data/data";

export default function Button({ setLanguage }) {
    return (
        <div className="buttons d-flex gap-5 my-5">
            {data.map((language) => (
                <div key={language.id}>
                    <button
                        onClick={() => {
                            setLanguage(language);
                        }}
                        className="btn btn-primary"
                        type="button"
                    >
                        {language.title}
                    </button>
                </div>
            ))}
        </div>
    );
}

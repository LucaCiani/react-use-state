export default function Card({ language }) {
    return (
        <div className="card">
            <h2 className="card-title">{language.title}</h2>
            <div className="card-body">{language.description}</div>
        </div>
    );
}

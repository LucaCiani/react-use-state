import { useState } from "react";
import Card from "./assets/components/Card";
import Button from "./assets/components/Button";
import data from "./assets/data/data";

function App() {
    const defaultLanguage = {
        title: "Nessun linguaggio selezionato",
        description: "Seleziona un linguaggio per continuare",
    };
    const [language, setLanguage] = useState(defaultLanguage);
    return (
        <>
            <h1>Learn Web development</h1>
            <div className="container">
                <div className="d-flex gap-5 my-5">
                    {data.map((language, index) => (
                        <Button
                            key={language.id}
                            language={language}
                            setLanguage={setLanguage}
                            index={index}
                        />
                    ))}
                </div>
                <Card language={language} />
            </div>
        </>
    );
}

export default App;

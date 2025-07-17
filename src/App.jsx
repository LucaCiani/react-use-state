import { useState } from "react";
import Card from "./assets/components/Card";
import Button from "./assets/components/Button";

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
                <Button setLanguage={setLanguage} />
                <Card language={language} />
            </div>
        </>
    );
}

export default App;

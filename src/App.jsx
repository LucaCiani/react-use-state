import { useState } from "react";
import data from "./assets/data/data";

function App() {
    console.log(data);

    return (
        <>
            <h1>Learn Web development</h1>
            <div className="container">
                <div className="buttons d-flex g-5">
                    {data.map((button) => (
                        <div key={button.id}>
                            <button className="btn btn-primary" type="button">
                                {button.title}
                            </button>
                        </div>
                    ))}
                </div>
                <div></div>
            </div>
        </>
    );
}

export default App;

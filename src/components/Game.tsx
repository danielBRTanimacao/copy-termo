import React, { useState } from "react";
import Words from "../assets/json/words.json";

export default () => {
    const [getRandomTermo] = useState(
        Words[Math.floor(Math.random() * Words.length)]
    );
    const [valuesArray, setInputValues] = useState<string[]>(Array(5).fill(""));
    const [isCorrect, setIsCorrect] = useState(false);
    const termoDigited = valuesArray.join("").toUpperCase();

    const handleChange = (
        index: number,
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValues = [...valuesArray];
        newValues[index] = event.target.value;
        setInputValues(newValues);
    };

    const handleCollectValues = () => {
        console.log("enviado " + termoDigited);
        if (termoDigited === getRandomTermo) {
            console.log("acertou termo " + getRandomTermo);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            handleCollectValues();
        }
    };

    return (
        <main>
            {isCorrect ? (
                <div className="win">
                    <p>Acertou!</p>
                </div>
            ) : (
                <div className="win">{getRandomTermo}</div>
            )}
            <div onKeyDown={handleKeyDown}>
                {valuesArray.map((value, index) => (
                    <input
                        key={index}
                        className=""
                        type="text"
                        maxLength={1}
                        value={value}
                        onChange={(e) => handleChange(index, e)}
                        disabled={false}
                    />
                ))}
            </div>
        </main>
    );
};

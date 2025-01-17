import React, { useState } from "react";
import Words from "../assets/json/words.json";

export default () => {
    const [getRandomTermo] = useState(
        Words[Math.floor(Math.random() * Words.length)]
    );

    const [inputValuesArrays, setInputValues] = useState<string[]>(
        Array(5).fill("")
    );
    const [];
    const [isCorrect, setIsCorrect] = useState(false);

    const handleChange = (
        index: number,
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValues = [...inputValuesArrays];
        newValues[index] = event.target.value;
        setInputValues(newValues);
    };

    const handleCollectValues = () => {
        console.log("enviado " + inputValuesArrays);
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
                {inputValuesArrays.map((value, index) => (
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
            <div onKeyDown={handleKeyDown}>
                <input
                    className="empty"
                    type="text"
                    maxLength={1}
                    disabled={true}
                />
                <input
                    className="empty"
                    type="text"
                    maxLength={1}
                    disabled={true}
                />
                <input
                    className="empty"
                    type="text"
                    maxLength={1}
                    disabled={true}
                />
                <input
                    className="empty"
                    type="text"
                    maxLength={1}
                    disabled={true}
                />
                <input
                    className="empty"
                    type="text"
                    maxLength={1}
                    disabled={true}
                />
            </div>
        </main>
    );
};

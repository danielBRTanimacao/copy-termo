import React, { useRef, useState } from "react";
import Words from "../assets/json/words.json";

export default () => {
    const [randomTermo] = useState(
        Words[Math.floor(Math.random() * Words.length)]
    );
    const [counter, setCounter] = useState(1);
    const [arrayBoolean, setArrayBoolean] = useState(
        Array(6)
            .fill(true)
            .map((_, index) => index !== 0)
    );
    const [isCorrect, setIsCorrect] = useState(false);
    const inputRefs = useRef<HTMLInputElement[]>([]);

    const handleCollectValues = () => {
        const values = inputRefs.current.map((input) => input?.value || "");
        const termo = values.join("").toUpperCase();
        if (termo.length < 5) {
            return null;
        }

        if (randomTermo === termo) {
            setIsCorrect(true);
            setArrayBoolean(
                Array(6)
                    .fill(true)
                    .map((_, index) => index !== -1)
            );
        } else {
            setCounter((prevCounter) => {
                const newCounter = prevCounter + 1;
                const newIsEmpty = Array(6)
                    .fill(true)
                    .map((value, index) => index !== newCounter - 1);
                setArrayBoolean(newIsEmpty);

                return newCounter;
            });
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
                    <p>Incrivel!</p>
                </div>
            ) : (
                <div className="win">{randomTermo}</div>
            )}
            {Array.from({ length: 6 }).map((_, rowKeys) => (
                <div key={rowKeys} onKeyDown={handleKeyDown}>
                    {Array.from({ length: 5 }).map((_, colKeys) => (
                        <input
                            key={`disabled-${colKeys}`}
                            className={arrayBoolean[rowKeys] ? `empty` : ""}
                            type="text"
                            maxLength={1}
                            required
                            disabled={arrayBoolean[rowKeys]}
                            ref={
                                arrayBoolean[rowKeys]
                                    ? null
                                    : (el) =>
                                          el &&
                                          (inputRefs.current[colKeys] = el)
                            }
                        />
                    ))}
                </div>
            ))}
        </main>
    );
};

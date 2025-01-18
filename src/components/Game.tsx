import React, { useRef, useState } from "react";
import Words from "../assets/json/words.json";

export default () => {
    const [randomTermo] = useState(
        Words[Math.floor(Math.random() * Words.length)].toUpperCase()
    );

    const [counter, setCounter] = useState(0);
    const [arrayBoolean, setArrayBoolean] = useState(
        Array(6)
            .fill(true)
            .map((_, index) => index !== 0)
    );
    const [isCorrect, setIsCorrect] = useState(false);
    const [rowsStatus, setRowsStatus] = useState<string[]>(Array(6).fill(""));
    const inputRefs = useRef<HTMLInputElement[][]>(
        Array.from({ length: 6 }, () => [])
    );

    const handleCollectValues = () => {
        const currentInputs = inputRefs.current[counter];
        const termo = currentInputs
            .map((input) => input?.value || "")
            .join("")
            .toUpperCase();

        if (termo.length < 5) {
            alert("Complete a palavra para enviar!");
            return;
        }
        if (/\d/.test(termo)) {
            alert("Não pode conter números!");
            return;
        }

        if (termo === randomTermo) {
            setIsCorrect(true);
            setRowsStatus((prev) =>
                prev.map((status, index) =>
                    index === counter ? "correct" : status
                )
            );
            setArrayBoolean(Array(6).fill(true));
        } else {
            setRowsStatus((prev) =>
                prev.map((status, index) =>
                    index === counter ? "wrong" : status
                )
            );

            setCounter((prevCounter) => {
                const newCounter = prevCounter + 1;
                if (newCounter >= 6) {
                    alert(`Não foi dessa vez a resposta era: ${randomTermo}`);
                    setArrayBoolean(Array(6).fill(true));
                } else {
                    setArrayBoolean(
                        Array(6)
                            .fill(true)
                            .map((_, index) => index !== newCounter)
                    );
                }
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
                    <p>Resposta correta! A palavra era: {randomTermo}</p>
                </div>
            ) : null}
            {Array.from({ length: 6 }).map((_, rowKeys) => (
                <div key={rowKeys} onKeyDown={handleKeyDown}>
                    {Array.from({ length: 5 }).map((_, colKeys) => (
                        <input
                            key={`row-${rowKeys}-col-${colKeys}`}
                            className={`${rowsStatus[rowKeys]} ${
                                arrayBoolean[rowKeys] ? "empty" : null
                            }`}
                            type="text"
                            maxLength={1}
                            required
                            disabled={arrayBoolean[rowKeys]}
                            ref={(el) => {
                                if (el) {
                                    inputRefs.current[rowKeys][colKeys] = el;
                                }
                            }}
                        />
                    ))}
                </div>
            ))}
        </main>
    );
};

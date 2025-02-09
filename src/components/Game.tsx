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
    const [rowsStatus, setRowsStatus] = useState<string[][]>(
        Array.from({ length: 6 }, () => Array(5).fill(""))
    );
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

        const newRowStatus = [...rowsStatus];
        const letterCounts: Record<string, number> = {};

        for (const char of randomTermo) {
            letterCounts[char] = (letterCounts[char] || 0) + 1;
        }

        const termoArray = termo.split("");
        const randomArray = randomTermo.split("");

        termoArray.forEach((letter, index) => {
            if (randomArray[index] === letter) {
                newRowStatus[counter][index] = "correct";
                letterCounts[letter] -= 1;
            }
        });

        termoArray.forEach((letter, index) => {
            if (
                newRowStatus[counter][index] !== "correct" &&
                letterCounts[letter] > 0
            ) {
                newRowStatus[counter][index] = "place";
                letterCounts[letter] -= 1;
            } else if (newRowStatus[counter][index] === "") {
                newRowStatus[counter][index] = "wrong";
            }
        });

        setRowsStatus(newRowStatus);

        if (termo === randomTermo) {
            setIsCorrect(true);
            setArrayBoolean(Array(6).fill(true));
        } else {
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

    const handleKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>,
        rowIndex: number,
        colIndex: number
    ) => {
        if (event.key === "Backspace" && !event.currentTarget.value) {
            if (colIndex > 0) {
                const prevInput = inputRefs.current[rowIndex][colIndex - 1];
                prevInput?.focus();
            }
        } else if (event.key === "Enter") {
            handleCollectValues();
        }
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        rowIndex: number,
        colIndex: number
    ) => {
        const value = e.target.value;
        if (value && colIndex < 4) {
            const nextInput = inputRefs.current[rowIndex][colIndex + 1];
            nextInput?.focus();
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
                <div key={rowKeys}>
                    {Array.from({ length: 5 }).map((_, colKeys) => (
                        <input
                            key={`row-${rowKeys}-col-${colKeys}`}
                            className={`${rowsStatus[rowKeys][colKeys]} ${
                                arrayBoolean[rowKeys] ? "empty" : null
                            }`}
                            type="text"
                            maxLength={1}
                            required
                            disabled={arrayBoolean[rowKeys]}
                            onKeyDown={(e) =>
                                handleKeyDown(e, rowKeys, colKeys)
                            }
                            onChange={(e) =>
                                handleInputChange(e, rowKeys, colKeys)
                            }
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

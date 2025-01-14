import React, { useRef, useState } from "react";
import Words from "../assets/json/words.json";

export default () => {
    const [getRandomTermo] = useState(
        Words[Math.floor(Math.random() * Words.length)]
    );
    const [isEmpty, setIsEmpty] = useState([
        false,
        true,
        true,
        true,
        true,
        true
    ]);
    const [isCorrect, setIsCorrect] = useState(false);
    const inputRefs = useRef<HTMLInputElement[]>([]);

    const handleCollectValues = () => {
        const values = inputRefs.current.map((input) => input?.value || "");
        console.log(values.length);
        if (values.length < 5) {
            return null;
        }
        const termo = values.join("").toUpperCase();

        console.log(termo);
        if (getRandomTermo === termo) {
            setIsCorrect(true);
        } else {
            setIsEmpty([true, false, true, true, true, true]);
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
                    <p>Incrivel!: {getRandomTermo}</p>
                </div>
            ) : (
                <div className="win"></div>
            )}
            {Array.from({ length: 6 }).map((_, rowKeys) => (
                <div key={rowKeys} onKeyDown={handleKeyDown}>
                    {Array.from({ length: 5 }).map((_, colKeys) => (
                        <input
                            key={`disabled-${colKeys}`}
                            className={
                                isEmpty[rowKeys]
                                    ? `empty ${isCorrect ? "wrong" : ""}`
                                    : ""
                            }
                            type="text"
                            maxLength={1}
                            required
                            disabled={isEmpty[rowKeys]}
                            ref={
                                isEmpty[rowKeys]
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

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
    const inputRefs = useRef<HTMLInputElement[]>([]);

    const handleCollectValues = () => {
        const values = inputRefs.current.map((input) => input?.value || "");
        if (values.length < 5) {
            return null;
        }
        const termo = values.join("").toUpperCase();

        console.log(termo);
        if (getRandomTermo === termo) {
            console.log("Ganhou");
        } else {
            console.log("errou");
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
            {Array.from({ length: 6 }).map((_, indexKey) => (
                <div key={indexKey} onKeyDown={handleKeyDown}>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <input
                            key={`disabled-${index}`}
                            className={
                                isEmpty[indexKey]
                                    ? `empty ${
                                          isEmpty[indexKey]
                                              ? "wrong"
                                              : "correct"
                                      }`
                                    : ``
                            }
                            type="text"
                            maxLength={1}
                            required
                            disabled={isEmpty[indexKey]}
                            ref={
                                isEmpty[indexKey]
                                    ? null
                                    : (el) =>
                                          el && (inputRefs.current[index] = el)
                            }
                        />
                    ))}
                </div>
            ))}
        </main>
    );
};

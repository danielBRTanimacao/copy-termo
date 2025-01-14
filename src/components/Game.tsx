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
    const [isCorrect, setIsCorrect] = useState("");
    const inputRefs = useRef<HTMLInputElement[]>([]);

    const validateCorrection = () => {
        if (isCorrect) {
            setIsCorrect("correct");
        } else {
            return setIsCorrect("wrong");
        }
    };

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

    console.log(getRandomTermo);

    return (
        <main>
            {Array.from({ length: 6 }).map((_, indexKey) => (
                <div key={indexKey} onKeyDown={handleKeyDown}>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <input
                            key={`disabled-${index}`}
                            className={
                                isEmpty[indexKey] ? `empty ${isCorrect}` : ""
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

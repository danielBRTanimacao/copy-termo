import React, { useRef, useState } from "react";
import Words from "../assets/json/words.json";

export default () => {
    function getRandomInt(max: number): number {
        return Math.floor(Math.random() * max);
    }

    const [isEmpty, setIsEmpty] = useState([
        false,
        true,
        true,
        true,
        true,
        true
    ]);
    const getTermo = Words[getRandomInt(Words.length)];
    const inputRefs = useRef<HTMLInputElement[]>([]);

    const handleCollectValues = () => {
        const values = inputRefs.current.map((input) => input?.value || "");
        if (values.length < 5) {
            console.log("digite todos os valores");
        }
        const termo = values.join("").toUpperCase();

        if (getTermo === termo) {
            console.log("Ganhou");
        } else {
            console.log("errou");
            setIsEmpty([false, false, true, true, true, true]);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            handleCollectValues();
        }
    };

    console.log(getTermo);

    return (
        <main>
            {/* <div onKeyDown={handleKeyDown}>
                {Array.from({ length: 5 }).map((_, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength={1}
                        required
                        ref={(el) => el && (inputRefs.current[index] = el)}
                    />
                ))}
            </div> */}

            {Array.from({ length: 6 }).map((_, indexKey) => (
                <div key={indexKey} onKeyDown={handleKeyDown}>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <input
                            key={`disabled-${index}`}
                            className={isEmpty[indexKey] ? `empty` : ``}
                            type="text"
                            maxLength={1}
                            required
                            disabled={isEmpty[indexKey]}
                            ref={
                                isEmpty[indexKey]
                                    ? (el) =>
                                          el && (inputRefs.current[index] = el)
                                    : null
                            }
                        />
                    ))}
                </div>
            ))}
        </main>
    );
};

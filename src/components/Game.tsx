import React, { useRef } from "react";
import Words from "../assets/json/words.json";

export default () => {
    function getRandomInt(max: number): number {
        return Math.floor(Math.random() * max);
    }

    const getTermo = Words[getRandomInt(Words.length)];
    const inputRefs = useRef<HTMLInputElement[]>([]);

    const handleCollectValues = () => {
        const values = inputRefs.current.map((input) => input?.value || "");
        const termo = values.join("").toUpperCase();
        console.log("Values:", termo);
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            handleCollectValues();
        }
    };

    return (
        <main>
            <div onKeyDown={handleKeyDown}>
                {Array.from({ length: 5 }).map((_, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength={1}
                        required
                        ref={(el) => el && (inputRefs.current[index] = el)}
                    />
                ))}
            </div>

            <div>
                {Array.from({ length: 5 }).map((_, index) => (
                    <input
                        key={`disabled-${index}`}
                        className="empty"
                        type="text"
                        maxLength={1}
                        disabled
                    />
                ))}
            </div>
        </main>
    );
};

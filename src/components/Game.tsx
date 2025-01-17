import React, { useRef, useState } from "react";
import Words from "../assets/json/words.json";

export default () => {
    const [getRandomTermo] = useState(
        Words[Math.floor(Math.random() * Words.length)]
    );
    const [listObjRowTerm, setListObjRowTerm] = useState([
        {
            clean: true,
            isWriting: true,
            isCorrectOrWrong: {
                yes: true,
                no: false,
                dontNow: null
            }
        },
        {
            clean: true,
            isWriting: false,
            isCorrectOrWrong: {
                yes: true,
                no: false,
                dontNow: null
            }
        },
        {
            clean: true,
            isWriting: false,
            isCorrectOrWrong: {
                yes: true,
                no: false,
                dontNow: null
            }
        },
        {
            clean: true,
            isWriting: false,
            isCorrectOrWrong: {
                yes: true,
                no: false,
                dontNow: null
            }
        },
        {
            clean: true,
            isWriting: false,
            isCorrectOrWrong: {
                yes: true,
                no: false,
                dontNow: null
            }
        },
        {
            clean: true,
            isWriting: false,
            isCorrectOrWrong: {
                yes: true,
                no: false,
                dontNow: null
            }
        }
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

        if (getRandomTermo === termo) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
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
                <div className="win">{getRandomTermo}</div>
            )}
            {listObjRowTerm.map((_, rowKeys) => (
                <div key={rowKeys} onKeyDown={handleKeyDown}>
                    {Array.from({ length: 5 }).map((_, colKeys) => (
                        <input
                            key={`disabled-${colKeys}`}
                            className={
                                !listObjRowTerm[rowKeys].isWriting
                                    ? `empty ${
                                          (listObjRowTerm[rowKeys], rowKeys)
                                      } ${
                                          listObjRowTerm[rowKeys]
                                              .isCorrectOrWrong
                                              ? ""
                                              : "wrong"
                                      }`
                                    : ""
                            }
                            type="text"
                            maxLength={1}
                            required
                            disabled={!listObjRowTerm[rowKeys].isWriting}
                            ref={
                                listObjRowTerm[rowKeys]
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

import React, { useRef, useState, useCallback } from "react";
import Words from "../assets/json/words.json";

type TermoState = {
    clean: boolean;
    writing: boolean;
    wrong: boolean;
};

const defaultRowState: TermoState = {
    clean: true,
    writing: false,
    wrong: false
};

export default () => {
    const [getRandomTermo] = useState(
        Words[Math.floor(Math.random() * Words.length)].toUpperCase()
    );
    const [rowsState, setRowsState] = useState<TermoState[]>(
        Array(6).fill({ ...defaultRowState })
    );
    const [isCorrect, setIsCorrect] = useState(false);
    const inputRefs = useRef<HTMLInputElement[][]>([]);

    const handleCollectValues = useCallback(() => {
        const currentRowInputs = inputRefs.current
            .flatMap((row) => row)
            .filter((input) => input?.value !== undefined);

        const values = currentRowInputs.map((input) => input?.value || "");
        if (values.length < 5) return;

        const termo = values.join("").toUpperCase();
        const newState = rowsState.map((row, index) =>
            index === 0
                ? { ...row, clean: false, wrong: termo !== getRandomTermo }
                : index === 1
                ? { ...row, writing: true }
                : { ...row }
        );

        setIsCorrect(termo === getRandomTermo);
        setRowsState(newState);
    }, [getRandomTermo, rowsState]);

    const handleKeyDown = useCallback(
        (event: React.KeyboardEvent) => {
            if (event.key === "Enter") {
                handleCollectValues();
            }
        },
        [handleCollectValues]
    );

    const renderInput = (rowIdx: number, colIdx: number) => (
        <input
            key={`input-${rowIdx}-${colIdx}`}
            className={
                rowsState[rowIdx].writing
                    ? ""
                    : `empty ${rowsState[rowIdx].wrong ? "wrong" : ""}`
            }
            type="text"
            maxLength={1}
            required
            disabled={!rowsState[rowIdx].writing}
            ref={(el) => {
                if (!inputRefs.current[rowIdx]) inputRefs.current[rowIdx] = [];
                inputRefs.current[rowIdx][colIdx] = el!;
            }}
        />
    );

    return (
        <main>
            {isCorrect ? (
                <div className="win">
                    <p>Incredible!</p>
                </div>
            ) : (
                <div className="win">{getRandomTermo}</div>
            )}
            {Array.from({ length: 6 }).map((_, rowIdx) => (
                <div key={`row-${rowIdx}`} onKeyDown={handleKeyDown}>
                    {Array.from({ length: 5 }).map((_, colIdx) =>
                        renderInput(rowIdx, colIdx)
                    )}
                </div>
            ))}
        </main>
    );
};

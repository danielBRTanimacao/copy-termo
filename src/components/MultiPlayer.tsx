import React, { useState } from "react";
import Header from "./Header";

const MultiplayerComponent: React.FC = () => {
    const [playerNameInput, setPlayerNameInput] = useState("");
    const [savedPlayerName, setSavedPlayerName] = useState("");

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPlayerNameInput(event.target.value);
    };

    const saveNameCreateRoom = () => {
        setSavedPlayerName(playerNameInput);
    };

    const generatePlayerId = (isRoom: boolean) => {
        const letters = [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z"
        ];
        if (isRoom) {
            const randomLetter =
                letters[Math.floor(Math.random() * letters.length)];
            const randomLetter2 =
                letters[Math.floor(Math.random() * letters.length)];
            const randomNumber = Math.floor(10000 + Math.random() * 90000);
            return `
                #${randomLetter}${randomLetter2}${randomNumber}`;
        }
        const randomLetter =
            letters[Math.floor(Math.random() * letters.length)];
        const randomNumber = Math.floor(10000 + Math.random() * 90000);
        return `#${randomLetter}${randomNumber}`;
    };

    const playerId = generatePlayerId(false);
    const roomId = generatePlayerId(true);

    return (
        <>
            <Header title="MULTIPLAYER" modal="infos" tm={true} />
            <main>
                {!savedPlayerName ? (
                    <div className="multiplayerDiv">
                        <label htmlFor="playerInput">
                            ADICIONE UM NOME MANEIRO!
                        </label>
                        <input
                            type="text"
                            name="playerName"
                            id="playerInput"
                            value={playerNameInput}
                            maxLength={13}
                            required
                            onChange={handleInput}
                        />
                        <button
                            className="createBtn"
                            type="button"
                            onClick={saveNameCreateRoom}
                        >
                            Salvar e criar
                        </button>
                    </div>
                ) : (
                    <div className="multiObby">
                        <h4>{playerId}</h4>
                        <h1>Olá, {savedPlayerName}</h1>
                        <aside className="divisionlobby">
                            <div>
                                <h2>Entrar na sala</h2>
                                <input
                                    type="text"
                                    name="enterRoom"
                                    id="enterRoomId"
                                />
                            </div>
                            <div>
                                <h2
                                    style={{
                                        display: "flex",
                                        alignItems: "center"
                                    }}
                                >
                                    Sua sala {roomId}{" "}
                                    <button>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-copy"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
                                            />
                                        </svg>
                                    </button>
                                </h2>

                                <input
                                    className="initBtn"
                                    type="button"
                                    value="Iniciar"
                                />
                            </div>
                        </aside>
                    </div>
                )}
            </main>
        </>
    );
};

export default MultiplayerComponent;

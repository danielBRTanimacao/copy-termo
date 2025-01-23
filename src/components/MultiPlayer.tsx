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
                        <aside>
                            <div>
                                <h2>Entrar na sala</h2>
                                <input
                                    type="text"
                                    name="enterRoom"
                                    id="enterRoomId"
                                />
                            </div>
                            <div>
                                <h2>id da sala {roomId}</h2>
                                <p>Pessoa que entrou TESTE id 000000</p>
                            </div>
                        </aside>
                    </div>
                )}
            </main>
        </>
    );
};

export default MultiplayerComponent;

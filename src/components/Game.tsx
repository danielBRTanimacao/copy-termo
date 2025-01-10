import Words from "../assets/json/words.json";

export default () => {
    function getRandomInt(max: number): number {
        return Math.floor(Math.random() * max);
    }

    const rows = Array(5).fill(null);
    const getTermo = Words[getRandomInt(Words.length)];

    return (
        <main>
            <div>
                <input type="text" maxLength={1} required />
                <input type="text" maxLength={1} required />
                <input type="text" maxLength={1} required />
                <input type="text" maxLength={1} required />
                <input type="text" maxLength={1} required />
            </div>
            {rows.map((_, index) => (
                <div key={index}>
                    <input
                        className="empty"
                        type="text"
                        maxLength={1}
                        disabled
                    />
                    <input
                        className="empty"
                        type="text"
                        maxLength={1}
                        disabled
                    />
                    <input
                        className="empty"
                        type="text"
                        maxLength={1}
                        disabled
                    />
                    <input
                        className="empty"
                        type="text"
                        maxLength={1}
                        disabled
                    />
                    <input
                        className="empty"
                        type="text"
                        maxLength={1}
                        disabled
                    />
                </div>
            ))}
        </main>
    );
};

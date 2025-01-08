export default () => {
    return (
        <main>
            <div>
                <input type="text" maxLength={1} required />
                <input type="text" maxLength={1} required />
                <input type="text" maxLength={1} required />
                <input type="text" maxLength={1} required />
                <input type="text" maxLength={1} required />
            </div>
            <div>
                <input className="empty" type="text" maxLength={1} disabled />
                <input className="empty" type="text" maxLength={1} disabled />
                <input className="empty" type="text" maxLength={1} disabled />
                <input className="empty" type="text" maxLength={1} disabled />
                <input className="empty" type="text" maxLength={1} disabled />
            </div>
        </main>
    );
};

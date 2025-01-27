import { Link } from "react-router-dom";

export default ({
    isOpen,
    tm,
    onClose
}: {
    isOpen: boolean;
    tm: boolean;
    onClose: () => void;
}) => {
    if (!isOpen) return null;

    return (
        <aside className="container scale-up-ver-top" onClick={onClose}>
            <div className="link-division">
                <div>
                    <a href="/" className={!tm ? "active" : ""}>
                        termo
                    </a>
                    <Link to="/mul" className={tm ? "active" : ""}>
                        multijogador
                    </Link>
                </div>
                <Link to="/about">i</Link>
            </div>
        </aside>
    );
};

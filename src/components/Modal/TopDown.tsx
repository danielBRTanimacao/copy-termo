import { Link } from "react-router-dom";

export default ({ isOpen, tm }: { isOpen: boolean; tm: boolean }) => {
    if (!isOpen) return null;

    return (
        <aside className="container scale-up-ver-top">
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

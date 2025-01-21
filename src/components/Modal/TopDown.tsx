import { FC } from "react";
import { Link } from "react-router-dom";

interface TopDownProps {
    isOpen: boolean;
    onClose: () => void;
}

const TopDown: FC<TopDownProps> = ({ isOpen }) => {
    if (!isOpen) return null;

    return (
        <aside className="container scale-up-ver-top">
            <div className="link-division">
                <div>
                    <a href="/" className="active">
                        termo
                    </a>
                    <Link to="/mul">multijogador</Link>
                </div>
                <Link to="/about">i</Link>
            </div>
        </aside>
    );
};

export default TopDown;

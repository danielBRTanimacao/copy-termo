import { FC } from "react";

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
                    <a href="#">multijogador</a>
                </div>
                <a href="#">i</a>
            </div>
        </aside>
    );
};

export default TopDown;

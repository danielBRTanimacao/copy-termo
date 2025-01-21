import { useState, ReactNode } from "react";
import Modal from "./Modal/Modal";
import TopDown from "./Modal/TopDown";

export default ({
    title,
    modal,
    tm
}: {
    title: string;
    modal: ReactNode;
    tm: boolean;
}) => {
    const [isOpen, setOpen] = useState({
        topDown: false,
        modal: false,
        status: false,
        config: false
    });

    return (
        <>
            <TopDown
                isOpen={isOpen.topDown}
                tm={tm}
                onClose={() =>
                    setOpen({
                        topDown: false,
                        modal: isOpen.modal,
                        status: isOpen.status,
                        config: isOpen.config
                    })
                }
            />
            <header className="header">
                <nav className="nav">
                    <div>
                        <button
                            className="btn"
                            id="accordion"
                            onClick={() =>
                                setOpen((prevState) => ({
                                    ...prevState,
                                    topDown: !prevState.topDown
                                }))
                            }
                        >
                            <img
                                className={
                                    isOpen.topDown === true
                                        ? "rotate-center"
                                        : ""
                                }
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00My4zODE1IDc2LjUyNDZMNjMuODg5OCA1Mi45NjQ0TDg0LjM5OCA3Ni41MjQ2IiBzdHJva2U9IiNCN0FFQjQiIHN0cm9rZS13aWR0aD0iMTIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                                alt=""
                            />
                        </button>
                        <button
                            className="btn"
                            id="help"
                            onClick={() =>
                                setOpen((prevState) => ({
                                    ...prevState,
                                    modal: !prevState.modal
                                }))
                            }
                        >
                            <div>?</div>
                        </button>
                    </div>
                    <h1>{title}</h1>
                    <div>
                        <button
                            className="btn"
                            id="status"
                            onClick={() =>
                                setOpen((prevState) => ({
                                    ...prevState,
                                    status: !prevState.status
                                }))
                            }
                        >
                            <img
                                src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI3IDYzLjVDMjcgNTkuMzU3OSAzMC4zNTc5IDU2IDM0LjUgNTZWNTZDMzguNjQyMSA1NiA0MiA1OS4zNTc5IDQyIDYzLjVWMTAySDI3VjYzLjVaIiBmaWxsPSIjQjdBRUI0Ii8+CjxwYXRoIGQ9Ik00NyAzMy41QzQ3IDI5LjM1NzkgNTAuMzU3OSAyNiA1NC41IDI2VjI2QzU4LjY0MjEgMjYgNjIgMjkuMzU3OSA2MiAzMy41VjEwMkg0N1YzMy41WiIgZmlsbD0iI0I3QUVCNCIvPgo8cGF0aCBkPSJNNjcgNTAuNUM2NyA0Ni4zNTc5IDcwLjM1NzkgNDMgNzQuNSA0M1Y0M0M3OC42NDIxIDQzIDgyIDQ2LjM1NzkgODIgNTAuNVYxMDJINjdWNTAuNVoiIGZpbGw9IiNCN0FFQjQiLz4KPHBhdGggZD0iTTg3IDczLjVDODcgNjkuMzU3OSA5MC4zNTc5IDY2IDk0LjUgNjZWNjZDOTguNjQyMSA2NiAxMDIgNjkuMzU3OSAxMDIgNzMuNVYxMDJIODdWNzMuNVoiIGZpbGw9IiNCN0FFQjQiLz4KPC9zdmc+Cg=="
                                alt=""
                            />
                        </button>
                        <button
                            className="btn"
                            id="config"
                            onClick={() =>
                                setOpen((prevState) => ({
                                    ...prevState,
                                    config: !prevState.config
                                }))
                            }
                        >
                            <img
                                src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05Ny45ODAxIDU5LjAyNjNDOTguNjE1OCA1OS4yNDAxIDk5LjI4ODggNTkuNDY2NSAxMDAgNTkuNzE5M1Y2OS4yODA3Qzk5LjI5MjggNjkuNTMyMyA5OC42MjE5IDY5Ljc1NzggOTcuOTg2OSA2OS45NzEyQzk0LjI4MzkgNzEuMjE1NyA5MS44MDIgNzIuMDQ5OCA5MC40NzEyIDc1LjI1OTVDODkuMTM5NSA3OC40NzY0IDkwLjMwNzQgODAuODIzNCA5Mi4wNDgxIDg0LjMyMTRDOTIuMzQ1MiA4NC45MTg0IDkyLjY1OSA4NS41NDg5IDkyLjk3OTkgODYuMjIzTDg2LjIyMDEgOTIuOTg1OEM4NS41MzMzIDkyLjY1OTQgODQuODkyNiA5Mi4zNDEgODQuMjg3NCA5Mi4wNDAyQzgwLjc3OTEgOTAuMjk2NiA3OC40NjQzIDg5LjE0NjEgNzUuMjgwMiA5MC40NjgySDc1LjI3NzJDNzIuMDQ4IDkxLjgxMzUgNzEuMjE1OSA5NC4yODcyIDY5Ljk2NyA5OEM2OS43NTQ5IDk4LjYzMDcgNjkuNTMwNyA5OS4yOTcyIDY5LjI4MDcgMTAwSDU5LjcxOTNDNTkuNDY2NyA5OS4yODkzIDU5LjI0MDUgOTguNjE1OCA1OS4wMjY3IDk3Ljk3OTFDNTcuNzgwNyA5NC4yNjkxIDU2Ljk1MzIgOTEuODA1MyA1My43NDY1IDkwLjQ3NzFINTMuNzQzNUM1MC41MjY5IDg5LjE0MyA0OC4xNzU3IDkwLjMxMjMgNDQuNjc4OSA5Mi4wNTE1QzQ0LjA4MTcgOTIuMzQ4NSA0My40NTEgOTIuNjYyMiA0Mi43NzcgOTIuOTgyOEwzNi4wMTcyIDg2LjIyMDFDMzYuMzM4MyA4NS41NDUgMzYuNjUzNiA4NC45MTI1IDM2Ljk1MjggODQuMzEyNUMzOC42NzM3IDgwLjg2MDkgMzkuODU4NiA3OC40ODQ1IDM4LjUyMjkgNzUuMjUzNUMzNy4xOTE1IDcyLjA0NTIgMzQuNzEwNCA3MS4yMTIgMzEuMDA3NSA2OS45Njg2QzMwLjM3NDIgNjkuNzU1OSAyOS43MDUyIDY5LjUzMTMgMjkgNjkuMjgwN1Y1OS43MTkzQzI5LjcxMDMgNTkuNDY2NSAzMC4zODM4IDU5LjI0MDEgMzEuMDIwOSA1OS4wMjZDMzQuNzIxNSA1Ny43ODIgMzcuMTkyOCA1Ni45NTEzIDM4LjUyMjkgNTMuNzQzNUMzOS44NTU3IDUwLjUzMDEgMzguNjk0MyA0OC4xOTMzIDM2Ljk1NTYgNDQuNjk1QzM2LjY1NjYgNDQuMDkzNCAzNi4zNDA1IDQzLjQ1NzYgMzYuMDE3MiA0Mi43NzdMNDIuNzc3IDM2LjAxNzJDNDMuNDU2NiAzNi4zNDA0IDQ0LjA5MTMgMzYuNjU1OCA0NC42OTE0IDM2Ljk1NDFDNDguMjA1MiAzOC43MDA2IDUwLjUzMTkgMzkuODU3IDUzLjc0MzUgMzguNTIyOUg1My43NDY1QzU2Ljk1MTQgMzcuMTkzIDU3Ljc4MTkgMzQuNzIyMSA1OS4wMjU1IDMxLjAyMjJDNTkuMjM5OCAzMC4zODQ4IDU5LjQ2NjMgMjkuNzEwOCA1OS43MTkzIDI5SDY5LjI4MDdDNjkuNTMzIDI5LjcwOTkgNjkuNzU4OSAzMC4zODIzIDY5Ljk3MjUgMzEuMDE4QzcxLjIyMTQgMzQuNzM0OCA3Mi4wNDc3IDM3LjE5NDEgNzUuMjUzNSAzOC41MjI5SDc1LjI1NjVDNzguNDczMiAzOS44NTYgODAuODIzNyAzOC42ODcyIDg0LjMxNDQgMzYuOTUxNEM4NC45MTM2IDM2LjY1MzUgODUuNTQ2NSAzNi4zMzg4IDg2LjIyMyAzNi4wMTcyTDkyLjk4MjggNDIuNzc3QzkyLjY1OTUgNDMuNDU3OSA5Mi4zNDM3IDQ0LjA5MzggOTIuMDQ1MSA0NC42OTUyQzkwLjMwMzIgNDguMjAzNCA4OS4xNDYyIDUwLjUzMzcgOTAuNDc3MSA1My43NDM1VjUzLjc0NjVDOTEuODA0MSA1Ni45NDg5IDk0LjI0OTcgNTcuNzcxNSA5Ny45ODAxIDU5LjAyNjNaTTY0LjUgODBDNzMuMDYwNCA4MCA4MCA3My4wNjA0IDgwIDY0LjVDODAgNTUuOTM5NiA3My4wNjA0IDQ5IDY0LjUgNDlDNTUuOTM5NiA0OSA0OSA1NS45Mzk2IDQ5IDY0LjVDNDkgNzMuMDYwNCA1NS45Mzk2IDgwIDY0LjUgODBaIiBmaWxsPSIjQjdBRUI0Ii8+Cjwvc3ZnPgo="
                                alt=""
                            />
                        </button>
                    </div>
                </nav>
            </header>
            <Modal
                isOpen={isOpen.modal}
                onClose={() =>
                    setOpen({
                        topDown: isOpen.topDown,
                        modal: false,
                        status: isOpen.status,
                        config: isOpen.config
                    })
                }
            >
                {modal}
            </Modal>
            <Modal
                isOpen={isOpen.status}
                onClose={() =>
                    setOpen({
                        status: false,
                        config: isOpen.config,
                        modal: isOpen.modal,
                        topDown: isOpen.topDown
                    })
                }
            >
                <p>Status</p>
            </Modal>
            <Modal
                isOpen={isOpen.config}
                onClose={() =>
                    setOpen({
                        topDown: isOpen.topDown,
                        modal: isOpen.modal,
                        status: isOpen.status,
                        config: false
                    })
                }
            >
                <p>Configurações</p>
            </Modal>
        </>
    );
};

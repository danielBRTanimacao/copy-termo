import Header from "./components/Header";
import Game from "./components/Game";

export default () => {
    const MODAL = (
        <>
            <p>
                Descubra a palavra certa em 6 tentativas. Depois de cada
                tentativa, as peças mostram o quão perto você está da solução.
            </p>
            <div className="exemple">
                <span className="letter correct">T</span>
                <span className="letter">U</span>
                <span className="letter">R</span>
                <span className="letter">M</span>
                <span className="letter">A</span>
            </div>
            <p>
                A letra <span className="letter correct">T</span> faz parte da
                palavra e está na posição correta.
            </p>
            <div className="exemple">
                <span className="letter">V</span>
                <span className="letter">I</span>
                <span className="letter place">O</span>
                <span className="letter">L</span>
                <span className="letter">A</span>
            </div>
            <p>
                A letra <span className="letter place">O</span> faz parte da
                palavra porem não esta na posição correta.
            </p>
            <div className="exemple">
                <span className="letter">P</span>
                <span className="letter">U</span>
                <span className="letter">L</span>
                <span className="letter wrong">G</span>
                <span className="letter">A</span>
            </div>
            <p>
                A letra <span className="letter wrong">G</span> não faz parte da
                palavra.
            </p>
            <p>A uma palavra nova todo dia.</p>
        </>
    );

    return (
        <>
            <Header title="TERMO" modal={MODAL} tm={false} />
            <Game />
        </>
    );
};

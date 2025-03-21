import "./Expert.css";

const Expert = () => {
    return (
        <div className="expert">
            <ul>
                <li>
                    <img src="/public/foto's/Verzekend.png" alt="Gelicentieerd & Verzekend" className="expert__img" />
                    <p className="expert__title">Gelicentieerd & Verzekend</p>
                    <p className="expert__text">Volledig gelicentieerde professionele service waarop u kunt vertrouwen</p>
                </li>

                <li>
                    <img src="/public/foto's/service.jpg" alt="Expertservice" className="expert__img" />
                    <p className="expert__title">Expertservice</p>
                    <p className="expert__text">Vakkundige technici met jarenlange ervaring</p>
                </li>

                <li>
                    <img src="/public/foto's/golden.jpg" alt="Gegarandeerde Kwaliteit" className="expert__img" />
                    <p className="expert__title">Gegarandeerde Kwaliteit</p>
                    <p className="expert__text">Tevredenheid gegarandeerd op al ons werk</p>
                </li>
            </ul>
        </div>
    );
};

export default Expert;

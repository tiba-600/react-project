import "./Offerte_voordelen.css"

const Offerte_voordelen = () => {
    return(
        <>
        <div className="voordelen">
            <ul>
                <li>
                    <img src="/foto's/free.jpg" alt="" />
                    <p>Gratis en vrijblijvend</p>
                </li>
                
                <li>
                <img src="/foto's/puzzles.jpg" alt="" />
                <p>Op maat gemaakte oplossing</p>
                </li>

                <li>
                <img src="/foto's/reactie.jpg" alt="" />
                <p>Snelle reactie en deskundig advies</p>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Offerte_voordelen;
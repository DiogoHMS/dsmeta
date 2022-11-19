import logo2 from "../../assets/img/logo2.svg"
import './styles.css'


function Header() {
    return (
        <header>
            <div className="Cofre Interligente">
                <img src={logo2} alt="DSMeta" />
                <h1>Cofre Inteligente</h1>
            </div>
        </header>
    )
}

export default Header
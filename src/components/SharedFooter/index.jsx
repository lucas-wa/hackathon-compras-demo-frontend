import { Link } from "react-router-dom"
import "./styles.scss"

export function SharedFooter() {
    return (
        <footer className="sharedFooterContent">
            <p>&copy; AchaFacilSicaf</p>
            <div className="appInfos">
                <Link to="#">SICAF</Link>
                <Link to="#">Governo Federal</Link>
                <Link to="#">Compras.gov</Link>
            </div>
        </footer>
    )
}
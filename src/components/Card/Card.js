import "./Card.css"
import { Link } from "react-router-dom"
const Card = (props) => {
    return (
        <div className="card">
            <img src={props.img} alt="img-card" />
            <p className="description">{props.description}</p>
            <div className="price">{props.price} $</div>
            <Link className="link-card" to={`product/${props.id}`}>Details</Link>
        </div>
    )
}

export default Card

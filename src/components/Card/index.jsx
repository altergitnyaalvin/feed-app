import { Link } from 'react-router-dom'
import './Card.module.css'

const Card = ({ params, author, title, description, urlImage, date }) => {
    // Populate data tanggal/publishedAt 
    const formatted_date = new Date(date).toDateString()
    const { to, state } = params
    return(
        <article>
            <Link className='link' to={to} state={state} >
                <span>{author}</span>
                <p>{formatted_date}</p>
                <h3>{title}</h3>
                <p>{description}</p>
                <img src={urlImage} />
            </Link>
        </article>
    )
}

export default Card
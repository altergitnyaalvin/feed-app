import { Link, useNavigate } from 'react-router-dom'
import './Card.module.css'

const Card = ({ params, author, title, description, urlImage, date }) => {
    // Populate data tanggal/publishedAt 
    const formatted_date = new Date(date).toDateString()
    const { to, state } = params
    const navigate = useNavigate() // initiate useNavigate

    const handleClick = (e) => {
        e.preventDefault()
        // melakukan storing data menggunakan localStorage
        sessionStorage.setItem('article-detail', JSON.stringify(state))

        // melakukan navigasi ke halaman detail 
        navigate(to)
    }

    return(
        <article>
            <Link className='link' onClick={(e) => handleClick(e)} >
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
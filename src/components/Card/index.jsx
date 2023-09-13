import './Card.module.css'

const Card = ({ author, title, description, urlImage, date }) => {
    // Populate data tanggal/publishedAt 
    const formatted_date = new Date(date).toDateString()

    return(
        <article>
            <span>{author}</span>
            <p>{formatted_date}</p>
            <h3>{title}</h3>
            <p>{description}</p>
            <img src={urlImage} />
        </article>
    )
}

export default Card
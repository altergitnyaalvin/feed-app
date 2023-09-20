
import { useLocation } from "react-router-dom"

const ArticleContent = () => {
    const { state } = useLocation()
    const { item } = state

    return(
        <div>
            <h1>{item.title}</h1>
            <span>{item.author}</span>
            <span>{item.description}</span>
            <img src={item.urlToImage} />
            <section>
                {item.content}
            </section>
        </div>
    )
}

export default ArticleContent
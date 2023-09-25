
import { useLocation } from "react-router-dom"

const Article = () => {
    // const { state } = useLocation()
    // const { item } = state
    
    // Mengambil data dari localStorage
    const data = sessionStorage.getItem('article-detail')
    console.log('localStorage article', JSON.parse(data));
    const { item } = JSON.parse(data)
    console.log('item', item);
    return(
        <div>
            <h1>{item?.title}</h1>
            <span>{item?.author}</span>
            <span>{item?.description}</span>
            <img src={item?.urlToImage} />
            <section>
                {item?.content}
            </section>
        </div>
    )
}

export default Article
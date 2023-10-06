import { useEffect, useState } from "react"
import { fetchPokemons } from "../../api"
import { ColorRing } from "react-loader-spinner"

const Pokemons = () => {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchPokemonList = () => {
        setLoading(true)
        fetchPokemons()
            .then((res) => {
                console.log(res);
                if(res.status === 200) {
                    setList(res.data.results)
                    setLoading(false)
                } else {
                    // handle error
                }
            })
            .catch(error => {
                console.log(error);
                alert('failed to fetch pokemon list')
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchPokemonList()
    }, [])
    
    return(
        <div>
            {
                list.length > 0 && !loading ? list.map((item, index) => (
                    <div key={index}>
                        <h2>{item.name}</h2>
                        {/* <img src={item.sprites.front_default} alt={item.name} /> */}
                    </div>
                )) : <ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                    />
            }
        </div>
    )
}

export default Pokemons
import { Component, useEffect, useState } from "react";
import { articles } from '../../api/data'
import Card from "../../components/Card";
import './Home.module.css'
import NotFound from '../../assets/transistor-404.png'
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import { getPosts } from "../../api";
import { ColorRing } from "react-loader-spinner";

const Home = () => {
    // const [data, setData] = useState([]) // state untuk data awal
    const [filteredData, setFilteredData] = useState([]) // state untuk data yang terfilter
    const [search, setSearch] = useState('')
    const data = useSelector((state) =>  state.articles)
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false) // state untuk loader

    // Memanggil getPosts function
    useEffect(() => {
        setLoading(true) // nyalain loader sebelum selesai fetch API
        getPosts()
            .then((response) => {
                return response.json();
            }) // success
            .then((data) => {
                // ketika mendapat response success, kita simpan responsenya di state
                setPosts(data)
                setLoading(false) // berhentiin loader setelah selesai fetch API
            })
            .catch((error) => console.log('error => ', error)) // gagal
    }, [])

    useEffect(() => {
        console.log('get data from redux', data);
        // setData(articles)
        window.localStorage.setItem('article', JSON.stringify(articles)) // buat menyimpan data ke local storage
        
    }, []) 

    useEffect(() => {
        const getArticle =  window.localStorage.getItem('article')
        console.log(JSON.parse(getArticle));
    })

    const onFilter = (query) => {
        // untuk melakukan filtering dari title 
        let filter = data?.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
        );

        // update state filteredData untuk mengubah list article
        setFilteredData(filter)
    }

    const onSearch = (e) => {
        setSearch(e.target.value) // mengubah state search
        onFilter(search)
    }

    return(
        <>
            <h1>Berita Hari Ini</h1>
            <Input value={search} onChange={(e) => onSearch(e)} type='text' placeholder='Cari disini...'/>
            
            {/* {
                search !== "" ? // Jika search query kosong atau tidak sedang melakukan pencarian di kolom search input
                    <section>
                        {
                            filteredData.length > 0 ? filteredData.map((item, index) => (
                                <Card 
                                    params={{to: `/article/${index}`, state: {item}}} // props untuk passing "to" & "state" Link
                                    key={index}
                                    author={item.author}
                                    title={item.title}
                                    description={item.description}
                                    urlImage={item.urlToImage}
                                    date={item.publishedAt}
                                />
                            )) : <img src={NotFound} />
                        }
                    </section> 
                    : // Jika search query tidak kosong atau sedang melakukan pencarian di kolom search input
                    <section> 
                        {
                            data.length > 0 ? data.map((item, index) => (
                                <Card 
                                    params={{to: `/article/${index}`, state: {item}}}
                                    key={index}
                                    author={item.author}
                                    title={item.title}
                                    description={item.description}
                                    urlImage={item.urlToImage}
                                    date={item.publishedAt}
                                />
                            )) : <img src={NotFound} />
                        }
                    </section>
            } */}

            {
                !loading ? 
                    posts.length > 0 ? posts.map((item, index) => (
                        <div key={index}>
                            <h2>{item.title}</h2>
                            <p>{item.body}</p>
                        </div>
                    )) : <h2>Data Kosong</h2>
                    :
                    <ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                    />
            }
        </>
    )
}

export default Home
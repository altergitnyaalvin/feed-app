import { Component, useEffect, useState } from "react";
import { articles } from '../../api/data'
import Card from "../../components/Card";
import './Article.module.css'
import NotFound from '../../assets/transistor-404.png'
import Input from "../../components/Input";
import { Link } from "react-router-dom";

const Article = () => {
    const [data, setData] = useState([]) // state untuk data awal
    const [filteredData, setFilteredData] = useState([]) // state untuk data yang terfilter
    const [search, setSearch] = useState('')

    useEffect(() => {
        console.log('calling useEffect()');
        setData(articles)
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
            
            {
                search !== "" ? // Jika search query kosong atau tidak sedang melakukan pencarian di kolom search input
                    <section>
                        {/* Melakukan looping terhadap data article yang ada */}
                        {
                            filteredData.length > 0 ? filteredData.map((item, index) => (
                                <Card 
                                    params={{to: `/article/${index}`, state: item}} // props untuk passing "to" & "state" Link
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
            }
        </>
    )
}

export default Article
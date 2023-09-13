import { Component } from "react";
import { articles } from "../api/data";
import Card from "../components/Card";
import './Article.module.css'
import NotFound from '../assets/transistor-404.png'
import Input from "../components/Input";

class Article extends Component {
    constructor(props){
        super(props)

        // Initialize state
        this.state = {
            data: [],
            filteredData: [],
            search: "" // state untuk search input
        }
    }

    componentDidMount(){
        // logic untuk menambahkan data ke dalam state
        this.setState({
            data: articles // isi datanya
        })
    }

    onSearch(e){
        console.log(e.target.value) // mengambil value dari syntathic event
        this.setState({
            search: e.target.value
        },
        () => this.onFilter(this.state.search))
    }

    onFilter(query) {
        let { data } = this.state;

        // untuk melakukan filtering dari title 
        let filteredData = data?.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
        );

        // update state filteredData untuk mengubah list article
        this.setState({ filteredData });
    }
    
    // render UI
    render(){
        let { data, filteredData , search} = this.state

        return(
            <>
            <h1>Berita Hari Ini</h1>
                <Input value={search} onChange={(e) => this.onSearch(e)} />

                {
                    search !== "" ? // Jika search query kosong atau tidak sedang melakukan pencarian di kolom search input
                        <section>
                            {
                                filteredData.length > 0 ? filteredData.map((item, index) => (
                                    <Card 
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
}

export default Article
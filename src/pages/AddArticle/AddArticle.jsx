import { useState } from "react"
import Input from "../../components/Input"
import TextArea from "../../components/TextArea/TextArea"
import Button from "../../components/Button"
import './AddArticle.module.css'

const AddArticle = () => {
    const [articleForm, setArticleForm] = useState({
        author: '',
        title: '',
        description: '',
        urlToImage: '',
        url: '',
        content: ''
    })

    const handleChangeForm = (e) => {
        const { name, value } = e.target
        setArticleForm({
            ...articleForm,
            [name]: value
        })
    }

    return(
        <form className="form-add-article">
            <h2>Add New Article</h2>
            <label htmlFor='author'>Author</label>
            <Input 
                name='author'
                id='author'
                value={articleForm.author}
                onChange={(e) => handleChangeForm(e)}
                placeholder={'Author'}
                className='input-add-article'
            />
            <label htmlFor='title'>Title</label>
            <Input 
                name='title'
                id='title'
                value={articleForm.title}
                onChange={(e) => handleChangeForm(e)}
                placeholder={'Title'}
                className='input-add-article'
            />
            <label htmlFor='description'>Description</label>
            <Input 
                name='description'
                id='description'
                value={articleForm.description}
                onChange={(e) => handleChangeForm(e)}
                placeholder={'Description'}
                className='input-add-article'
            />
            <label htmlFor='content'>Content</label>
            <TextArea 
                name='content'
                id='content'
                value={articleForm.content}
                onChange={(e) => handleChangeForm(e)}
                placeholder={'Content'}
                className='input-add-article'
            />
            <Button className='btn-submit' text='Submit' onClick={() => {}} />
        </form>
    )
}

export default AddArticle
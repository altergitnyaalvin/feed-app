import { useState } from "react"
import Input from "../../components/Input"
import TextArea from "../../components/TextArea/TextArea"
import Button from "../../components/Button"
import './AddArticle.module.css'
import { addArticle } from "../../redux/slices/articleSlice"
import { useDispatch } from 'react-redux'

const AddArticle = () => {
    // create dispatch baru untuk trigger action & reducer
    const dispatch = useDispatch()
    const [articleForm, setArticleForm] = useState({
        source: {
            id: '',
            name: ''
        },
        author: '',
        title: '',
        description: '',
        url: '',
        urlToImage: '',
        publishedAt: '',
        content: ''
    })

    const handleChangeForm = (e) => {
        const { name, value } = e.target
        setArticleForm({
            ...articleForm,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        try{
            e.preventDefault()
            // dispatch new data to store
            dispatch(addArticle(articleForm))
        } catch(e){
            console.log('error handleSubmit', e);
        }
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
            <Button type="submit" className='btn-submit' text='Submit' onClick={(e) => handleSubmit(e)} />
        </form>
    )
}

export default AddArticle
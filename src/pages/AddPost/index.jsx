import { useState } from 'react'
import '../AddArticle/AddArticle.module.css'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { sendPostData } from '../../api'
import { useNavigate } from 'react-router-dom'

const AddPost = () => {
    const [post, setPost] = useState({
        title: '',
        body: '',
        userId: 2
    })
    const navigate = useNavigate()

    const handleChangeForm = (e) => {
        setPost({
          ...post,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // call api POST /posts
        sendPostData(post)
            .then(res => {
                // berhasil post
                alert('Data Terkirim!')

                // navigate to home
                navigate('/')
            })
            .catch(err => {
                // gagal
                console.log(err);
                alert('Gagal Mengirim Data!')
            })
        
    }

    return(
        <form className="form-add-article">
            <h2>Add New Article</h2>
            
            <label htmlFor='title'>Title</label>
            <Input 
                name='title'
                id='title'
                value={post.title}
                onChange={(e) => handleChangeForm(e)}
                placeholder={'Title'}
                className='input-add-article'
            />

            <label htmlFor='body'>Body</label>
            <Input 
                name='body'
                id='body'
                value={post.author}
                onChange={(e) => handleChangeForm(e)}
                placeholder={'Body'}
                className='input-add-article'
            />   

            <Button type="submit" className='btn-submit' text='Submit' onClick={(e) => handleSubmit(e)} />
        </form>
    )
}

export default AddPost
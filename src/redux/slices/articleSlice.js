import {createSlice} from '@reduxjs/toolkit'
import { articles } from '../../api/data'

export const articleSlice = createSlice({
    name: 'article', // untuk penamaan slice
    initialState: [], // data awal di store
    reducers: {
        addArticle(state, action){
            // fungsi menambahkan data article ke store
            console.log('state add article', state);
            console.log('action add article', action);
            const { payload } = action
            const article = {
                source: {
                    id: payload.id,
                    name: payload.name
                },
                author: payload.author,
                title: payload.title,
                description: payload.description,
                url: payload.url,
                urlToImage: payload.urlToImage,
                publishedAt: payload.publishedAt,
                content: payload.content
            }

            // push data ke state
            // state.push(article)

            // melakukan penyalinan data lama dengan data baru
            return [...state, article]
            // state.push(article)
        },
        editArticle(){
            // fungsi mengedit data article ke store
        },
    }
})

// export action untuk dispatch
export const { addArticle } = articleSlice.actions

// export reducer untuk configure store
export default articleSlice.reducer
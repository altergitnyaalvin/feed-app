import { useState } from "react"
import Button from "../../components/Button"
import TextArea from "../../components/TextArea/TextArea"
import OpenAI from "openai"
import { ColorRing } from "react-loader-spinner"
import Input from "../../components/Input"

const ChatAI = () => {
    const [command, setCommand] = useState('') // state input user
    const [loading, setLoading] = useState(false) // state loader untuk nunggu response dari openai
    const [result, setResult] = useState([]) // state untuk menyimpan response dari openai
    const [image, setImage] = useState("")

    const openai = new OpenAI({
        apiKey: process.env["OPENAI_API_KEY"], // defaults to process.env["OPENAI_API_KEY"]
        dangerouslyAllowBrowser: true
    });

    const handleSubmit = async (e) => {
        e.preventDefault()
        // TODO: handle openai completion
        setLoading(true)
        const res = await openai.chat.completions.create({
            // prompt: command, // parameter untuk send chat message
            // model: 'text-davinci-003',
            messages: [{ role: "system", content: command }],
            model: "gpt-3.5-turbo",

        })
        setResult(res.choices[0].message.content)
        console.log('result ', res);
        setLoading(false)
    }

    const handleGenerateImageByPrompt = async (e) => {
        e.preventDefault()
        setLoading(true)
        // const file = e.target.files[0]
        const image = await openai.images.generate({ prompt: command })
        setResult(image.data)
        setLoading(false)
    }

    return(
        <div>
            <h2>Chat AI</h2>
            <TextArea 
                name='command'
                id='command'
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                placeholder={'Masukkan perintah...'}
                className='input-add-article'
            />
            <Button type="submit" className='btn-submit' text='Submit Text' onClick={(e) => handleSubmit(e)} />
            <Button type="submit" className='btn-submit' text='Generate Image' onClick={(e) => handleGenerateImageByPrompt(e)} />
            
            {/* Render text result */}
            {
                loading ? 
                    <ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                    /> :
                    <div>
                        {/* {
                            result.length > 0 ? result?.map((item, index) => (
                                <div key={index}>
                                    <p>{item.message.content}</p>
                                </div>
                            )) : <div></div>
                        } */}
                        <p>{result}</p>
                    </div>

            }

            <h2>Image Generations AI</h2>
            {/* <Input
                value={image}
                type={'file'}
                onChange={(e) => setImage(e.target.files[0])}
                name='image'
            /> */}

            {/* Render image result */}
            {/* { result?.length > 0 ? result?.map((item, index) => <img key={index} src={item.url} alt="Image result" />) : <div></div>} */}
        </div>
    )
}

export default ChatAI
import OpenAI from 'openai';
import { useState } from 'react';
import { ColorRing } from "react-loader-spinner";

const ChatAI = () => {
    const [message, setMessage] = useState('')
    const [results, setResults] = useState('')
    const [loading, setLoading] = useState(false)

    console.log('api ', process.env.OPEN_AI_KEY);
    const openai = new OpenAI({
        apiKey: process.env.OPEN_AI_KEY, // defaults to process.env["OPENAI_API_KEY"]
        dangerouslyAllowBrowser: true, // defaults to
      });

    const handleClick = async (e) => {
        setLoading(true);
        e.preventDefault()
        const res = await openai.chat.completions.create({
            messages: [{ role: 'system', content: message }],
            model: 'gpt-3.5-turbo',
            temperature: 0.5,
            max_tokens: 100
        });
        setResults(res.choices);
        setLoading(false);

        console.log('results:', res);
    }

    return(
        <div>
            <h1>Chat AI</h1>
            <textarea
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button onClick={(e) => handleClick(e)}>Send</button>
            {
                !loading ? 
                    results.length > 0? results.map((item, index) => (
                        <div key={index}>
                            <p>{item.message.content}</p>
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
        </div>
    )
}

export default ChatAI
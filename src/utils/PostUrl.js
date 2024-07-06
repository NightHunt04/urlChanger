import axios from "axios"

async function PostUrl({ url }) {
    let data = JSON.stringify({
        "url": url
    })

    console.log(import.meta.env.VITE_APP_POST_URL)
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: import.meta.env.VITE_APP_POST_URL,
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
    }
    
    try {
        const response = await axios.request(config)
        return response.data
    } catch(err) {
        console.log(err)
        return { err: 'An error occured' }
    }
}

export default PostUrl
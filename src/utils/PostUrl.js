import axios from "axios"

async function PostUrl({ url, session_id }) {
    let data = JSON.stringify({
        "url": url
    })

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: import.meta.env.VITE_APP_POST_URL,
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session_id}`
        },
        data : data
    }
    
    try {
        const response = await axios.request(config)
        return response.data
    } catch(err) {
        console.log('this is err', err)
        return { err: 'An error occured' }
    }
}

export default PostUrl
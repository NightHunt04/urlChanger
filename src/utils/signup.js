import axios from "axios"

async function signupUser({ username, password }) {
    let data = JSON.stringify({
        "username": username,
        "password": password
    })
      
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://url134.vercel.app/user/signup',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
    }
      
    const response = await axios.request(config)
    console.log(response.data)
    return response.data
}

export default signupUser
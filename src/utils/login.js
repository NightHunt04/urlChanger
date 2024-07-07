import axios from "axios"

async function loginUser({ username, password }) {
    let data = JSON.stringify({
        "username": username,
        "password": password
    })
      
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://url134.vercel.app/user/login',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
    }
      
    let response = await axios.request(config)
    console.log(response)
    response = response.data.code
    return response 
}

export default loginUser
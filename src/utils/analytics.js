import axios from "axios"

async function viewAnalytics({ session_id }) {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://url134.vercel.app/analytics/${session_id}`,
    headers: { 
      'session_id': session_id
    }
  }
  
  const response = await axios.request(config)
  console.log(response.data)
  return response.data
}

export default viewAnalytics
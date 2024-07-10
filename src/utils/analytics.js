import axios from "axios"

async function viewAnalytics({ session_id }) {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://url134.vercel.app/analytics/${session_id}`,
    headers: { 
      'Authorization': `Bearer ${session_id}`
    }
  }

  console.log('analytics')
  
  const response = await axios.request(config)
  return response.data
}

export default viewAnalytics
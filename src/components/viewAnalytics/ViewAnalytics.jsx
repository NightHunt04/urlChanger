import { useEffect, useState } from "react"
import viewAnalytics from "../../utils/analytics"
import Cookies from "universal-cookie"
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from "react-router-dom"

function ViewAnalytics() {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const cookies = new Cookies()

    const fetchData = async () => {
        let response = await viewAnalytics({ session_id: cookies.get('sessionId')})
        console.log(response)

        if(response?.msg)
            navigate('/login')
        setData(response.analytics)
    }   

    useEffect(() => {
        fetchData()
    }, []) 

    return (
        <div className="flex flex-col mb-[20px] items-center justify-start mt-[45%] 2xl:mt-[15%] border-[1px] m-auto w-[95%] 2xl:w-[1200px] border-[#3e3e3e] py-3 text-left rounded-lg">
            <p className="font-semibold text-[15px] 2xl:text-[18px] pb-2 border-b-[1px] border-[#3e3e3e] w-full text-center">Analytics</p>

            <div className="2xl:mt-[20px] flex flex-col items-center w-[85%] 2xl:w-[90%] justify-center gap-2">
                <table className="w-full text-left mx-4 2xl:mx-8 table-fixed">
                    <thead>
                        <tr className="w-[100%] border-b border-[#3e3e3e]">
                            <th className="w-[5%] py-3 text-left">Sr.</th>
                            <th className="w-[50%] py-3 px-3 text-left">Original URL</th>
                            <th className="w-[30%] py-3 px-3 text-left">Changed URL</th>
                            <th className="w-[5%] py-3 text-left">Clicks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((d, ind) => {
                                return(
                                    <tr key={uuidv4()} className="border-b border-[#3e3e3e]">
                                        <td className="py-3 text-left align-top">{ind + 1}</td>
                                        <td className="py-3 text-left px-3 break-words align-top"><a href={d.redirectUrl} className='text-blue-400' target="_blank">{d.redirectUrl}</a></td>
                                        <td className="py-3 text-left px-3 break-words align-top"><a href={`https://url134.vercel.app/${d.shortId}`} className='text-orange-400' target="_blank">https://url134.vercel.app/{d.shortId}</a></td>
                                        <td className="py-3 text-left align-top">{d.clickHistory.clicks}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewAnalytics
import PostUrl from "./utils/PostUrl"
import { useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"

function App() {
  const [url, setUrl] = useState('')
  const [result, setResult] = useState(false)
  const [changedUrl, setChangedUrl] = useState('')
  const [savedOriginalUrl, setSavedOriginalUrl] = useState(url)
  const [isCopied, setIsCopied] = useState(false)

  const handlePost = async () => {
    setSavedOriginalUrl(url)
    setUrl('')

    const response = await PostUrl({ url: url })

    if(response.shortId) {
      console.log(response.shortId)
      setChangedUrl(`https://url134.vercel.app/url/${response.shortId}`)
      setResult(true)
    }
    else
      console.log('error')
  }

  const handleCopy = () => {
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 3000)
  }

  return (
    <div className='text-[12px] overflow-hidden 2xl:text-[16px] relative font-inter flex flex-col items-center justify-start pt-[150px] 2xl:pt-[190px] bg-[#0f0f0f] text-white min-h-screen w-full'>
      <h1 className='font-medium text-2xl 2xl:text-4xl'><span className='text-[#ff661f] font-bold'>URL</span>Changer</h1>

      <div className="flex items-center justify-center gap-4 w-[85%] 2xl:w-1/3 rounded-3xl mt-6 border-2 border-gray-500">
        <input 
          type="text" 
          placeholder="URL for example, https://www.google.com" 
          className="outline-none border-none px-3 py-2 2xl:px-6 2xl:py-3 w-full bg-transparent rounded-3xl"
          onChange={(e) => setUrl(e.target.value)}
          value={url}
          onKeyDown={(e) => {
            if(e.key === 'Enter')
              handlePost()  
          }}/>
        <button onClick={handlePost}><i className="fa-regular fa-paper-plane px-3 py-2 2xl:px-6 2xl:py-4 rounded-r-3xl border-[#ff661f] transition-all duration-300 hover:opacity-55"></i></button>
      </div>

      <div className={`${changedUrl !== '' && result ? 'flex' : 'hidden'} w-[97%] flex-col items-center justify-center px-3 py-2 mt-[60px] 2xl:mt-[110px]`}>
          <div className="flex items-center justify-center gap-2">
            <p className="text-[#7dff5d]">Successfully created url!</p>
          </div>

          <div className="flex flex-col px-2 items-start justify-center mt-3">
            <div className="flex items-center justify-center gap-1">
              <p>Changed:&nbsp;</p>
              <p className="border-2 border-[#658753] p-2 2xl:px-4 2xl:py-2 rounded-xl">{changedUrl}</p>
              <a href={changedUrl} target="_blank" className="ml-1 2xl:ml-3"><i className="fa-regular fa-paper-plane p-1 2xl:px-3 2xl:py-2 rounded-r-3xl transition-all duration-300 hover:opacity-55"></i></a>
              <CopyToClipboard text={changedUrl} onCopy={handleCopy}>
                <button onClick={handleCopy}><i className="fa-regular fa-copy p-1 2xl:px-3 2xl:py-2 rounded-r-3xl transition-all duration-300 hover:opacity-55"></i></button>
              </CopyToClipboard>
            </div>
            
            <div className="flex items-center mt-5 justify-center gap-1">
              <p>Original:&nbsp;</p>
              <p className="border-2 border-[#3c3c3c] ml-3 px-4 py-2 rounded-xl">{savedOriginalUrl}</p>
            </div>
          </div>
          {isCopied && 
              <div className="flex items-center justify-center gap-1 mt-[70px] border-2 border-[#658753] px-3 py-2 rounded-xl">
                <p>Copied&nbsp;</p>
                <img src="/Assets/tick.png" className="w-[13px] h-[13px] 2xl:w-[16px] mb-1 2xl:h-[16px] object-cover"></img>
              </div>}
        </div>
      </div>
  )
} 

export default App

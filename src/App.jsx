import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="w-full min-h-screen flex-col items-center justify-start text-[12px] overflow-hidden 2xl:text-[16px] relative font-inter bg-[#0f0f0f] text-white">
      <Outlet />
    </div>
  )  
} 

export default App

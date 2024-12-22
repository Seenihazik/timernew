import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@mui/material'

function App() {
  const [time, setTime] = useState(0)
  const [isRun,setIsRun]=useState(false)
  useEffect(()=>{
  let interval

  if(isRun){
    interval=setInterval(()=>{setTime((prevTime)=>prevTime+1)},1000)
  }else{
    clearInterval(interval)
  }
  return(()=>clearInterval(interval))
  },[isRun])
const getTime=(time)=>{
  const hours=Math.floor(time/3600)
  const minutes=Math.floor((time%3600)/60)
  const secons=Math.floor(time%60)
  return `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(secons).padStart(2,'0')}`
}
  return (
    <>
   <h2>{getTime(time)}</h2>
   <Button onClick={()=>setIsRun(!isRun)}>Start</Button>
   <Button onClick={()=>setIsRun(!isRun)}>Stop</Button>

</>
  )
}

export default App

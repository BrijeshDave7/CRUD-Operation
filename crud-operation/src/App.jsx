import { useEffect } from 'react'
import { getPost } from './api/PostApi'
import './App.css'

const App=()=>{
  
    const getPostData=async()=>{
      const res = await getPost()
      console.log(res.data);
    }

     useEffect(()=>{
      getPostData();
     },[])

  return (
    <>
    <div>
      Hello
    </div>
    </>
  )
}

export default App

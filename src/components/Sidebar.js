import React,{useState} from 'react'

const Sidebar = () => {

// useState ************* //
    const [name,setName] = useState('')
    const [isShow , setIsShow] = useState(true) //Boolean

    const click =()=>{
        setName('อัษฎายุธ')
    }
    const unclick =()=>{
        setName('')
    }
    //Toggle True And False
    const clickToggle =()=>{
        setIsShow(!isShow)
    }
// ********************** //
    return (
        <div>
               <h1>ชื่อ : {name}</h1>

                {isShow ? <p>True</p> : <p>False</p>}

               <button onClick={click}> Click เพิ่มชื่อ</button> 
               <button onClick={unclick}> Click ลบชื่อ</button> 
               <button onClick={clickToggle}> TOGGLE </button> 

        </div>
    )
}

export default Sidebar

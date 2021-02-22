import React,{useState} from 'react'

const Sidebar = () => {

// useState ************* //
    const [name,setName] = useState('')
    const click =()=>{
        setName('อัษฎายุธ')
    }
    const unclick =()=>{
        setName('')
    }
// ********************** //
    return (
        <div>
               <h1>ชื่อ : {name}</h1>
               <button onClick={click}> Click เพิ่มชื่อ</button> 
               <button onClick={unclick}> Click ลบชื่อ</button> 

        </div>
    )
}

export default Sidebar

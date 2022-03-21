import React from 'react'
import Buttons from './Buttons'
import Display from './Display'

const Input = () => {

    const [name,setName]= React.useState("")
    const [dept,setDept]= React.useState("")
    const [gen,setGen]= React.useState("")
    const [role,setRole]= React.useState("")
    const [sal,setSal]= React.useState("")
    const [data,setData]= React.useState([])

    const handleChange=(e,setSt)=>{
        setSt(e)
    }

    const handleAdd=async(e)=>{
        e.preventDefault()
        let payload = {
            name,
            dept,
            gen,
            role,
            sal
        }
        console.log(payload)
        payload= JSON.stringify(payload);
        fetch(`http://localhost:3004/profiles`,{
            method:"POST",
            body:payload,
            headers: {"Content-Type":'application/json'},
        })
        getCard()
    }

     React.useEffect(()=>{
         getCard()
     },[])
    const getCard=()=>{
        fetch(`http://localhost:3004/profiles`)
        .then((data)=>data.json())
        .then((data)=>setData(data))

    }

    const filterData=(filt)=>{
        let newData=data.filter((el)=>el.dept==filt)
        setData(newData)
        
    }

  return (
      <div>
          <form>
      <input value ={name} type="text" placeholder="name" onChange={(e)=>handleChange(e.target.value,setName)}/>
      <input value ={dept} type="text" placeholder="department" onChange={(e)=>handleChange(e.target.value,setDept)}/>
      <input value ={gen} type="text" placeholder="gender" onChange={(e)=>handleChange(e.target.value,setGen)}/>
      <input value ={role} type="text" placeholder="role" onChange={(e)=>handleChange(e.target.value,setRole)} />
      <input value ={sal} type="number" placeholder="salary" onChange={(e)=>handleChange(e.target.value,setSal)}/>
      <button onClick={(e)=>handleAdd(e)}>ADD EMPLOYEE</button>
      </form>
        <Buttons filterData={filterData} getCard={getCard}/>
      {data&&data.map((e)=><Display name={e.name} dept={e.dept} gen={e.gen} role={e.role} sal={e.sal}/>)}
     </div>
  )
}

export default Input
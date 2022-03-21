import React from 'react'

const Buttons = ({filterData,getCard}) => {
  return (
    <div>
        <button onClick={()=>{filterData("Marketing")}}>SHOW MARKETING</button>
        <button onClick={()=>{filterData("Hr")}}>SHOW HR</button>
        <button onClick={()=>{filterData("It")}}>SHOW IT</button>
        <button onClick={()=>{filterData("Finance")}}>SHOW FINANCE</button>
        <button onClick={()=>{getCard()}}>SHOW ALL</button>
        {/* <button onClick={()=>{filterData}}>SORT SALARY ASCENDING</button>
        <button onClick={()=>{filterData}}>SORT SALARY DESCENDING</button> */}


    </div>
  )
}

export default Buttons
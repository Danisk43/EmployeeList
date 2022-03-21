import React from 'react'

const Display = ({name,dept,gen,role,sal}) => {
  return (
    <div>
        <p>Name-{name}</p>
        <p>Department-{dept}</p>
        <p>Gender-{gen}</p>
        <p>Role-{role}</p>
        <p>Salary-{sal}</p>
    </div>
  )
}

export default Display
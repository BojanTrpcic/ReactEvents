import './App.css'
import { useState } from 'react'
import { UserClass, UserFunction, UserChildren } from './user'

function App() {
  
  const initialUsers = [
    { name: "Gimli", years: 140},
    { name: "Aragorn", years: 88},
    { name: "Legolas", years: 500 },
   ]

   const [users, setUsers] = useState(initialUsers)

   const tekst = "You shall be older one year"

  const uvecajGodine = () => {
    setUsers(prevState => {
      const updatedUsers = prevState.map(user => { 
        return {...user, years: user.years + 1}
      })
      return updatedUsers
    })
  }
    
  return (
      <>
        <h1>State</h1>
        <UserClass name={users[0].name} years={users[0].years} />
        <UserFunction name={users[1].name} years={users[1].years} />
        <UserChildren name={users[2].name} years={users[2].years}>
          {tekst}
        </UserChildren>
        <button onClick={uvecajGodine}>Wizardry</button>
      </>
    )

  }
   
export default App
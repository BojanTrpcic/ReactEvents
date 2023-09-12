import './App.css'
import { Component } from 'react'
import { UserClass, UserFunction, UserChildren } from './user'

const users = [
  { name: 'Ivan', years: 30, },
  { name: 'Marko', years: 35 },
  { name: 'Ana', years: 25 },
];

class App extends Component {
  render() {
    return (
      <>
        <h1>State</h1>
        <UserClass name={users[0].name} years={users[0].years} />
        <UserFunction name={users[1].name} years={users[1].years} />
        <UserChildren name={users[2].name} years={users[2].years}>
          a hobi mi je programiranje...
        </UserChildren>
      </>
    )
  }
}

export default App
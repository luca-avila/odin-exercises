import { useState } from 'react'
import { Cv } from './components/cv'
import './App.css'

const person1 = {
    name: 'John',
    age: 30,
    address: '123 Main St',
    number: '1234567890',
    experiences: [
        {title: 'Software Engineer', place: 'Google', date: '2020-2023'},
        {title: 'Software Engineer', place: 'Facebook', date: '2023-2025'}
    ],
    studies: [
        {title: 'Computer Science', place: 'Harvard', date: '2020-2023'}
    ],
    skills: ['React', 'Node.js', 'MongoDB']
}

function App() {
   return <Cv person={person1}/>
}

export default App

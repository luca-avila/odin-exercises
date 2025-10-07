import { Cv } from './components/cv'
import { CvForm } from './components/form'
import './App.css'
import { useState } from 'react'

function App() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [experiences, setExperiences] = useState([]);
    const [studies, setStudies] = useState([]);
    const [skills, setSkills] = useState([]);

    const addExperience = (title, place, date) => {
        setExperiences([...experiences, {title, place, date}]);
    }

    const addStudy = (title, place, date) => {
        setStudies([...studies, {title, place, date}]);
    }

    const addSkill = (skill) => {
        setSkills([...skills, skill]);
    }

    return (
        <div className="app">
            <CvForm state={{name, setName, age, setAge, address, setAddress, number, setNumber, email, setEmail, experiences, setExperiences, studies, setStudies, skills, setSkills, addExperience, addStudy, addSkill}}/>
            <Cv person={{name, age, address, number, email, experiences, studies, skills}}/>
        </div>
    )
}

export default App

import { v4 as uuidv4 } from 'uuid';
import { Cv } from '@/components/cv/Cv'
import { CvForm } from '@/components/form/Form'
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

    // Form field states
    const [experienceTitle, setExperienceTitle] = useState('');
    const [experiencePlace, setExperiencePlace] = useState('');
    const [experienceDate, setExperienceDate] = useState('');
    const [studyTitle, setStudyTitle] = useState('');
    const [studyPlace, setStudyPlace] = useState('');
    const [studyDate, setStudyDate] = useState('');
    const [skill, setSkill] = useState('');

    // Track which item is being edited
    const [editingId, setEditingId] = useState(null);
    const [editingType, setEditingType] = useState(null);

    const addExperience = (title, place, date) => {
        setExperiences([...experiences, {title, place, date, id: uuidv4()}]);
    }

    const addStudy = (title, place, date) => {
        setStudies([...studies, {title, place, date, id: uuidv4()}]);
    }

    const addSkill = (skill) => {
        setSkills([...skills, {skill, id: uuidv4()}]);
    }

    const removeExperience = (id) => {
        setExperiences(experiences.filter(experience => experience.id !== id));
    }

    const updateExperience = (id, title, place, date) => {
        setExperiences(experiences.map(experience => experience.id === id ? {...experience, title, place, date} : experience));
    }

    const removeSkill = (id) => {
        setSkills(skills.filter(skill => skill.id !== id));
    }

    const updateSkill = (id, skill) => {
        setSkills(skills.map(currentSkill => currentSkill.id === id ? {...currentSkill, skill} : currentSkill));
    }

    const removeStudy = (id) => {
        setStudies(studies.filter(study => study.id !== id));
    }

    const fillForm = (type, id, title, place, date) => {
        setEditingId(id);
        setEditingType(type);
        
        if (type === 'study') {
            setStudyTitle(title);
            setStudyPlace(place);
            setStudyDate(date);
        } else if (type === 'experience') {
            setExperienceTitle(title);
            setExperiencePlace(place);
            setExperienceDate(date);
        } else if (type === 'skill') {
            setSkill(title);
        }
    }

    const updateStudy = (id, title, place, date) => {
        setStudies(studies.map(study => study.id === id ? {...study, title, place, date} : study));
    }

    return (
        <div className="app">
            <CvForm 
                state={{
                    name, setName, 
                    age, setAge, 
                    address, setAddress, 
                    number, setNumber, 
                    email, setEmail,
                    experienceTitle, setExperienceTitle,
                    experiencePlace, setExperiencePlace,
                    experienceDate, setExperienceDate,
                    studyTitle, setStudyTitle,
                    studyPlace, setStudyPlace,
                    studyDate, setStudyDate,
                    skill, setSkill,
                    editingId, setEditingId,
                    editingType, setEditingType,
                    addExperience, 
                    addStudy, 
                    addSkill,
                    updateExperience,
                    updateStudy,
                    updateSkill
                }}
            />

            <Cv 
                person={{name, age, address, number, email, experiences, studies, skills}} 
                removeExperience={removeExperience} 
                removeStudy={removeStudy} 
                removeSkill={removeSkill} 
                fillForm={fillForm}
            />
        </div>
    )
}

export default App

import { useState } from "react";

export function CvForm({state}){

    const [experienceTitle, setExperienceTitle] = useState('');
    const [experiencePlace, setExperiencePlace] = useState('');
    const [experienceDate, setExperienceDate] = useState('');

    const [studyTitle, setStudyTitle] = useState('');
    const [studyPlace, setStudyPlace] = useState('');
    const [studyDate, setStudyDate] = useState('');

    const [skill, setSkill] = useState('');

    return (
    <div className="form">
        <h1>General information</h1>
        <input type="text" placeholder="Name" value={state.name} onChange={(e) => state.setName(e.target.value)} />
        <input type="text" placeholder="Age" value={state.age} onChange={(e) => state.setAge(e.target.value)} />
        <input type="text" placeholder="Address" value={state.address} onChange={(e) => state.setAddress(e.target.value)} />
        <input type="text" placeholder="Number" value={state.number} onChange={(e) => state.setNumber(e.target.value)} />
        <input type="text" placeholder="Email" value={state.email} onChange={(e) => state.setEmail(e.target.value)} />

        <br />

        <h1>Experiences</h1>
        <input type="text" placeholder="Title" value={experienceTitle} onChange={(e) => setExperienceTitle(e.target.value)}/>
        <input type="text" placeholder="Place" value={experiencePlace} onChange={(e) => setExperiencePlace(e.target.value)}/>
        <input type="text" placeholder="Date" value={experienceDate} onChange={(e) => setExperienceDate(e.target.value)}/>
        <button
            onClick={() => {
                state.addExperience(experienceTitle, experiencePlace, experienceDate);
                setExperienceTitle('');
                setExperiencePlace('');
                setExperienceDate('');
            }}
            >
            Add Experience
        </button>

        <br />
        
        <h1>Studies</h1>
        <input type="text" placeholder="Title" value={studyTitle} onChange={(e) => setStudyTitle(e.target.value)}/>
        <input type="text" placeholder="Place" value={studyPlace} onChange={(e) => setStudyPlace(e.target.value)}/>
        <input type="text" placeholder="Date" value={studyDate} onChange={(e) => setStudyDate(e.target.value)}/>
        <button
            onClick={() => {
                state.addStudy(studyTitle, studyPlace, studyDate);
                setStudyTitle('');
                setStudyPlace('');
                setStudyDate('');
            }}
            >
            Add Study
        </button>

        <br />

        <h1>Skills</h1>
        <input type="text" placeholder="Skill" value={skill} onChange={(e) => setSkill(e.target.value)}/>
        <button onClick={() => state.addSkill(skill)}>Add Skill</button>
    </div>
    )
}
export function Cv({ person, removeExperience, removeStudy, removeSkill, fillForm }) {

    const handleFillForm = (id, type, title, place, date) => {
        fillForm(type, id, title, place, date);
    }

    return (
        <div id="cv">
            <h1>{person.name}</h1>
            <ul>
                <li>{person.age} years old</li>
                <li>{person.address}</li>
                <li>{person.number}</li>
                <li>{person.email}</li>
            </ul>
            <hr />
            <h2>Experience</h2>
            {person.experiences.map((experience) => (
                <div key={experience.id} className="experience">
                    <h4>{experience.title}</h4>
                    <ul>
                        <li>{experience.place}</li>
                        <li>{experience.date}</li>
                    </ul>
                    <div className="buttons">
                        <button onClick={() => removeExperience(experience.id)}>Remove</button>
                        <button onClick={() => handleFillForm(experience.id, 'experience', experience.title, experience.place, experience.date)}>Update</button>
                    </div>
                </div>
            ))}
            <hr />
            <h2>Studies</h2>
            {person.studies.map((study) => (
                <div key={study.id} className="study">
                    <h4>{study.title}</h4>
                    <ul>
                        <li>{study.place}</li>
                        <li>{study.date}</li>
                    </ul>
                    <div className="buttons">
                        <button onClick={() => removeStudy(study.id)}>Remove</button>
                        <button onClick={() => handleFillForm(study.id, 'study', study.title, study.place, study.date)}>Update</button>
                    </div>
                </div>
            ))}
            <hr />
            <h3>Extra skills</h3>
            {person.skills.map((skill) => (
                <div key={skill.id} className="skill">
                    <li>{skill.skill}</li>
                    <div className="buttons">
                        <button onClick={() => removeSkill(skill.id)}>Remove</button>
                        <button onClick={() => handleFillForm(skill.id, 'skill', skill.skill)}>Update</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
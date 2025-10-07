import { useState } from "react";

export function Cv({ person }) {
    return (
        <div id="cv">
            <h1>{person.name}</h1>
            <ul>
                <li>{person.age}years old</li>
                <li>{person.address}</li>
                <li>{person.number}</li>
            </ul>
            <br />
            <h2>Experience</h2>
            {person.experiences.map((experience) => (
                <div key={`${experience.title}-${experience.place}-${experience.date}`} className="experience">
                    <h4>{experience.title}</h4>
                    <ul>
                        <li>{experience.place}</li>
                        <li>{experience.date}</li>
                    </ul>
                </div>
            ))}
            <h2>Studies</h2>
            {person.studies.map((study) => (
                <div key={`${study.title}-${study.place}-${study.date}`} className="study">
                    <h4>{study.title}</h4>
                    <ul>
                        <li>{study.place}</li>
                        <li>{study.date}</li>
                    </ul>
                </div>
            ))}
            <h3>Extra skills</h3>
            <ul>
                {person.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </div>
    )
}
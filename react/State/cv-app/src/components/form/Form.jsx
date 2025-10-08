import './Form.css'
export function CvForm({state}){

    const handleExperienceSubmit = () => {
        if (state.editingType === 'experience' && state.editingId) {
            state.updateExperience(state.editingId, state.experienceTitle, state.experiencePlace, state.experienceDate);
            state.setEditingId(null);
            state.setEditingType(null);
        } else {
            state.addExperience(state.experienceTitle, state.experiencePlace, state.experienceDate);
        }
        state.setExperienceTitle('');
        state.setExperiencePlace('');
        state.setExperienceDate('');
    };

    const handleStudySubmit = () => {
        if (state.editingType === 'study' && state.editingId) {
            state.updateStudy(state.editingId, state.studyTitle, state.studyPlace, state.studyDate);
            state.setEditingId(null);
            state.setEditingType(null);
        } else {
            state.addStudy(state.studyTitle, state.studyPlace, state.studyDate);
        }
        state.setStudyTitle('');
        state.setStudyPlace('');
        state.setStudyDate('');
    };

    const handleSkillSubmit = () => {
        if (state.editingType === 'skill' && state.editingId) {
            state.updateSkill(state.editingId, state.skill);
            state.setEditingId(null);
            state.setEditingType(null);
        } else {
            state.addSkill(state.skill);
        }
        state.setSkill('');
    };

    return (
    <div className="form">
        <h1>General information</h1>
        <input type="text" placeholder="Name" value={state.name} onChange={(e) => state.setName(e.target.value)} />
        <input type="text" placeholder="Age" value={state.age} onChange={(e) => state.setAge(e.target.value)} />
        <input type="text" placeholder="Address" value={state.address} onChange={(e) => state.setAddress(e.target.value)} />
        <input type="text" placeholder="Number" value={state.number} onChange={(e) => state.setNumber(e.target.value)} />
        <input type="text" placeholder="Email" value={state.email} onChange={(e) => state.setEmail(e.target.value)} />

        <hr />

        <h1>Experiences</h1>
        <input type="text" placeholder="Title" value={state.experienceTitle} onChange={(e) => state.setExperienceTitle(e.target.value)}/>
        <input type="text" placeholder="Place" value={state.experiencePlace} onChange={(e) => state.setExperiencePlace(e.target.value)}/>
        <input type="text" placeholder="Date" value={state.experienceDate} onChange={(e) => state.setExperienceDate(e.target.value)}/>
        <button onClick={handleExperienceSubmit}>
            {state.editingType === 'experience' && state.editingId ? 'Update Experience' : 'Add Experience'}
        </button>

        <hr />
        
        <h1>Studies</h1>
        <input type="text" placeholder="Title" value={state.studyTitle} onChange={(e) => state.setStudyTitle(e.target.value)}/>
        <input type="text" placeholder="Place" value={state.studyPlace} onChange={(e) => state.setStudyPlace(e.target.value)}/>
        <input type="text" placeholder="Date" value={state.studyDate} onChange={(e) => state.setStudyDate(e.target.value)}/>
        <button onClick={handleStudySubmit}>
            {state.editingType === 'study' && state.editingId ? 'Update Study' : 'Add Study'}
        </button>

        <hr />

        <h1>Skills</h1>
        <input type="text" placeholder="Skill" value={state.skill} onChange={(e) => state.setSkill(e.target.value)}/>
        <button onClick={handleSkillSubmit}>
            {state.editingType === 'skill' && state.editingId ? 'Update Skill' : 'Add Skill'}
        </button>
    </div>
    )
}
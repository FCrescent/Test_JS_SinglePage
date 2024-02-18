console.log('SubSkillList component loaded');
// subSkillList.js
import subSkills from './subSkills.js';

export class SubSkillList {
    constructor(skillCategory) {
        this.subSkills = subSkills[skillCategory] || [];
    }

    render() {
        const subSkillListContainer = document.createElement('div');
        subSkillListContainer.classList.add('sub-skill-list');
        
        const ul = document.createElement('ul');
        this.subSkills.forEach(subSkill => {
            const li = document.createElement('li');
            li.textContent = subSkill.name;
            ul.appendChild(li);
        });

        subSkillListContainer.appendChild(ul);
        return subSkillListContainer;
    }
}

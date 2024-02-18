console.log('skillList component loaded');

import { SubSkillList } from './subSkillList.js';

// Define the list of skill categories
const skillCategories = [
    { name: 'OOP' },
    { name: 'Design Patterns' },
    { name: 'Vim' },
    { name: 'DSA' }
];

// Define the SkillList component
export class SkillList {
    constructor() {
        this.skills = skillCategories; // Assign skill categories
    }

    render() {
        const skillListContainer = document.createElement('div');
        skillListContainer.classList.add('skill-list');
        
        const ul = document.createElement('ul');
        this.skills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill.name;
            li.addEventListener('click', () => this.handleSkillClick(li, skill.name));
            ul.appendChild(li);
        });

        skillListContainer.appendChild(ul);
        return skillListContainer;
    }

    handleSkillClick(li, skillCategory) {
        
        // Remove any existing sub-skill list elements
        const existingSubSkillLists = document.querySelectorAll('.sub-skill-list');
        existingSubSkillLists.forEach(element => {
            element.parentNode.removeChild(element); // Remove the entire parent <div> element
        });
        // Trigger rendering of the SubSkillList corresponding to the clicked skillCategory
        const subSkillListComponent = new SubSkillList(skillCategory);

        // Sélectionnez l'élément suivant le li
        const nextElement = li.nextElementSibling;

        // Insérez la div après l'élément li
        if (nextElement) {
            nextElement.insertAdjacentElement('beforebegin', subSkillListComponent.render());
        } else {
            // Si aucun élément suivant n'existe, insérez la div à la fin du parent de li
            li.parentElement.appendChild(subSkillListComponent.render());
        }

        // li.appendChild(subSkillListComponent.render());
        console.log(`Contenu du skill ${skillCategory} : ` + subSkillListComponent.subSkills.map(subskill => subskill.name).join(', '));
    }

}
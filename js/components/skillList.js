console.log('skillList component loaded');

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
            li.addEventListener('click', () => this.handleSkillClick(skill));
            ul.appendChild(li);
        });

        skillListContainer.appendChild(ul);
        return skillListContainer;
    }

    handleSkillClick(skill) {
        // Handle skill click event, you can navigate to sub-skill list or details page
        console.log(`Selected skill: ${skill.name}`);
    }
}


// console.log('skillList component loaded');
// // Define the SkillList component
// export class SkillList {
//     constructor(skills) {
//         this.skills = skills;
//     }

//     render() {
//         const skillListContainer = document.createElement('div');
//         skillListContainer.classList.add('skill-list');

//         const ul = document.createElement('ul');
//         this.skills.forEach(skill => {
//             const li = document.createElement('li');
//             li.textContent = skill.name;
//             li.addEventListener('click', () => this.handleSkillClick(skill));
//             ul.appendChild(li);
//         });

//         skillListContainer.appendChild(ul);
//         return skillListContainer;
//     }

//     handleSkillClick(skill) {
//         // Handle skill click event, you can navigate to sub-skill list or details page
//         console.log(`Selected skill: ${skill.name}`);
//     }
// }

// // Sample data for skills
// const skills = [
//     { name: 'OOP' },
//     { name: 'Design Patterns' },
//     { name: 'Vim' },
//     { name: 'DSA' }
// ];
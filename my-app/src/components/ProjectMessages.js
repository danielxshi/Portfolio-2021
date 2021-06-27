/**
 * interface ProjectMessages
 * @param {string} title
 * @param {string} category
 * @param {string} description
 * @param {string} role
 * @param {string} date 
 * @param {string} cta 
 * @param {string} team 
 */

const bosstepMessages = {
    title: "Bosstep",
    category: "Game",
    description: "BOSSTEP was a 6 week concept application designed for the childrens health sector. The project aimed to inspire physical activity with gamified features of minigames unlocked through physical activity, collecting characters and unlocking achievements.",
    overview: "Gamified exercise app geared towards kids who can choose heroes to play",
    role: "Website Development, Mobile Application UX/UI design, User Research, Field testing",
    date: "Fall 2020",
    cta: "VIEW WEBSITE",
    team: "Yuanyu Zhou, Anne Duong, Laura Reyerse, Sung Bong Kim, Seon Jeong"
};

const cliqMessages = {
    title: "CLIQ",
    category: "E-Commerce",
    description: "An e-commerce website curated for mechanical keyboard newcomers and enthusiasts",
    role: "Website Development, UX/UI design",
    date: "Spring 2021",
    cta: "VIEW WEBSITE",
    team: ""
};

const trackMessages = {
    title: "Moment Track",
    category: "Mobile App",
    description: "A battery monitoring application for users off-grid",
    role: "Mobile Application UX/UI design, User Research",
    date: "Spring 2021",
    cta: "TRY DEMO",
    team: ""
};

const projectMessages = {
    bosstep: bosstepMessages,
    cliq: cliqMessages,
    track: trackMessages
}

export default projectMessages;
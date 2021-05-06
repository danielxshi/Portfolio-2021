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
    description: "Gamified exercise app geared towards kids who can choose heroes to play",
    role: "Website Development, UX/UI design, A/B Testing",
    date: "2077",
    cta: "VIEW WEBSITE",
    team: "test"
};

const cliqMessages = {
    title: "CLIQ",
    category: "E-Commerce",
    description: "An e-commerce website curated for mechanical keyboard newcomers and enthusiasts",
    role: "Sketch, Wireframe, Website Development",
    date: "",
    cta: "TRY DEMO",
    team: "test"
};

const trackMessages = {
    title: "Moment Track",
    category: "Mobile App",
    description: "A battery monitoring application for users off-grid",
    role: "Wireframe, UX/UI design, User Research, Ethnography Study, Journey Mapping",
    date: "",
    cta: "TRY DEMO",
    team: "test"
};

const projectMessages = {
    bosstep: bosstepMessages,
    cliq: cliqMessages,
    track: trackMessages
}

export default projectMessages;
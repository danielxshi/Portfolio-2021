import React from 'react';

// Stylesheets
import './style/pages/_projects.scss';

// Import components
import SectionHelperText from "./components/ProjectDetails/SectionHelperText";
import SectionHelperGraphic from "./components/ProjectDetails/SectionHelperGraphic";
import CenterMod from "./components/ProjectDetails/CenterModule";
import NextProject from "./components/ProjectDetails/NextProj";
import ModMaxCol from "./components/ProjectDetails/MaxColModule"
import ModuleFiftyGRight from "./components/ProjectDetails/ModuleFiftyGRight"
import ModMaxContainerGraphic from "./components/ProjectDetails/ModMaxContainerGraphic"
import ThreeColNotes from "./components/ProjectDetails/ThreeColNotes"

// Import images
import sketchMinigameMLrg from './images/bosstep/sketch-minigame-m-lrg.jpg'
import sketchNb from './images/bosstep/sketch-overview-2500x.png'

// Prototype
import i1mMG1 from './images/bosstep/i1-friend-list.webp'
import i1MG2 from './images/bosstep/i1-mg1.webp'
import i1FriendList from './images/bosstep/i1-mg2.webp'

// Wireframe
import bosstepOverview from './images/bosstep/wireframe-overview.webp'
// Persona
import persona from './images/bosstep/persona-bstep.webp'

// Graphics
import pie from './images/bosstep/pie-graph-graphic.png'
import blob from './images/bosstep/blob-neu.png'
import personaGraphic from './images/bosstep/persona-graphic.png'

// Next project
import nextProj from './images/cliq-1000x600.webp'

const total = "03";

function Bosstep(props) {
    return (
        <main className="bosstep-page">
        <ModuleFiftyGRight 
            title={"MEET ERICA"} 
            p1={"Erica is 8 years old and enjoys playing video games. She does not feel motivated to go outside and exercise by herself but she enjoys playing games in PE class with her classmates."} 
            img={persona} 
            citation={"Persona"}
        />

        <ModMaxCol 
            img={sketchNb} 
            citation={"Sketch Overview"} 
            title={"BOSSTEP SKETCH"} 
            p1={"The first iteration of Bosstep consisted of a sketching the home page. Considerations included: A progress tracker for the amount of steps taken and a module to showcase the characters in the users party. Along the way, our group was split into 3 divisons. The divison I belonged to was in charge of research, minigames and friends list."} 
        />
        
        <ModMaxContainerGraphic 
            citation={"Wireframe Overview"} 
            img={bosstepOverview}
        />

        <ModuleFiftyGRight 
            img={sketchMinigameMLrg} 
            citation={"Bossfight Minigame"} 
            title={"MINIGAME REVISION"} 
            p1={"The initial considerations of the minigame did not include physical activity and this did not connect to our core value of encouraging healthy habits."} 
            p2={"Introducing the minigame BossWalk. The user is prompted to take a step in a certain direction. The aim is to keep the radius of movement minimal and the path traveled to be short to be wary of surrounding environments."}
        />

        <SectionHelperText 
            title={"DESIGN"} 
            sectionChapterCurrent={"01"} 
            sectionChapterTotal={total} 
            text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}
        />

        <SectionHelperGraphic 
            graphic={personaGraphic} 
            title={"FIELD TESTING"} 
            sectionChapterCurrent={"02"} 
            sectionChapterTotal={total} 
            text={"The research took a halt. BOSSTEP's demographic was difficult to reach because they belong to a vulnerable research group and there would need to be signed consent from their parent/guardian and approval from the University. This process would take time that we did not have."}
        />

        <ModuleFiftyGRight 
            title={"RESEARCH PIVOT"} 
            p1={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi id earum deleniti expedita, placeat, optio, esse nihil eius sequi non provident quas neque sapiente tempore dolor voluptatibus consectetur itaque debitis."} 
            img={pie} 
            citation={"FIELD TEST"}
        />

        <ThreeColNotes 
            img1={i1mMG1} 
            img2={i1MG2} 
            img3={i1FriendList} 
            citation={"PROTOTYPE"} 
            title={"title"} 
            text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, temporibus odit! Saepe dolor exercitationem eos, illum fugiat dicta culpa reiciendis cupiditate quo est nostrum, sed velit iusto mollitia suscipit accusamus."}
        />

        <SectionHelperGraphic 
            graphic={blob} 
            title={"DESIGN CHANGES"} 
            sectionChapterCurrent={"03"} 
            sectionChapterTotal={total} 
            text={"Our MVP included core features of achievements and a minigame unlocked after a certain amount of steps reached. Friends were added to share progress and incorporate a community to inspire and challenge one another."}
        />


        <CenterMod 
            title={"Working in a team"} 
            org={"SFU IAT339 Project"} 
            btnTitle={"View Website"} 
            text={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi id earum deleniti expedita, placeat, optio, esse nihil eius sequi non provident quas neque sapiente tempore dolor voluptatibus consectetur itaque debitis."}
        />

        <NextProject link={"/cliq"} img={nextProj}/>
        </main>
    );
}

export default Bosstep;

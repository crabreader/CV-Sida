import React from "react";
import portrait from '../assets/portrait.jpg'
import { easterEgg1 } from '../resources/main'
import Navbar from "./Navbar";
import MenuButton from "./MenuButton";

function Home() {
    return (
        <>
            <div className='page-layout'>
                <Navbar />
                <MenuButton />
                <main className="home-content">
                    <h1>Välkommen till min webbsida!</h1>
                    <br />
                    <img src={portrait} alt="En bild på Alexander Doja" />
                    <br />
                    <p>Hej, jag heter Alexander Doja. Jag är en student på utbildningen Systemutvecklare .NET med AI kompetens. Det här är min webbsida.</p>
                    <span lang="ja" id="easter-egg-1" onClick={easterEgg1}>謎</span>
                </main>
            </div>
        </>
    );
}

export default Home;
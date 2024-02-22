import React, { Component } from "react";
import { fetchCV } from "../resources/main";
import Navbar from "./Navbar";
import MenuButton from "./MenuButton";

class CV extends Component {
    componentDidMount() {
        fetchCV();
    }

    render() {
        return (
            <>
                <div className='page-layout'>
                    <Navbar />
                    <MenuButton />
                    <main>
                        <h1>CV</h1>
                        <br />
                        <section id="arbetslivserfarenhet">
                            <h2>Arbetslivserfarenhet</h2>
                            <hr />
            
                        </section>
                        <section id="utbildning">
                            <h2>Utbildning</h2>
                            <hr />
            
                        </section>
                    </main>
                </div>
            </>
        );
    }
}

export default CV;
import React, { Component, useEffect } from "react";
import Navbar from "./Navbar";
import MenuButton from "./MenuButton";
import milk from "../assets/15.gif";
import balls from "../assets/22.gif";
import spiral from "../assets/28.gif";
import { easterEgg2 } from "../resources/main";

class Mystery extends Component {

    componentDidMount() {
        easterEgg2(['1', '3', '3', '7']);
    }

    render () {
        return (
            <>
                <div className='page-layout'>
                    <Navbar />
                    <MenuButton />
                    <main>
                        <h1>???</h1>
                        <div class="gifs">
                            <img src={milk} alt="snurrande mjölk" />
                            <img src={balls} alt="ringar och bollar som snurrar" />
                            <img src={spiral} alt="en spiral som snurrar" />
                        </div>
                    </main>
                </div>
            </>
        );
    }
}

export default Mystery;
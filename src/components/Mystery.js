import React, { Component } from "react";
import Navbar from "./Navbar";
import MenuButton from "./MenuButton";
import milk from "../assets/15.gif";
import balls from "../assets/22.gif";
import spiral from "../assets/28.gif";
import Modal from "./Modal";

class Mystery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            userSequence: []
        };
        this.targetSequence = ['1', '3', '3', '7'];
    }

    closeModal = () => {
        this.setState({ isModalOpen: false});
    };

    handleKeyDown = (event) => {
        const pressedKeys = this.state.userSequence;
        const target = this.targetSequence;
        
        pressedKeys.push(event.key);
        if (pressedKeys.length > 4) {
            pressedKeys.shift();
        }

        if (pressedKeys.length === target.length && pressedKeys.every((element, index) => element === target[index])) {
            this.setState({ isModalOpen: true});
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    render () {
        const { isModalOpen } = this.state;

        return (
            <>
                <div className='page-layout'>
                    <MenuButton />
                    <Navbar />
                    <main>
                        <h1>???</h1>
                        <div className="gifs">
                            <img src={milk} alt="snurrande mjölk" />
                            <img src={balls} alt="ringar och bollar som snurrar" />
                            <img src={spiral} alt="en spiral som snurrar" />
                        </div>

                        <Modal isOpen={isModalOpen} onClose={this.closeModal}>
                            <h2>:)</h2>
                            <p>Bra jobbat!</p>
                        </Modal>
                    </main>
                </div>
            </>
        );
    }
}

export default Mystery;
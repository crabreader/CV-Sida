import React from "react";
import { useRouteError } from "react-router-dom";
import Navbar from "./components/Navbar";
import MenuButton from "./components/MenuButton";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <div className='page-layout'>
                <Navbar />
                <MenuButton />
                <main className="home-content">
                    <h1>Hoppsan!</h1>
                    <p>Ett oväntat fel uppstod.</p>
                    <p>
                        <i>{error.statusText} || {error.message}</i>
                    </p>
                </main>
            </div>
        </>
    );
}
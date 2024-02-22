import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import MenuButton from "./MenuButton";

const Portfolio = () => {
    const [loading, setLoading] = useState(true);
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await axios.get('https://api.github.com/users/crabreader/repos');

                setRepos(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Kunde inte hämta repos:', error);
            }
        };

        fetchRepos();
    }, []);



    return (
        <div className='page-layout'>
            <MenuButton />
            <Navbar />
            <main>
                <h1>Portfolio</h1>
                {loading ? (
                    <div className="loading">
                        <h2>Hämtar projekt...</h2>
                    </div>
                ) : (
                <div class="portfolio-grid">
                    {repos.map(repo => (
                        <div className="portfolio-item" key={repo.id}>
                            <h2>{repo.name}</h2>
                            <hr />
                            <p>{repo.description}</p>
                            <a href={repo.html_url}>Github</a>
                        </div>
                    ))}
                </div>
                )}
            </main>
        </div>
    );
};

{/*function Portfolio() {
    return (
        <>
            <div className='page-layout'>
                <MenuButton />
                <Navbar />
                <main>
                    <h1>Portfolio</h1>
                    <hr />
                    <div class="portfolio-grid">
                        <div class="portfolio-item">
                            <h2>C# Övningar</h2>
                            <hr />
                            <div class="button-wrapper">
                                <a class="button" href="#popup1">Visa mer</a>
                            </div>
                            <div id="popup1" class="overlay">
                                <div class="popup">
                                    <h2>C# Övningar</h2>
                                    <a class="close" href="#">x</a>
                                    <div class="content">
                                        <p>Grundläggande programmering i C#.</p>
                                        <a href="https://github.com/crabreader/NET23">Github</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="portfolio-item">
                            <h2>Individuellt Databasprojekt</h2>
                            <hr />
                            <div class="button-wrapper">
                                <a class="button" href="#popup2">Visa mer</a>
                            </div>
                            <div id="popup2" class="overlay">
                                <div class="popup">
                                    <h2>Individuellt Databasprojekt</h2>
                                    <a class="close" href="#">x</a>
                                    <div class="content">
                                        <p>En databas med flera tabeller och en konsolapplikation för att interagera med databasen.</p>
                                        <a href="https://github.com/crabreader/Individuellt-databasprojekt">Github</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="portfolio-item">
                            <h2>Bank App</h2>
                            <hr />
                            <div class="button-wrapper">
                                <a class="button" href="#popup3">Visa mer</a>
                            </div>
                            <div id="popup3" class="overlay">
                                <div class="popup">
                                    <h2>Bank App</h2>
                                    <a class="close" href="#">x</a>
                                    <div class="content">
                                        <p>Jag medverkade i det här grupparbetet för att skapa ett enkelt banksystem.</p>
                                        <a href="https://github.com/ByteBears-NET23/UntitledBankApp">Github</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="portfolio-item">
                            <h2>CV-Sida</h2>
                            <hr />
                            <div class="button-wrapper">
                                <a class="button" href="#popup4">Visa mer</a>
                            </div>
                            <div id="popup4" class="overlay">
                                <div class="popup">
                                    <h2>CV-Sida</h2>
                                    <a class="close" href="#">x</a>
                                    <div class="content">
                                        <p>Den här webbsidan :)</p>
                                        <p>Skriven i HTML, CSS och Javascript.</p>
                                        <a href="https://github.com/crabreader/CV-Sida">Github</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}*/}

export default Portfolio;
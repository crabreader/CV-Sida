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

export default Portfolio;
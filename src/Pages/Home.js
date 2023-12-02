import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import '../Styles/Home.css'

const Home = () => {
    return(
        <div className="home">
            <div className="about">
                <h3>Hi, My Name is Jwala Sudha Preethi</h3>
                <div className="prompt">
                    <p>A Software Engineer</p>
                    <LinkedInIcon/>
                    <EmailIcon/>
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2>Front-End</h2>
                        <span>React.js, HTML, CSS, TailwindCSS, BootStrap</span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>Node.js, .NET, MySQl</span>
                    </li>
                    <li className="item">
                        <h2>Languages</h2>
                        <span>C, C#, Python, JavaScript</span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home
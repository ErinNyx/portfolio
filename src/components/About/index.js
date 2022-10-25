import Sidebar from '../Sidebar';
import './index.scss';

const About = () => {
    return (
        <div className='App'>
            <Sidebar />
            <div className='page'>
                <h1 className='title'>About Me</h1>
                <div className='main'>
                    Hi! My name is Erin (She/Her, transgender) and I'm a 21 year old college student in the Computer Science Major at the University of North Carolina at Greensboro. <br /><br />
                    My interests include Software Engineering and Web Development though I'm also considering pursuing AI Development. In that field
                    I'm interested in the kind of research that leads to video tampering detection and data analytics via node clustering. <br /><br />

                    I live in Greensboro, NC, in a little apartment on the outskirts of the city. I have two lovely cats named Muffin and Nyx that I love dearly.
                    My hobbies include specialty coffee, music, and playing video games. I love listening to music! My favourite bands are BVB, Palaye Royale, and Skillet in that order.<br /><br />

                    As for projects, you can see them on my Github. My current passion project is called Kottoko and it's based on NodeJS with MongoDB as a database.  
                    Kottoko is a Japanese learning app designed to simulate a University learning style. I disagree with many other language apps for Japanese that either 
                    put that kind of experience behind a paywall or omit it entirely. Kottoko's front end is entirely in HTML, CSS, and JS with no framework supporting it, which may change soon. I learned REACT for this portfolio website and once you learn REACT you never go back! <br />
                    In the past I've worked on other projects in Java. On my github you can also see that I have a Java recreation of Mario that I never finished - 
                    I was just picking up the project to learn the language.<br /><br />

                    In the past I've worked various retail jobs and the like. Most recently was as a HealthCare - Social Worker for medicaid/UnitedHealth Care. <br />
                    At that job I worked as a part of a team of 23 people supporting various services dealing with Coordination of Care.<br /><br />

                    I am actively looking for work or an internship for the Summer of 2023 in the Greensboro/Charlotte/Raleigh area, if you think I'd be a great fit for your team, 
                    feel free to contact me at my LinkedIn on the left! Also on the left you can see my HackerRank profile and my Github. Alternatively, I've provided a contact form in the contact tab, also on the left.
                </div>

                <div className='tasteful-tab'><h1>Love, <br />Erin ♥</h1></div>
            </div>
        </div>
    )
}

export default About;
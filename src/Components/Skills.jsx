import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'

const Skills = () => {
    return ( 
        <section id="skills">
            <div className="container skill">
                <h2 className="text-center">Mes Compétences</h2>
                <div className="divider"></div>
                <div>
                    <ProgressBar animated now="info" className="my-1" now={95} label="HTML-CSS"/>
                    <ProgressBar animated now="info" className="my-1" now={85} label="PHP" />
                    <ProgressBar animated now="info" className="my-1" now={80} label="JS - jQuery" />
                    <ProgressBar animated now="info" className="my-1" now={85} label="Symfony" />
                    <ProgressBar animated now="info" className="my-1" now={75} label="MYSQL - SQL" />
                    <ProgressBar animated now="info" className="my-1" now={70} label="Wordpress" />
                </div>
            </div>
        </section>
     );
}
 
export default Skills;
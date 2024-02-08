import React from 'react';

/* Componet */
import About from './About';
import Service from './Service';
import Project from './Project';
import Contact from './Contact';
import AboutNew from './AboutNew';

const Main = () => (
    <main>
        <AboutNew />        

        <Service />
        
        <Project />

        <Contact />
    </main>
);

export default Main;
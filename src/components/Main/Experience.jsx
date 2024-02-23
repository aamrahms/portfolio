import React from 'react';
import '../../pages/Service/ServicesPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

// Img
const img = require.context('../../img', true);
const Experience = () => (
    <section className="servicios" id="servicios">
        <h2 className="heading">
            <FormattedMessage
                id='services'
                defaultMessage='Experience'
            />
        </h2>
        <div className="row" id="experience">
            <div className="columns" data-aos="fade-up" data-aos-delay="200">
                <i><img alt="Biodiversity for a livable climate" className="icons-skils" src={img(`./b4c.jpeg`)} /></i>
                <h3>
                    <FormattedMessage
                        id='design'
                        defaultMessage='Web Designer'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='design-info'
                        defaultMessage='I enhance web pages with modernized designs. Focused on optimizing user experiences, I ensure informative content resonates with newcomers'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="300">
                <i><img alt="Bindable" className="icons-skils" src={img(`./bindable.png`)} /></i>
                <h3>
                    <FormattedMessage
                        id='development'
                        defaultMessage='Frontend developer'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='development-info'
                        defaultMessage='Revamped 15 websites at Bindable to boost customer conversion rates, updated address autocomplete API, and streamlined AWS logo storage.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="400">
                <i><img alt="wipro" className="icons-skils" src={img(`./wipro.svg`)} /></i>
                
                <h3>
                    <FormattedMessage
                        id='marketing'
                        defaultMessage='Backend developer'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='marketing-info'
                        defaultMessage='Modernized architecture with microservices, optimized data consistency with Kafka, and delivered timely, quality code adjustments.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="500">
                <i><img alt="wipro" className="icons-skils" src={img(`./wipro.svg`)} /></i>
                
                <h3>
                    <FormattedMessage
                        id='maintenance'
                        defaultMessage='Associate SAP Consultant'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='maintenance-info'
                        defaultMessage='Managed ERP systems, minimized downtime by 90%, ensured database integrity, and executed client business requirements with ServiceNow.'
                    />
                </p>
            </div>
             <div className="columns" data-aos="fade-up" data-aos-delay="600">
                <i><img alt="persistent" className="icons-skils" src={img(`./persistent.png`)} /></i>
                <h3>
                    <FormattedMessage
                        id='seo'
                        defaultMessage='Full Stack Developer Intern'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='seo-info'
                        defaultMessage='Developed a Java-based website, integrating HTML5, CSS3, and geolocation for enhanced user experience.'
                    />
                </p>
            </div>
            {/*
            <div className="columns" data-aos="fade-up" data-aos-delay="700">
                <i className="fas fa-tachometer-alt"></i>
                <h3>
                    <FormattedMessage
                        id='optimization'
                        defaultMessage='Website optimization'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='optimization-info'
                        defaultMessage='Complete optimization of your web page, improving loading speed, using optimized images, a good URL, to give a better experience to users who visit the website'
                    />
                </p>
            </div> */}
        </div>
        {/* <div className='portafolio-btn'>
            <Link to="/service">
                <ButtomGet/>
            </Link>
        </div> */}
    </section>
);

export default React.memo(Experience);
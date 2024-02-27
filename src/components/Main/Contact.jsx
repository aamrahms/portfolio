import React from 'react';
import '../../pages/Contact/ContactPage.css'
/* TypedJs */
import Typical from 'react-typical';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Contact = () => (

    <section className="contactos" id="contactos">

        <h2 className="heading">
            <FormattedMessage
                id='contact'
                defaultMessage='Contact'
            />
        </h2>
        <h3 className="titulo" data-aos="fade-left" data-aos-delay="300">
            <FormattedMessage
                id='contact-info'
                defaultMessage='Contact me by: '
            />
            <Typical
                className="site-contacto"
                loop={Infinity}
                wrapper="b"
                // steps={[
                //     'Gmail', 1500,
                //     'Outlook', 1500,
                //     'Facebook', 1500,
                //     'Drive', 1500,
                //     'Linkedin', 1500,
                //     'Github', 1500,
                // ]}
                steps={[
                    '', 1000, // Initial delay before typing starts
                    'Gmail', 1500, '', 500, // Display "Gmail", then delay before erasing
                    'Outlook', 1500, '', 500, // Display "Outlook", then delay
                    'Facebook', 1500, '', 500, // And so on...
                    'Drive', 1500, '', 500,
                    'Linkedin', 1500, '', 500,
                    'Github', 1500, '', 500, // Last item before loop restarts
                ]}
            />

        </h3>

        <div className="icons">
            <a href="mailto:aamrah.ams@gmail.com" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fas fa-envelope"></span>
                </div>
                <div className="text">
                    Gmail
                </div>
            </a>
            <a href="mailto:aamrah.a@northeastern.edu" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-telegram"></span>
                </div>
                <div className="text">
                    Outlook
                </div>
            </a>
            <a href="https://www.facebook.com/twilight4evr/" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-facebook"></span>
                </div>
                <div className="text">
                    Facebook
                </div>
            </a>
            <a href="https://drive.google.com/drive/u/1/folders/13IEMnA9kFndOFjJw47n9J3dZF4Gr6HHC" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-google-drive"></span>
                </div>
                <div className="text">
                    Google Drive
                </div>
            </a>
            <a href="https://www.linkedin.com/in/aamraha/" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-linkedin-in"></span>
                </div>
                <div className="text">
                    Linkedin
                </div>
            </a>
            <a href="https://github.com/aamrahms" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-github-square"></span>
                </div>
                <div className="text">
                    GitHub
                </div>
            </a>
        </div>
    </section>
);

export default React.memo(Contact);
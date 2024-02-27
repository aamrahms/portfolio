import React from 'react';
import './Footer.css';

/* Multi idioma */
import {FormattedMessage} from 'react-intl';


const Footer = () =>{
    // Fecha
    let fecha = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="site-footer">
                <div className="copyright">
                    <p>
                        <FormattedMessage
                            id='footer-info'
                            defaultMessage='Page created by Aamrah'
                        />
                    </p>
                    <p>&copy; {fecha}. All Rights Reserved.</p>
                </div>
                <div className="redes-sociales">
                    <a href="https://www.linkedin.com/in/aamraha/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/aamrahms" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a href="mailto:aamrah.ams@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fab fas fa-envelope"></i></a>
                    <a href="https://www.facebook.com/twilight4evr/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                </div>
            </div>
        </footer>
    )
};

export default React.memo(Footer);
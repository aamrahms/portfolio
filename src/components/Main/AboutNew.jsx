import React from 'react';
import '../../pages/About/AboutPage.css'
import { Link } from 'react-router-dom';
import cv from '../../cv/cv.pdf';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';



/* Img */
import imgabout from '../../img/Aamrah.jpg';
const img = require.context('../../img', true);
console.log(process.env);

const About = () => {
    function readMore() {
        let btnHide = document.querySelector("#btn-hide");
        let parrafoActive = document.querySelector(".parrafo-active");
    
        parrafoActive.classList.toggle("show");
    
        if (parrafoActive.classList.contains("show")) {
          btnHide.innerHTML = "↑";
        } else {
          btnHide.innerHTML = "Read more";
        }
      }
    return(
    <section className="sobre-mi" id="sobre-mi">
        <h2 className="heading">
            <FormattedMessage
                id='about'
                defaultMessage='About me'
            />
        </h2>
        <section className="sobre-mi-seccion" id="sobre-mi">
          <div className="sobre-mi-container">
            <div className="sobre-mi-img-container">
              <img src={imgabout} alt="" className="sobre-mi-img" />
              
              <a href={cv} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo cv buttonDownload">
                  <FormattedMessage
                      id='btn-cv'
                      defaultMessage='Download CV'
                  />
              </a>
            </div>
            <div className="sobre-mi-info">
              <p>
                <FormattedMessage
                  id='about-info-1'
                  defaultMessage="Welcome to my digital abode! Let me help you dive into all things me! I am a software engineer expertising in full stack software development."
                />
              </p>

              <div className="hide parrafo-active">
                <p>
                  <FormattedMessage
                    id='about-info-2'
                    defaultMessage="My passion lies in crafting web experiences that are both enjoyable and intuitive. I strive to create solutions to problems I consider the need of the hour, something I would personally love to use; this ultimately has been the driving force for many of my projects. From a young age, I've been fascinated by the process of creation, often inspired by &quot;How It's Made&quot; videos. Coupled with my love for fantasy literature, it's no surprise that I find myself wading through the murky waters of software development with a wooden raft seeking shore day in and day out."
                  />
                </p>

                <p>
                  <FormattedMessage
                    id='about-info-3'
                    defaultMessage="My journey into this field has been like the adventures of Dora the Explorer. With experience ranging from support administration to backend and frontend development, I bring a versatile skill set to the table. I believe in continuous learning and growth, always seeking new challenges to broaden my horizons. "
                  />
                </p>
                <p>
                  <FormattedMessage
                    id='about-info-4'
                    defaultMessage="Thank you for the time you have taken to read about me. I look forward to connecting and exploring potential opportunities together! I am actively seeking and open to work so feel free to contact me and I will be sure to get back to you asap!"
                  />
                </p>
              </div>

              {/* <div className="skill">
                    <div>
                        <img alt="wipro" className="icons-skils" src={img(`./wipro.svg`)} />
                        <h5>Wipro Limited</h5>
                    </div>
                    <div>
                        <img alt="persistent" className="icons-skils" src={img(`./persistent.png`)} />
                        <h5>Persistent Systems</h5>
                    </div>
                    <div>
                        <img alt="Bindable" className="icons-skils" src={img(`./bindable.png`)} />
                        <h5>Bindable</h5>
                    </div>
                    <div>
                        <img alt="Biodiversity for a livable climate" className="icons-skils" src={img(`./b4c.jpeg`)} />
                        <h5>Biodiversity for a livable climate</h5>
                    </div>    
            </div> */}

              <div className="btn-info"
                  onClick={readMore}>
                <div className="custom-btn btn-codigo" id="btn-hide"  ><span>Read more</span></div>
              </div>
            </div>

          </div>
        </section>
        <div className="row container">
            {/*
                    <li>
                        <p><span>Email:</span> <h3> aamrah.ams@gmail.com </h3></p>
                    </li>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='from'
                                    defaultMessage='From:'
                                />
                            </span>
                            <h3> Non Resident Indian, Born and Raised in Saudi Arabia</h3>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='location'
                                    defaultMessage='Location: '
                                />
                            </span>
                            <h3>United States</h3>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>
                                Hobbies:{" "}
                            </span>
                               <h3> Reading, Baking and Dancing</h3>
                        </p>
                    </li>
                </ul>
                <h4>
                    <FormattedMessage
                        id='experience'
                        defaultMessage='Experience'
                    />
                </h4>
                <h3>
                    <FormattedMessage
                        id='my-experience'
                        defaultMessage='I have 4 years of experience working in a full stack developer capacity at Wipro, Persistent, Bindable and Biodiversity for a livable climate.'
                    />
                </h3>
                <div className="skill">
                    <div>
                        <img alt="wipro" className="icons-skils" src={img(`./wipro.svg`)} />
                        <h5>Wipro Limited</h5>
                    </div>
                    <div>
                        <img alt="persistent" className="icons-skils" src={img(`./persistent.png`)} />
                        <h5>Persistent Systems</h5>
                    </div>
                    <div>
                        <img alt="Bindable" className="icons-skils" src={img(`./bindable.png`)} />
                        <h5>Bindable</h5>
                    </div>
                    <div>
                        <img alt="Biodiversity for a livable climate" className="icons-skils" src={img(`./b4c.jpeg`)} />
                        <h5>Biodiversity for a livable climate</h5>
                    </div>
                </div>
                <ul>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='team-size'
                                    defaultMessage='Team Size : '
                                />
                            </span>
                            <h3>17 (max)</h3>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='client-experience'
                                    defaultMessage='Client experience : '
                                />
                            </span>
                            <h3>Barminco, Phillip Morris International, Kelloggs International, Harrison, Texas medical, Augeo, Sofi, Coverzoo, Yaa, Napa, AOL, Iptiq, ABZ, Gallagher. </h3>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='volunteer-experience'
                                    defaultMessage= " Volunteer experience : "              
                                />
                            </span>
                            <h3> Mentor, Proofreader, Content writer, Recruitment coodinator, Employee experience curator. </h3>
                        </p>
                    </li>
                </ul>
                <div className="mas-info">
                    <a href={cv} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo buttonDownload">
                        <FormattedMessage
                            id='btn-cv'
                            defaultMessage='Download Resume'
                        />
                    </a>
                    <div className='mas-info-btn'>
                    <Link to="/about">
                        <ButtomGet/>
                    </Link>
                    </div>
                </div>
            </div>*/}
            
        </div>
    </section>
    )
};

export default React.memo(About);
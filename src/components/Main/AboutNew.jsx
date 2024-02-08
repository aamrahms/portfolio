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

const About = () => (
    
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
                  defaultMessage="Welcome to my humble digital abode! Let me walk you through my life. I am an engineer both in mind and heart, I started my journey into CS much like every other person out there, by opting it for the lack of a better alternative. Kidding!"
                />
              </p>

              <div className="hide parrafo-active">
                <p>
                  <FormattedMessage
                    id='about-info-2'
                    defaultMessage='I love creating web experiences that are fun and easy to use. Something I personally would love to use and that’s what most of my academic and personal projects are born out of.  I have pursued careers in a Dora the Explorer sort of way.'
                  />
                </p>

                <p>
                  <FormattedMessage
                    id='about-info-3'
                    defaultMessage="I have experience working as a support administrator and engineer, Backend developer and Front end developer."
                  />
                </p>
                <p>
                  <FormattedMessage
                    id='about-info-4'
                    defaultMessage="Growing up I have always been intrigued by How Its Made videos, the process of making something out of the basics has enlightened my fancy and that’s how I developed a penchant for creation. Add to that my passion for reading books set in the world of fantasy, I believe it was inevitable that this is where am at."
                  />
                </p>
              </div>

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

              <div className="btn-info">
                  {/* onClick={readMore} */}
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
            <section className="skills" id="skills">
            <div className="columns col-skill" data-aos="fade-left" data-aos-delay="650">

                <h2 className="heading">
                    Skills
                </h2>
                <h4>Front-End</h4>
                <div className="skill">
                    <div>
                        <img alt="HTML" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
                        <h5>HTML</h5>
                    </div>
                    <div>
                        <img alt="CSS" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
                        <h5>CSS</h5>
                    </div>
                    <div>
                        <img alt="Js" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
                        <h5>JavaScript</h5>
                    </div>
                    <div>
                        <img alt="jQuery" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" />
                        <h5>jQuery</h5>
                    </div>
                    <div>
                        <img alt="Sass" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
                        <h5>Sass</h5>
                    </div>
                    <div>
                        <img alt="Bootstrap" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                        <h5>Bootstrap</h5>
                    </div>
                    <div>
                        <img alt="Tailwindcss" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
                        <h5>Tailwindcss</h5>
                    </div>
                    <div>
                        <img alt="React" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        <h5>React</h5>
                    </div>
                    <div>
                        <img alt="Redux" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                        <h5>Redux</h5>
                    </div>
                    <div>
                        <img alt="VueJS" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
                        <h5>VueJS</h5>
                    </div>
                </div>
                <h4>Back-End</h4>
                <div className="skill">
                    <div>
                        <img alt="java" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                        <h5>Java</h5>
                    </div>
                    <div>
                        <img alt="Spring Boot" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" />
                        <h5>Spring Boot</h5>
                    </div>
                    <div>
                        <img alt="Hibernate" className="icons-skils" src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/hibernate.svg" />
                        <h5>Hibernate</h5>
                    </div>
                    <div>
                        <img alt="Python" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                        <h5>Python</h5>
                    </div>
                    <div>
                        <img alt="C" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
                        <h5>C</h5>
                    </div>
                    <div>
                        <img alt="C sharp" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
                        <h5>C sharp</h5>
                    </div>
                    <div>
                        <img alt="Nodejs" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                        <h5>NodeJs</h5>
                    </div>
                    <div>
                        <img alt="express" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                        <h5>Express</h5>
                    </div>
                    <div>
                        <img alt="php" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
                        <h5>PHP</h5>
                    </div>
                </div>
                <h4>Cloud</h4>
                <div className="skill">
                    <div>
                        <img alt="aws" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" />
                        <h5>AWS</h5>
                    </div>
                    <div>
                        <img alt="azure" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" />
                        <h5>Azure</h5>
                    </div>
                    <div>
                        <img alt="docker" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
                        <h5>Docker</h5>
                    </div>
                    <div>
                        <img alt="kubernetes" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" />
                        <h5>Kubernetes</h5>
                    </div>
                    <div>
                        <img alt="terraform" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" />
                        <h5>Terraform</h5>
                    </div>
                    <div>
                        <img alt="jenkins" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" />
                        <h5>Jenkins</h5>
                    </div>
                    <div>
                        <img alt="confluence" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg" />
                        <h5>Confluence</h5>
                    </div>
                </div>
                <h4>Database</h4>
                <div className="skill">
                    <div>
                        <img alt="sql" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
                        <h5>SQL</h5>
                    </div>
                    <div>
                        <img alt="postgress" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg" />
                        <h5>Postgress</h5>
                    </div>
                    <div>
                        <img alt="mongodb" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />
                        <h5>MongodDB</h5>
                    </div>
                    <div>
                        <img alt="redis" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-plain-wordmark.svg" />
                        <h5>Redis</h5>
                    </div>
                    <div>
                        <img alt="kafka" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" />
                        <h5>Kafka</h5>
                    </div>
                </div>
               
            </div>
            </section>
        </div>
    </section>
);

export default React.memo(About);
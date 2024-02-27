import React, { useState } from 'react'
import './ProjectPage.css';

/* Modal */
import Modal from "./Modal";

/* React router */
import { NavLink } from 'react-router-dom';

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import ProjectNav from './ProjectNav';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */
const projectImg = require.context('../../img', true);

const Project = () => {
  const [modal1, changeModal1] = useState(false);
  const [modal2, changeModal2] = useState(false);
  const [modal3, changeModal3] = useState(false);
  const [modal4, changeModal4] = useState(false);
  const [modal5, changeModal5] = useState(false);
  // const [estadoModal13, cambiarEstadoModal13] = useState(false);
  // const [estadoModal12, cambiarEstadoModal12] = useState(false);
  // const [estadoModal11, cambiarEstadoModal11] = useState(false);
  // const [estadoModal10, cambiarEstadoModal10] = useState(false);
  // const [estadoModal9, cambiarEstadoModal9] = useState(false);
  // const [estadoModal8, cambiarEstadoModal8] = useState(false);
  // const [estadoModal7, cambiarEstadoModal7] = useState(false);
  // const [estadoModal6, cambiarEstadoModal6] = useState(false);
  // const [estadoModal5, cambiarEstadoModal5] = useState(false);
  // const [estadoModal3, cambiarEstadoModal3] = useState(false);

  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="proyectos mas-proyect" id="proyectos">
          <h1 className="heading" data-section="Nav" data-value="projects">
            <FormattedMessage
              id='projects'
              defaultMessage='Projects'
            />
          </h1>
          <ProjectNav/>
        </section>

        <section className="projects__grid paginas-web">
          <div className="projects__item">
            <a onClick={() => changeModal1(!modal1)}>
              <img src={projectImg(`./aamrahms-1.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => changeModal5(!modal5)}>
              <img src={projectImg(`./aamrahms-5.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => changeModal4(!modal4)}>
              <img src={projectImg(`./aamrahms-4.png`)} className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => changeModal2(!modal2)}>
              <img src={projectImg(`./aamrahms-2.png`)} alt="" className="projects__img" />
            </a>
          </div>
          
          <div className="projects__item">
            <a onClick={() => changeModal3(!modal3)}>
              <img src={projectImg(`./aamrahms-3.png`)} alt="" className="projects__img" />
            </a>
          </div>
          
          
          {/* 
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal12(!estadoModal12)}>
              <img src={projectImg(`./proyecto-12.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal11(!estadoModal11)}>
              <img src={projectImg(`./proyecto-11.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal10(!estadoModal10)}>
              <img src={projectImg(`./proyecto-10.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal9(!estadoModal9)}>
              <img src={projectImg(`./proyecto-9.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal8(!estadoModal8)}>
              <img src={projectImg(`./proyecto-8.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal7(!estadoModal7)}>
              <img src={projectImg(`./proyecto-7.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal6(!estadoModal6)}>
              <img src={projectImg(`./proyecto-6.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal5(!estadoModal5)}>
              <img src={projectImg(`./proyecto-5.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal3(!estadoModal3)}>
              <img src={projectImg(`./proyecto-3.jpg`)} alt="" className="projects__img" />
            </a>
          </div> */}
        </section>
      </main>

      <Modal
        estado={modal1}
        cambiarEstado={changeModal1}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={projectImg(`./aamrahms-1.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-1-p1'
                  defaultMessage='Event Booking and Scheduling System'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-1-p2'
                  defaultMessage='Designed to visually attract the user, provide an interface with attractive transitions and an efficient way to keep track of events to attend. Google Calendar integration provides a seamless scheduling as well.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://docs.google.com/presentation/d/10FEWh-LHzrsumnHTzBs8vgkBDTG0aU2F/edit?usp=sharing&ouid=110023201797484568919&rtpof=true&sd=true" target="_blank">https://eventschedular.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                {/* React.js, Redux, SASS, MaterialUI, Axios, REST API, Express, Node.js */}
                <div className="eins-modal-tec">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="" />
                  {/* <img src="" alt="" /> */}
                 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
          
      <Modal
        estado={modal2}
        cambiarEstado={changeModal2}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={projectImg(`./aamrahms-2.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-2-p1'
                  defaultMessage='Readers Paradise'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-2-p2'
                  defaultMessage='Focused on enhancing the readers experience, providing them with a platform for sharing their feedback on books and cataloguing their reads on virtual shelves.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://drive.google.com/file/d/1K5i70TPmlazAIxmld9Qh4IM9fOLFa1G-/view?usp=sharing" target="_blank">https://readersparadise.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                {/* Spring Boot, Hibernate, MySQL, REST API, BootStrap */}
                <div className="eins-modal-tec">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/hibernate.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="" />
                  <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      
      <Modal
        estado={modal3}
        cambiarEstado={changeModal3}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={projectImg(`./aamrahms-3.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-3-p1'
                  defaultMessage='Social Tracker'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-3-p2'
                  defaultMessage='It connects people through chat and location exchange features, you can add a friend, request their location and chat with them extensively. '
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="" target="_blank">https://socialtracker.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                {/* HTML5, CSS3, JavaScript, jQuery, JSP, Java, MySQL */}
                <div className="eins-modal-tec">
                  {/* <img src="" alt="" /> */}
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg " alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    
      <Modal
        estado={modal4}
        cambiarEstado={changeModal4}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={projectImg(`./aamrahms-4.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-4-p1'
                  defaultMessage='Twitter application on Cloud'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-4-p2'
                  defaultMessage='Implemented a DevOps hosting project on AWS, orchestrating frontend and backend services for a Twitter-like application, complete with automated scaling tests and insightful dashboards using ECS and CloudWatch Insights.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://crystalheart.empretienda.com.ar/" target="_blank">https://crystalheart.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      {/* 
      <Modal
        estado={estadoModal13}
        cambiarEstado={cambiarEstadoModal13}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={projectImg(`./proyecto-13-com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-13-p1'
                  defaultMessage='Inspired Gamer, page created for the sale of digital and physical video games.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-13-p2'
                  defaultMessage='Developed so that the client can choose their console, be it PSP 5 or Xbox X, and be able to browse exclusive pages for each console.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://nahuel61920.github.io/InspiredGamer" target="_blank">https://inspired-gamer.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal12}
        cambiarEstado={cambiarEstadoModal12}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={projectImg(`./proyecto-12-com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-12-p1'
                  defaultMessage='Every Running, page developed for the sale of unisex shoes.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-12-p2'
                  defaultMessage='Designed so that the customer can choose the shoe model, see which one best suits their budget and which are the best valued by buyers.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://nahuel61920.github.io/EveryRunning" target="_blank">https://every-running.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal11}
        cambiarEstado={cambiarEstadoModal11}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={projectImg(`./proyecto-11-com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-11-p1'
                  defaultMessage='Plus Anime, created to watch or download the anime chapters of your choice.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-11-p2'
                  defaultMessage='It has a wide variety of Anime, both recent releases and community favorites, it also boasts movies of the genre in question.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://nahuel61920.github.io/PlusAnime" target="_blank">https://plusanime.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal10}
        cambiarEstado={cambiarEstadoModal10}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={projectImg(`./proyecto-10-com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-10-p1'
                  defaultMessage='Elegant Hand, page created for the sale of digital and analog watches.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-10-p2'
                  defaultMessage='Developed so that the customer can choose the watch of their choice, since it has a wide variety of brands and models. The page also has a night mode for more comfort.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://nahuel61920.github.io/ElegantHand/" target="_blank">https://elegant-hand.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal9}
        cambiarEstado={cambiarEstadoModal9}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={projectImg(`./proyecto-9-com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-9-p1'
                  defaultMessage='Life on paper, page created for a bookstore.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-9-p2'
                  defaultMessage='Designed so that the customer can purchase physical or digital books, it has a large number of categories so that its readers feel comfortable.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://nahuel61920.github.io/vida-en-papel" target="_blank">https://vida-en-papel.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal8}
        cambiarEstado={cambiarEstadoModal8}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={projectImg(`./proyecto-8-com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-8-p1'
                  defaultMessage='Shop Tec, is an ecommerce developed for the purchase of technological products.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-8-p2'
                  defaultMessage='It offers a large number of products, as well as the ability to navigate between the different categories of such products.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://nahuel61920.github.io/shop-tec" target="_blank">https://shop-tec.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal7}
        cambiarEstado={cambiarEstadoModal7}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={projectImg(`./proyecto-7-com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-7-p1'
                  defaultMessage='Power engine, is a car sales website.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-7-p2'
                  defaultMessage='Developed so that the customer can purchase the car of their dreams, it uses a slider system in many of its sections to facilitate the interaction of the page with users.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://nahuel61920.github.io/Power-Engine" target="_blank">https://power-engine.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal6}
        cambiarEstado={cambiarEstadoModal6}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={projectImg(`./proyecto-6-com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-6-p1'
                  defaultMessage='Spider-Man fan page, is a project developed in honor of Spider-Man.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-6-p2'
                  defaultMessage='It offers a wide variety of information about Spider-Man and his multi-verse variants, as well as facts and trivia about his enemies and allies.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://nahuel61920.github.io/Spider-Man" target="_blank">https://spider-man-fans-page.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal5}
        cambiarEstado={cambiarEstadoModal5}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={projectImg(`./proyecto-5-com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-5-p1'
                  defaultMessage='PremierFood, page created for the sale of fast food.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-5-p2'
                  defaultMessage='Designed to visually attract the user, with excellent quality culinary preparations and an interface with attractive transitions.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://nahuel61920.github.io/PremierFood" target="_blank">https://premierfood.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal3}
        cambiarEstado={cambiarEstadoModal3}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={projectImg(`./proyecto-3.jpg`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-3-p1'
                  defaultMessage='ProgramCoffe, a blog designed to inform about the best recipes for your coffee.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-3-p2'
                  defaultMessage='It offers a large amount of information on the perfect preparations for a good coffee, as well as the temperature at which it must be prepared, as well as the best coffee beans.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://nahuel61920.github.io/Blog-Coffe" target="_blank">https://ProgramCoffe.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal> */}

      <ScrollToTop />

      <Footer />
    </div>
  )
}
export default Project;
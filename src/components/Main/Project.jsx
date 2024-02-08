import React from 'react';
import '../../pages/Project/ProjectPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const projectImg = require.context('../../img', true);

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage
                    id='projects'
                    defaultMessage='Projects'
                />
            </h2>
            <div className="proyect-site" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className='proyectos-slider mySwiper'
                >
                    <SwiperSlide className='caja'>
                        <img
                            src={projectImg(`./aamrahms-1.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Event Schedular</h3>
                            <p>
                                Event Booking and Scheduling System
                            </p>
                            {/* React.js, Redux, SASS, MaterialUI, Axios, REST API, Express, Node.js */}
                            <p className="tecnologias">
                                React
                                <span> -</span> Redux
                                <span> -</span> SASS
                                <span> -</span> MaterialUI
                                <span> -</span> Axios
                                <span> -</span> REST API
                                <span> -</span> NodeJS
                                <span> -</span> Express
                                <span> -</span> MongoDB
                            </p>
                            <a href="https://docs.google.com/presentation/d/10FEWh-LHzrsumnHTzBs8vgkBDTG0aU2F/edit?usp=sharing&ouid=110023201797484568919&rtpof=true&sd=true" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/aamrahms/EventScheduler" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={projectImg(`./aamrahms-2.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Readers Paradise</h3>
                            <p>
                                Book Cataloging and Reviewing Plateform
                            </p>
                            {/* Spring Boot, Hibernate, MySQL, REST API, BootStrap */}
                            <p className="tecnologias">
                                Spring Boot
                                <span> -</span> Hibernate
                                <span> -</span> MySQL
                                <span> -</span> REST API
                                <span> -</span> Bootstrap
                            </p>
                            <a href="https://drive.google.com/file/d/1K5i70TPmlazAIxmld9Qh4IM9fOLFa1G-/view?usp=sharing" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/aamrahms/BookReview" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={projectImg(`./aamrahms-3.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Social Tracker</h3>
                            <p>
                                Find, Chat and Track Friends.
                            </p>
                            {/* HTML5, CSS3, JavaScript, jQuery, JSP, Java, MySQL */}
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS3
                                <span> -</span> JavaScript
                                <span> -</span> jQuery
                                <span> -</span> JSP
                                <span> -</span> Java
                                <span> -</span> MySQL
                            </p>
                            <a href="https://docs.google.com/presentation/d/1d2kfQ_cQiHxjLeFCSeUZhoOyM4EmCbru/edit?usp=sharing&ouid=110023201797484568919&rtpof=true&sd=true" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/aamrahms/SocialTracker" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={projectImg(`./aamrahms-4.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Twitter Application on AWS</h3>
                            <p>
                                DevOps Project to host frontend and backend on AWS
                            </p>
                            {/* ECS, CloudWatch Insights, Git, Docker, MongoDB */}
                            <p className="tecnologias">
                                Elastic Cloud Service
                                <span> -</span> CloudWatch Insights
                                <span> -</span> Git
                                <span> -</span> Docker
                                <span> -</span> MongoDB
                            </p>
                            <a href="https://docs.google.com/presentation/d/1buaNqwvz_l0lcPLsJCNcyXVFveuxSXSk/edit?usp=sharing&ouid=110023201797484568919&rtpof=true&sd=true" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/aamrahms/TwitterApp" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={projectImg(`./aamrahms-5.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Fourth Wing fan page</h3>
                            <p>
                                Web Animation for a Book
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                                <span> -</span> Jquery
                            </p>
                            <a href="https://aamrahms.github.io/FourthWing/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/aamrahms/FourthWing" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    {/* <SwiperSlide className='caja'>
                        <img
                            src={projectImg(`./proyecto-12.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>EveryRunnig</h3>
                            <p>
                                Website shoes
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                                <span> -</span> Bootstrap
                            </p>
                            <a href="https://nahuel61920.github.io/EveryRunning/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Nahuel61920/EveryRunning" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide> */}
                    {/* <SwiperSlide className='caja'>
                        <img
                            src={projectImg(`./proyecto-5.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Premier Food</h3>
                            <p>
                                Fast food
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                                <span> -</span> Sass
                            </p>
                            <a href="https://nahuel61920.github.io/PremierFood/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Nahuel61920/PremierFood" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide> */}
                    {/* <SwiperSlide className='caja'>
                        <img
                            src={projectImg(`./proyecto-8.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>ShopTec</h3>
                            <p>
                                Ecommerce
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> Sass
                                <span> -</span> JavaScript
                            </p>
                            <a href="https://nahuel61920.github.io/shop-tec/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Nahuel61920/shop-tec" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide> */}
                    {/* <SwiperSlide className='caja'>
                        <img
                            src={projectImg(`./proyecto-10.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Elegant Hand</h3>
                            <p>
                                Watch Shop
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                            </p>
                            <a href="https://nahuel61920.github.io/ElegantHand/ " className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Nahuel61920/ElegantHand" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide> */}
                    {/* <SwiperSlide className='caja'>
                        <img
                            src={projectImg(`./proyecto-9.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Vida en papel</h3>
                            <p>
                                Bookstore
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                            </p>
                            <a href="https://nahuel61920.github.io/vida-en-papel/ " className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Nahuel61920/vida-en-papel" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide> */}
                    {/* <SwiperSlide className='caja'>
                        <img
                            src={projectImg(`./proyecto-11.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Plus Anime</h3>
                            <p>
                                Anime website
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                            </p>
                            <a href="https://nahuel61920.github.io/PlusAnime/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Nahuel61920/PlusAnime" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide> */}
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
            {/* <Link className="custom-btn btn-codigo portafolio-btn" to="/project">
                <FormattedMessage
                    id='btn-more-projects'
                    defaultMessage='More projects'
                />
            </Link> */}
            <div className='portafolio-btn'>
                <Link to="/project">
                    <ButtomGet/>
                </Link>
            </div>
        </section>

    )
};
export default React.memo(Project);
import React from 'react'
import Styles from './Courses.module.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectFade, Pagination, Navigation } from 'swiper'

import 'swiper/swiper-bundle.min.css'

SwiperCore.use([EffectFade, Pagination, Navigation])

export const Courses = () => {
    return (
        <div className={Styles.courses}>
            <Swiper
                speed={1000}
                centeredSlides={true}
                allowTouchMove={false}
                spaceBetween={100}
                slidesPerView={1}
                effect="fade"
                // cubeEffect={{
                //     shadow: true,
                //     slideShadows: true,
                //     shadowOffset: 20,
                //     shadowScale: 0.94
                // }}
                navigation={{ clickable: true }}
                pagination={{ clickable: true }}
                style={{ padding: '0px 70px' }}
            >
                <SwiperSlide>
                    <div className={Styles.slide}>
                        <h2 className={Styles.heading}>наши курсы <span></span></h2>
                        <h3 className={Styles.subheading}>Курсы программирования</h3>
                        <p className={Styles.text}>
                            Буткемп курс по языку программирования. 
                            Этот курс нацелен на то, чтобы обучить студентов
                            максимально нужным навыкам за максимально короткое время. При этом нужно учитывать, что
                            студент будет ходить каждый день и сидеть на 3х часовых курсах. 
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={Styles.slide}>
                        <h3 className={Styles.subheading}>Курсы программирования</h3>
                        <p className={`${Styles.text} ${Styles.circle}`}>Язык Python(Backend)</p>
                        <ul className={Styles.list}>
                            <li>Длительность: 2.5 мес + 0.5 мес (подготовка и помощь с трудоустройством)</li>
                            <li>Стоимость 35000 сом</li>
                            <li>Максимальное количество людей: 18</li>
                            <li>Длительность уроков: 3 часа с ментором</li>
                            <li>График: 9:00 – 12:00, Пн – Сб</li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={Styles.slide}>
                        <h3 className={Styles.subheading}>Курсы программирования</h3>
                        <p className={`${Styles.text} ${Styles.circle}`}>Язык Java(Backend)</p>
                        <ul className={Styles.list}>
                            <li>Длительность: 2.5 мес + 0.5 мес (подготовка и помощь с трудоустройством)</li>
                            <li>Стоимость 35000 сом</li>
                            <li>Максимальное количество людей: 18</li>
                            <li>Длительность уроков: 3 часа с ментором</li>
                            <li>График: 14:00 – 17:00, Пн – Сб</li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={Styles.slide}>
                        <h3 className={Styles.subheading}>Курсы программирования</h3>
                        <p className={`${Styles.text} ${Styles.circle}`}>Язык JavaScript(Frontend)</p>
                        <ul className={Styles.list}>
                            <li>Длительность: 2.5 мес + 0.5 мес (подготовка и помощь с трудоустройством)</li>
                            <li>Стоимость 35000 сом</li>
                            <li>Максимальное количество людей: 18</li>
                            <li>Длительность уроков: 3 часа с ментором</li>
                            <li>График: 18:00 – 21:00, Пн – Сб</li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={Styles.slide}>
                        <h3 className={Styles.subheading}>Курсы английского языка</h3>
                        <p className={Styles.text}>Мы предоставляем вам 2 вида обучения на выбор: Grammar и Talking Club. <br/><br/>
                        На курсах Grammar больше внимания уделяется изучению грамматики, пониманию текстов и, в целом, английской речи. На курсах Talking Club вы практикуете и улучшаете свои разговорные навыки. Индивидуальный подход к каждому студенту позволит любому начать понимать и говорить на английском. <br/><br/>
                        Уникальность наших курсов в том, что у нас не будет монотонных и скучных уроков. Мы обещаем вам уютную атмосферу и chill vibe.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={Styles.slide}>
                        <h3 className={Styles.subheading}>Курсы английского языка</h3>
                        <p className={`${Styles.label} ${Styles.circle}`}>Grammar</p>
                        <div className={Styles.block}>
                            <div className={Styles.item}>
                                <p className={Styles.text}>Beginner (3р / intensive)</p>
                                <ul className={Styles.list}>
                                    <li>Длительность: 2 мес / 1 мес</li>
                                    <li>Стоимость:</li>
                                    <li>Максимальное количество людей: 10</li>
                                    <li>Длительность уроков: 70 минут</li>
                                    <li>График: 10:00 – 21:00, Пн - Сб</li>
                                </ul>
                            </div>
                            <div className={Styles.item}>
                                <p className={Styles.text}>Elementary (3р / intensive), Pre-Intermediate (3р / intensive)</p>
                                <ul className={Styles.list}>
                                    <li>Длительность: 3 мес / 2 мес</li>
                                    <li>Стоимость:</li>
                                    <li>Максимальное количество людей: 10</li>
                                    <li>Длительность уроков: 70 минут</li>
                                    <li>График: 10:00 – 21:00, Пн - Сб</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={Styles.slide}>
                        <h3 className={Styles.subheading}>Курсы английского языка</h3>
                        <p className={`${Styles.label} ${Styles.circle}`}>Speaking</p>
                        <p className={Styles.text}>Elementary (3р / intensive), Pre-Intermediate (3р / intensive), Intermediate (3р / intensive)</p>
                        <ul className={Styles.list}>
                            <li>Длительность: 2 мес / 1 мес</li>
                            <li>Стоимость:</li>
                            <li>Максимальное количество людей: 10</li>
                            <li>Длительность уроков: 70 минут</li>
                            <li>График: 10:00 – 21:00, Пн - Сб</li>
                        </ul>
                    </div>
                </SwiperSlide>
            </Swiper>
            {/* <div>
                <h2 className={Styles.heading}>наши курсы <span></span></h2>
                <h3 className={Styles.subheading}>Курсы программирования</h3>
                <p className={Styles.text}>
                    Буткемп курс по языку программирования. 
                    Этот курс нацелен на то, чтобы обучить студентов
                    максимально нужным навыкам за максимально короткое время. При этом нужно учитывать, что
                    студент будет ходить каждый день и сидеть на 3х часовых курсах. 
                </p>
            </div> */}
            {/* <NavLink className={Styles.button} to="/courses">
                <img src={Arrow} alt="arrow"/>
            </NavLink> */}
        </div>
    )
}

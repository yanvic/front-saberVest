import React from "react";
import '../../styles/about.css';
import LightImg from '../../images/revisionPurple.jpg'
import DarkImg from '../../images/revisionOrange.jpg'

const chooseData = [
    {
        icon: 'ri-lightbulb-flash-line',
        title: 'Ideias',
        desc: 'Se tiver sugestões para melhorar o sistema, entre em contato e compartilhe suas ideias.'
    },
    {
        icon: 'ri-check-double-line',
        title: 'Revisão',
        desc: 'Se encontrar qualquer incoerência ou erro visual no site, informe para que as correções possam ser feitas.'
    },
    {
        icon: 'ri-git-pull-request-line',
        title: 'Código',
        desc: 'Explore o repositório de código e contribua com melhorias. Seu conhecimento é valioso e bem-vindo!'
    },
]

const About = ({theme}) => {
    return (
        <section id="about" >
            <div className="container">
                <div className="about__wrapper">
                    <div className="about__content">
                        <h6 className="subtitle">Sobre o projeto</h6>
                        <h2>Objetivo</h2>
                        <p className="description  about__content-desc">
                            Bem-vindo ao SaberVest! Você tem um espaço para se preparar para os vestibulares do Estado
                            do Ceará.
                            Aqui você encontra uma coleção de questões de provas anteriores para aprimorar sua prática.
                            O objetivo é reunir todas as questões de provas dos vestibulares de todo Brasil.
                        </p>
                        <h2 className="highlight">Sua contribuição</h2>
                        <p className="description  about__content-desc">
                            Se você tiver ideias
                            de melhorias ou encontrar algo que precise de correção,
                            por favor, envie sua melhoria e feedback. Sua participação é essencial para aprimorar nossa
                            oferta e apoiar sua preparação de maneira eficaz.
                        </p>


                        <div className="choose__item-wrapper">
                            {chooseData.map((item, index) => (
                                <div className="choose__us-item" key={index}>
                                <span className="choose__us-icon">
                                    <i className={item.icon}></i>
                                </span>
                                    <div>
                                        <h4 className="choose__us-title">{item.title}</h4>
                                        <p className="description-about">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="about__img">
                        {/*<img src={aboutImg} alt="about"/>*/}
                        <img src={theme === 'light-theme' ? LightImg : DarkImg} alt="Uno"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
import React from "react";
import '../../styles/services.css';
import '../../styles/hero.css'
import ImageCard from "../Card/imageCard";
import bgImage from "../../images/paper-pana.svg"
import uvaImage from "../../images/img.png"
import iaImage from "../../images/college-exam.svg"

const VestData = [
    {
        image:bgImage,
        title: 'Uece',
        desc:  `jgkfdjsgk;jdfkjgks;dfgfjdskjgkjdfkg dgsdg
        gkfdkgfdklg;dfkgkfd;lgkdf
        lkgkfd;lkg;dfkgkdfk;gkd`
    },
    {
        image:uvaImage,
        title: 'Uece',
        desc:  `jgkfdjsgk;jdfkjgks;dfgfjdskjgkjdfkg dgsdg
        gkfdkgfdklg;dfkgkfd;lgkdf
        lkgkfd;lkg;dfkgkdfk;gkd`
    },
    {
        image:iaImage,
        title: 'Uece',
        desc:  `jgkfdjsgk;jdfkjgks;dfgfjdskjgkjdfkg dgsdg
        gkfdkgfdklg;dfkgkfd;lgkdf
        lkgkfd;lkg;dfkgkdfk;gkd`
    },
]

// const ServicesData = [
//     {
//         icon:'ri-apps-line',
//         title: 'Escalaćões',
//         desc:  `jgkfdjsgk;jdfkjgks;dfgfjdskjgkjdfkg dgsdg
//         gkfdkgfdklg;dfkgkfd;lgkdf
//         lkgkfd;lkg;dfkgkdfk;gkd`
//     },
//     {
//         icon:'ri-apps-line',
//         title: 'Ea FC',
//         desc:  `jgkfdjsgk;jdfkjgks;dfgfjdskjgkjdfkg dgsdg
//         gkfdkgfdklg;dfkgkfd;lgkdf
//         lkgkfd;lkg;dfkgkdfk;gkd`
//     },
//     {
//         icon:'ri-apps-line',
//         title: 'Escalaćões 03',
//         desc:  `jgkfdjsgk;jdfkjgks;dfgfjdskjgkjdfkg dgsdg
//         gkfdkgfdklg;dfkgkfd;lgkdfl
//         kgkfd;lkg;dfkgkdfk;gkd`
//     },
//     {
//         icon:'ri-apps-line',
//         title: 'Escalaćões 04',
//         desc:  `jgkfdjsgk;jdfkjgks;dfgfjdskjgkjdfkg dgsdg
//         gkfdkgfdklg;dfkgkfd;lgkd
//         flkgkfd;lkg;dfkgkdfk;gkd`
//     },
// ]

const Services = () => {
    return (
        <section id="services" >
            <div className="container">
                <div className="services__top-content">
                    <h6 className="subtitle">Explore a plataforma</h6>
                    <h2>Resolva questões de provas dos</h2>
                    <h2 className="highlight">Vestibulares do Ceará</h2>
                </div>




                <div className="service__item-wrapper">
                    {VestData.map((item,index)=> (
                        <ImageCard imgSrc={item.image}>
                            <h3 className="title__card">{item.title}</h3>
                            <p className="description__card">
                                {item.desc}
                            </p>
                            {/*<div className="button-group">*/}
                            {/*    <button className="btn">*/}
                            {/*        /!*<Heart/>*!/*/}
                            {/*    </button>*/}
                            {/*</div>*/}
                        </ImageCard>
                    ))}
                    {/*{ServicesData.map((item,index)=> (*/}
                    {/*   <div className="services__item" key={index}>*/}
                    {/*        <span className="service__icon">*/}
                    {/*            <i className={item.icon}></i>*/}
                    {/*        </span>*/}
                    {/*        <h3 className="service__title">{item.title}</h3>*/}
                    {/*        <p className="description">{item.desc}</p>*/}
                    {/*   </div>*/}
                    {/*))}*/}
                </div>

            </div>
        </section>
    );
};

export default Services;
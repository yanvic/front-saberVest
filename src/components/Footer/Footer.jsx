import React from "react";
import './Footer.css';

const footer__links =[
    {
        icon:'ri-linkedin-fill',
        link: 'www.linkedin.com/feed',
    },
    {
        icon:'ri-instagram-line',
        link: 'Ea FC',
    },
    {
        icon:'ri-github-fill',
        link: 'Escalaćões 03',
    },
    {
        icon:'ri-mail-line',
        link: 'Escalaćões 04',
    },
]

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <header className="footer" id="contato">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__logo">
                        <h2>SaberVest</h2>
                        <p className="description">Entre em Contato</p>

                        <p className="small__text description">Dúvidas, elogios e melhorias podem
                            ser enviadas atráves dos meio de contatos, caso precise de algo.
                        </p>
                    </div>

                    <div className="footer__quick-links">
                        <ul className="quick__links">
                            {
                                footer__links.map((item, index) => (
                                    <div className="quick__link-item" key={index}>
                                         <span className="footer__icon">
                                            <i className={item.icon} ></i>
                                             <link className={item.link}/>
                                         </span>
                                    </div>
                                ))}
                        </ul>
                    </div>
                </div>
                <hr/>
                <p className="copyright description">Copyright © {year}, desenvolvido por Yan Victor - Todos os direitos
                    reservados.</p>
            </div>
        </header>
    );
};

export default Footer;
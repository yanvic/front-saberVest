import React from "react";
import './Footer.css';

const footer__links =[
    {
        icon:'ri-linkedin-fill',
        link: 'https://www.linkedin.com/in/yan-silva12',
    },
    {
        icon:'ri-instagram-line',
        link: 'https://www.instagram.com/yan_victor12',
    },
    {
        icon:'ri-github-fill',
        link: 'https://www.github.com/yanvic',
    },
    {
        icon:'ri-mail-line',
        link: 'mailto:yanusersilva@gmail.com',
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
                            ser enviadas atráves dos canais de contatos.
                        </p>
                    </div>

                    <div className="footer__quick-links">
                        <ul className="quick__links">
                            {
                                footer__links.map((item, index) => (
                                    <div className="quick__link-item" key={index}>
                                        <a href={item.link}>
                                         <span className="footer__icon">
                                            <i className={item.icon}></i>
                                        </span>
                                        </a>
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
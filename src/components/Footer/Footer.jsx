


import React from "react";


import s from "./footer.module.scss"

const Footer = () => {

    return (
        <footer className={s.footer}>
            <div className={s.footer__row}>
                
                <div className={s.row__element}>
                    <p className={s.footer__text} data-scroll data-scroll-position="bottom" data-scroll-speed="-3">
                        На этих страницах вы можете познакомиться с творчеством группы  <b>Anacondaz</b> и их релизами последних лет.
                    </p>
                    <p className={s.footer__text} data-scroll data-scroll-position="bottom" data-scroll-speed="-2">
                        Репозиторий и исходный код находятся в свободном доступе <a href="https://github.com/DashinIN/Show-room">здесь</a>, а обратную свзяь можно получить <a href="mailto:dashinin1@gmail.com">вот тут</a>.
                    </p>
                </div>
                <div className={s.row__element}>
                    <p className={s.footer__text} data-scroll data-scroll-position="bottom" data-scroll-speed="-3">
                    Все используемые изображения и медиа являются собственностью их авторов. Источниками послужили <a href="https://the-flow.ru/">the-flow.ru</a>, <a href="https://vk.com/anacondaz">сообщество</a>  группы. <br /> Мерч и афиша концертов на сайте: <a href="https://anacondaz.ru/">anacondaz.ru</a>
                    </p>
                </div>
            </div>
            <div className={s.footer__end}>
                <p className={s.footer__text} data-scroll data-scroll-position="bottom" data-scroll-speed="-4">
                    Anacondaz — российская рэп-рок-группа, образованная в Астрахани в 2009 году. Представляет собой квинтет и имеет на своём счету семь студийных альбомов и два мини-альбома.
                </p>
            </div>
        </footer>
        );
    
}

export default Footer;
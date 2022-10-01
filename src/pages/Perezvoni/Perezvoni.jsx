import s from "./perezvoni.module.scss"
import ImageWrapper from "../../components/ImageWrapper/ImageWrapper";



import img1 from "../../assets/img/1.webp"
import img2 from "../../assets/img/2.webp"
import img3 from "../../assets/img/3.webp"
import img4 from "../../assets/img/4.webp"
import img5 from "../../assets/img/5.webp"
import img6 from "../../assets/img/6.webp"

import audioFile1 from '../../assets/audio/p/1p.mp3'
import audioFile2 from '../../assets/audio/p/2p.mp3'
import audioFile3 from '../../assets/audio/p/3p.mp3'
import audioFile4 from '../../assets/audio/p/4p.mp3'
import audioFile5 from '../../assets/audio/p/5p.mp3'
import audioFile6 from '../../assets/audio/p/6p.mp3'

const Perezvoni = () => {
    document.title ="Перезвони мне";
    

    return (
        <div className={s.main}>
            <div className={s.column} >
                <div className={s.item} >  
                    <ImageWrapper img={img1} audioFile={audioFile1}/>   
                </div>
                <div className={s.item}>  
                    <ImageWrapper img={img2} audioFile={audioFile2}/>   
                </div>
            </div>
            <div className={s.column} >
                <div className={s.item}>     
                    <ImageWrapper img={img3} audioFile={audioFile3}/>
                </div>
                <div className={s.item}>  
                    <ImageWrapper img={img4} audioFile={audioFile4}/>
                </div>
            </div>
            <div className={s.column} >
                <div className={s.item}>
                    <ImageWrapper img={img5} audioFile={audioFile5}/>
                </div>
                <div className={s.item}>
                    <ImageWrapper img={img6} audioFile={audioFile6}/>
                </div>
            </div>
        </div>
    );
}

export default Perezvoni;

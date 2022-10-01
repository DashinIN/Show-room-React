import s from "./moideti.module.scss"
import ImageWrapper from "../../components/ImageWrapper/ImageWrapper";


import img1 from "../../assets/img/1m.webp"
import img2 from "../../assets/img/2m.webp"
import img3 from "../../assets/img/3m.webp"


import audioFile1 from '../../assets/audio/m/1m.mp3'
import audioFile2 from '../../assets/audio/m/2m.mp3'
import audioFile3 from '../../assets/audio/m/3m.mp3'

const Moideti = () => {

    document.title ="Мои дети не будут скучать";

    return (
      <div className={s.main}>
        <div className={s.item}>
          <ImageWrapper img={img1} audioFile={audioFile1}/>   
        </div>
        <div className={s.item}>
          <ImageWrapper img={img2} audioFile={audioFile2}/>   
        </div>
        <div className={s.item}>
          <ImageWrapper img={img3} audioFile={audioFile3}/>   
        </div>
      </div>
    );
}

export default Moideti;
import s from "./moideti.module.scss"

const Moideti = () => {

    document.title ="Мои дети не будут скучать";

    return (
      <div className={s.main}>
        <div className={s.item}></div>
        <div className={s.item}></div>
        <div className={s.item}></div>
      </div>
    );
}

export default Moideti;
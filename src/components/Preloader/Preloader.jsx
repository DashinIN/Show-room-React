import s from "./preloader.module.scss"

const Preloader = () => {
    return (
        <div className={s.preloader}>
       
            <div className={s.lds__ellipsis}><div></div><div></div><div></div><div></div></div>

        </div>
    );
}

export default Preloader;
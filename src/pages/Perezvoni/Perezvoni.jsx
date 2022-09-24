import s from "./perezvoni.module.scss"

const Perezvoni = () => {

    document.title ="Перезвони мне";
    return (
        <div className={s.main}>
            <div className={s.column} >
                <div className={s.item}>   
                </div>
                <div className={s.item}>     
                </div>
            </div>
            <div className={s.column} >
                <div className={s.item}>     
                </div>
                <div className={s.item}>  
                </div>
            </div>
            <div className={s.column} >
                <div className={s.item}>
                </div>
                <div className={s.item}>
                </div>
            </div>
        </div>
    );
}

export default Perezvoni;

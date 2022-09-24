import s from "./perezvoni.module.scss"

const Perezvoni = () => {

    document.title ="Перезвони мне";
    return (

        <div className={s.main}>
            <div className={`${s.column} ${s.column1}`}>
                <div className={`${s.item} ${s.item1}`}>

                </div>
                <div className={`${s.item} ${s.item2}`}>
                    
                </div>
            </div>

            <div className={`${s.column} ${s.column2}`}>
                <div className={`${s.item} ${s.item1}`}>

                </div>
                <div className={`${s.item} ${s.item2}`}>
                    
                </div>
            </div>

            <div className={`${s.column} ${s.column3}`}>
                <div className={`${s.item} ${s.item1}`}>

                </div>
                <div className={`${s.item} ${s.item2}`}>
                    
                </div>
            </div>
        </div>
        
    );
}

export default Perezvoni;

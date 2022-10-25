import style from '../styles/spinner.module.css'

const Spinner = () => {
    return (
        <div className={style.body}>
            <div className={style["spinner-box"]}>
                <div className={style["leo-border-1"]}>
                    <div className={style["leo-core-1"]}></div>
                </div>
                <div className={style["leo-border-2"]}>
                    <div className={style["leo-core-2"]}></div>
                </div>
            </div>
        </div>
    )
}

export default Spinner
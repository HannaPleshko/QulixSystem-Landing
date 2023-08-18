import style from './style.module.css'

function DirectorStrategy() {
    return (
        <div className={style.wrapper}>
            <div className={style.img}> </div>

            <div className={style.info}>
                <h2>Alexander Arabey</h2>
                <p className={style.subtext}>Director of Business Development, Qulix Systems</p>
                <p>Alexander has more than 20 years' experience in the field of digital banking and fintech. He is ready to share his expertise and give you valuable advice during this webinar.</p>
                <div className={style.btn}>Register now</div>
            </div>
        </div>
    );
}

export default DirectorStrategy;
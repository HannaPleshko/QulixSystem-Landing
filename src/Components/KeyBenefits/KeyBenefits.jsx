import style from './style.module.css'

function KeyBenefits() {
    return (
        <div className={style.wrapper}>
            <h2>The webinar is best for</h2>

            <div className={style.benefits}>
                <div className={style.item}>
                    <div className={style.img1}></div>
                    <p>Fintech startups, banks, and financial organizations planning to launch digital banking</p>
                </div>

                <div className={style.item}>
                    <div className={style.img2}></div>
                    <p>Businesses that are already developing a project, but would like to improve the process</p>
                </div>

                <div className={style.item}>
                    <div className={style.img3}></div>
                    <p>Investors who want to invest in a project, but don't understand its real cost</p>
                </div>
            </div>

            <div className={style.btn}>Register</div>
        </div>
    );
}

export default KeyBenefits;
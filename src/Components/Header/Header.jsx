import style from './style.module.css'

function Header() {
    return (
        <div className={style.wrapper}>
            <div className={style.item}>
                <div className={style.logoImg}></div>

                <div>
                    <p>Target audience</p>
                    <p>Summary</p>
                    <p>Speaker</p>
                </div>
            </div>
        </div>
    );
}

export default Header;
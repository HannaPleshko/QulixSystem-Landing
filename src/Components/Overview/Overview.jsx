import style from './style.module.css';

function Overview() {
  return (
    <div className={style.preview}>
      <h2>Free webinar</h2>
      <h1>How to launch a neobank in 6 months?</h1>
      <p>Register for the webinar now! Please fill out all fields</p>

      <div className={style.form}>
        <div className={style.inps}>
          <div>
            <input type="text" placeholder="First name*" />
          </div>
          <div>
            <input type="text" placeholder="Last name*" />
          </div>
          <div>
            <input type="text" placeholder="Company name*" />
          </div>
          <div>
            <input type="text" placeholder="Email address*" />
          </div>
        </div>

        <div className={style.btn}>Submit</div>
      </div>
    </div>
  );
}

export default Overview;

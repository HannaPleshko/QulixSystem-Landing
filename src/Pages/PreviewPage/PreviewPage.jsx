import DirectorStrategy from '../../Components/DirectorStrategy/DirectorStrategy';
import Header from '../../Components/Header/Header';
import KeyBenefits from '../../Components/KeyBenefits/KeyBenefits';
import Overview from '../../Components/Overview/Overview';

import style from './style.module.css';

function PreviewPage() {
  return (
    <>
      <div className={style.previewBcg}>
        <Header />
        <Overview />
      </div>

      <KeyBenefits />
      <DirectorStrategy />
    </>
  );
}

export default PreviewPage;

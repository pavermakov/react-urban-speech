import React from 'react';

const Unsupported = () => {
  const chrome = 'https://www.google.com/chrome/browser/desktop/index.html';
  const canIUse = 'https://caniuse.com/#search=speech';

  return (
    <div className="unsupported">
      <div className="unsupported__wrapper">
        <div className="unsupported__header">
          <img className="unsupported__logo" src="/static/images/sad.svg" alt="sad face"/>
        </div>

        <div className="unsupported__body">
          <div className="unsupported__row">
            Sorry, your browser does not support Speech Recognition API yet.
          </div>

          <div className="unsupported__row">
            Download <a className="unsupported__link" href={chrome} target="_blank">Chrome</a>&nbsp;
            or check the <a className="unsupported__link" href={canIUse} target="_blank">support table</a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Unsupported;

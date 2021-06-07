const test = () => {
  let bodyPage = document.querySelector(`body`);
  let testButton = bodyPage.querySelector(`.button-test-js`);
  if (!testButton) {
    return;
  }

  let onClickButton = () => {
    alert(`JS работает!!!`); // eslint-disable-line no-alert
  };

  testButton.addEventListener(`click`, onClickButton);
};

export default test;

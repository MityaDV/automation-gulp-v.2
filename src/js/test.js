const myTest = () => {
  let bodyPage = document.querySelector(`body`);
  let testButton = bodyPage.querySelector(`.button-test-js`);
  if (!testButton) {
    return;
  }

  let onClickButton = function() {
    alert(`JS работает!!!`);
  }

  testButton.addEventListener(`click`, onClickButton);
};

export default myTest;
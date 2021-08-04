{
  const rateElement = document.querySelector(".js-exchangeRate");
  const currencySelectorElement = document.querySelector(".js-currency");
  const resultElement = document.querySelector(".js-result");
  
  const currencySwich = () => {
    const rateZero = 0;
    const rateEUR = 4.4278;
    const rateCHF = 4.2525;
    const rateUSD = 3.9012;
    const rateGPB = 5.3782;
    const rateRUB = 0.0523;
    switch (currencySelectorElement.value) {
      case "Zero":
        return rateElement.value = rateZero;
      case "EUR":
        return rateElement.value = rateEUR;
      case "CHF":
        return rateElement.value = rateCHF;
      case "USD":
        return rateElement.value = rateUSD;
      case "GBP":
        return rateElement.value = rateGPB;
      case "RUB":
        return rateElement.value = rateRUB;
    }
  };
  
  const onFormSubmit = (event) => {
      event.preventDefault(); 
      const amountElement = document.querySelector(".js-amount");
      resultElement.innerText = `${(+amountElement.value / rateElement.value).toFixed(2)} ${currencySelectorElement.value}`;
    };
  
  const onFormReset = () => {
    resultElement.innerText = `0`;
    };
  
  const init = () => {
    const formElement = document.querySelector(".js-form");
    const resetElement = document.querySelector(".js-reset");
    currencySelectorElement.addEventListener("input", currencySwich);
    formElement.addEventListener("submit", onFormSubmit);
    resetElement.addEventListener("click", onFormReset);
  }
  
  init();
}

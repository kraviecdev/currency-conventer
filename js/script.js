let formElement = document.querySelector(".js-form")
let amountElement = document.querySelector(".js-amount");
let currencySelectorElement = document.querySelector(".js-currency");
let rateElement = document.querySelector(".js-exchangeRate");
let resultElement = document.querySelector(".js-result");
let resetElement = document.querySelector(".js-reset")


currencySelectorElement.addEventListener("input", () => {
    switch (currencySelectorElement.value) {
        case "EUR":
            rateElement.value = 4.59;
            break;
        case "CHF":
            rateElement.value = 4.25;
            break;
        case "USD":
            rateElement.value = 3.90;
            break;
        case "GBP":
            rateElement.value = 5.37;
            break;
        case "RUB":
            rateElement.value = 0.05;
            break;
    }
});

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let result = amountElement.value / rateElement.value;

    resultElement.innerText = `${result.toFixed(2)} ${currencySelectorElement.value}`;

});

resetElement.addEventListener("click", () => {
    resultElement.innerText = `0`;
});
{
    const rateElement = document.querySelector(".js-exchangeRate");
    const currencySelectorElement = document.querySelector(".js-currency");
    const resultElement = document.querySelector(".js-result");

    currencyChange = () => {
        const rateZero = 0;
        const rateEUR = 4.4278;
        const rateCHF = 4.2525;
        const rateUSD = 3.9012;
        const rateGPB = 5.3782;
        const rateRUB = 0.0523;
        currencySelectorElement.addEventListener("input", () => {
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
            };
        });
    };

    init = () => {
        const formElement = document.querySelector(".js-form")
        const amountElement = document.querySelector(".js-amount");    
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();

            const result = amountElement.value / rateElement.value;

            resultElement.innerText = `${result.toFixed(2)} ${currencySelectorElement.value}`;
        });
    };

    reset = () => {
        const resetElement = document.querySelector(".js-reset");
        resetElement.addEventListener("click", () => {
            resultElement.innerText = `0`;
        });
    };

    currencyChange();
    init();
    reset();
}

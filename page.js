const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelected = document.querySelector(".currency-selected")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value //PEGAR O VALOR DO INPPUT
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //VALOR EM REAIS
    const currencyValueConverted = document.querySelector(".currency-value") //MOEADAS CONVERTIDAS

    const dolarToday = 5.58 //VALOR DO DOLAR
    const euroToday = 6.16 // VALOR DO EURO
    const bitcoinToday = 320445.1555 // VALOR DO BITCOIN
    const libraToday = 7.30 // VALOR DA LIBRAS

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday) //SE O VALOR FOR DOLAR, ENTRE AQUI!
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday) //SE O VALOR FOR EURO, ENTRE AQUI!
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { 
            maximumSignificantDigits: 3,
            style: "currency",
            currency: "XBT"
        }).format(inputCurrencyValue / bitcoinToday) //SE O VALOR FOR BITCOIN, ENTRE AQUI!
    }

    if (currencySelect.value == "libras") {
        currencyValueConverted.innerHTML = Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday) //SE O VALOR FOR EURO, ENTRE AQUI!
    }

    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue) //SE O VALOR FOR EURO, ENTRE AQUI!
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue) //MODIFICANDO VALOR A SER CONVERTIDO *FORMATADO*
}

function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.querySelector('.currency-image')

    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dólar americano'
        currencyImage.src = './assets/image-estadosUnidos.png'
    }

    if (currencySelected.value == 'dolar') {
        currencyName.innerHTML = 'Dólar americano'
        currencyImage.src = './assets/image-estadosUnidos.png'
    }


    if (currencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/image-euro.png'
    }

    if (currencySelect.value == 'bitcoin') {
        currencyName.innerHTML = 'BitCoin'
        currencyImage.src = './assets/image-bitcoin.png'
    }

    if (currencySelect.value == 'libras') {
        currencyName.innerHTML = 'Libras'
        currencyImage.src = './assets/image-libras.png'
    }

    convertValues()
}


currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues) //ADICIONANDO O EVENTO CLICAR NO BOTÃO
const axios = require('axios').default;
const colors = require('colors');

class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
  }

  async getPriceData(coinOptions, currencyOptions) {
    try {
      // formatter for currency
      const formatter = Intl.NumberFormat('en-IN', {
        currency: currencyOptions,
        style: 'currency',
      });

      const res = await axios.get(
        `${this.baseUrl}?key=${this.apiKey}&ids=${coinOptions}&convert=${currencyOptions}`
      );
      let output = '';

      res.data.forEach((coin) => {
        output += `COIN: ${coin.symbol.yellow} ${coin.name} | PRICE: ${
          formatter.format(coin.price).green
        } | RANK: ${coin.rank.blue}\n`;
      });
      return output;
    } catch (error) {
      handleAPIError(error);
    }
  }
}

function handleAPIError(error) {
  if (error.response.status === 401) {
    throw new Error('Your API key is invalid - Go to https://nomics.com');
  } else if (error.response.status === 404) {
    throw new Error('Your API key is not reponding');
  } else {
    throw new Error('Something went wrong!');
  }
}

module.exports = CryptoAPI;

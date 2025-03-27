export const format_price = (value, default_currency = 'KSH') => {
  // console.log(value, default_currency);
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: default_currency.toLowerCase(),
  }).format(value);
};

// console.log(format_price(5000));

const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ];
  // 1. Use forEach to console log each product name to the console.
  products.forEach(product => {
    console.log(product.product);
  });
  // 2. Use filter to filter out products that have a name longer than 5 characters.
  const filteredProducts = products.filter(product => product.product.length <= 5);
  console.log(filteredProducts);
  // 3. Using both filter and map. Convert all prices that are strings to numbers,
  // remove all products without prices, and calculate the combined price of all remaining products.
  const totalPrice = products
    .filter(product => product.price && typeof product.price === 'string')
    .map(product => {
      const price = parseFloat(product.price);
      return isNaN(price) ? 0 : price;
    })
    .reduce((total, price) => total + price, 0);
  console.log(totalPrice);
  // 4. Use reduce to concatenate all product names to create a string.
  const concatenatedNames = products.reduce((string, product, index) => {
    if (index === products.length - 1) {
      return string + product.product;
    } else {
      return string + product.product + ', ';
    }
  }, '');
  console.log(concatenatedNames);
  // 5. Use reduce to calculate both the highest and lowest-priced items.
  const highestAndLowest = products.reduce(
    (result, product) => {
      const price = parseFloat(product.price);
      if (!isNaN(price)) {
        if (price > result.highest.price) {
          result.highest = { name: product.product, price: price };
        }
        if (price < result.lowest.price) {
          result.lowest = { name: product.product, price: price };
        }
      }
      return result;
    },
    { highest: { name: '', price: Number.NEGATIVE_INFINITY }, lowest: { name: '', price: Number.POSITIVE_INFINITY } }
  );
  console.log(`Highest: ${highestAndLowest.highest.name}. Lowest: ${highestAndLowest.lowest.name}`);
  // 6. Using only Object.entries and reduce, recreate the object with modified keys.
  const modifiedObject = Object.entries(products).reduce((obj, [key, value]) => {
    const newKey = key === 'product' ? 'name' : key === 'price' ? 'cost' : key;
    obj[newKey] = value;
    return obj;
  }, {});
  console.log(modifiedObject);
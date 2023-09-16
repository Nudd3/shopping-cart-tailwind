/**
 * Load the items from the api
 * @returns an array of items for the store
 */
const loadItemsFromApi = async () => {
  const items = [];

  for (let i = 1; i < 11; i++) {
    const url = `https://fakestoreapi.com/products/${i}`;
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    console.log(data);
    items.push({
      id: data.id,
      title: data.title,
      price: data.price,
      image: data.image,
    });
  }
  return items;
};

export { loadItemsFromApi }
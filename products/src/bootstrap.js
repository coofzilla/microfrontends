//REMOTE
import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};
//environment var set by webpack
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');
  //Assuming container doesn't have an el with id of 'dev-products'...
  if (el) {
    //probably running products in isolation
    mount(el);
  }
}

export { mount };

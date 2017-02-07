/**
Api in charge of async calls, back-end operations
*/

import delay from './delay';

class ProductApi {
  static getProductDetails() {
    return new Promise((resolve, reject) => {
      //Lets add some timeout here (as defined in delay file)
      //to simulate proper async call
      setTimeout(() => {
        //Let's retrieve data from json file as specified in exercise
        //Using fetch, but any other mechanism is also valid.
        //Also, not handling exception as I want to propagate up to the action
        fetch('/data/content.json')
          .then((data) => {
            return data.json();
          })
          .then((json) => {
            //Using es6 Object.assign to avoid mutation
            resolve(Object.assign({}, json));
          });
      }, delay);
    });
  }
}

export default ProductApi;

var SIZES = {
  SMALL: {
    name: 'SMALL',
    price: 50,
    calories: 20,
  },
  LARGE: {
    name: 'LARGE',
    price: 100,
    calories: 40,
  },
};

var STUFFINGS = {
  CHEESE: {
    name: 'CHEESE',
    price: 10,
    calories: 20,
  },
  SALAD: {
    name: 'SALAD',
    price: 20,
    calories: 5,
  },
  POTATO: {
    name: 'POTATO',
    price: 15,
    calories: 10,
  },
};

var TOPPINGS = {
  MAYO: {
    name: 'MAYO',
    price: 20,
    calories: 5,
  },
  SPICE: {
    name: 'SPICE',
    price: 15,
    calories: 0,
  },
};

function HamburgerException(message) {
  this.name = 'HamburgerException';
  this.message = message || 'HamburgerException';
  this.stack = (new Error()).stack;
}
HamburgerException.prototype = Object.create(Error.prototype);
HamburgerException.prototype.constructor = HamburgerException;

function Hamburger(size, stuffing) {
  if (!Object.values(SIZES).includes(size)) {
    throw new HamburgerException('Некорректный размер');
  }

  if (!Object.values(STUFFINGS).includes(stuffing)) {
    throw new HamburgerException('Некорректная начинка')
  }

  this.size = size;
  this.stuffing = stuffing;
  this.toppings = [];
  //this.price = [];
}

Hamburger.prototype.addToppings = function (topping) {
  if (!Object.values(TOPPINGS).includes(topping)) {
    throw new HamburgerException('Некорректный топпинг');
  }

  this.toppings.push(topping);
};

Hamburger.prototype.removeTopping = function (topping) {
  if (!Object.values(TOPPINGS).includes(topping)) {
    throw new HamburgerException('Такого топпинга нет');
  }

  this.toppings = this.toppings.filter(function (item) {
    return item !== topping;
  })
}

Hamburger.prototype.getToppings = function () {
  return this.toppings;
}

Hamburger.prototype.getSize = function () {
  return this.size;
}

Hamburger.prototype.getStuffing = function () {
  return this.stuffing;
}

Hamburger.prototype.calculatePrice = function () {
  return this.size.price + this.stuffing.price + this.toppings.reduce((acc, current) => acc + current.price, 0);
}

var ham1 = new Hamburger(SIZES.SMALL, STUFFINGS.CHEESE);
ham1.addToppings(TOPPINGS.MAYO);
console.log('price: ', ham1.calculatePrice());

var ham1 = new Hamburger(SIZES.SMALL, STUFFINGS.CHEESE);
ham1.addToppings(TOPPINGS.MAYO);
//console.log(ham1);
// ham1.addToppings(TOPPINGS.SPICE);
// ham1.removeTopping(TOPPINGS.SPICE);
// console.log(ham1.getSize());
// console.log(ham1.getStuffing());
//console.log(ham1Price);
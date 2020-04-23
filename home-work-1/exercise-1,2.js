function Container() {
  this.id = '';
  this.className = '';
  this.htmlCode = '';
}

Container.prototype.render = function () {
  return this.htmlCode;
};

Container.prototype.log = function () {
  if (this.id) {
    console.log(this.id);
  } else {
    console.log(this.className);
  }
};

function Menu(my_id, my_class, my_items) {
  Container.call(this);
  this.id = my_id;
  this.className = my_class;
  this.items = my_items;
}

Menu.prototype = Object.create(Container.prototype);
Menu.prototype.render = function () {
  var result = "<ul class='" + this.className + "' id= '" + this.id + "'>";
  for (var item in this.items) {
    if (this.items[item] instanceof MenuItem) {
      result += this.items[item].render();
    } else {
      var products = new MenuProducts('','', this.items[item]);
      result += products.render();
    }
  }
  result += '</ul>';
  return result;
};

function MenuProducts( my_id, my_class, my_items) {
  Menu.call(this, my_id, my_class, my_items);
}
MenuProducts.prototype = Object.create(Menu.prototype);

MenuProducts.prototype.render = function () {
  var result = "<ul class='" + this.className + "' id= '" + this.id + "'>";
  for (var item in this.items) {
    if (this.items[item] instanceof MenuItem) {
      result += this.items[item].render();
    }
  }
  result += '</ul>';
  return result;
};

function MenuItem(my_href, my_name) {
  Container.call(this);
  this.className = 'menu-item';
  this.href = my_href;
  this.name = my_name;
}

MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.render = function () {
  return '<li class="' + this.className + '"> <a href="' + this.href + '">' + this.name + '</a></li>';
};

var m_item1 = new MenuItem('/', 'Главная');
var m_item2 = new MenuItem('/cart', 'Корзина');
var m_item3 = new MenuItem('/goods', 'Карточки товаров');

var m_item4 = new MenuItem('/product1', 'Товар1');
var m_item5 = new MenuItem('/product2', 'Товар2');
var m_item6 = new MenuItem('/product3', 'Товар3');

var m_items = {
  0: m_item1,
  1: m_item2,
  2: m_item3,
  3: {
    0: m_item4,
    1: m_item5,
    2: m_item6,
  }
};

var menu = new Menu('my_menu', 'menu_class', m_items);

document.write(menu.render());
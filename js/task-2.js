// Задача 2. Склад

// Створи клас Storage, який створюватиме об'єкти для управління складом товарів.
// Клас очікує лише один аргумент — початковий масив товарів, який записується до створеного
// об'єкта в приватну властивість items.

// Оголоси наступні методи класу:

// getItems() — повертає масив поточних товарів у приватній властивості items.
// addItem(newItem) — приймає новий товар newItem і додає його до масиву товарів у приватну
//  властивість items об'єкта.
// removeItem(itemToRemove) — приймає рядок з назвою товару itemToRemove і видаляє його з
// масиву товарів у приватній властивості items об'єкта.

// Візьми код нижче з ініціалізацією екземпляра й викликами методів і встав його після
// оголошення класу для перевірки коректності роботи. У консоль будуть виведені результати
//  їх роботи. Будь ласка, нічого там не змінюй.

class Storage {
  #items;
  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    if (this.#items.indexOf(itemToRemove)) {
      this.#items.splice(this.#items.indexOf(itemToRemove), 1);
    }
  }
}
console.log("Задача 2. Склад");
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

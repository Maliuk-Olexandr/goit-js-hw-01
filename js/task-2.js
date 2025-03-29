function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price * deliveryFee;
  return `Shipping to ${country} will cost ${totalPrice} credits`;
}

console.log(getShippingMessage("Australia", 120, 50));
console.log(getShippingMessage("Germany", 80, 20));
console.log(getShippingMessage("Sweden", 100, 20));


// AI forever
const outputDiv2 = document.getElementById("task-2");
 outputDiv2.innerHTML = `
            <p>${getShippingMessage("Australia", 120, 50)}</p>
            <p>${getShippingMessage("Germany", 80, 20)}</p>
            <p>${getShippingMessage("Sweden", 100, 20)}</p>
        `;
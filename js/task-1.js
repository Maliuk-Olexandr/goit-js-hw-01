
function makeTransaction(quantity, pricePerDroid) {
const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));



// AI forever
const outputDiv = document.getElementById("task-1");
 outputDiv.innerHTML = `
            <p>${makeTransaction(5, 3000)}</p>
            <p>${makeTransaction(3, 1000)}</p>
            <p>${makeTransaction(10, 500)}</p>
        `;
const productPrices = {
    "Product A": 20,
    "Product B": 40,
    "Product C": 50
};

let quantities = {};
let giftWrap = {};
let subtotal = 0;
let totalDiscount = 0;
let shippingFee = 0;
let giftWrapFee = 0;

for (const product in productPrices) {
    const quantity = parseInt(prompt(`Enter quantity of ${product}: `));
    const gift = prompt(`${product} wrapped as a gift? (yes/no): `).toLowerCase();
    quantities[product] = quantity;
    giftWrap[product] = gift;
}

for (const [product, quantity] of Object.entries(quantities)) {
    subtotal += productPrices[product] * quantity;
}

if (subtotal > 200) {
    totalDiscount = 10;
} else if (Object.values(quantities).reduce((acc, val) => acc + val) > 20) {
    totalDiscount = subtotal * 0.1;
} else if (Object.values(quantities).reduce((acc, val) => acc + val) > 30 && Math.max(...Object.values(quantities)) > 15) {
    totalDiscount = (Math.max(...Object.values(quantities)) - 15) * productPrices[product] * 0.5;
} else {
    for (const [product, quantity] of Object.entries(quantities)) {
        if (quantity > 10) {
            totalDiscount += productPrices[product] * quantity * 0.05;
        }
    }
}

const totalQuantity = Object.values(quantities).reduce((acc, val) => acc + val);
shippingFee = Math.floor(totalQuantity / 10) * 5;
giftWrapFee = Object.values(giftWrap).filter(val => val === 'yes').length;

let total = subtotal - totalDiscount + shippingFee + giftWrapFee;

for (const [product, quantity] of Object.entries(quantities)) {
    console.log(`${product}: Quantity: ${quantity}, Total: $${productPrices[product] * quantity}`);
}

console.log(`\nSubtotal: $${subtotal}`);

if (totalDiscount > 0) {
    console.log(`Discount Applied $${totalDiscount}`);
}

console.log(`Shipping Fee: $${shippingFee}`);
console.log(`Gift Wrap Fee: $${giftWrapFee}`);

console.log(`\nTotal: $${total}`);
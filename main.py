product_prices = {
    "Product A": 20,
    "Product B": 40,
    "Product C": 50
}

# Initialize variables
quantities = {}
gift_wrap = {}
subtotal = 0
total_discount = 0
shipping_fee = 0
gift_wrap_fee = 0

# Input quantities and gift wrap choices
for product in product_prices.keys():
    quantity = int(input(f"Enter quantity of {product}: "))
    gift = input(f" {product} wrapped as a gift? (yes/no): ").lower()
    quantities[product] = quantity
    gift_wrap[product] = gift 

# Calculate subtotal
for product, quantity in quantities.items():
    subtotal += product_prices[product] * quantity

# Adiscounts
if subtotal > 200:
    total_discount = 10
elif sum(quantities.values()) > 20:
    total_discount = subtotal * 0.1
elif sum(quantities.values()) > 30 and max(quantities.values()) > 15:
    total_discount = (max(quantities.values()) - 15) * product_prices[product] * 0.5
else:
    for product, quantity in quantities.items():
        if quantity > 10:
            total_discount += product_prices[product] * quantity * 0.05
# Calculate fees
total_quantity = sum(quantities.values())
shipping_fee = (total_quantity // 10) * 5
gift_wrap_fee = sum(1 for product, quantity in quantities.items() if gift_wrap[product])

# Calculate total
total = subtotal - total_discount + shipping_fee + gift_wrap_fee

# Output details
for product, quantity in quantities.items():
    print(f"{product}: Quantity: {quantity}, Total: ${product_prices[product] * quantity}")

print(f"\nSubtotal: ${subtotal}")

if total_discount > 0:
    print(f"Discount Applied ${total_discount}")

print(f"Shipping Fee: ${shipping_fee}")
print(f"Gift Wrap Fee: ${gift_wrap_fee}")

print(f"\nTotal: ${total}")
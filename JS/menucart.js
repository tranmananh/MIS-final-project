 function increaseQuantity(itemId) {
        let quantity = document.getElementById(itemId + '-quantity').innerText;
        quantity = parseInt(quantity) + 1;
        document.getElementById(itemId + '-quantity').innerText = quantity;
    }

    function decreaseQuantity(itemId) {
        let quantity = document.getElementById(itemId + '-quantity').innerText;
        if (quantity > 0) {
            quantity = parseInt(quantity) - 1;
            document.getElementById(itemId + '-quantity').innerText = quantity;
        }
    }

    function addToCart(productName, price, itemId) {
        let quantity = document.getElementById(itemId + '-quantity').innerText;
        if (parseInt(quantity) > 0) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push({
                name: productName,
                price: price,
                quantity: parseInt(quantity)
            });
            localStorage.setItem('cart', JSON.stringify(cart));

            document.getElementById(itemId + '-quantity').innerText = 0;

            alert(productName + " has been added to your cart.");
        } else {
            alert("Please select the quantity.");
        }
    }
	
	
    function loadCart() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let cartItems = document.getElementById('cart-items');
        let total = 0;

        cart.forEach(item => {
            let listItem = document.createElement('li');
            listItem.className = 'cart-item';
            listItem.innerText = `${item.name} - Quantity: ${item.quantity} - Price: ${item.price * item.quantity} VND`;
            cartItems.appendChild(listItem);

            total += item.price * item.quantity;
        });

        document.getElementById('cart-total').innerText = `Total: ${total} VND`;
    }

    window.onload = loadCart;
	

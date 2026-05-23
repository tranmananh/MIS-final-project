function loadContent(page) {
    const contentArea = document.getElementById('content-area');
    if (page === 'dashboard') {
        contentArea.innerHTML = '<h2>Dashboard</h2><p>Overview of production performance.</p>';
    } else if (page === 'suppliers') {
        contentArea.innerHTML = '<h2>Suppliers</h2><p>Manage your suppliers here.</p>';
    } else if (page === 'product') {
        contentArea.innerHTML = '<h2>Product</h2><p>View and manage your products.</p>';
    } else if (page === 'inventory') {
        contentArea.innerHTML = '<h2>Inventory</h2><p>Monitor your inventory levels.</p>';
    } else if (page === 'order') {
        contentArea.innerHTML = '<h2>Order</h2><p>Track and manage orders.</p>';
    }
}

function editItem() {
    alert("Edit button clicked!");
}

function addItem() {
    const itemList = document.getElementById("item-list");
    const newItem = document.createElement("p");
    newItem.innerText = "New Item";
    itemList.appendChild(newItem);
}

function deleteItem() {
    const itemList = document.getElementById("item-list");
    if (itemList.children.length > 0) {
        itemList.removeChild(itemList.lastElementChild);
    }
}

function hideItem() {
    const itemList = document.getElementById("item-list");
    itemList.style.display = (itemList.style.display === "none") ? "block" : "none";
}

function toggleAccountMenu() {
    const menu = document.getElementById("account-menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function settings() {
    alert("Settings clicked!");
}

function logout() {
    alert("Logged out!");
}



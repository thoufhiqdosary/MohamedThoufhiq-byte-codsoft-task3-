// Menu Data
const menuData = [
    {
        id: 1,
        name: 'Pear & Orange',
        category: 'Breakfast',
        price: '25.00$',
        time: '20 min',
        rating: '4.8',
        image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop',
        description: 'As a rule, pancakes are served for breakfast with various sweet sauces, chocolate, berries, maple syrup. Pancakes were a very popular breakfast only in the USA and Canada, but now pancakes enjoy breakfast all over the world.'
    },
    {
        id: 2,
        name: 'Meat & Mushrooms',
        category: 'Lunch',
        price: '37.00$',
        time: '30 min',
        rating: '5.0',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
        description: 'Grilled meat with fresh mushrooms sautéed in butter and garlic. A delicious combination of tender meat and earthy flavors that will satisfy your appetite.'
    },
    {
        id: 3,
        name: 'Egg & Bread',
        category: 'Breakfast',
        price: '25.00$',
        time: '10 min',
        rating: '4.7',
        image: 'https://images.unsplash.com/photo-1585238341710-4b4e6784d298?w=400&h=300&fit=crop',
        description: 'Fresh eggs cooked to perfection with warm, toasted bread. A classic breakfast combination that is both nutritious and delicious.'
    },
    {
        id: 4,
        name: 'Sweet pancake',
        category: 'Dessert',
        price: '13.00$',
        time: '15 min',
        rating: '4.9',
        image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop',
        description: 'Fluffy pancakes topped with fresh berries, whipped cream, and a drizzle of maple syrup. A delightful treat for any time of day.'
    },
    {
        id: 5,
        name: 'Grilled Salmon',
        category: 'Lunch',
        price: '42.00$',
        time: '25 min',
        rating: '4.9',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
        description: 'Premium grilled salmon fillet with seasonal vegetables and lemon butter sauce. Perfect for a healthy and elegant meal.'
    },
    {
        id: 6,
        name: 'Caesar Salad',
        category: 'Lunch',
        price: '18.00$',
        time: '8 min',
        rating: '4.6',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
        description: 'Fresh romaine lettuce, parmesan cheese, croutons, and creamy caesar dressing. A classic salad that never goes out of style.'
    },
    {
        id: 7,
        name: 'Chocolate Cake',
        category: 'Dessert',
        price: '12.00$',
        time: '5 min',
        rating: '4.9',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
        description: 'Decadent chocolate cake with rich chocolate frosting and a layers of chocolate sponge. A must-have for chocolate lovers.'
    },
    {
        id: 8,
        name: 'Iced Coffee',
        category: 'Drinks',
        price: '5.50$',
        time: '3 min',
        rating: '4.7',
        image: 'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=400&h=300&fit=crop',
        description: 'Cold brew coffee served over ice with a splash of cream. Perfect for a refreshing pick-me-up on a warm day.'
    },
    {
        id: 9,
        name: 'Fresh Juice',
        category: 'Drinks',
        price: '6.00$',
        time: '2 min',
        rating: '4.8',
        image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop',
        description: 'Freshly squeezed orange and mango juice. A healthy and delicious way to start your day or refresh yourself.'
    },
    {
        id: 10,
        name: 'Pasta Carbonara',
        category: 'Lunch',
        price: '22.00$',
        time: '20 min',
        rating: '4.8',
        image: 'https://images.unsplash.com/photo-1621996346565-431f63602f41?w=400&h=300&fit=crop',
        description: 'Creamy pasta carbonara with guanciale, egg yolk, pecorino cheese, and black pepper. An authentic Italian classic.'
    },
    {
        id: 11,
        name: 'Croissant',
        category: 'Breakfast',
        price: '4.50$',
        time: '5 min',
        rating: '4.9',
        image: 'https://images.unsplash.com/photo-1585492180666-e8fbb2b20f7d?w=400&h=300&fit=crop',
        description: 'Buttery, flaky croissant with layers of delicate pastry. Perfect with coffee for a French-style breakfast.'
    },
    {
        id: 12,
        name: 'Strawberry Smoothie',
        category: 'Treats',
        price: '8.00$',
        time: '5 min',
        rating: '4.7',
        image: 'https://images.unsplash.com/photo-1594631252615-76991eb9fbb0?w=400&h=300&fit=crop',
        description: 'Refreshing strawberry smoothie blended with yogurt and honey. A delicious and nutritious treat.'
    }
];

// State Management
let currentCategory = 'All';
let cart = [];
let recentlyViewed = [];
let currentDetailItem = null;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    renderMenuItems(menuData);
    loadCartFromLocalStorage();
});

// Event Listeners
function initializeEventListeners() {
    // Category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', handleCategoryChange);
    });

    // Search
    document.getElementById('searchInput').addEventListener('input', handleSearch);

    // Cart button
    document.getElementById('cartBtn').addEventListener('click', showCart);
    document.getElementById('detailCartBtn').addEventListener('click', showCart);

    // Back button
    document.getElementById('backBtn').addEventListener('click', goBackToMenu);

    // Add to cart button
    document.getElementById('addToCartBtn').addEventListener('click', addCurrentItemToCart);

    // Bottom navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', handleNavigation);
    });
}

// Category Change Handler
function handleCategoryChange(e) {
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    e.target.classList.add('active');
    
    currentCategory = e.target.dataset.category;
    const filtered = currentCategory === 'All' 
        ? menuData 
        : menuData.filter(item => item.category === currentCategory);
    
    renderMenuItems(filtered);
}

// Search Handler
function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    const filtered = menuData.filter(item =>
        item.name.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );
    renderMenuItems(filtered);
}

// Render Menu Items
function renderMenuItems(items) {
    const menuGrid = document.getElementById('menuGrid');
    
    if (items.length === 0) {
        menuGrid.innerHTML = '<div class="empty-state" style="grid-column: 1/-1;"><i class="fas fa-search"></i><p>No items found</p></div>';
        return;
    }

    menuGrid.innerHTML = items.map(item => `
        <div class="menu-item" onclick="showDetail(${item.id})">
            <img src="${item.image}" alt="${item.name}" class="menu-item-image">
            <div class="menu-item-content">
                <div class="menu-item-name">${item.name}</div>
                <div class="menu-item-meta">
                    <div class="meta-group">
                        <div class="meta-item">
                            <i class="fas fa-clock"></i>
                            <span>${item.time}</span>
                        </div>
                        <div class="meta-item">
                            <span class="menu-item-rating">★</span>
                            <span>${item.rating}</span>
                        </div>
                    </div>
                </div>
                <div class="menu-item-price">${item.price}</div>
            </div>
        </div>
    `).join('');
}

// Show Detail Page
function showDetail(itemId) {
    const item = menuData.find(i => i.id === itemId);
    if (!item) return;

    currentDetailItem = item;
    
    // Add to recently viewed
    recentlyViewed = recentlyViewed.filter(id => id !== itemId);
    recentlyViewed.unshift(itemId);
    if (recentlyViewed.length > 3) recentlyViewed.pop();

    // Populate detail page
    document.getElementById('detailName').textContent = item.name;
    document.getElementById('detailImage').src = item.image;
    document.getElementById('detailTime').textContent = item.time;
    document.getElementById('detailRating').textContent = item.rating;
    document.getElementById('detailDescription').textContent = item.description;
    document.getElementById('detailPrice').textContent = item.price;

    // Render recently viewed items
    const viewedGrid = document.getElementById('viewedGrid');
    viewedGrid.innerHTML = recentlyViewed.map(id => {
        const viewedItem = menuData.find(i => i.id === id);
        return `
            <div class="viewed-item" onclick="showDetail(${viewedItem.id})">
                <img src="${viewedItem.image}" alt="${viewedItem.name}">
            </div>
        `;
    }).join('');

    // Switch page
    switchPage('detail');
}

// Go Back to Menu
function goBackToMenu() {
    switchPage('menu');
}

// Add to Cart
function addCurrentItemToCart() {
    if (!currentDetailItem) return;

    const existingItem = cart.find(i => i.id === currentDetailItem.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...currentDetailItem,
            quantity: 1
        });
    }

    saveCartToLocalStorage();
    updateCartCount();
    showToast(`${currentDetailItem.name} added to cart!`);
}

// Update Cart Count
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

// Show Cart
function showCart() {
    // TODO: Create a cart page with full functionality
    alert('Cart: ' + cart.length + ' items\n' + 
          cart.map(item => `${item.name} x${item.quantity}`).join('\n'));
}

// Switch Page
function switchPage(pageName) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    if (pageName === 'menu') {
        document.getElementById('menuPage').classList.add('active');
    } else if (pageName === 'detail') {
        document.getElementById('detailPage').classList.add('active');
    }

    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.page === pageName) {
            btn.classList.add('active');
        }
    });
}

// Navigation Handler
function handleNavigation(e) {
    const page = e.currentTarget.dataset.page;
    
    if (page === 'menu') {
        switchPage('menu');
    } else if (page === 'wishlist') {
        showToast('Wishlist feature coming soon!');
    } else if (page === 'orders') {
        showToast('Orders feature coming soon!');
    } else if (page === 'profile') {
        showToast('Profile feature coming soon!');
    }
}

// Toast Notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2000);
}

// Local Storage Management
function saveCartToLocalStorage() {
    localStorage.setItem('restaurantCart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const saved = localStorage.getItem('restaurantCart');
    if (saved) {
        cart = JSON.parse(saved);
        updateCartCount();
    }
}

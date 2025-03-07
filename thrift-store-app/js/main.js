// Global variables
let cart = [];
let showcases = [];
let selectedNGO = null;

// Sample product data
const products = [
    // Women's Section
    {
        id: 1,
        name: "Vintage Denim Jacket",
        price: 599,
        condition: "vintage",
        sustainabilityRating: 4,
        category: "women",
        image: "https://images.unsplash.com/photo-1544642899-f0d6e5f6ed6f?w=500",
        description: "Classic vintage denim jacket in excellent condition"
    },
    {
        id: 2,
        name: "Floral Summer Dress",
        price: 399,
        condition: "like-new",
        sustainabilityRating: 5,
        category: "women",
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500",
        description: "Beautiful floral print summer dress"
    },
    {
        id: 3,
        name: "Boho Maxi Skirt",
        price: 299,
        condition: "gently-used",
        sustainabilityRating: 4,
        category: "women",
        image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500",
        description: "Bohemian style long skirt with ethnic prints"
    },
    {
        id: 4,
        name: "Silk Blouse",
        price: 449,
        condition: "like-new",
        sustainabilityRating: 5,
        category: "women",
        image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=500",
        description: "Elegant silk blouse, perfect for office wear"
    },

    // Men's Section
    {
        id: 5,
        name: "Formal White Shirt",
        price: 349,
        condition: "like-new",
        sustainabilityRating: 5,
        category: "men",
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500",
        description: "Crisp white formal shirt for professional settings"
    },
    {
        id: 6,
        name: "Casual Denim Jeans",
        price: 499,
        condition: "gently-used",
        sustainabilityRating: 4,
        category: "men",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
        description: "Comfortable everyday wear jeans"
    },
    {
        id: 7,
        name: "Polo T-Shirt",
        price: 249,
        condition: "like-new",
        sustainabilityRating: 4,
        category: "men",
        image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500",
        description: "Classic polo t-shirt in excellent condition"
    },
    {
        id: 8,
        name: "Winter Jacket",
        price: 699,
        condition: "vintage",
        sustainabilityRating: 3,
        category: "men",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
        description: "Warm and stylish winter jacket"
    },

    // Kids Section
    {
        id: 9,
        name: "Party Dress",
        price: 399,
        condition: "like-new",
        sustainabilityRating: 4,
        category: "kids",
        image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=500",
        description: "Adorable party dress for girls aged 6-8 years"
    },
    {
        id: 10,
        name: "Boys School Uniform",
        price: 299,
        condition: "gently-used",
        sustainabilityRating: 4,
        category: "kids",
        image: "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?w=500",
        description: "Complete school uniform set for boys"
    },
    {
        id: 11,
        name: "Kids Sports Set",
        price: 349,
        condition: "like-new",
        sustainabilityRating: 5,
        category: "kids",
        image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=500",
        description: "Comfortable sports wear set for children"
    },

    // Accessories Section
    {
        id: 12,
        name: "Vintage Leather Bag",
        price: 799,
        condition: "vintage",
        sustainabilityRating: 3,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
        description: "Classic leather handbag in vintage style"
    },
    {
        id: 13,
        name: "Designer Sunglasses",
        price: 599,
        condition: "like-new",
        sustainabilityRating: 4,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
        description: "Authentic designer sunglasses"
    },
    {
        id: 14,
        name: "Silk Scarf",
        price: 199,
        condition: "gently-used",
        sustainabilityRating: 4,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=500",
        description: "Beautiful silk scarf with floral pattern"
    },

    // Footwear Section
    {
        id: 15,
        name: "Sports Shoes",
        price: 699,
        condition: "gently-used",
        sustainabilityRating: 4,
        category: "footwear",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        description: "Branded sports shoes in great condition"
    },
    {
        id: 16,
        name: "Formal Shoes",
        price: 599,
        condition: "like-new",
        sustainabilityRating: 5,
        category: "footwear",
        image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=500",
        description: "Classic black formal shoes"
    },
    {
        id: 17,
        name: "Casual Sneakers",
        price: 449,
        condition: "gently-used",
        sustainabilityRating: 4,
        category: "footwear",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
        description: "Comfortable everyday sneakers"
    }
];

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeMarketplace();
    renderShowcases();
    setupEventListeners();
});

// Function definitions
function initializeMarketplace() {
    renderProducts(products);
}

function renderProducts(productsToRender) {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;
    
    productGrid.innerHTML = '';
    productsToRender.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            <button class="wishlist-btn" onclick="toggleWishlist(this)">
                <i class="far fa-heart"></i>
            </button>
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <p class="price">₹${product.price}</p>
            <p class="condition">${capitalizeFirstLetter(product.condition)}</p>
            <div class="sustainability">
                ${getSustainabilityStars(product.sustainabilityRating)}
            </div>
            <p class="description">${product.description}</p>
            <button class="add-to-cart-btn" data-id="${product.id}" onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        </div>
    `;
    return card;
}

function setupEventListeners() {
    // Category navigation
    const categoryCards = document.querySelectorAll('.category-card');
    if (categoryCards) {
        categoryCards.forEach(card => {
            card.addEventListener('click', () => {
                const category = card.dataset.category;
                filterByCategory(category);
            });
        });
    }

    // Filter functionality
    const conditionFilter = document.getElementById('condition-filter');
    const sustainabilityFilter = document.getElementById('sustainability-filter');

    if (conditionFilter) {
        conditionFilter.addEventListener('change', applyFilters);
    }

    if (sustainabilityFilter) {
        sustainabilityFilter.addEventListener('change', applyFilters);
    }

    // Cart functionality
    const cartToggleBtn = document.querySelector('.cart-toggle');
    const cartSidebar = document.getElementById('cart-sidebar');
    const checkoutBtn = document.getElementById('checkout-btn');
    const checkoutForm = document.getElementById('checkout-form');

    if (cartToggleBtn && cartSidebar) {
        cartToggleBtn.addEventListener('click', () => {
            cartSidebar.classList.toggle('active');
            if (cartSidebar.classList.contains('active')) {
                renderCart();
            }
        });
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', proceedToCheckout);
    }

    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleCheckoutSubmit);
    }

    // Showcase functionality
    const openShowcaseBtn = document.getElementById('open-showcase-form');
    const showcaseModal = document.getElementById('showcase-modal');
    const closeModal = showcaseModal?.querySelector('.close-modal');
    const showcaseForm = document.getElementById('showcase-form');

    if (openShowcaseBtn && showcaseModal) {
        openShowcaseBtn.addEventListener('click', () => {
            showcaseModal.style.display = 'block';
        });
    }

    if (closeModal && showcaseModal) {
        closeModal.addEventListener('click', () => {
            showcaseModal.style.display = 'none';
        });
    }

    if (showcaseForm) {
        showcaseForm.addEventListener('submit', handleShowcaseSubmit);
    }

    // Donation functionality
    setupDonationEventListeners();

    // Chatbot functionality
    setupChatbot();

    // Global modal close
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
}

function filterByCategory(category) {
    const filteredProducts = products.filter(p => p.category === category);
    renderProducts(filteredProducts);
}

function applyFilters() {
    const condition = document.getElementById('condition-filter')?.value;
    const sustainability = document.getElementById('sustainability-filter')?.value;
    
    let filteredProducts = [...products];
    
    if (condition) {
        filteredProducts = filteredProducts.filter(p => p.condition === condition);
    }
    
    if (sustainability) {
        filteredProducts = filteredProducts.filter(p => 
            p.sustainabilityRating >= parseInt(sustainability)
        );
    }
    
    renderProducts(filteredProducts);
}

function addToCart(productId) {
    const product = products.find(p => p.id === parseInt(productId));
    if (product) {
        const cartItem = cart.find(item => item.id === product.id);
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCartDisplay();
        showNotification('Item added to cart!');
    }
}

function updateCartDisplay() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    cartCount.textContent = totalItems;
    cartTotal.textContent = `₹${totalAmount.toLocaleString('en-IN')}`;
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function proceedToCheckout() {
    const checkoutModal = document.getElementById('checkout-modal');
    const orderItems = document.getElementById('order-items');
    const orderTotalAmount = document.getElementById('order-total-amount');
    
    orderItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerHTML = `
            <span>${item.name} x ${item.quantity}</span>
            <span>₹${itemTotal.toLocaleString('en-IN')}</span>
        `;
        orderItems.appendChild(orderItem);
    });
    
    orderTotalAmount.textContent = `₹${total.toLocaleString('en-IN')}`;
    checkoutModal.style.display = 'block';
}

function handleCheckoutSubmit(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('checkout-name').value,
        email: document.getElementById('checkout-email').value,
        address: document.getElementById('checkout-address').value,
        payment: document.querySelector('input[name="payment"]:checked')?.value
    };
    
    console.log('Order placed:', formData);
    cart = [];
    updateCartDisplay();
    
    alert('Thank you for your purchase! You will receive a confirmation email shortly.');
    const checkoutModal = document.getElementById('checkout-modal');
    if (checkoutModal) {
        checkoutModal.style.display = 'none';
    }
    e.target.reset();
}

function renderShowcases() {
    const showcaseGrid = document.getElementById('showcase-grid');
    showcaseGrid.innerHTML = '';
    
    showcases.forEach(showcase => {
        const card = document.createElement('div');
        card.className = 'showcase-card';
        card.innerHTML = `
            <div class="transformation-images">
                <img src="${showcase.beforeImage}" alt="Before" class="before-image">
                <img src="${showcase.afterImage}" alt="After" class="after-image">
            </div>
            <div class="showcase-content">
                <h3>${showcase.title}</h3>
                <p>${showcase.story}</p>
                <div class="tips">
                    <h4>Tips & Techniques:</h4>
                    <p>${showcase.tips}</p>
                </div>
            </div>
        `;
        showcaseGrid.appendChild(card);
    });
}

function handleShowcaseSubmit(event) {
    event.preventDefault();

    const title = document.getElementById('showcase-title')?.value;
    const beforeImage = document.getElementById('before-image')?.files[0];
    const afterImage = document.getElementById('after-image')?.files[0];
    const story = document.getElementById('transformation-story')?.value;
    const tips = document.getElementById('tips')?.value;

    if (!title || !beforeImage || !afterImage || !story || !tips) {
        alert('Please fill in all fields');
        return;
    }

    // Create showcase item
    const showcaseItem = {
        title,
        beforeImage: URL.createObjectURL(beforeImage),
        afterImage: URL.createObjectURL(afterImage),
        story,
        tips,
        date: new Date().toLocaleDateString()
    };

    // Add to showcase grid
    addShowcaseToGrid(showcaseItem);

    // Close modal and reset form
    document.getElementById('showcase-modal').style.display = 'none';
    event.target.reset();
}

function addShowcaseToGrid(showcase) {
    const showcaseGrid = document.getElementById('showcase-grid');
    if (!showcaseGrid) return;

    const showcaseElement = document.createElement('div');
    showcaseElement.className = 'showcase-item';
    showcaseElement.innerHTML = `
        <h3>${showcase.title}</h3>
        <div class="transformation-images">
            <div class="before">
                <p>Before</p>
                <img src="${showcase.beforeImage}" alt="Before transformation">
            </div>
            <div class="after">
                <p>After</p>
                <img src="${showcase.afterImage}" alt="After transformation">
            </div>
        </div>
        <p class="story">${showcase.story}</p>
        <div class="tips">
            <h4>Tips:</h4>
            <p>${showcase.tips}</p>
        </div>
        <p class="date">Shared on: ${showcase.date}</p>
    `;

    showcaseGrid.prepend(showcaseElement);
}

function setupDonationEventListeners() {
    const decreaseBtn = document.getElementById('decrease-items');
    const increaseBtn = document.getElementById('increase-items');
    const itemCountSpan = document.getElementById('item-count');
    const donateBtn = document.getElementById('donate-btn');

    let itemCount = 1;

    if (decreaseBtn && increaseBtn && itemCountSpan) {
        decreaseBtn.addEventListener('click', () => {
            if (itemCount > 1) {
                itemCount--;
                itemCountSpan.textContent = itemCount;
            }
        });

        increaseBtn.addEventListener('click', () => {
            itemCount++;
            itemCountSpan.textContent = itemCount;
        });
    }

    if (donateBtn) {
        donateBtn.addEventListener('click', handleDonation);
    }
}

function handleDonation() {
    const condition = document.getElementById('item-condition')?.value;
    const itemCount = parseInt(document.getElementById('item-count')?.textContent || '1');

    if (!condition) {
        alert('Please select the condition of your items');
        return;
    }

    // Create donation record
    const donation = {
        condition,
        itemCount,
        date: new Date().toLocaleDateString()
    };

    // Show success message
    alert(`Thank you for your donation! We will contact you soon to arrange the collection of your ${itemCount} ${condition} item(s).`);
    
    // Reset form
    document.getElementById('item-condition').value = '';
    document.getElementById('item-count').textContent = '1';
}

function toggleWishlist(btn) {
    const icon = btn.querySelector('i');
    icon.classList.toggle('far');
    icon.classList.toggle('fas');
    // In a real application, this would update the backend
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getSustainabilityStars(rating) {
    return Array(5).fill('').map((_, index) => 
        `<i class="fas fa-leaf ${index < rating ? 'active' : ''}"></i>`
    ).join('');
}

// Chatbot functionality
function setupChatbot() {
    const chatbot = document.getElementById('chatbot');
    const toggleChat = document.getElementById('toggle-chat');
    const minimizeChat = document.getElementById('minimize-chat');
    const sendMessage = document.getElementById('send-message');
    const userInput = document.getElementById('user-message');
    const chatMessages = document.getElementById('chat-messages');
    const quickActions = document.querySelectorAll('.quick-action-btn');

    // Add this chatbot feature to your existing `main.js`

document.addEventListener("DOMContentLoaded", function () {
    const chatButton = document.createElement("button");
    chatButton.innerText = "Chat";
    chatButton.id = "chat-btn";
    document.body.appendChild(chatButton);

    const chatBox = document.createElement("div");
    chatBox.id = "chat-box";
    chatBox.innerHTML = `
        <div id="chat-header">Fashion Chatbot</div>
        <div id="chat-messages"></div>
        <input type="text" id="chat-input" placeholder="Ask me about fashion...">
        <button id="send-btn">Send</button>
    `;
    document.body.appendChild(chatBox);
    chatBox.style.display = "none";

    chatButton.addEventListener("click", () => {
        chatBox.style.display = chatBox.style.display === "none" ? "block" : "none";
    });

    document.getElementById("send-btn").addEventListener("click", () => {
        const inputField = document.getElementById("chat-input");
        const userMessage = inputField.value.trim();
        if (!userMessage) return;

        displayMessage("You: " + userMessage, "user");
        const botReply = getBotResponse(userMessage);
        setTimeout(() => displayMessage("Bot: " + botReply, "bot"), 500);

        inputField.value = "";
    });
});

function displayMessage(message, sender) {
    const chatMessages = document.getElementById("chat-messages");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add(sender);
    messageDiv.innerText = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(input) {
    const responses = {
        "What should I wear for a summer day?": "Light fabrics like cotton or linen with bright colors!",
        "What colors are in trend?": "Pastels and earth tones are trending this season!",
        "How do I style vintage clothes?": "Mix and match with modern pieces for a chic look!"
    };
    return responses[input] || "I'm not sure, but always wear what makes you feel great!";
}

    // Toggle chatbot visibility
    if (toggleChat) {
        toggleChat.addEventListener('click', () => {
            chatbot.style.display = chatbot.style.display === 'none' ? 'flex' : 'none';
        });
    }

    // Minimize chatbot
    if (minimizeChat) {
        minimizeChat.addEventListener('click', () => {
            chatbot.style.display = 'none';
        });
    }

    // Send message
    if (sendMessage && userInput) {
        sendMessage.addEventListener('click', () => {
            const message = userInput.value.trim();
            if (message) {
                addUserMessage(message);
                handleUserInput(message);
                userInput.value = '';
            }
        });

        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const message = userInput.value.trim();
                if (message) {
                    addUserMessage(message);
                    handleUserInput(message);
                    userInput.value = '';
                }
            }
        });
    }

    // Quick action buttons
    if (quickActions) {
        quickActions.forEach(btn => {
            btn.addEventListener('click', () => {
                const action = btn.dataset.action;
                handleQuickAction(action);
            });
        });
    }
}

function addUserMessage(message) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user';
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addBotMessage(message) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot';
    messageDiv.innerHTML = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTypingIndicator() {
    const chatMessages = document.getElementById('chat-messages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'typing-indicator';
    typingDiv.innerHTML = '<span></span><span></span><span></span>';
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return typingDiv;
}

function handleQuickAction(action) {
    switch (action) {
        case 'size-guide':
            addBotMessage(`
                Here's our size guide:
                <ul>
                    <li>Always check measurements in the product description</li>
                    <li>Compare with similar items you own</li>
                    <li>For vintage items, sizes may run differently</li>
                    <li>When in doubt, size up for a comfortable fit</li>
                </ul>
                Need specific measurements for an item? Just ask!
            `);
            break;
        case 'donation-help':
            addBotMessage(`
                Donating is easy! Here's how:
                <ol>
                    <li>Select the condition of your items</li>
                    <li>Enter the number of items</li>
                    <li>Click "Donate Now"</li>
                    <li>We'll contact you to arrange collection</li>
                </ol>
                Your donations help both the environment and those in need!
            `);
            break;
        case 'sustainability':
            addBotMessage(`
                Sustainability tips for fashion:
                <ul>
                    <li>Choose quality over quantity</li>
                    <li>Check fabric compositions</li>
                    <li>Consider repair before replace</li>
                    <li>Wash clothes in cold water</li>
                    <li>Air dry when possible</li>
                </ul>
                Want to learn more about sustainable fashion?
            `);
            break;
        case 'upcycling':
            addBotMessage(`
                Popular upcycling ideas:
                <ul>
                    <li>Transform old jeans into a trendy bag</li>
                    <li>Turn t-shirts into workout tops</li>
                    <li>Create accessories from fabric scraps</li>
                    <li>Customize jackets with patches</li>
                </ul>
                Check our transformation showcase for more inspiration!
            `);
            break;
    }
}

function handleUserInput(message) {
    const typingIndicator = showTypingIndicator();
    
    // Simulate processing time
    setTimeout(() => {
        typingIndicator.remove();
        
        // Simple keyword-based responses
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('size') || lowerMessage.includes('fit')) {
            handleQuickAction('size-guide');
        }
        else if (lowerMessage.includes('donat') || lowerMessage.includes('give')) {
            handleQuickAction('donation-help');
        }
        else if (lowerMessage.includes('sustainable') || lowerMessage.includes('eco')) {
            handleQuickAction('sustainability');
        }
        else if (lowerMessage.includes('upcycle') || lowerMessage.includes('transform') || lowerMessage.includes('diy')) {
            handleQuickAction('upcycling');
        }
        else if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
            addBotMessage('Hello! How can I help you today? Feel free to ask about sizes, donations, sustainability, or upcycling ideas!');
        }
        else {
            addBotMessage(`
                I'm not sure I understand. Can I help you with:
                <div class="quick-actions">
                    <button class="quick-action-btn" data-action="size-guide">Size Guide</button>
                    <button class="quick-action-btn" data-action="donation-help">Donation Process</button>
                    <button class="quick-action-btn" data-action="sustainability">Sustainability Tips</button>
                    <button class="quick-action-btn" data-action="upcycling">Upcycling Ideas</button>
                </div>
            `);
            
            // Reattach event listeners to new quick action buttons
            const newQuickActions = document.querySelectorAll('.quick-action-btn');
            newQuickActions.forEach(btn => {
                btn.addEventListener('click', () => {
                    const action = btn.dataset.action;
                    handleQuickAction(action);
                });
            });
        }
    }, 1000);
}

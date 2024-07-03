// script.js

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.desktop-searchBar');
    const searchResults = document.getElementById('search-results');
    const profileIcon = document.querySelector('.profile');
    const profileOptions = document.getElementById('profile-options');

    const products = [
        "T-Shirt",
        "Jeans",
        "Sneakers",
        "Jacket",
        "Dress",
        "Hat",
        "Backpack"
    ];

    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = '';

        if (query.length > 0) {
            const filteredProducts = products.filter(product => product.toLowerCase().includes(query));
            
            filteredProducts.forEach(product => {
                const resultItem = document.createElement('div');
                resultItem.textContent = product;
                searchResults.appendChild(resultItem);
            });

            searchResults.classList.remove('hidden');
        } else {
            searchResults.classList.add('hidden');
        }
    });

    profileIcon.addEventListener('click', function () {
        profileOptions.classList.toggle('hidden');
    });

    document.addEventListener('click', function (event) {
        if (!profileIcon.contains(event.target) && !profileOptions.contains(event.target)) {
            profileOptions.classList.add('hidden');
        }
    });
});

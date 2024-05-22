document.addEventListener('DOMContentLoaded', () => {
    const addItemButton = document.getElementById('add-item');
    const itemNameInput = document.getElementById('item-name');
    const itemList = document.getElementById('item-list');
    const badge = document.querySelector('.badge');

    addItemButton.addEventListener('click', addItem);
    itemList.addEventListener('click', handleItemClick);
    badge.addEventListener('mouseover', showBadgeDetails);
    badge.addEventListener('mouseout', hideBadgeDetails);

    function addItem() {
        const itemName = itemNameInput.value.trim();
        if (itemName) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<span class="item-name">${itemName}</span>
                                  <span class="item-quantity">1</span>
                                  <button class="delete-btn" data-tooltip="Видалити">×</button>`;
            itemList.appendChild(listItem);
            itemNameInput.value = '';
        }
    }

    function handleItemClick(event) {
        if (event.target.classList.contains('delete-btn')) {
            const listItem = event.target.closest('li');
            listItem.remove();
        }
    }

    function showBadgeDetails() {
        badge.textContent = "Це робота Івана";
    }

    function hideBadgeDetails() {
        badge.textContent = "BuyList";
    }

    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('mouseover', showTooltip);
        btn.addEventListener('mouseout', hideTooltip);
    });

    function showTooltip(event) {
        let tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = event.target.getAttribute('data-tooltip');
        document.body.appendChild(tooltip);

        let coords = event.target.getBoundingClientRect();
        let left = coords.left + (event.target.offsetWidth - tooltip.offsetWidth) / 2;
        let top = coords.top - tooltip.offsetHeight - 5;

        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';
        setTimeout(() => {
            tooltip.classList.add('show');
        }, 0);
    }

    function hideTooltip() {
        let tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            tooltip.classList.remove('show');
            tooltip.remove();
        }
    }
});

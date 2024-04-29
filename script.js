document.addEventListener('DOMContentLoaded', () => {
    const itemsList = document.getElementById('items-list');
    const totalCostElement = document.getElementById('total-cost');
    const addItemBtn = document.getElementById('addItemBtn');
    const itemNameInput = document.getElementById('itemName');
    const itemCostInput = document.getElementById('itemCost');
    let totalCost = 0;

    function updateTotalCost(cost) {
        totalCost += cost;
        totalCostElement.textContent = totalCost.toFixed(2);
    }

    function removeItem(event) {
        const item = event.target.closest('.item');
        if (item) {
            const cost = parseFloat(item.querySelector('.item-cost').textContent);
            updateTotalCost(-cost);
            item.remove();
        }
    }

    addItemBtn.addEventListener('click', () => {
        const itemName = itemNameInput.value;
        const itemCost = parseFloat(itemCostInput.value);

        if (itemName && !isNaN(itemCost) && itemCost > 0) {
            const listItem = document.createElement('li');
            listItem.className = 'item';

            const itemNameSpan = document.createElement('span');
            itemNameSpan.textContent = itemName;

            const itemCostSpan = document.createElement('span');
            itemCostSpan.className = 'item-cost';
            itemCostSpan.textContent = itemCost.toFixed(2);

            const removeButton = document.createElement('button');
            removeButton.className = 'remove-button';
            removeButton.textContent = 'Remove';

            listItem.appendChild(itemNameSpan);
            listItem.appendChild(itemCostSpan);
            listItem.appendChild(removeButton);

            itemsList.appendChild(listItem);

            updateTotalCost(itemCost);

            itemNameInput.value = '';
            itemCostInput.value = '';
        } else {
            alert('Please enter a valid item name and cost.');
        }
    });

    itemsList.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-button')) {
            removeItem(event);
        }
    });
});

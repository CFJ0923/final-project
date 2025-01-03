document.querySelectorAll('.product-card').forEach(card => {
    const incrementBtn = card.querySelector('.increment');
    const decrementBtn = card.querySelector('.decrement');
    const inputField = card.querySelector('input[type="text"]');
    const tooltip = card.querySelector('.tooltip');

    incrementBtn.addEventListener('click', () => {
        inputField.value = parseInt(inputField.value) + 1;
    });

    decrementBtn.addEventListener('click', () => {
        inputField.value = Math.max(0, parseInt(inputField.value) - 1);
    });

    const sizeButtons = card.querySelectorAll('.size-button');
    sizeButtons.forEach(button => {
        button.addEventListener('click', () => {
            sizeButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        });
    });

    card.addEventListener('mousemove', (event) => {
        const cardRect = card.getBoundingClientRect();
        const tooltipWidth = tooltip.offsetWidth;
        const tooltipHeight = tooltip.offsetHeight;

        let left = event.clientX - cardRect.left + 10;
        let top = event.clientY - cardRect.top + 10;

        if (left + tooltipWidth > cardRect.width) {
            left = cardRect.width - tooltipWidth - 10;
        }

        if (top + tooltipHeight > cardRect.height) {
            top = cardRect.height - tooltipHeight - 10;
        }

        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${top}px`;
    });
});

const buttons = document.querySelectorAll('.category-button');
const sections = document.querySelectorAll('.category-section');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        sections.forEach(section => section.classList.add('hidden'));
        document.getElementById(button.dataset.category).classList.remove('hidden');
    });
});


document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        const name = card.querySelector('h2').textContent;
        const price = parseInt(card.querySelector('.price').textContent.replace('$', ''));
        const quantity = parseInt(card.querySelector('input[type="text"]').value);
        const size = card.querySelector('.size-button.selected')?.textContent || '未選擇';

        if (quantity > 0) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingItem = cart.find(item => item.name === name && item.size === size);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.push({ name, price, quantity, size });
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            alert(`${name} 已加入購物車！`);
        } else {
            alert('請選擇數量！');
        }
    });
});


// 這裡您可以後續添加與購物車、收藏清單等功能相關的邏輯
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.product button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('已加入購物車');
        });
    });
});

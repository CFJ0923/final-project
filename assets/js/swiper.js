document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        autoplay: {
            delay: 2000, // 每兩秒切換下一張
        },
        loop: true, // 循環播放
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination', // 分頁按鈕容器
            clickable: true, // 點擊分頁切換
        },
    });
});

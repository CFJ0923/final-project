const snowContainer = document.getElementById('snow-container');
const snowflakeCount = 50; // 雪花數量

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄'; // 雪花符號
    snowflake.style.left = Math.random() * 100 + 'vw'; // 隨機水平位置
    snowflake.style.animationDuration = Math.random() * 4 + 3 + 2 + 's'; // 隨機速度
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; // 隨機大小
    snowflake.style.opacity = Math.random() + 0.1; // 隨機透明度
    snowContainer.appendChild(snowflake);

    // 雪花到達底部時移除
    setTimeout(() => {
        snowflake.remove();
    }, (parseFloat(snowflake.style.animationDuration) * 1000));
}

// 定時創建雪花
setInterval(createSnowflake, 100);

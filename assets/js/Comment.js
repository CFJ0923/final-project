document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-review');
    const reviewText = document.getElementById('review-text');
    const reviewList = document.getElementById('review-list');
    const stars = document.querySelectorAll('.star-rating .star');
    
    let reviews = [];
    let selectedRating = 0;

    // 顯示評論
    function displayReviews() {
        reviewList.innerHTML = '';
        reviews.forEach(review => {
            const reviewDiv = document.createElement('div');
            reviewDiv.classList.add('review');
            reviewDiv.innerHTML = `
                <p class="review-text">${review.text}</p>
                <p class="review-rating">評分: ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</p>
                <p class="review-date">${review.date}</p>
            `;
            reviewList.appendChild(reviewDiv);
        });
    }

    // 星星懸停效果
    stars.forEach(star => {
        star.addEventListener('mouseover', function() {
            const value = parseInt(star.getAttribute('data-value'));
            updateHoverStars(value);
        });

        star.addEventListener('mouseout', function() {
            updateHoverStars(0);
        });

        star.addEventListener('click', function() {
            selectedRating = parseInt(star.getAttribute('data-value'));
            updateStars(selectedRating);
        });
    });

    // 更新星星顯示
    function updateStars(rating) {
        stars.forEach(star => {
            const value = parseInt(star.getAttribute('data-value'));
            if (value <= rating) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    }

    // 更新懸停時的星星顯示
    function updateHoverStars(rating) {
        stars.forEach(star => {
            const value = parseInt(star.getAttribute('data-value'));
            if (value <= rating) {
                star.classList.add('hover');
            } else {
                star.classList.remove('hover');
            }
        });
    }

    // 提交評論
    submitButton.addEventListener('click', function() {
        const text = reviewText.value.trim();

        if (text && selectedRating > 0) {
            const newReview = {
                text: text,
                rating: selectedRating,
                date: new Date().toLocaleString()
            };

            reviews.push(newReview);
            reviewText.value = '';
            selectedRating = 0;
            stars.forEach(star => star.classList.remove('selected')); // 重置星星選擇

            // 顯示新評論
            const reviewDiv = document.createElement('div');
            reviewDiv.classList.add('review');
            reviewDiv.innerHTML = `
                <p class="review-text">${newReview.text}</p>
                <p class="review-rating">評分: ${'★'.repeat(newReview.rating)}${'☆'.repeat(5 - newReview.rating)}</p>
                <p class="review-date">${newReview.date}</p>
            `;
            reviewList.appendChild(reviewDiv); // 顯示評論在列表的最後
        } else {
            alert("請輸入評論並選擇星級");
        }
    });

    // 初始顯示評論
    displayReviews();
});


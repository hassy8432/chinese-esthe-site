/** scripts.js **/

// 口コミ投稿機能
function submitReview() {
    const name = document.getElementById('review-name').value;
    const rating = document.getElementById('review-rating').value;
    const comment = document.getElementById('review-comment').value;
    
    if (name && rating && comment) {
        const reviewList = document.getElementById('review-list');
        const newReview = document.createElement('div');
        newReview.classList.add('review-card');
        newReview.innerHTML = `<strong>${name}</strong> - ${'★'.repeat(rating)}<br>${comment}`;
        reviewList.appendChild(newReview);
        
        // ローカルストレージに保存
        const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.push({ name, rating, comment });
        localStorage.setItem('reviews', JSON.stringify(reviews));
        
        alert('口コミが投稿されました！');
        document.getElementById('review-form').reset();
    } else {
        alert('全ての項目を入力してください！');
    }
}

// ページ読み込み時に口コミを表示
window.onload = function () {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    const reviewList = document.getElementById('review-list');
    reviews.forEach(review => {
        const newReview = document.createElement('div');
        newReview.classList.add('review-card');
        newReview.innerHTML = `<strong>${review.name}</strong> - ${'★'.repeat(review.rating)}<br>${review.comment}`;
        reviewList.appendChild(newReview);
    });
};

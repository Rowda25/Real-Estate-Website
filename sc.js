// Wait for DOM content to load
document.addEventListener("DOMContentLoaded", function () {
    // Handle form submission (for contact form)
    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Thank you for reaching out! We will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Handle customer review ratings (on properties or review section)
    const reviewForm = document.querySelector("#review-form");
    if (reviewForm) {
        reviewForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const rating = document.querySelector('input[name="rating"]:checked');
            const reviewText = document.getElementById('review-text').value;

            if (rating && reviewText) {
                alert('Thank you for your review!');
                reviewForm.reset();
                updateReviews(rating.value, reviewText);
            } else {
                alert('Please provide both a rating and review.');
            }
        });
    }

    // Function to dynamically update the reviews
    function updateReviews(rating, reviewText) {
        const reviewsSection = document.querySelector('.reviews-list');

        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');

        const reviewRating = document.createElement('p');
        reviewRating.classList.add('review-rating');
        reviewRating.textContent = `Rating: ${rating} Stars`;

        const reviewDescription = document.createElement('p');
        reviewDescription.classList.add('review-description');
        reviewDescription.textContent = reviewText;

        reviewItem.appendChild(reviewRating);
        reviewItem.appendChild(reviewDescription);

        reviewsSection.appendChild(reviewItem);
    }
});

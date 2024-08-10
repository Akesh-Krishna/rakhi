function showWishes() {
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML =
    `<p>Dearest sister, First of all, a very Happy Raksha Bandhan...</p>
    <p>This Raksha Bandhan I promise</p>
    <p>I will always hold your back,</p>
    <p>Whenever you turn back,</p>
    <p>You will always find me...</p>`;
    document.getElementById('gifts').innerHTML = '';
}

function showGifts() {
    document.getElementById('message').innerHTML = '';
    document.getElementById('gifts').innerHTML = `
        <div class="gifts-container">
            <p>Choose 1 number below...</p>
            <div class="gifts">
                <div class="gift-box" onclick="revealGift('Gift 1')">Gift 1</div>
                <div class="gift-box" onclick="revealGift('Gift 2')">Gift 2</div>
                <div class="gift-box" onclick="revealGift('Gift 3')">Gift 3</div>
            </div>
            <div id="reveal-message" class="reveal-message"></div>
        </div>
    `;
}

function revealGift(selectedGift) {
    const gifts = document.getElementsByClassName('gift-box');
    const revealMessage = document.getElementById('reveal-message');

    const chocolateImage = "https://top15.in/wp-content/uploads/Untitled-design-91.jpg";
    const dressImage = "https://images-na.ssl-images-amazon.com/images/I/71fCao9idAL._AC_UL1320_.jpg";
    const watchImage = "https://www.mynavyexchange.com/products/images/xlarge/11244268_0.jpg";

    // Collect the remaining gifts
    const remainingGifts = Array.from(gifts).filter(gift => gift.textContent !== selectedGift);

    // Shuffle the images for the remaining gifts
    const images = [dressImage, watchImage];
    for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
    }

    // Assign images to each gift box
    for (let i = 0; i < gifts.length; i++) {
        if (gifts[i].textContent === selectedGift) {
            gifts[i].innerHTML = `<img src="${chocolateImage}" alt="Chocolate" class="gift-image">`;
        } else {
            gifts[i].innerHTML = `<img src="${images.pop()}" alt="Random Gift" class="gift-image">`;
        }
    }

    // Show the message
    revealMessage.innerHTML = 'Chocolates are on your way...';
}

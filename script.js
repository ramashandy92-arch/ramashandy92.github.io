document.addEventListener('DOMContentLoaded', () => {
    // 1. Ganti Harga & Varian
    const variantButtons = document.querySelectorAll('.v-btn');
    variantButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.product-card');
            card.querySelectorAll('.v-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const newPrice = this.getAttribute('data-price');
            card.querySelector('.price').innerText = newPrice;
        });
    });

    // 2. WhatsApp Checkout Otomatis
    const buyButton = document.querySelector('.btn-buy');
    buyButton.addEventListener('click', function() {
        const title = document.querySelector('.card-body h3').innerText;
        const variant = document.querySelector('.v-btn.active').innerText;
        const price = document.querySelector('.price').innerText;
        
        const phoneNumber = "6289682369431";
        const text = `Halo Pempek Cumi Unitomo! %0A%0ASaya ingin memesan:%0A     *${title}*%0A Varian: ${variant}%0A Harga: ${price}%0A%0AMohon informasi selanjutnya ya!`;
        
        window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
    });

    // 3. Header Scroll Effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('main-header');
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            header.style.padding = '15px 0';
            header.style.background = 'rgba(18, 18, 18, 0.8)';
        }
    });
});
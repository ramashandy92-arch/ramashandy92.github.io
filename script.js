document.addEventListener('DOMContentLoaded', () => {
    
    // 1. HAMBURGER MENU
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenu.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        });
    }

    // Tutup menu saat navigasi diklik
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileMenu.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-xmark');
        });
    });

    // 2. SISTEM GANTI HARGA VARIAN
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

    // 3. WHATSAPP CHECKOUT (Pesan Otomatis)
    const buyButtons = document.querySelectorAll('.btn-buy');
    buyButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.product-card');
            const title = card.querySelector('h3').innerText;
            const variant = card.querySelector('.v-btn.active').innerText;
            const price = card.querySelector('.price').innerText;
            
            const phoneNumber = "6289682369431";
            const text = `Halo Pempek Cumi Unitomo! %0A%0ASaya ingin memesan:%0A*${title}*%0AVarian: ${variant}%0AHarga: ${price}%0AMohon informasi selanjutnya ya!`;
            
            window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
        });
    });

    // 4. HEADER SCROLL ANIMATION
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
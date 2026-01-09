document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. HAMBURGER MENU LOGIC ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Animasi Icon (Ganti icon bars ke xmark)
            const icon = mobileMenu.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        });
    }

    // Tutup menu saat salah satu link diklik
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileMenu.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-xmark');
        });
    });


    // --- 2. GANTI HARGA & VARIAN (LOGIKA ASLI ANDA) ---
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


    // --- 3. WHATSAPP CHECKOUT (LOGIKA ASLI ANDA) ---
    const buyButton = document.querySelector('.btn-buy');
    if (buyButton) {
        buyButton.addEventListener('click', function() {
            const title = document.querySelector('.card-body h3').innerText;
            const variant = document.querySelector('.v-btn.active').innerText;
            const price = document.querySelector('.price').innerText;
            
            const phoneNumber = "6289682369431";
            const text = `Halo Pempek Cumi Unitomo! %0A%0ASaya ingin memesan:%0A    *${title}*%0A Varian: ${variant}%0A Harga: ${price}%0A%0AMohon informasi selanjutnya ya!`;
            
            window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
        });
    }


    // --- 4. HEADER SCROLL EFFECT (LOGIKA ASLI ANDA) ---
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
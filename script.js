document.addEventListener('DOMContentLoaded', () => {
    
    // 1. HAMBURGER MENU TOGGLE
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

    // Tutup menu saat link navigasi diklik (UX Mobile)
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
            // Reset active state buttons di dalam card yang sama
            card.querySelectorAll('.v-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Ambil harga dari atribut data-price
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
            // Format pesan rapi dengan enter
            const message = `Halo Pempek Cumi Unitomo!\n\nSaya ingin memesan:\n*${title}*\nVarian: ${variant}\nHarga: ${price}\n\nMohon informasi selanjutnya ya!`;
            const encodedText = encodeURIComponent(message);
            
            window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
        });
    });

    // 4. HEADER SCROLL EFFECT
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
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('main section');
    sections.forEach((section, i) => {
        setTimeout(() => {
            section.classList.add('visible');
        }, 400 + i * 300);

        // Animasi gelombang saat section diklik
        section.addEventListener('click', function(e) {
            // Hindari trigger animasi saat klik tombol
            if (e.target.classList.contains('toggle-btn')) return;
            section.classList.remove('wave');
            // Trigger reflow untuk restart animasi
            void section.offsetWidth;
            section.classList.add('wave');
        });

        // Show/hide penjelasan
        const btn = section.querySelector('.toggle-btn');
        const desc = section.querySelector('.desc');
        if (btn && desc) {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                if (desc.style.display === 'none') {
                    desc.style.display = 'block';
                    btn.textContent = 'Sembunyikan Penjelasan';
                } else {
                    desc.style.display = 'none';
                    btn.textContent = 'Tampilkan Penjelasan';
                }
            });
        }
    });
});
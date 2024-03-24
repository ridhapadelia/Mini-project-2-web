       // Array of image URLs
       const portfolioImages = [
        "WhatsApp Image 2024-03-24 at 6.39.51 PM.jpeg",
        "Salinan dari ●●●●●●●●●●●●●●● (1).png",
        "Desain tanpa judul (3).png"
    ];

    function createPortfolioItem(imageUrl) {
        return `
            <div class="desaign-container">
                <img src="${imageUrl}" alt="">
            </div>
        `;
    }

    function renderPortfolio() {
        const portfolioContainer = document.getElementById("portfolio-container");

        portfolioContainer.innerHTML = "";

        portfolioImages.forEach(imageUrl => {
            const portfolioItemHTML = createPortfolioItem(imageUrl);
            portfolioContainer.innerHTML += portfolioItemHTML;
        });
    }

    renderPortfolio();
 
// Contact Form Submission
const contactForm = document.querySelector('form');

// Check if form data exists in local storage on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedFormData = JSON.parse(localStorage.getItem('formData'));
    if (savedFormData) {
        document.getElementById('name').value = savedFormData.name;
        document.getElementById('email').value = savedFormData.email;
        document.getElementById('subject').value = savedFormData.subject;
        document.getElementById('message').value = savedFormData.message;
    }
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Tampilkan alert dengan nilai form
    alert(`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);

    // Simpan data formulir ke local storage
    const formData = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };
    localStorage.setItem('formData', JSON.stringify(formData));

    contactForm.reset();
});

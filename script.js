       // Array of image URLs
       const portfolioImages = [
        "WhatsApp Image 2024-03-24 at 6.39.51 PM.jpeg",
        "Salinan dari ●●●●●●●●●●●●●●● (1).png",
        "Desain tanpa judul (3).png"
        // Add more image URLs here if needed
    ];

    // Function to create portfolio item HTML
    function createPortfolioItem(imageUrl) {
        return `
            <div class="desaign-container">
                <img src="${imageUrl}" alt="">
            </div>
        `;
    }

    // Function to render portfolio items
    function renderPortfolio() {
        const portfolioContainer = document.getElementById("portfolio-container");

        // Clear previous portfolio items
        portfolioContainer.innerHTML = "";

        // Loop through portfolioImages array and create portfolio items
        portfolioImages.forEach(imageUrl => {
            const portfolioItemHTML = createPortfolioItem(imageUrl);
            portfolioContainer.innerHTML += portfolioItemHTML;
        });
    }

    // Call renderPortfolio function to initially render portfolio items
    renderPortfolio();
 
// Contact Form Submission
const contactForm = document.querySelector('form');

// Check if form data exists in local storage on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedFormData = JSON.parse(localStorage.getItem('formData'));
    if (savedFormData) {
        // Jika data formulir tersedia di local storage, isi kembali input form dengan data tersebut
        document.getElementById('name').value = savedFormData.name;
        document.getElementById('email').value = savedFormData.email;
        document.getElementById('subject').value = savedFormData.subject;
        document.getElementById('message').value = savedFormData.message;
    }
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Ambil nilai dari input form
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

    // Clear form fields after submission
    contactForm.reset();
});

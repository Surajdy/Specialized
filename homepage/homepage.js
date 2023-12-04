// 1: slider
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
                slide.style.transition = 'transform 0.7s ease-in-out';
                slide.style.transform = 'translateX(50%)'; // Move the slide to the right initially
               
            setTimeout(() => {
                slide.style.transform = 'translateX(0)'; // Move the slide to its original position
            }, 100); // Adjust the delay as needed
            } else {
                slide.style.display = 'none';
            }
        });
    }

slides.forEach((slide, index) => {
    slide.addEventListener('click', (event) => {
        const clickX = event.clientX - slide.getBoundingClientRect().left;
        const halfWidth = slide.clientWidth / 2;

        if (clickX <= halfWidth) {
            // Clicked on the left side of the image
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        } else {
            // Clicked on the right side of the image
            currentIndex = (currentIndex + 1) % slides.length;
        }

        showSlide(currentIndex);
    });
});

// Show the initial slide
showSlide(currentIndex);



// 2: add redirect function

const catalogueButton = document.querySelectorAll(".catalogue");

catalogueButton.forEach(button => {
    button.addEventListener('click', function() {
        window.location.href = 'catalogue.html'; // Redirect to cart.html
    });
});

// 3 : contact data storing to local storage
// Function to handle storing data in local storage and clearing inputs
function storeContactData() {
    const nameInput = document.getElementById('name');
    const contactInput = document.getElementById('contact');

    // Get the values from inputs
    const name = nameInput.value;
    const contact = contactInput.value;

    if (name && contact) {
        // Store data in local storage
        const data = { name, contact };
        localStorage.setItem('contactData', JSON.stringify(data));

        // Clear inputs for the next entry
        nameInput.value = '';
        contactInput.value = '';

        alert('Data stored successfully in local storage!');
    } else {
        alert('Please provide both name and contact number.');
    }
}

// Get the contact button and attach a click event listener
const contactButton = document.querySelector('.contact');
contactButton.addEventListener('click', storeContactData);

let abc = document.querySelector('.abc');
abc.addEventListener("click", () => {
    // Redirect to the "mountain.html" file
    window.location.href = 'mountain.html';
});
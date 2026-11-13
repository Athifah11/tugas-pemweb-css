// =========================
// SUBSCRIBE BUTTON
// =========================

const subscribeButton = document.getElementById("subscribeButton");
const subscribeMessage = document.getElementById("subscribeMessage");

if (subscribeButton && subscribeMessage) {
    subscribeButton.addEventListener("click", function () {
        subscribeMessage.textContent =
            "Thank you for subscribing to Puzzle of the Day!";

        subscribeButton.textContent = "Subscribed";
        subscribeButton.disabled = true;
        subscribeButton.style.animation = "none";
    });
}

// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        const name = document.getElementById("name").value.trim();

        formMessage.textContent =
            `Thank you, ${name}! Your message has been received.`;

        contactForm.reset();
    });
}
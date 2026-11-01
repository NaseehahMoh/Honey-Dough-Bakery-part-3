// Honey Dough Bakery website JavaScript

// Search and sort the products on the Menu page.
const searchInput = document.getElementById("menu-search");
const sortSelect = document.getElementById("menu-sort");
const productList = document.getElementById("menu-products");

if (searchInput && sortSelect && productList) {
    function updateMenu() {
        const searchText = searchInput.value.toLowerCase();
        const cards = Array.from(productList.querySelectorAll(".menu-item"));

        cards.forEach(function (card) {
            const productName = card.dataset.name.toLowerCase();
            const productText = card.textContent.toLowerCase();
            card.hidden = !productName.includes(searchText) && !productText.includes(searchText);
        });

        if (sortSelect.value === "az") {
            cards.sort((a, b) => a.dataset.name.localeCompare(b.dataset.name));
        } else if (sortSelect.value === "za") {
            cards.sort((a, b) => b.dataset.name.localeCompare(a.dataset.name));
        }

        cards.forEach(card => productList.appendChild(card));
        const visibleCards = cards.filter(card => !card.hidden).length;
        document.getElementById("no-results").hidden = visibleCards !== 0;
        document.getElementById("search-message").textContent = visibleCards + " product(s) found.";
    }
    searchInput.addEventListener("input", updateMenu);
    sortSelect.addEventListener("change", updateMenu);
    updateMenu();
}

// Show a larger image when a gallery picture is clicked.
const galleryImages = document.querySelectorAll(".gallery-image");
if (galleryImages.length > 0) {
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", "Expanded gallery image");

    const expandedImage = document.createElement("img");
    const closeButton = document.createElement("button");
    closeButton.className = "lightbox-close";
    closeButton.type = "button";
    closeButton.textContent = "×";
    closeButton.setAttribute("aria-label", "Close image");

    lightbox.appendChild(expandedImage);
    lightbox.appendChild(closeButton);
    document.body.appendChild(lightbox);

    function closeLightbox() { lightbox.classList.remove("open"); }

    galleryImages.forEach(function (image) {
        image.addEventListener("click", function () {
            expandedImage.src = image.src;
            expandedImage.alt = image.alt;
            lightbox.classList.add("open");
            closeButton.focus();
        });
    });

    closeButton.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") closeLightbox();
    });
}

// Validate each form and prepare an email for the bakery's contact address.
function prepareEmail(formId, feedbackId, subject, fields) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const feedback = document.getElementById(feedbackId);

        if (!form.checkValidity()) {
            form.reportValidity();
            feedback.textContent = "Please complete all required fields correctly.";
            return;
        }

        const formData = new FormData(form);
        let emailBody = "";
        fields.forEach(function (field) {
            emailBody += field.label + ": " + (formData.get(field.name) || "") + "\n";
        });

        feedback.textContent = "Your details are ready. Your email application will open so you can review and send the message.";
        window.location.href = "mailto:info@honeydoughbakery.co.za"
            + "?subject=" + encodeURIComponent(subject)
            + "&body=" + encodeURIComponent(emailBody);
    });
}

prepareEmail("order-form", "order-feedback", "Honey Dough Bakery - Order Request", [
    { name: "customer-name", label: "Full name" }, { name: "customer-email", label: "Email" },
    { name: "phone", label: "Phone" }, { name: "product", label: "Product" },
    { name: "quantity", label: "Quantity" }, { name: "date", label: "Preferred collection date" },
    { name: "delivery", label: "Order method" }, { name: "order-details", label: "Order details" }
]);

prepareEmail("enquiry-form", "enquiry-feedback", "Honey Dough Bakery - Enquiry", [
    { name: "name", label: "Full name" }, { name: "email", label: "Email" },
    { name: "phone", label: "Phone" }, { name: "enquiry-type", label: "Enquiry type" },
    { name: "details", label: "Enquiry details" }
]);

prepareEmail("contact-form", "contact-feedback", "Honey Dough Bakery - Contact Message", [
    { name: "name", label: "Full name" }, { name: "email", label: "Email" },
    { name: "message-type", label: "Message type" }, { name: "message", label: "Message" }
]);

// Interactive map centred on Pietermaritzburg.
const mapElement = document.getElementById("bakery-map");
if (mapElement) {
    const leafletCss = document.createElement("link");
    leafletCss.rel = "stylesheet";
    leafletCss.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(leafletCss);

    const leafletScript = document.createElement("script");
    leafletScript.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    leafletScript.onload = function () {
        const map = L.map("bakery-map").setView([-29.6006, 30.3794], 14);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        L.marker([-29.6006, 30.3794]).addTo(map)
            .bindPopup("<strong>Honey Dough Bakery</strong><br>Pietermaritzburg, KwaZulu-Natal (approximate map area)")
            .openPopup();
    };
    document.body.appendChild(leafletScript);
}

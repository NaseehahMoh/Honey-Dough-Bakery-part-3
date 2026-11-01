# Honey Dough Bakery Website

## Project overview
Honey Dough Bakery is a fictional local bakery website created for the WEDE5020 POE. It provides information about the bakery, products and services, contact details, and forms for order requests, enquiries and general messages.

## Website pages
1. **Home (`index.html`)** – Welcome message, popular treats, image gallery and interactive map.
2. **About Us (`about.html`)** – Bakery background, story, mission, vision and values.
3. **Menu (`menu.html`)** – Product and service information, with product search and sorting.
4. **Order (`order.html`)** – Order request form with HTML and JavaScript validation.
5. **Enquiry (`enquiry.html`)** – Enquiry form for products, services, availability, volunteering or sponsorship.
6. **Contact (`contact.html`)** – Contact details and general message form.

## Design
The original colour palette and simple page structure have been retained:
- Cream background: `#fff8f0`
- Soft peach header and footer: `#f3d5b5`
- Cocoa brown text: `#4a3428`
- Terracotta buttons: `#c97b63`

## Interactive functionality
- Product search and alphabetical sorting on the Menu page.
- Clickable image gallery with a lightbox on the Home page.
- Interactive map using Leaflet and OpenStreetMap.
- Form validation and email preparation for order, enquiry and contact forms.

## Form and email note
The forms validate information in the browser and prepare an email addressed to `info@honeydoughbakery.co.za` using the visitor's default email application. The visitor must review and send the email. A server-side email service or backend would be needed to send messages directly from the website.

## Technologies
HTML5, CSS3, JavaScript, Leaflet, OpenStreetMap, Visual Studio Code and GitHub.

## Running the website
Open `index.html` in a browser. An internet connection is needed for the interactive map tiles and Leaflet library.

## Project files
HTML pages: `index.html`, `about.html`, `menu.html`, `order.html`, `enquiry.html`, `contact.html`; stylesheet: `style.css`; JavaScript: `script.js`; images: `Images/`; SEO: `robots.txt`, `sitemap.xml`; documentation: `README.md`, `CHANGELOG.md`, `REFERENCES.md`.

## Deployment
Before publishing, replace `YOUR-GITHUB-USERNAME` and `YOUR-REPOSITORY` in `robots.txt` and `sitemap.xml` with the actual GitHub Pages address.

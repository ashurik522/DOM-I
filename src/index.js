const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

const navLink1 = document.querySelector("nav a");
const navLink2 = navLink1.nextElementSibling;
const navLink3 = navLink2.nextElementSibling;
const navLink4 = navLink3.nextElementSibling;
const navLink5 = navLink4.nextElementSibling;
const navLink6 = navLink5.nextElementSibling;

navLink1.textContent = "Services";
navLink2.textContent = "Product";
navLink3.textContent = "Vision";
navLink4.textContent = "Features";
navLink5.textContent = "About";
navLink6.textContent = "Contact";

const italics = document.querySelectorAll("nav a");

italics.forEach(item => item.classList.add("italic"))

const topImage = document.querySelector("#logo-img");
topImage.src = "http://localhost:9000/img/logo.png";

const ctaHeader = document.querySelector(".cta-text h1");
ctaHeader.textContent = "DOM Is Awesome"

const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = "Get Started";

const ctaImage = document.querySelector("#cta-img");
ctaImage.src = "http://localhost:9000/img/cta.png" ;

const featuresH = document.querySelector(".top-content h4");
const featuresP = document.querySelector(".top-content p");
featuresH.textContent = siteContent["main-content"]["features-h4"];
featuresP.textContent = siteContent["main-content"]["features-content"];

const aboutH = document.querySelector(".text-content:nth-of-type(2) h4");
const aboutP = document.querySelector(".text-content:nth-of-type(2) p");

aboutH.textContent = siteContent["main-content"]["about-h4"];
aboutP.textContent = siteContent["main-content"]["about-content"];

const midImage = document.querySelector("#middle-img");
midImage.src = siteContent["images"]["accent-img"];

const servicesH = document.querySelector(".bottom-content h4");
const servicesP = document.querySelector(".bottom-content p");

servicesH.textContent = siteContent["main-content"]["services-h4"];
servicesP.textContent = siteContent["main-content"]["services-content"];

const productH = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4");
const productP = document.querySelector(".bottom-content .text-content:nth-of-type(2) p");

productH.textContent = siteContent["main-content"]["product-h4"];
productP.textContent = siteContent["main-content"]["product-content"];

const visionH = document.querySelector(".bottom-content .text-content:nth-of-type(3) h4");
const visionP = document.querySelector(".bottom-content .text-content:nth-of-type(3) p");

visionH.textContent = siteContent["main-content"]["vision-h4"];
visionP.textContent = siteContent["main-content"]["vision-content"];

const contactH = document.querySelector(".contact h4");
const address = document.querySelector(".contact p");
const phoneNumber = address.nextElementSibling;
const email = phoneNumber.nextElementSibling;

contactH.textContent = siteContent["contact"]["contact-h4"];
address.textContent = siteContent["contact"]["address"];
phoneNumber.textContent = siteContent["contact"]["phone"];
email.textContent = siteContent["contact"]["email"];

const copyright = document.querySelector("footer a");
copyright.textContent = siteContent["footer"]["copyright"]
copyright.className = "bold"



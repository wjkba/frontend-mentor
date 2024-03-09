const cards = [
  {
    title: "Interactive comments section",
    image:
      "https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1639765609%2FChallenges%2Fi8zblmqsbqixz1tbhc0v.jpg&w=828&q=75",
    live: "https://chimerical-truffle-5da2d3.netlify.app/",
    repo: "https://github.com/wjkba/frontend-mentor/tree/main/interactive-comments-section-react",
  },
  {
    title: "E-commerce product page",
    image:
      "https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1633619397%2FChallenges%2Ffhzpdnabrek50hvhftnl.jpg&w=384&q=75",
    live: "https://65e45c6ad5105e7b275d9e66--amazing-lily-ecb320.netlify.app/",
    repo: "https://github.com/wjkba/frontend-mentor/tree/main/ecommerce-product-page-react",
  },
  {
    title: "Pricing component with toggle",
    image:
      "https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1575037683%2FChallenges%2Fsjsrx7m77v6pxswdm0mx.jpg&w=384&q=75",
    live: "https://wjkba.github.io/frontend-mentor/pricing-component-with-toggle/index.html",
    repo: "https://github.com/wjkba/frontend-mentor/tree/main/pricing-component-with-toggle",
  },
  {
    title: "News homepage",
    image:
      "https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1666363466%2FChallenges%2Fabbzt6kmkawmpbj7evxx.jpg&w=384&q=75",
    live: "https://wjkba.github.io/frontend-mentor/news-homepage/index.html",
    repo: "https://github.com/wjkba/frontend-mentor/tree/main/news-homepage",
  },
  {
    title: "Newsletter sign-up form with success message",
    image:
      "https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1685103757%2FChallenges%2Fzimchyd6aujs5y4h5wxd.jpg&w=384&q=75",
    live: "https://wjkba.github.io/frontend-mentor/newsletter-sign-up-with-success-message/index.html",
    repo: "https://github.com/wjkba/frontend-mentor/tree/main/newsletter-sign-up-with-success-message",
  },
  {
    title: "Age calculator app",
    image:
      "https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1680193709%2FChallenges%2Fmwjogovjjnkz6f6yzdkp.jpg&w=384&q=75",
    live: "https://wjkba.github.io/frontend-mentor/age-calculator-app/index.html",
    repo: "https://github.com/wjkba/frontend-mentor/tree/main/age-calculator-app",
  },
  {
    title: "FAQ accordion",
    image:
      "https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1701355650%2FChallenges%2Fnr04mhuzgpmuipedmqcc.jpg&w=384&q=75",
    live: "https://wjkba.github.io/frontend-mentor/faq-accordion/index.html",
    repo: "https://github.com/wjkba/frontend-mentor/tree/main/faq-accordion",
  },
  {
    title: "Interactive card details form",
    image:
      "https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1659629965%2FChallenges%2Fu57dcsnhvoalnixjt6kb.jpg&w=384&q=75",
    live: "https://wjkba.github.io/frontend-mentor/interactive-card-details-form/index.html",
    repo: "https://github.com/wjkba/frontend-mentor/tree/main/interactive-card-details-form",
  },
  {
    title: "Blog preview card",
    image:
      "https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1701355650%2FChallenges%2Fnr04mhuzgpmuipedmqcc.jpg&w=384&q=75",
    live: "https://wjkba.github.io/frontend-mentor/blog-preview-card/index.html",
    repo: "https://github.com/wjkba/frontend-mentor/tree/main/blog-preview-card",
  },
  {
    title: "Social links profile",
    image:
      "https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1705487747%2FChallenges%2Fcf3rlsqoovxlf7uajpva.jpg&w=384&q=75",
    live: "https://wjkba.github.io/frontend-mentor/social-links-profile/index.html",
    repo: "https://github.com/wjkba/frontend-mentor/tree/main/social-links-profile",
  },
];
cardsContainer = document.querySelector(".cards-container");

console.log(cardsContainer);

cards.forEach((item) => {
  cardsContainer.innerHTML += `<div class="card">
    <div class="card__image">
      <img onclick="window.open('${item.live}', '_self')"  src="${item.image}" alt="" />
    </div>
    <div class="card__text">
      <p class="title">${item.title}</p>
      <div class="button-container">
        <button onclick="window.open('${item.live}', '_self')" class="button-g">live preview</button>
        <button onclick="window.open('${item.repo}', '_self')" class="button-g2">repository</button>
      </div>
    </div>
  </div>`;
});

// const populateCards = cards.map((item) => {
//   return `<div class="card">
//           <div class="card__image">
//             <img src="${item.image}" alt="" />
//           </div>
//           <div class="card__text">
//             <p class="title">${item.title}</p>
//             <p class="description">${item.description}</p>
//           </div>
//         </div>`;
// });

// cardsContainer.innerHTML = populateCards;

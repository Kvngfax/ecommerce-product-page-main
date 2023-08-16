---

# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size.
- See hover states for all interactive elements on the page.
- Open a lightbox gallery by clicking on the large product image.
- Switch the large product image by clicking on the small thumbnail images.
- Add items to the cart.
- View the cart and remove items from it.

### Screenshot

![Alt text](./src/images/showcart.png)


### Links

- Solution URL: [Solution Link](https://your-solution-url.com)
- Live Site URL: [Live Site Link](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

The e-commerce sneaker page is a blend of minimalist design and robust functionality. One of the main takeaways from this project is the interactivity created using React hooks such as useState, useRef, and useEffect. These hooks have allowed the creation of a dynamic page that responds seamlessly to user input.

For instance, managing the cart quantity:
```js
function nextNumber() {
    setAmount((amount) => amount + 1);
}

function prevNumber() {
    if (amount > 0) {
      setAmount((amount) => amount - 1);
    }
}
```

### Continued development

One area of potential improvement would be the addition of more detailed product information, such as reviews, ratings, and related products. Additionally, integrating a backend system for real-time inventory management and payment processing would make the site fully functional.

### Useful resources

- [React Documentation](https://reactjs.org/docs/getting-started.html) - The official React documentation provides a comprehensive overview of all hooks and their usage.
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) - This guide was instrumental in implementing the grid layout for the image thumbnails.

## Author

- Frontend Mentor - [@kvngfax](https://www.frontendmentor.io/profile/kvngfax)
- Twitter - [@kvngfax](https://www.twitter.com/kvngfax)

## Acknowledgments

Special thanks to OpenAI's GPT-3 model, which assisted in generating code and providing solutions throughout this project's development.

---

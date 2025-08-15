// ===== Part 1 =====


// 1. Select and cache the <main> element
const mainEl = document.querySelector('main');

// 2. Set background color using CSS custom property
mainEl.style.backgroundColor = `var(--main-bg)`;

// 3. Set content to <h1>DOM Manipulation</h1>
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

// 4. Add the flex-ctr class
mainEl.classList.add("flex-ctr");


// ===== Part 2 =====

// 1. Select and cache the <nav id="top-menu"> element
const topMenuEl = document.getElementById("top-menu");

// 2. Set height to 100%
topMenuEl.style.height = "100%";

// 3. Set background color using CSS custom property
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// 4. Add the flex-around class
topMenuEl.classList.add("flex-around");


// ===== Part 3 =====

// Menu data structure
const menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];

// Iterate over menuLinks array
menuLinks.forEach(function(link) {
  // Create a new <a> element
  const aEl = document.createElement('a');

  // Set the href attribute
  aEl.setAttribute('href', link.href);

  // Set the text content
  aEl.textContent = link.text.toUpperCase(); // capitalized like in your screenshot

  // Append to the top menu
  topMenuEl.appendChild(aEl);
});

//Creating the Submenu
// grab the sub-menu
const subMenuEl = document.getElementById("sub-menu");

// set size and color
subMenuEl.style.height = "3rem";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// add flex layout
subMenuEl.classList.add("flex-around");







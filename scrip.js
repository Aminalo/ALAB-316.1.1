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
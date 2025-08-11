// 1. Select and cache the <main> element
const mainEl = document.querySelector('main');

// 2. Set background color using CSS custom property
mainEl.style.backgroundColor = `var(--main-bg)`;

// 3. Set content to <h1>DOM Manipulation</h1>
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

// 4. Add the flex-ctr class
mainEl.classList.add("flex-ctr");



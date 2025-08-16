// ===== Part 1 =====
const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = `var(--main-bg)`;
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

// ===== Part 2 =====
const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// ===== Part 3 & 4 (merged) =====
// Final menu data structure with subLinks
const menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '#', subLinks: [
    { text: 'all', href: '/catalog/all' },
    { text: 'top selling', href: '/catalog/top' },
    { text: 'search', href: '/catalog/search' }
  ]},
  { text: 'orders', href: '#', subLinks: [
    { text: 'new', href: '/orders/new' },
    { text: 'pending', href: '/orders/pending' },
    { text: 'history', href: '/orders/history' }
  ]},
  { text: 'account', href: '#', subLinks: [
    { text: 'profile', href: '/account/profile' },
    { text: 'sign out', href: '/account/signout' }
  ]}
];

// Build top menu links
menuLinks.forEach(function(link) {
  const aEl = document.createElement('a');
  aEl.setAttribute('href', link.href);
  aEl.textContent = link.text.toUpperCase();
  topMenuEl.appendChild(aEl);
});

// ===== Submenu setup =====
const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "3rem";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";


// Helper function to build submenu
function buildSubMenu(subLinks) {
  subMenuEl.innerHTML = ''; // Clear submenu
  subLinks.forEach(function(link) {
    const aEl = document.createElement('a');
    aEl.setAttribute('href', link.href);
    aEl.textContent = link.text.toUpperCase();
    subMenuEl.appendChild(aEl);
  });
}

// ===== Menu click interaction =====
const topMenuLinks = topMenuEl.querySelectorAll("a");
let showingSubMenu = false;

topMenuEl.addEventListener("click", function(event) {
  event.preventDefault();
  if (!event.target.matches("a")) return;

  console.log(event.target.textContent);

  // Remove active class from all
  topMenuLinks.forEach(link => link.classList.remove("active"));

  // Toggle submenu
  const clickedLinkObj = menuLinks.find(link => link.text.toUpperCase() === event.target.textContent);
  if (event.target.classList.contains("active")) {
    event.target.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  }

  event.target.classList.add("active");

  if (clickedLinkObj.subLinks) {
    showingSubMenu = true;
    buildSubMenu(clickedLinkObj.subLinks);
    subMenuEl.style.top = "100%";
  } else {
    showingSubMenu = false;
    subMenuEl.style.top = "0";
  }
});



// ===== Submenu click interaction =====
subMenuEl.addEventListener("click", function(event) {
  event.preventDefault();
  if (!event.target.matches("a")) return;

  console.log(event.target.textContent);

  showingSubMenu = false;
  subMenuEl.style.top = "0";

  // Remove active from top menu
  topMenuLinks.forEach(link => link.classList.remove("active"));

  // Update main section
  mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
});



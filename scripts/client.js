// Variables & Constants
let jobList = ['Fullstack JavaScript Developer.', 'Graphic Designer.', 'Teacher.', 'Pianist.'];
let jobClassList = ['dev-bg', 'design-bg', 'teaching-bg', 'music-bg'];
const jobOutput = document.getElementById('jobTitleOutput');
const cursor = document.getElementById('cursor');
let tabHidden = false;

// DISPLAY JOB TITLES
// Flash cursor for specified time, then return promise when finished.
function blinkCursor(delay = 2000) {
  let blinkInterval = setInterval(() => {
    cursor.classList.toggle('hidden');
  }, 500);
  setTimeout(() => {
    clearInterval(blinkInterval);
    if (cursor.classList.contains('hidden')) {
      cursor.classList.remove('hidden');
    }
  }, delay);

  return new Promise(resolve => setTimeout(resolve, delay));
}

// Type out each part of the text letter by letter
function typeText(text) {
  let index = 0;
  jobOutput.innerText = '';
  let delay = text.length * 100;

  let typeInterval = setInterval(() => {
    jobOutput.innerText += text[index];
    index++;
    if (index > text.length - 1) {
      clearInterval(typeInterval);
    }
  }, 100);

  return new Promise(resolve => setTimeout(resolve, delay));
}

// Erase each part of the text letter by letter
function eraseText(string) {
  let index = 0;
  let text = string;
  let delay = string.length * 100;

  let eraseInterval = setInterval(() => {
    text = text.slice(0, -1);
    jobOutput.innerText = text;
    index++;
    if (index > string.length -1) {
      clearInterval(eraseInterval);
    }
  }, 100);

  return new Promise(resolve => setTimeout(resolve, delay));
}

// Change background
function changeHomeBg(index) {
  const target = document.getElementById('home');

  if (index < jobClassList.length) {
    setTimeout(() => {
      target.classList = '';
      target.classList.add(jobClassList[index]);
    }, 100)
  }
}

// Print out all jobs in a loop
async function printJobs() {
  let delay = 0;
  let index = 0;
  for (const job of jobList) {
    delay += job.length;
  }
  delay = delay * 300;
  delay = delay + (jobList.length * 3500);

  for (const job of jobList) {
    if (!tabHidden) {
      changeHomeBg(index);
      await typeText(job);
      await blinkCursor();
      await eraseText(job);
      await blinkCursor(1500);
      index++;
    } else {
      break;
    }
  }

  setTimeout(printJobs(), delay);
}

printJobs();

// MOBILE NAVIGATION
const openTrigger = document.getElementById('nav-trigger-open');
const closeTrigger = document.getElementById('nav-trigger-close');
const mobileNav = document.getElementById('mobile-nav');
const mobileNavUl = document.getElementById('mobile-nav-ul');

function showMobileMenu() {
  openTrigger.classList.add('hidden');
  mobileNav.classList.remove('off-screen');
  mobileNav.classList.add('on-screen');
  closeTrigger.classList.remove('off-screen');
  closeTrigger.classList.add('on-screen');
}

function hideMobileMenu() {
  openTrigger.classList.remove('hidden');
  mobileNav.classList.remove('on-screen');
  mobileNav.classList.add('off-screen');
  closeTrigger.classList.remove('on-screen');
  closeTrigger.classList.add('off-screen');
}

openTrigger.addEventListener('click', event => {
  showMobileMenu();
});

openTrigger.addEventListener('touchstart', event => {
  showMobileMenu();
});

closeTrigger.addEventListener('click', event => {
  hideMobileMenu();
});

closeTrigger.addEventListener('touchstart', event => {
  hideMobileMenu();
});

function goToSection(event, target) {
  event.preventDefault();
  window.location.assign(target);
  hideMobileMenu();
}

// Update Active Link in Menu
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', navHighlighter);

function navHighlighter() {

  // Get current scroll position
  let scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {

    const sectionHeight = current.offsetHeight;
    const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;
    let sectionId = current.getAttribute('id');

    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if ( scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ) {
      document.querySelector('#main-nav a[href*=' + sectionId + ']').parentNode.classList.add('active');
      document.querySelector('#mobile-nav a[href*=' + sectionId + ']').classList.add('mobile-active');
    } else {
      document.querySelector('#main-nav a[href*=' + sectionId + ']').parentNode.classList.remove('active');
      document.querySelector('#mobile-nav a[href*=' + sectionId + ']').classList.remove('mobile-active');
    }
  });
}


// Hide Back-to-Top Button until scrolllet scrollPos = 0;
// Needs Work
let scrollPosition = 0;
const toTopBtn = document.getElementById('to-top');

function checkPosition() {
  let windowY = window.scrollY;
  if (windowY < scrollPosition) {
    // Scrolling UP
    toTopBtn.classList.add('hidden');
  } else {
    // Scrolling DOWN
    toTopBtn.classList.remove('hidden');
  }
  scrollPosition = windowY;
}

window.addEventListener('scroll', checkPosition);

// Set Up Visibility API
let hidden, visibilityChange;

if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}

function handleVisbilityChange() {
  if (document[hidden]) {
    tabHidden = true;
  } else {
    tabHidden = false;
    printJobs();
  }
}


// Warn if the browser doesn't support addEventListener or the Page Visibility API
if (typeof document.addEventListener === "undefined" || hidden === undefined) {
  console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
} else {
  // Handle page visibility change
  document.addEventListener(visibilityChange, handleVisibilityChange, false);
}

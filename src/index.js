import './styles/index.scss';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/all.css';

// form submit button
const submitButton = document.querySelector('.contact-form .submit-button');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopImmediatePropagation();
  document.querySelector('.form-submit-message').classList.remove('hide');
});

// tabs
const tabs = document.querySelector('.section.section-no-bottom-padding.is-bg-interactive');
const tabButtons = tabs.querySelectorAll('.tab');
const tabPanels = tabs.querySelectorAll('.tab-panel');

function handleTabClick(event) {
  // hide all tab panels
  tabPanels.forEach((panel) => (panel.hidden = true));
  // mark all tabs as unselected
  tabButtons.forEach((tab) => {
    tab.removeAttribute('tabindex');
    tab.setAttribute('aria-selected', false);
    tab.classList.remove('is-active');
  });
  // mark the clicked tab as selected
  this.classList.add('is-active');
  this.setAttribute('tabindex', 0);
  this.setAttribute('aria-selected', true);
  this.focus();
  // find the associated tabPanel and show it
  const { id } = event.currentTarget;
  const tabPanel = tabs.querySelector(`[data-panel="${id}"]`);
  tabPanel.hidden = false;
}

tabButtons.forEach((button, index) => {
  button.addEventListener('click', handleTabClick);
  button.addEventListener('keydown', (event) => {
    let i = index;
    if (event.key === 'ArrowLeft') {
      event.stopPropagation();
      if (i === 0) {
        i = tabButtons.length;
      }
      document.activeElement.removeAttribute('tabindex');
      tabButtons[i - 1].setAttribute('tabindex', 0);
      tabButtons[i - 1].focus();
    }
    if (event.key === 'ArrowRight') {
      event.stopPropagation();
      if (i === tabButtons.length - 1) {
        i = -1;
      }
      document.activeElement.removeAttribute('tabindex');
      tabButtons[i + 1].setAttribute('tabindex', 0);
      tabButtons[i + 1].focus();
    }
    if (event.key === ' ' || event.key === 'Enter') {
      event.stopPropagation();
      event.preventDefault();
      tabButtons[i].click();
    }
    if (event.key === 'Home') {
      event.stopPropagation();
      event.preventDefault();
      document.activeElement.removeAttribute('tabindex');
      tabButtons[0].setAttribute('tabindex', 0);
      tabButtons[0].focus();
    }
    if (event.key === 'End') {
      event.stopPropagation();
      event.preventDefault();
      document.activeElement.removeAttribute('tabindex');
      tabButtons[tabButtons.length - 1].setAttribute('tabindex', 0);
      tabButtons[tabButtons.length - 1].focus();
    }
  });
});

// mobile-navbar
const navbarButton = document.querySelector('.navbar-mobile-button');
const navlist = document.querySelector('.navbar-list');
navbarButton.addEventListener('click', (event) => {
  event.stopImmediatePropagation();
  if (navlist.classList.contains('mobile-hidden')) {
    navlist.classList.remove('mobile-hidden');
    navlist.setAttribute('aria-expanded', true);
  } else {
    navlist.classList.add('mobile-hidden');
    navlist.setAttribute('aria-expanded', false);
  }
});
window.addEventListener('resize', () => {
  navlist.classList.add('mobile-hidden');
  navlist.setAttribute('aria-expanded', false);
});

// modal
const modalButtons = document.querySelectorAll('.modal-button');
const modalCloseButtons = document.querySelectorAll('.modal-close');

function showModal(event) {
  event.stopImmediatePropagation();
  const target = document.getElementById(event.target.attributes['data-target'].value);
  target && target.classList.toggle('hidden');
}

modalButtons.forEach((button) => button.addEventListener('click', showModal));
modalCloseButtons.forEach((button) => button.addEventListener('click', showModal));

// navbar
const navbarlinks = document.querySelectorAll('.navbar-link');
navbarlinks.forEach((link, index) => {
  const sublinks = link.parentElement.querySelectorAll('.sublist [role="menuitem"]');
  sublinks.forEach((sublink, subindex) => {
    sublink.addEventListener('keydown', (event) => {
      let i = subindex;
      let pi = index;
      if (event.key === 'ArrowDown') {
        event.stopPropagation();
        event.preventDefault();
        if (i === 0) {
          i = sublinks.length;
        }
        document.activeElement.removeAttribute('tabindex');
        sublinks[i - 1].focus();
      }
      if (event.key === 'ArrowUp') {
        event.stopPropagation();
        event.preventDefault();
        if (i === sublinks.length - 1) {
          i = -1;
        }
        document.activeElement.removeAttribute('tabindex');
        sublinks[i + 1].focus();
      }
      if (event.key === 'ArrowLeft') {
        event.stopPropagation();
        if (pi === 0) {
          pi = navbarlinks.length;
        }
        navbarlinks[pi - 1].focus();
        if (navbarlinks[pi - 1].hasAttribute('aria-expanded')) {
          navbarlinks[pi - 1].setAttribute('aria-expanded', true);
        }
        navbarlinks[index].setAttribute('aria-expanded', false);
      }
      if (event.key === 'ArrowRight') {
        event.stopPropagation();
        if (pi === navbarlinks.length - 1) {
          pi = -1;
        }
        navbarlinks[pi + 1].focus();
        if (navbarlinks[pi + 1].hasAttribute('aria-expanded')) {
          navbarlinks[pi + 1].setAttribute('aria-expanded', true);
        }
        navbarlinks[index].setAttribute('aria-expanded', false);
      }
      if (event.key === 'Home') {
        event.stopPropagation();
        event.preventDefault();
        sublinks[0].focus();
      }
      if (event.key === 'End') {
        event.stopPropagation();
        event.preventDefault();
        sublinks[sublinks.length - 1].focus();
      }
      let ii = subindex + 1;
      if (sublinks.length === ii) {
        ii = 0;
      }
      while (ii !== subindex) {
        if (event.key.toLowerCase() === sublinks[ii].textContent.toLowerCase()[0]) {
          event.stopPropagation();
          event.preventDefault();
          sublinks[ii].focus();
          return;
        }
        ii++;
        if (sublinks.length === ii) {
          ii = 0;
        }
      }
    });
  });
  link.parentElement.addEventListener('mouseover', () => {
    if (link.hasAttribute('aria-expanded')) {
      link.setAttribute('aria-expanded', true);
    }
  });
  link.parentElement.addEventListener('mouseout', () => {
    if (link.hasAttribute('aria-expanded')) {
      link.setAttribute('aria-expanded', false);
    }
  });
  link.addEventListener('keydown', (event) => {
    let i = index;
    if (event.key === 'ArrowLeft') {
      event.stopPropagation();
      if (i === 0) {
        i = navbarlinks.length;
      }
      navbarlinks[index].setAttribute('aria-expanded', false);
      navbarlinks[i - 1].focus();
    }
    if (event.key === 'ArrowRight') {
      event.stopPropagation();
      if (i === navbarlinks.length - 1) {
        i = -1;
      }
      navbarlinks[index].setAttribute('aria-expanded', false);
      navbarlinks[i + 1].focus();
    }
    if (event.key === 'ArrowDown') {
      if (link.hasAttribute('aria-expanded') && sublinks.length) {
        event.stopPropagation();
        event.preventDefault();
        link.setAttribute('aria-expanded', true);
        sublinks[0].focus();
      }
    }
    if (event.key === 'ArrowUp') {
      if (link.hasAttribute('aria-expanded') && sublinks.length) {
        event.stopPropagation();
        event.preventDefault();
        link.setAttribute('aria-expanded', true);
        sublinks[sublinks.length - 1].focus();
      }
    }
    if (event.key === 'Home') {
      event.stopPropagation();
      event.preventDefault();
      navbarlinks[0].focus();
    }
    if (event.key === 'End') {
      event.stopPropagation();
      event.preventDefault();
      navbarlinks[navbarlinks.length - 1].focus();
    }
    let ii = index + 1;
    if (navbarlinks.length === ii) {
      ii = 0;
    }
    while (ii !== index) {
      if (event.key.toLowerCase() === navbarlinks[ii].textContent.toLowerCase()[0]) {
        event.stopPropagation();
        event.preventDefault();
        navbarlinks[ii].focus();
        return;
      }
      ii++;
      if (navbarlinks.length === ii) {
        ii = 0;
      }
    }
  });
});

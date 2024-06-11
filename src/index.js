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
    var i = index;
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

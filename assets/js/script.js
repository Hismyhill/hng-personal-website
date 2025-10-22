"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// Function to fetch and inject the sidebar
const loadSidebar = async () => {
  try {
    const response = await fetch("sidebar.html");
    const sidebarHTML = await response.text();
    const sidebarContainer = document.getElementById("sidebar-container");
    if (sidebarContainer) {
      sidebarContainer.innerHTML = sidebarHTML;

      // Re-initialize sidebar functionality after it's loaded
      const sidebar = document.querySelector("[data-sidebar]");
      const sidebarBtn = document.querySelector("[data-sidebar-btn]");
      if (sidebar && sidebarBtn) {
        sidebarBtn.addEventListener("click", function () {
          elementToggleFunc(sidebar);
        });
      }
    }
  } catch (error) {
    console.error("Error loading sidebar:", error);
  }
};

// Function to fetch and inject the navbar
const loadNavbar = async () => {
  try {
    const response = await fetch("navbar.html");
    const navbarHTML = await response.text();
    const navbarContainer = document.getElementById("navbar-container");
    if (navbarContainer) {
      navbarContainer.innerHTML = navbarHTML;
    }
  } catch (error) {
    console.error("Error loading navbar:", error);
  }
};

// Getting the Time
function updateTime() {
  const now = new Date();
  const utcMilliseconds = now.getTime();

  // Format date (e.g., "Fri, 23 Aug 2024")
  const dateOptions = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  };
  const currentDate = new Intl.DateTimeFormat("en-US", dateOptions).format(now);

  // Set the time to the current timestamp in milliseconds
  const time = utcMilliseconds;
  const dayEl = document.querySelector("[data-testid=test-user-date]");
  const timeEl = document.querySelector("[data-testid=test-user-time]");

  if (dayEl && timeEl) {
    dayEl.textContent = currentDate;
    timeEl.textContent = time;
  }
}

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  if (modalContainer && overlay) {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  }
};

// add click event to all modal items
if (testimonialsItem) {
  for (let i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener("click", function () {
      if (modalImg && modalTitle && modalText) {
        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector(
          "[data-testimonials-title]"
        ).innerHTML;
        modalText.innerHTML = this.querySelector(
          "[data-testimonials-text]"
        ).innerHTML;

        testimonialsModalFunc();
      }
    });
  }
}

// add click event to modal close button
if (modalCloseBtn && overlay) {
  modalCloseBtn.addEventListener("click", testimonialsModalFunc);
  overlay.addEventListener("click", testimonialsModalFunc);
}

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if (select) {
  select.addEventListener("click", function () {
    elementToggleFunc(this);
  });
}

// add event in all select items
if (selectItems) {
  for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  }
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  if (filterItems) {
    for (let i = 0; i < filterItems.length; i++) {
      if (selectedValue === "all") {
        filterItems[i].classList.add("active");
      } else if (selectedValue === filterItems[i].dataset.category) {
        filterItems[i].classList.add("active");
      } else {
        filterItems[i].classList.remove("active");
      }
    }
  }
};

// add event in all filter button items for large screen
if (filterBtn.length > 0) {
  let lastClickedBtn = filterBtn[0];

  for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      filterFunc(selectedValue);

      lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  }
}

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadSidebar();
  loadNavbar();
  setInterval(updateTime, 1); // Update every millisecond for accuracy
  updateTime();

  const contactForm = document.querySelector("[data-form]");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const fullName = document.querySelector(
        '[data-testid="test-contact-name"]'
      );
      const email = document.querySelector(
        '[data-testid="test-contact-email"]'
      );
      const message = document.querySelector(
        '[data-testid="test-contact-message"]'
      );

      const fullNameError = document.querySelector(
        '[data-testid="test-contact-error-fullName"]'
      );
      const emailError = document.querySelector(
        '[data-testid="test-contact-error-email"]'
      );
      const messageError = document.querySelector(
        '[data-testid="test-contact-error-message"]'
      );
      const successMessage = document.querySelector(
        '[data-testid="test-contact-success"]'
      );

      let isValid = true;

      // Reset messages
      successMessage.classList.remove("success");
      fullNameError.textContent = "";
      emailError.textContent = "";
      messageError.textContent = "";
      successMessage.textContent = "";

      if (fullName.value.trim() === "") {
        fullNameError.textContent = "Full name is required.";
        fullNameError.classList.add("error");
        isValid = false;
      }

      if (email.value.trim() === "") {
        emailError.textContent = "Email is required.";
        emailError.classList.add("error");
        isValid = false;
      } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.classList.add("error");
        isValid = false;
      }

      if (message.value.trim().length < 10) {
        messageError.classList.add("error");
        messageError.textContent =
          "Message must be at least 10 characters long.";
        isValid = false;
      }

      if (isValid) {
        successMessage.classList.add("success");
        successMessage.textContent = "Your message has been sent successfully!";
        contactForm.reset();
      }
    });
  }
});

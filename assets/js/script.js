/*-----------------------------------*\
  #style.css
\*-----------------------------------*/

/**
 * copyright 2022 @codewithsadee
 */

/*-----------------------------------*\
  #CUSTOM PROPERTY
\*-----------------------------------*/

:root {
  /**
   * colors
   */

  /* gradient */

  --bg-gradient-onyx: linear-gradient(
    to bottom right,
    hsl(240, 1%, 25%) 3%,
    hsl(0, 0%, 19%) 97%
  );
  --bg-gradient-jet: linear-gradient(
      to bottom right,
      hsla(240, 1%, 18%, 0.251) 0%,
      hsla(240, 2%, 11%, 0) 100%
    ),
    hsl(240, 2%, 13%);
  --bg-gradient-yellow-1: linear-gradient(
    to bottom right,
    hsl(45, 100%, 71%) 0%,
    hsla(36, 100%, 69%, 0) 50%
  );
  --bg-gradient-yellow-2: linear-gradient(
      135deg,
      hsla(45, 100%, 71%, 0.251) 0%,
      hsla(35, 100%, 68%, 0) 59.86%
    ),
    hsl(240, 2%, 13%);
  --border-gradient-onyx: linear-gradient(
    to bottom right,
    hsl(0, 0%, 25%) 0%,
    hsla(0, 0%, 25%, 0) 50%
  );
  --text-gradient-yellow: linear-gradient(
    to right,
    hsl(45, 100%, 72%),
    hsl(35, 100%, 68%)
  );

  /* solid */

  --jet: hsl(0, 0%, 22%);
  --onyx: hsl(240, 1%, 17%);
  --eerie-black-1: hsl(240, 2%, 13%);
  --eerie-black-2: hsl(240, 2%, 12%);
  --smoky-black: hsl(0, 0%, 7%);
  --white-1: hsl(0, 0%, 100%);
  --white-2: hsl(0, 0%, 98%);
  --orange-yellow-crayola: hsl(45, 100%, 72%);
  --vegas-gold: hsl(45, 54%, 58%);
  --light-gray: hsl(0, 0%, 84%);
  --light-gray-70: hsla(0, 0%, 84%, 0.7);
  --bittersweet-shimmer: hsl(0, 43%, 51%);

  /**
   * typography
   */

  /* font-family */
  --ff-poppins: "Poppins", sans-serif;

  /* font-size */
  --fs-1: 24px;
  --fs-2: 18px;
  --fs-3: 17px;
  --fs-4: 16px;
  --fs-5: 15px;
  --fs-6: 14px;
  --fs-7: 13px;
  --fs-8: 11px;

  /* font-weight */
  --fw-300: 300;
  --fw-400: 400;
  --fw-500: 500;
  --fw-600: 600;

  /**
   * shadow
   */

  --shadow-1: -4px 8px 24px hsla(0, 0%, 0%, 0.25);
  --shadow-2: 0 16px 30px hsla(0, 0%, 0%, 0.25);
  --shadow-3: 0 16px 40px hsla(0, 0%, 0%, 0.25);
  --shadow-4: 0 25px 50px hsla(0, 0%, 0%, 0.15);
  --shadow-5: 0 24px 80px hsla(0, 0%, 0%, 0.25);

  /**
   * transition
   */

  --transition-1: 0.25s ease;
  --transition-2: 0.5s ease-in-out;
}

/*-----------------------------------*\
  #RESET
\*-----------------------------------*/

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

img,
ion-icon,
a,
button,
time,
span {
  display: block;
}

button {
  font: inherit;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
}

input,
textarea {
  display: block;
  width: 100%;
  background: none;
  font: inherit;
}

::selection {
  background: var(--orange-yellow-crayola);
  color: var(--smoky-black);
}

:focus {
  outline-color: var(--orange-yellow-crayola);
}

html {
  font-family: var(--ff-poppins);
}

body {
  background: var(--smoky-black);
}

/*-----------------------------------*\
  #REUSED STYLE
\*-----------------------------------*/

.sidebar,
article {
  background: var(--eerie-black-2);
  border: 1px solid var(--jet);
  border-radius: 20px;
  padding: 15px;
  box-shadow: var(--shadow-1);
  z-index: 1;
}

.separator {
  width: 100%;
  height: 1px;
  background: var(--jet);
  margin: 16px 0;
}

.icon-box {
  position: relative;
  background: var(--border-gradient-onyx);
  width: 30px;
  height: 30px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: var(--orange-yellow-crayola);
  box-shadow: var(--shadow-1);
  z-index: 1;
}

.icon-box::before {
  content: "";
  position: absolute;
  inset: 1px;
  background: var(--eerie-black-1);
  border-radius: inherit;
  z-index: -1;
}

.icon-box ion-icon {
  --ionicon-stroke-width: 35px;
}

article {
  display: none;
}

article.active {
  display: block;
  animation: fade 0.5s ease backwards;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.h2,
.h3,
.h4,
.h5 {
  color: var(--white-2);
  text-transform: capitalize;
}

.h2 {
  font-size: var(--fs-1);
}

.h3 {
  font-size: var(--fs-2);
}

.h4 {
  font-size: var(--fs-4);
}

.h5 {
  font-size: var(--fs-7);
  font-weight: var(--fw-500);
}

.article-title {
  position: relative;
  padding-bottom: 7px;
}

.article-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 3px;
  background: var(--text-gradient-yellow);
  border-radius: 3px;
}

.has-scrollbar::-webkit-scrollbar {
  width: 5px; /* for vertical scrollbar */
  height: 5px; /* for horizontal scrollbar */
}

.has-scrollbar::-webkit-scrollbar-track {
  background: var(--onyx);
  border-radius: 5px;
}

.has-scrollbar::-webkit-scrollbar-thumb {
  background: var(--orange-yellow-crayola);
  border-radius: 5px;
}

.has-scrollbar::-webkit-scrollbar-button {
  width: 20px;
}

.content-card {
  position: relative;
  background: var(--border-gradient-onyx);
  padding: 15px;
  padding-top: 45px;
  border-radius: 14px;
  box-shadow: var(--shadow-2);
  cursor: pointer;
  z-index: 1;
}

.content-card::before {
  content: "";
  position: absolute;
  inset: 1px;
  background: var(--bg-gradient-jet);
  border-radius: inherit;
  z-index: -1;
}

/*-----------------------------------*\
  #MAIN
\*-----------------------------------*/

main {
  margin: 15px 12px;
  margin-bottom: 75px;
  min-width: 259px;
}

/*-----------------------------------*\
  #SIDEBAR
\*-----------------------------------*/

.sidebar {
  margin-bottom: 15px;
  max-height: 285px;
  overflow: hidden;
  transition: var(--transition-2);
}

.sidebar.active {
  max-height: 100%;
}

.sidebar-info {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
}

.avatar-box {
  background: var(--bg-gradient-onyx);
}
.avatar-box img {
  max-width: 100%;
  max-height: 100%;
}

.info-content .name {
  color: var(--white-2);
  font-size: var(--fs-3);
  font-weight: var(--fw-500);
  letter-spacing: -0.25px;
  margin-bottom: 10px;
}

.info-content .title {
  color: var(--white-1);
  background: var(--onyx);
  font-size: var(--fs-8);
  font-weight: var(--fw-300);
  width: max-content;
  padding: 3px 12px;
  border-radius: 8px;
}

.info_more-btn {
  position: absolute;
  top: -15px;
  right: -15px;
  border-radius: 0 15px;
  font-size: 13px;
  color: var(--orange-yellow-crayola);
  background: var(--border-gradient-onyx);
  padding: 10px;
  box-shadow: var(--shadow-2);
  transition: var(--transition-1);
  z-index: 1;
}

.info_more-btn::before {
  content: "";
  position: absolute;
  inset: 1px;
  border-radius: inherit;
  background: var(--bg-gradient-jet);
  transition: var(--transition-1);
  z-index: -1;
}

.info_more-btn:hover,
.info_more-btn:focus {
  background: var(--bg-gradient-yellow-1);
}

.info_more-btn:hover::before,
.info_more-btn:focus::before {
  background: var(--bg-gradient-yellow-2);
}

.info_more-btn span {
  display: none;
}

.sidebar-info_more {
  opacity: 0;
  visibility: hidden;
  transition: var(--transition-2);
}
.date-time {
  display: flex;
  gap: 15px;
}

.sidebar.active .sidebar-info_more {
  opacity: 1;
  visibility: visible;
}

.contacts-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.contact-item {
  min-width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
}

.contact-info {
  max-width: calc(100% - 46px);
  width: calc(100% - 46px);
}

.contact-title {
  color: var(--light-gray-70);
  font-size: var(--fs-8);
  text-transform: uppercase;
  margin-bottom: 2px;
}

.contact-info :is(.contact-link, time, span) {
  color: var(--white-2);
  font-size: var(--fs-7);
}

.contact-info span {
  font-style: normal;
}

.social-list {
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  padding-bottom: 4px;
  padding-left: 7px;
}

.social-item .social-link {
  color: var(--light-gray-70);
  font-size: 18px;
}

.social-item .social-link:hover {
  color: var(--light-gray);
}

/*-----------------------------------*\
  #NAVBAR
\*-----------------------------------*/

.navbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: hsla(240, 1%, 17%, 0.75);
  backdrop-filter: blur(10px);
  border: 1px solid var(--jet);
  border-radius: 12px 12px 0 0;
  box-shadow: var(--shadow-2);
  z-index: 5;
}

.navbar-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
}

.navbar-link {
  color: var(--light-gray);
  font-size: var(--fs-8);
  padding: 20px 7px;
  transition: color var(--transition-1);
}

.navbar-link:hover,
.navbar-link:focus {
  color: var(--light-gray-70);
}

.navbar-link.active {
  color: var(--orange-yellow-crayola);
}

/*-----------------------------------*\
  #ABOUT
\*-----------------------------------*/

.about .article-title {
  margin-bottom: 15px;
}

.about-text {
  color: var(--light-gray);
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
  line-height: 1.6;
}

.about-text p {
  margin-bottom: 15px;
}

/**
 * #service 
 */

.service {
  margin-bottom: 35px;
}

.service-title {
  margin-bottom: 20px;
}

.service-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.service-item {
  position: relative;
  background: var(--border-gradient-onyx);
  padding: 20px;
  border-radius: 14px;
  box-shadow: var(--shadow-2);
  z-index: 1;
}

.service-item::before {
  content: "";
  position: absolute;
  inset: 1px;
  background: var(--bg-gradient-jet);
  border-radius: inherit;
  z-index: -1;
}

.service-icon-box {
  margin-bottom: 10px;
}

.service-icon-box img {
  margin: auto;
}

.service-content-box {
  text-align: center;
}

.service-item-title {
  margin-bottom: 7px;
}

.service-item-text {
  color: var(--light-gray);
  font-size: var(--fs-6);
  font-weight: var(--fw-3);
  line-height: 1.6;
}

/**
 * #testimonials 
 */

.testimonials {
  margin-bottom: 30px;
}

.testimonials-title {
  margin-bottom: 20px;
}

.testimonials-list {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
  margin: 0 -15px;
  padding: 25px 15px;
  padding-bottom: 35px;
  overflow-x: auto;
  scroll-behavior: smooth;
  overscroll-behavior-inline: contain;
  scroll-snap-type: inline mandatory;
}

.testimonials-item {
  min-width: 100%;
  scroll-snap-align: center;
}

.testimonials-avatar-box {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(15px, -25px);
  background: var(--bg-gradient-onyx);
  border-radius: 14px;
  box-shadow: var(--shadow-1);
}

.testimonials-item-title {
  margin-bottom: 7px;
  margin-top: 35px;
}

.testimonials-text {
  color: var(--light-gray);
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
  line-height: 1.6;
  display: -webkit-box;
  line-clamp: 4;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/**
 * #testimonials-modal
 */

.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  overscroll-behavior: contain;
  z-index: 20;
  pointer-events: none;
  visibility: hidden;
}

.modal-container::-webkit-scrollbar {
  display: none;
}

.modal-container.active {
  pointer-events: all;
  visibility: visible;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: hsl(0, 0%, 5%);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 1;
  transition: var(--transition-1);
}

.overlay.active {
  opacity: 0.8;
  visibility: visible;
  pointer-events: all;
}

.testimonials-modal {
  background: var(--eerie-black-2);
  position: relative;
  padding: 15px;
  margin: 15px 12px;
  border: 1px solid var(--jet);
  border-radius: 14px;
  box-shadow: var(--shadow-5);
  transform: scale(1.2);
  opacity: 0;
  transition: var(--transition-1);
  z-index: 2;
}

.modal-container.active .testimonials-modal {
  transform: scale(1);
  opacity: 1;
}

.modal-close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: var(--onyx);
  border-radius: 8px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white-2);
  font-size: 18px;
  opacity: 0.7;
}

.modal-close-btn:hover,
.modal-close-btn:focus {
  opacity: 1;
}

.modal-close-btn ion-icon {
  --ionicon-stroke-width: 50px;
}

.modal-avatar-box {
  background: var(--bg-gradient-onyx);
  width: max-content;
  border-radius: 14px;
  margin-bottom: 15px;
  box-shadow: var(--shadow-2);
}

.modal-img-wrapper > img {
  display: none;
}

.modal-title {
  margin-bottom: 4px;
}

.modal-content time {
  font-size: var(--fs-6);
  color: var(--light-gray-70);
  font-weight: var(--fw-300);
  margin-bottom: 10px;
}

.modal-content p {
  color: var(--light-gray);
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
  line-height: 1.6;
}

/**
 * #clients 
 */

.clients {
  margin-bottom: 15px;
}

.clients-list {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
  margin: 0 -15px;
  padding: 25px;
  padding-bottom: 25px;
  overflow-x: auto;
  scroll-behavior: smooth;
  overscroll-behavior-inline: contain;
  scroll-snap-type: inline mandatory;
  scroll-padding-inline: 25px;
}

.clients-item {
  min-width: 50%;
  scroll-snap-align: start;
}

.clients-item img {
  width: 100%;
  filter: grayscale(1);
  transition: var(--transition-1);
}

.clients-item img:hover {
  filter: grayscale(0);
}

.task-link {
  display: flex;
  padding-top: 20px;
  padding-top: 20px;
  justify-content: space-between;
}

.task-link a {
  font-size: 15px;
  color: var(--orange-yellow-crayola);
}

/*-----------------------------------*\
  #VISION
\*-----------------------------------*/

.vision .article-title {
  margin-bottom: 15px;
}

.vision-text {
  color: var(--light-gray);
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
  line-height: 1.6;
}

.vision-text p {
  margin-bottom: 15px;
  color: #fff;
}

/*-----------------------------------*\
  #RESPONSIVE
\*-----------------------------------*/

/**
 * responsive larger than 450px screen
 */

@media (min-width: 450px) {
  /**
   * client
   */

  .clients-item {
    min-width: calc(33.33% - 10px);
  }

  /**
   * #PORTFOLIO, BLOG 
   */

  .project-img,
  .blog-banner-box {
    height: auto;
  }
}

/**
 * responsive larger than 580px screen
 */

@media (min-width: 580px) {
  /**
   * CUSTOM PROPERTY
   */

  :root {
    /**
     * typography
     */

    --fs-1: 32px;
    --fs-2: 24px;
    --fs-3: 26px;
    --fs-4: 18px;
    --fs-6: 15px;
    --fs-7: 15px;
    --fs-8: 12px;
  }

  /**
   * #REUSED STYLE
   */

  .sidebar,
  article {
    width: 520px;
    margin-inline: auto;
    padding: 30px;
  }

  .article-title {
    font-weight: var(--fw-600);
    padding-bottom: 15px;
  }

  .article-title::after {
    width: 40px;
    height: 5px;
  }

  .icon-box {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    font-size: 18px;
  }

  /**
   * #MAIN
   */

  main {
    margin-top: 60px;
    margin-bottom: 100px;
  }

  /**
   * #SIDEBAR
   */

  .sidebar {
    max-height: 215px;
    margin-bottom: 30px;
  }

  .sidebar.active {
    max-height: 100%;
  }

  .sidebar-info {
    gap: 25px;
  }

  .avatar-box {
    border-radius: 30px;
  }

  .avatar-box img {
    width: 120px;
  }

  .info-content .name {
    margin-bottom: 15px;
  }

  .info-content .title {
    padding: 5px 18px;
  }

  .info_more-btn {
    top: -30px;
    right: -30px;
    padding: 10px 15px;
  }

  .info_more-btn span {
    display: block;
    font-size: var(--fs-8);
  }

  .info_more-btn ion-icon {
    display: none;
  }

  .separator {
    margin: 32px 0;
  }

  .contacts-list {
    gap: 20px;
  }

  .contact-info {
    max-width: calc(100% - 64px);
    width: calc(100% - 64px);
  }

  /**
   * #NAVBAR
   */

  .navbar {
    border-radius: 20px 20px 0 0;
  }

  .navbar-list {
    gap: 20px;
  }

  .navbar-link {
    --fs-8: 14px;
  }

  /**
   * #ABOUT
   */

  .about .article-title {
    margin-bottom: 20px;
  }

  .about-text {
    margin-bottom: 40px;
  }

  /* service */

  .service-item {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 18px;
    padding: 30px;
  }

  .service-icon-box {
    margin-bottom: 0;
    margin-top: 5px;
  }

  .service-content-box {
    text-align: left;
  }

  /* testimonials */

  .testimonials-title {
    margin-bottom: 25px;
  }

  .testimonials-list {
    gap: 30px;
    margin: 0 -30px;
    padding: 30px;
    padding-bottom: 35px;
  }

  .content-card {
    padding: 30px;
    padding-top: 25px;
  }

  .testimonials-avatar-box {
    transform: translate(30px, -30px);
    border-radius: 20px;
  }

  .testimonials-avatar-box img {
    width: 80px;
  }

  .testimonials-item-title {
    margin-bottom: 10px;
    margin-left: 95px;
  }

  .testimonials-text {
    line-clamp: 2;
    -webkit-line-clamp: 2;
  }

  .task-link {
    padding: 20px 30px 0px 30px;
  }

  /* testimonials modal */

  .modal-container {
    padding: 20px;
  }

  .testimonials-modal {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    gap: 25px;
    padding: 30px;
    border-radius: 20px;
  }

  .modal-img-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .modal-avatar-box {
    border-radius: 18px;
    margin-bottom: 0;
  }

  .modal-avatar-box img {
    width: 65px;
  }

  .modal-img-wrapper > img {
    display: block;
    flex-grow: 1;
    width: 35px;
  }

  /* clients */

  .clients-list {
    gap: 50px;
    margin: 0 -30px;
    padding: 45px;
    scroll-padding-inline: 45px;
  }

  .clients-item {
    min-width: calc(33.33% - 35px);
  }

  /**
   * #RESUME
   */

  .timeline-list {
    margin-left: 65px;
  }

  .timeline-item:not(:last-child)::before {
    left: -40px;
  }

  .timeline-item::after {
    height: 8px;
    width: 8px;
    left: -43px;
  }

  .skills-item:not(:last-child) {
    margin-bottom: 25px;
  }

  /**
   * #PORTFOLIO, BLOG
   */

  .project-img,
  .blog-banner-box {
    border-radius: 16px;
  }

  .blog-posts-list {
    gap: 30px;
  }

  .blog-content {
    padding: 25px;
  }

  /**
   * #CONTACT
   */

  .mapbox {
    height: 380px;
    border-radius: 18px;
  }

  .input-wrapper {
    gap: 30px;
    margin-bottom: 30px;
  }

  .form-input {
    padding: 15px 20px;
  }

  textarea.form-input {
    margin-bottom: 30px;
  }

  .form-btn {
    --fs-6: 16px;
    padding: 16px 20px;
  }

  .form-btn ion-icon {
    font-size: 18px;
  }
}

/**
 * responsive larger than 768px screen
 */

@media (min-width: 768px) {
  /**
   * REUSED STYLE
   */

  .sidebar,
  article {
    width: 700px;
  }

  .has-scrollbar::-webkit-scrollbar-button {
    width: 100px;
  }

  /**
   * SIDEBAR
   */

  .contacts-list {
    grid-template-columns: 1fr 1fr;
    gap: 30px 15px;
  }

  /**
   * NAVBAR
   */

  .navbar-link {
    --fs-8: 15px;
  }

  /**
   * ABOUT
   */

  /* testimonials modal */

  .testimonials-modal {
    gap: 35px;
    max-width: 680px;
  }

  .modal-avatar-box img {
    width: 80px;
  }

  /**
   * PORTFOLIO
   */

  .article-title {
    padding-bottom: 20px;
  }

  .filter-select-box {
    display: none;
  }

  .filter-list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 25px;
    padding-left: 5px;
    margin-bottom: 30px;
  }

  .filter-item button {
    color: var(--light-gray);
    font-size: var(--fs-5);
    transition: var(--transition-1);
  }

  .filter-item button:hover {
    color: var(--light-gray-70);
  }

  .filter-item button.active {
    color: var(--orange-yellow-crayola);
  }

  /* portfolio and blog grid */

  .project-list,
  .blog-posts-list {
    grid-template-columns: 1fr 1fr;
  }

  .task-link {
    padding: 20px 50px 0px 50px;
    justify-content: space-between;
  }

  /**
   * CONTACT
   */

  .input-wrapper {
    grid-template-columns: 1fr 1fr;
  }

  .form-btn {
    width: max-content;
    margin-left: auto;
  }
}

/**
 * responsive larger than 1024px screen
 */

@media (min-width: 1024px) {
  /**
   * CUSTOM PROPERTY
   */

  :root {
    /**
    * shadow
    */

    --shadow-1: -4px 8px 24px hsla(0, 0%, 0%, 0.125);
    --shadow-2: 0 16px 30px hsla(0, 0%, 0%, 0.125);
    --shadow-3: 0 16px 40px hsla(0, 0%, 0%, 0.125);
  }

  /**
   * REUSED STYLE
   */

  .sidebar,
  article {
    width: 950px;
    box-shadow: var(--shadow-5);
  }

  /**
   * MAIN 
   */

  main {
    margin-bottom: 60px;
  }

  .main-content {
    position: relative;
    width: max-content;
    margin: auto;
  }

  /**
   * NAVBAR
   */

  .navbar {
    position: absolute;
    bottom: auto;
    top: 0;
    left: auto;
    right: 0;
    width: max-content;
    border-radius: 0 20px;
    padding: 0 20px;
    box-shadow: none;
  }

  .navbar-list {
    gap: 30px;
    padding: 0 20px;
  }

  .navbar-link {
    font-weight: var(--fw-500);
  }

  /**
   * ABOUT
   */

  /* service */

  .service-list {
    grid-template-columns: 1fr 1fr;
    gap: 20px 25px;
  }

  /* testimonials */

  .testimonials-item {
    min-width: calc(50% - 15px);
  }

  /* clients */

  .clients-item {
    min-width: calc(25% - 38px);
  }

  /**
   * PORTFOLIO
   */

  .project-list {
    grid-template-columns: repeat(3, 1fr);
  }

  /**
   * BLOG
   */

  .blog-banner-box {
    height: 230px;
  }
}

/**
 * responsive larger than 1250px screen
 */

@media (min-width: 1250px) {
  /**
   * RESET
   */

  body::-webkit-scrollbar {
    width: 20px;
  }

  body::-webkit-scrollbar-track {
    background: var(--smoky-black);
  }

  body::-webkit-scrollbar-thumb {
    border: 5px solid var(--smoky-black);
    background: hsla(0, 0%, 100%, 0.1);
    border-radius: 20px;
    box-shadow: inset 1px 1px 0 hsla(0, 0%, 100%, 0.11),
      inset -1px -1px 0 hsla(0, 0%, 100%, 0.11);
  }

  body::-webkit-scrollbar-thumb:hover {
    background: hsla(0, 0%, 100%, 0.15);
  }

  body::-webkit-scrollbar-button {
    height: 60px;
  }

  /**
   * REUSED STYLE
   */

  .sidebar,
  article {
    width: auto;
    /* height: auto; */
  }

  article {
    min-height: 100%;
  }

  /**
   * MAIN
   */

  main {
    max-width: 1200px;
    margin-inline: auto;
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 25px;
  }

  .main-content {
    min-width: 75%;
    width: 75%;
    margin: 0;
  }

  /**
   * SIDEBAR
   */

  .sidebar {
    position: sticky;
    top: 60px;
    max-height: max-content;
    height: 100%;
    margin-bottom: 0;
    padding-top: 60px;
    z-index: 1;
    width: max-content;
  }

  .sidebar-info {
    flex-direction: column;
  }

  .avatar-box img {
    width: 150px;
  }

  .info-content .name {
    white-space: nowrap;
    text-align: center;
  }

  .info-content .title {
    margin: auto;
  }

  .info_more-btn {
    display: none;
  }

  .sidebar-info_more {
    opacity: 1;
    visibility: visible;
  }
  .sidebar .date-time {
    flex-direction: column;
    gap: 2px;
  }
  .contacts-list {
    grid-template-columns: 1fr;
  }

  .contact-info :is(.contact-link) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .contact-info :is(.contact-link, time, address) {
    --fs-7: 14px;
    font-weight: var(--fw-300);
  }

  .separator:last-of-type {
    margin: 15px 0;
    opacity: 0;
  }

  .social-list {
    justify-content: center;
  }

  /**
	 * RESUME
	 */

  .timeline-text {
    max-width: 700px;
  }
}

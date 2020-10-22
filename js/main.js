// header import
import headerEffect from "./components/header/headerJS.js";
import sandwich from "./components/hero/heroSandwich.js"
import HeroScroll from "./components/header/scrollFromHero.js"
import scrollToTop from "./components/back-to-top/scrollToTop.js"
// import headerFixes from "./headerFixes.js"

// hero import
import heroTextTransform from "./components/hero/heroTextTransform.js";

// about me import
import bar from './data/dataBar.js';
import renderProgressBar from './components/about-me/renderProgressBar.js';
import progressBarLoad from './components/about-me/progressBarLoad.js';

// services import
import servicesData from './data/services.js'
import renderServices from './components/services/renderServices.js'
// statistics import
import statisticsData from './data/statistics.js';
// console.log(statisticsData);
import renderStatistics from './components/statistics/renderStatistics.js';
import statisticsNumberTransform from './components/statistics/statisticsNumberTransform.js'

// education import
import {eduData} from "./data/data-education.js";
import {renderEducation} from './components/education/renderEducation.js';

// hire me import

// our work import
import { Gallery } from './components/gallery/Gallery.js';
import { galleryData } from './data/gallery.js';
// import { renderGallery } from './components/gallery/renderGallery.js';
// import { galleryFilter } from './data/galleryFilter.js';
// import { renderFilter } from './components/gallery/renderFilter.js';
import { findDefaultFilter } from './components/gallery/findDefaultFilter.js'
import { generateModal } from './components/gallery/modal.js';
// our clients import

// trusties import

// subscribe import
import subscribeEmailValidation from "./components/subscribe/emailValidation.js"
subscribeEmailValidation ();
// blog import

// contact import

// footer import



// header logic
headerEffect();
HeroScroll();
scrollToTop();
// headerFixes();
// sandwich();
// hero logic
// change();

// HeroTextChanging();
// about logic
renderProgressBar(bar);
progressBarLoad();

// services logic
renderServices(servicesData)
// statistics logic
// console.log(statisticsData);
renderStatistics(statisticsData);
statisticsNumberTransform();

// education logic
renderEducation(eduData);

// hire me logic

// our work logic

// function onFilterChange (filter) {
//     renderGallery(galleryData, filter);
// }
// renderFilter(galleryFilter);
// renderGallery(galleryData);
new Gallery(galleryData);
findDefaultFilter();
generateModal(galleryData.imagePath, galleryData.gallery);

// our clients logic

// trusties logic

// subscribe logic

// blog logic

// contact logic

// footer logic

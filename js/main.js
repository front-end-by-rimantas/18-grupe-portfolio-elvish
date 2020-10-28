// header import
import headerEffect from "./components/header/headerJS.js";
import sandwich from "./components/header/headerBurger.js"
import mobileNav from "./components/header/mobileNavigation.js"
import scrollToTop from "./components/back-to-top/scrollToTop.js"
import sectionHeights from "./data/section-heigths.js"
import scrollFromTop from "./components/header/scrollFromTop.js"
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
import renderStatistics from './components/statistics/renderStatistics.js';
import { numberTransformOnscroll } from './components/statistics/numberTransformOnscroll.js'

// education import
import {eduData} from "./data/data-education.js";
import {renderEducation} from './components/education/renderEducation.js';

// hire me import

// our work import
import { dataGallery } from './data/dataGallery.js';
import { Gallery } from './components/gallery/Gallery.js';
import { Lightbox } from './components/gallery/Lightbox.js';

// our clients import
import { testimonialsData } from './data/clientsData.js';
import { Item } from './components/clients/Item.js';
import { Carousel } from './components/clients/Carousel.js';

// trusties import
import trustieData from "./data/dataTrusties.js"
import createTrustieRow from "./components/trusties/createTrustieRow.js"
// subscribe import
import subscribeEmailValidation from "./components/subscribe/emailValidation.js"
subscribeEmailValidation ();
// blog import

// contact import

// footer import
import hoverAnimation from "./components/footer/footerHoverAnimation.js"


// header logic

headerEffect();
scrollToTop();
mobileNav();
// hero logic
// change();

// HeroTextChanging();
// about logic
renderProgressBar(bar);
progressBarLoad();


// services logic
renderServices(servicesData)

// statistics logic
renderStatistics(statisticsData);
numberTransformOnscroll()

// education logic
renderEducation(eduData);

// hire me logic

// our work logic
const gallery = new Gallery(dataGallery);
const lightbox = new Lightbox({
    selector: '#lightbox'
});
gallery.registerLightbox(lightbox);

// our clients logic
new Carousel({
    data: testimonialsData,
    renderEngine: Item,
    breakpoints: [800, 1100],
    itemsPerView: 1
});

// trusties logic
createTrustieRow(trustieData);
// subscribe logic

// blog logic

// contact logic

// footer logic
hoverAnimation();
scrollFromTop();
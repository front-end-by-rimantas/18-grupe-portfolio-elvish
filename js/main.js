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

// services logic
renderServices(servicesData)

// statistics logic
renderStatistics(statisticsData);
numberTransformOnscroll()

// education logic
renderEducation(eduData);

// hire me logic

// our work logic

// our clients logic

// trusties logic

// subscribe logic

// blog logic

// contact logic

// footer logic

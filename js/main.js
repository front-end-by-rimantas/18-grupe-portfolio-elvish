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
// console.log(statisticsData);
import renderStatistics from './components/statistics/renderStatistics.js';
import statisticsNumberTransform from './components/statistics/statisticsNumberTransform.js'

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
import { renderIcons } from "./components/contact-us/renderIcons.js";
import { leftIcons } from "./data/left-icons.js";
import { renderForm } from "./components/contact-us/renderForm.js";
import { formData } from "./data/contact-us-data.js";

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
// console.log(statisticsData);
renderStatistics(statisticsData);
statisticsNumberTransform();

// education logic
renderEducation(eduData);

// hire me logic

// our work logic

// our clients logic

// trusties logic

// subscribe logic

// blog logic

// contact logic
renderIcons(leftIcons);
renderForm(formData);

// footer logic

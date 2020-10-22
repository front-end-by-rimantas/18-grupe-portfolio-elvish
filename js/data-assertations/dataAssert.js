//asserting education data
import {eduData} from "../data/data-education.js"
import Servicelist from "../data/services.js"
import  bar from "../data/dataBar.js"
import sectionHeights from "../data/section-heigths.js";
import statisticsData from "../data/statistics.js"


function validateData () {

   function isEduDataValid (){
        for ( let i=0;i<eduData.length;i++) {
            console.assert(typeof(eduData[i].year) =='string', `Faile:../data/data-education.js masyve, elemento nr:eduData[${i}].year reiksme turi buti String tipo. Gauta: ${typeof(eduData[i].year)}`)
            console.assert(typeof(eduData[i].university) =='string', `Faile eduData, sarase, element nr:eduData[${i}] header 
                                                    reiksme turi buti String tipo. Gauta: ${typeof(eduData[i].university)}`)
            console.assert(typeof(eduData[i].description) =='string', `Faile eduData, sarase, elemento nr:eduData[${i}] header 
                                                    reiksme turi buti String tipo. Gauta: ${typeof(eduData[i].description)}`)
                                             
        }
    }
   
    isEduDataValid ();
   
    function isServicesDataValid () {
        for ( let i=0;i<Servicelist.length;i++) {
            console.assert(typeof(Servicelist[i].icon) =='string', `Faile:../data/services.js masyve, elemento nr: list[${i}].icon reiksme turi buti String tipo. Gauta: ${typeof(Servicelist[i].icon)}`)
            console.assert(typeof(Servicelist[i].header) =='string', `Faile:../data/services.js masyve, elemento nr: list[${i}].header reiksme turi buti String tipo. Gauta: ${typeof(Servicelist[i].header)}`)
            console.assert(typeof(Servicelist[i].paragraph) =='string', `Faile:../data/services.js masyve, elemento nr: list[${i}].paragraph reiksme turi buti String tipo. Gauta: ${typeof(Servicelist[i].paragraph)}`)
        }
    }
isServicesDataValid();

    function isBarDataValid () {
        for ( let i=0;i<bar.length;i++) {
            console.assert(typeof(bar[i].label) =='string', `Faile:../data/dataBar.js masyve, elemento nr: bar[${i}].label reiksme turi buti String tipo. Gauta: ${typeof(bar[i].label)}`)
            console.assert(typeof(bar[i].value) =='string', `Faile: ../data/dataBar.js masyve,, elemento nr: bar[${i}].value reiksme turi buti String tipo. Gauta: ${typeof(bar[i].value)}`)
        }
      
    }
    isBarDataValid ();

    function isSectionHeightsDataValid () {
        const navigationLinks = document.querySelectorAll(".nav-links");
        const navArray = Array.from(navigationLinks);
        for ( let i=0;i<sectionHeights.length;i++) {
            console.assert(typeof(sectionHeights[i].name) =='string', `Faile:../data/sectionHeights.js masyve, elemento nr: sectionHeights[${i}].name reiksme turi buti String tipo. Gauta: ${typeof(sectionHeights[i].name)}`)
            console.assert(navArray[i].innerHTML.toLowerCase().includes(sectionHeights[i].name) , `Faile ../data/sectionHeigths.js masyve, elemto nr: sectionHeights[${i}].name nesutampa su navigaciniu elementu ${navArray[i].innerHTML}. Gauta: ${sectionHeights[i].name}`)
        }
    }
    isSectionHeightsDataValid();

    function isStatisticsDataValid () {

            for ( let i=0;i<statisticsData.length;i++) {
                console.assert(typeof(statisticsData[i].icon) =='string', `Faile:../data/statisticsData.js masyve, elemento nr: statisticsData[${i}].icon reiksme turi buti String tipo. Gauta: ${typeof(statisticsData[i].icon)}`)
            }

    
    }
    isStatisticsDataValid();




}

export default validateData;
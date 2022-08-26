//services should be a list of services on the page 
import { getGuests, getmainAttractions, getServices, getActivities } from "./database.js";

const mainAttractions = getmainAttractions()
const activities = getActivities()
const services = getServices()
const guests = getGuests()

export const allServices = () => {
    let serviceHTML = `<ul class="service">`

    for (const service of services) {
        serviceHTML += `<li id="service--${service.id}">${service.type}</li>`
    }
    serviceHTML += `</ul>`

    return serviceHTML
}

const relatedServices = (mainAttraction) => {
    let html= `<ul>`
//loop over mainattraction array 
//loop over activities array and match mainattractionid on activities to the main attraction id 
//loop over services and match service id from the activitiesarray to the service id in services
//create main attraction name and park area with a list item of services
//may have to be an && statement?? 
    for (const activity of activities) { 
      for (const service of services) {
        if ((mainAttraction.id === activity.mainAttractionid) && (activity.serviceid === service.id)) {  
                html += `<li>${service.type}</li>`
            }
        }
    }
        html += `</ul>`
        return html
    }

export const mainAttractionLocation = () => {
    let mainAttractionLocationHTML = `<section class="details">`

    for (const mainAttraction of mainAttractions) {
        //let activity = filterServices(service, activities)
        let service = relatedServices(mainAttraction)
       
        mainAttractionLocationHTML += 
        `<div class="border detail-carditem"><h2 id="mainAttraction--${mainAttraction.id}">${mainAttraction.parkarea}</h2>
        <h3>${mainAttraction.name}</h3>
        ${service}</div>` 
    }
    mainAttractionLocationHTML += `</section>`
    return mainAttractionLocationHTML
}

const totalGuests = (guests, mainAttraction) => {
    const guestsNplace = []

    for (const guest of guests) {
        if (guest.mainAttractionid === mainAttraction.id) {
            guestsNplace.push(guest)
        }
    }
    return guestsNplace
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("mainAttraction")) {
            const [,mainattractionId] = itemClicked.id.split("--")

            for (const mainAttraction of mainAttractions) {
                if (mainAttraction.id === parseInt(mainattractionId)) {
                    const guestTotals = totalGuests(guests, mainAttraction)
                    window.alert(`There are ${guestTotals.length} guests in this area.`)
                }
            }
        }
    }
)

//need a function to match the service to its location(s) in the park
//Then activate a click event to show service is availble in -- location(s)
//look at activity array again and match the data

const serviceItemClicked = (service) => {
    let whereRservicehtml = ""

    for (const activity of activities) { 
      for (const mainAttraction of mainAttractions) {
        if ((mainAttraction.id === activity.mainAttractionid) && (activity.serviceid === service.id)) {  
            if (whereRservicehtml = "") {
                whereRservicehtml += `${mainAttraction.name}`
            }
            else {
                whereRservicehtml += `and ${mainAttraction.name}`
            }
            }
        }
    }
       
        return whereRservicehtml
    }

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("service")) {
            const [,serviceId] = itemClicked.id.split("--")

            for (const service of services) {
                if (service.id === parseInt(serviceId)) {
                    const whereRserviceshtml = serviceItemClicked(service)  
                    window.alert(`${service.type} is available in ${whereRserviceshtml}`)
                }
            }
        }
    }
)




// const filterServices = (service) => {
//     let serviceArray = []

//     for (let activity of activities) {
//         if (activity.serviceid === service.id) {
//             serviceArray.push(activity)
//         }            
//     }
//     return serviceArray
// }

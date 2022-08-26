//Guests will be a list on the side of the page

import { getGuests } from "./database.js"; 

const guests = getGuests()

export const allGuests = () => {
    let guestHTML = `<ul>`

    for (const guest of guests) {
        guestHTML += `<li>${guest.name}</li>`
    }
    guestHTML += `</ul>`

    return guestHTML
}
/*
Red (!) Blue (?) Green (*) Yellow (^) Pink (&) Purple (~) Mustard (todo) Grey (//)
ALGORITHM
?We need 4 tables: guests, services, and parkareas
    ?location: id, name
    ?guests: id and name
    ?services: id, type, guestid, 
    ?parkareas: id, name, servicesid (array?)
^export each from the database

We need 3 modules in additon to main and database for information
    ?database- data collected (the above arrays )
    !main- compile all the modules and house the html for website
    &guest- import from database 
        &define and export a function to list all current guests on the website in a list (html)
    ~services- import from database 
        ~define and export a function to list services offered in the park with the clickevent too
    ~Also list all the services on the site and when they are 
        ~clicked a message should appear with the park area that will house the service
    todo parkarea- import from database
    todo define and export a function that creates a list of the areas with their services/locations
    todo when the title of any area is clicked- it should display the number of guests currently 
    todo in the area
*/

import { allGuests } from "./Guests.js" 
import { allServices, mainAttractionLocation } from "./Services.js"
//import { allparkareas } from "./Put it Together"
//import { parkServices } from "./Put it Together"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<article class="detail--column border guest">
    <h2>Current Guests</h2>
    ${allGuests()}
</article>

<div class="details"><h1>Cider Falls Park</h1>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3yfvSTxki4JYGUz79x2ynBXvYBuvz7D0LTg&usqp=CAU"></div>
<article class="">
    <section>
        <div>${mainAttractionLocation()}</div>
    </section>
</article>

<article class="detail--column border">
<h2>Available Services in Park</h2>
${allServices()}
</article>


`

mainContainer.innerHTML = applicationHTML

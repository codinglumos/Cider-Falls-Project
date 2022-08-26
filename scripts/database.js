const database = {
    mainAttractions: [
    {id: 1,
    name: "Lodge with Hotel and Resturant",
    parkarea: "Northwest Section"
    },
    {id: 2,
    name: "Lost Wolf Hiking Trail",
    parkarea: "Northern Section"
    },
    {id: 3,
    name: "Chamfort River",
    parkarea: "Northeast Section"
    },
    {id: 4,
    name: "Gander River Nature Perserve",
    parkarea: "Southwest Section"
    },
    {id: 5,
    name: "Campgrounds with Office and Playground",
    parkarea: "Southern Section"
    },
    {id: 6,
    name: "Pine Bluffs Trail with Food Vendors",
    parkarea: "Southeast Section"
    }
],
    services: [
    {id: 1,
     type: "lodging",
    },
    {id: 2,
    type: "parking",
    },
    {id: 3,
    type: "information",
    },
    {id: 4,
    type: "picnicking",
    },
    {id: 5,
    type: "hiking",
    },
    {id: 6,
    type: "rock climbing",
    },
    {id: 7,
    type: "rafting",
    },
    {id: 8,
    type: "canoeing",
    },
    {id: 9,
    type: "fishing",
    },
    {id: 10,
    type: "zip lines",
    }
],
    guests: [
    {id: 1,
    name: "Olivia Ooten",
    mainAttractionid: 1
    },
    {id: 2,
    name: "Luna Lovegood",
    mainAttractionid: 1
    },
    {id: 3,
    name: "Ronald Weasley",
    mainAttractionid: 2
    },
    {id: 4,
    name: "Hedwig",
    mainAttractionid: 2
    },
    {id: 5,
    name: "Hermione Granger",
    mainAttractionid: 3
    },
    {id: 6,
     name: "Rincewing Goofybutt",
     mainAttractionid: 3
    },
    {id: 7,
    name: "Molly Weasly",
    mainAttractionid: 4
    },
    {id: 8,
    name: "Rubius Hagrid",
    mainAttractionid: 4
    },
    {id: 9,
    name: "Remus Lupin",
    mainAttractionid: 5
    },
    {id: 10,
    name: "Albus Dumbledore",
    mainAttractionid: 6
    }
],
activities: [
{id: 1,
mainAttractionid: 1,
serviceid: 1
},
{id: 2,
mainAttractionid: 1,
serviceid: 2
},
{id: 3,
mainAttractionid: 1,
serviceid: 3
},
{id: 4,
mainAttractionid: 1,
serviceid: 4
},
{id: 5,
mainAttractionid: 2,
serviceid: 5
},
{id: 6,
mainAttractionid: 2,
serviceid: 4
},
{id: 7,
mainAttractionid: 2,
serviceid: 6
},
{id: 8,
mainAttractionid: 3,
serviceid: 7
},
{id: 9,
mainAttractionid: 3,
serviceid: 8
},
{id: 10,
mainAttractionid: 3,
serviceid: 9
},
{id: 11,
mainAttractionid: 4,
serviceid: 9
},
{id: 12,
mainAttractionid: 4,
serviceid: 5
},
{id: 13,
mainAttractionid: 5,
serviceid: 3
},
{id: 14,
mainAttractionid: 5,
serviceid: 1
},
{id: 15,
mainAttractionid: 5,
serviceid: 2
},
{id: 16,
mainAttractionid: 6,
serviceid: 5
},
{id: 17,
mainAttractionid: 6,
serviceid: 4
},
{id: 18,
mainAttractionid: 6,
serviceid: 10
},
]

}

export const getmainAttractions = () => {
    return database.mainAttractions.map(mainAttraction => ({...mainAttraction}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

export const getActivities = () => {
    return database.activities.map(activity => ({...activity}))
 }

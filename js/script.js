let people = [
    {
        id: 1,
        name: "Susan Smith",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        job: "WEB DEVELOPER",
        info: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },

    {
        id: 2,
        name: "Anna Johnson",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        job: "WEB DESIGNER",
        info: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    },

    {
        id: 3,
        name: "Peter Jones",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        job: "INTERN",
        info: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    },

    {
        id: 4,
        name: "Bill Anderson",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        job: "THE BOSS",
        info: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    }

]

let createElement = (item) => 
    `
    <div class="image">
            <img src=${item.img} class="person-photo" alt="">
    </div>
            <h6>${item.name}</h6>
            <h5>${item.job}</h5>
            <p class="info">
                ${item.info}
            </p>
    `

let span = document.querySelector("#span")
let container = document.querySelector(".container")

let prevButton = document.querySelector(".prev-button")
prevButton.addEventListener("click", prevEvent)

let i = 0; 
function prevEvent() {
    --i;
    i = i + people.length;
    let index = i % people.length
    //console.log(index)
    let person = createElement(people[index])
    span.innerHTML = person;
    console.log(i)
}

let nextButton = document.querySelector(".next-button")
nextButton.addEventListener("click", nextEvent)

function nextEvent() {
    i++;
    let index = i % people.length;
    let person = createElement(people[index])
    span.innerHTML = person;
    console.log(i)
}


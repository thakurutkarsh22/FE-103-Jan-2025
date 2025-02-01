const teamsData = [
    {
      id: "mun",
      name: "Manchester United",
      images: [
        "https://images.unsplash.com/photo-1623607915241-a3151d59a9c8?auto=format&fit=crop&w=2148&q=80",
        "https://cdn.pixabay.com/photo/2014/04/14/12/44/stadium-323795_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/09/09/04/43/manchester-united-1656122_1280.jpg"
      ]
    },
    {
      id: "psg",
      name: "PSG",
      images: [
        "https://cdn.pixabay.com/photo/2017/08/30/16/52/football-2697825_1280.jpg",
        "https://images.unsplash.com/photo-1610065132656-bbb6b4bf0da1?auto=format&fit=crop&w=2370&q=80"
      ]
    },
    {
      id: "rm",
      name: "Real Madrid",
      images: [
        "https://cdn.pixabay.com/photo/2016/05/25/20/23/real-madrid-1415775_1280.jpg",
        "https://cdn.pixabay.com/photo/2014/03/29/10/22/stadium-300610_1280.jpg"
      ]
    }
  ];

const teamsContainer = document.getElementById("teams-container");
const teamContentContainer = document.getElementById("team-content-container");
// 1. Display the Pills 

function displayTeamPills(teamsData = []) {

    teamsData.forEach(team => {
        const {id, name, images} = team;

        const pillContainer = document.createElement("div");
        pillContainer.className = "card m-2";
        pillContainer.innerHTML = `
            <div id=${id} class="card-body">${name}</div>
        `
        teamsContainer.append(pillContainer)

    })

}

displayTeamPills(teamsData)


// 2. to Display the content 

// 2.1 arrang for the carousel sekleton
// 2.2 to actually push the content in the carousel and show it

function getCarouselOuterLayer () {
    return `
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div id="carousel-inner" class="carousel-inner">
            
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    `;
}


function showContent() {
    teamsContainer.addEventListener("click", (event) => {
        const teamID = event.target.id // my selection 
        const selectedTeamData = teamsData.find(team => team.id === teamID);

        console.log(teamID, 'team i am intereseted in ', selectedTeamData)

        const images = selectedTeamData?.images || [];

        // add BLANK CAROUSEL in DOM 
        teamContentContainer.innerHTML = getCarouselOuterLayer(); // blank carousel 

        const carouselInner = document.getElementById("carousel-inner");

        // FILL THE CAROUSEL WITH IMAGE

        images.forEach((image, index) => {
            const divElement = document.createElement("div");
            divElement.className  = "carousel-item " + `${index === 0 ? 'active' : ''} `

            divElement.innerHTML = `
                <img src=${image} class="d-block w-100" alt="picture">

                <h1>NICE ${index}</h1>
                <p>DATE: today</p>
            `;

            carouselInner.append(divElement)
        })
    })
}

showContent();



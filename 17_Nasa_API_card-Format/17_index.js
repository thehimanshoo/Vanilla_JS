"use strict"
function modeClick() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}

const LoadClick = () => {
    
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
    .then((response) => {
        if(!response.ok){
            throw new Error("Network response is not OK..!!");
        };
        return response.json();
    })
    .then((datas) => {
        for(var data of datas.photos){
            var div = document.createElement("div");
            div.className = "card";
            div.style.width = "265px";
            div.style.marginBottom = "25px";
            div.style.marginRight = "35px";

            div.innerHTML = `
            <a href="${data.img_src}" target="_blank">
                <img src="${data.img_src}" width="265" height="150" alt="" style="border-radius: 8px 8px 0 0"/>
            </a> 

            <div class="card-header mt-0 mb-0 px-0 py-1 mx-0 my-0">
                <h2 class="text-dark">${data.id}</h2>
            </div>
            <div class="card-body">
                <dl>
                    <dt class="text-dark">Camera Name</dt>
                    <dd class="text-dark">${data.camera.full_name}</dd>

                    <dt class="text-dark">Rover Name</dt>
                    <dd class="text-dark">${data.rover.name}</dd>

                    <dt class="text-dark">Total Photos</dt>
                    <dd class="text-dark">${data.rover.total_photos}</dd>
                </dl>
            </div>
            `;
            document.getElementById("cardWrapper").appendChild(div);
        };
    })
    .catch((err) => {
        console.error("Error :", err);
    })
};
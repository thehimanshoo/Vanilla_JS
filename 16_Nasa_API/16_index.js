"use strict"

const loadClick = () => {
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
    .then((response)=> {

        if(!response.ok){
            throw new Error("Network response is was not OK..!!");
        }

        return response.json();
    }).then((data) => {
        var card = document.getElementById("card");
        for(var item of data.photos){

            // Logic to show the Nasa Data in Table format

            console.log(item);
            var tr = document.createElement("tr");
            var tdId = document.createElement("td");
            var tdCamera = document.createElement("td");
            var tdImage = document.createElement("td");
            var tdRover = document.createElement("td");
            var tdTotalPhotos = document.createElement("td");

            tdId.innerHTML = item.id;
            tdCamera.innerHTML = item.camera.full_name;
            tdRover.innerHTML = item.rover.name;
            tdTotalPhotos.innerHTML = item.rover.total_photos;
            
            tdImage.innerHTML = `
            <a href=${item.img_src} target="_blank">
                <img src=${item.img_src} width="100" height="100" />
            </a>
            `;

            tr.appendChild(tdId);
            tr.appendChild(tdCamera);
            tr.appendChild(tdImage);
            tr.appendChild(tdRover);
            tr.appendChild(tdTotalPhotos);
            document.getElementById("tableBody").appendChild(tr);

            // Logic to show the same data in card-format

            // var card = document.createElement("div");
            // var cardHeader = document.createElement("div");
            // var cardBody = document.createElement("div");
            // var cardFooter = document.createElement("div");
            // var dtId = document.createElement("dt");
            // var dtCamera = document.createElement("dt");
            // var dtRover = document.createElement("dt");
            // var dtTotalPhotos = document.createElement("dt");

            // var ddId = document.createElement("dd");
            // var ddCamera = document.createElement("dd");
            // var ddRover = document.createElement("dd");
            // var ddTotalPhotos = document.createElement("dd");


            // card.className = "card";
            // cardHeader.className = "card-header";
            // cardHeader.innerHTML = `<a href="${item.img_src}" target="_blank">
            //     <img src="${item.img_src} width="100" height="100/>
            // </a>`
            // cardBody.className = "card-body";
            // dtId.innerHTML = "Photo Id";
            // dtCamera.innerHTML = "Camera Name";
            // dtRover.innerHTML = "Rover Name";
            // dtTotalPhotos.innerHTML = "Total Photos";

            // ddId.innerHTML = `${item.id}`;
            // ddCamera.innerHTML = `${item.camera.full_name}`;
            // ddRover.innerHTML = `${item.rover.name}`;
            // ddTotalPhotos.innerHTML = `${item.rover.total_photos}`;

            // card.appendChild(cardHeader);
            // card.appendChild(cardBody);
            // cardBody.appendChild(dt);
            // cardBody.appendChild(dd);
            // document.getElementById("tableBody").appendChild(card);

            // console.log(item);
            // var cardHeader = document.getElementById("header");
            // cardHeader.innerHTML = `
            // <a href=${item.img_src} target="_blank">
            //     <img src=${item.img_src} width="100" height="100" />
            // </a>`;
            // var cardBody = document.createElement("body");

            // var dtId = document.createElement("dt");
            // var dtCamera = document.createElement("dt");
            // var dtRover = document.createElement("dt");
            // var dtTotalPhotos = document.createElement("dt");

            // var ddId = document.createElement("dd");
            // var ddCamera = document.createElement("dd");
            // var ddRover = document.createElement("dd");
            // var ddTotalPhotos = document.createElement("dd");

            // // Inserting dt Elements
            // dtId.innerHTML = "Photo Id";
            // dtCamera.innerHTML = "Camera Name";
            // dtRover.innerHTML = "Rover Name";
            // dtTotalPhotos.innerHTML = "Total Photos";

            // ddId.innerHTML = `${item.id}`;
            // ddCamera.innerHTML = `${item.camera.full_name}`;
            // ddRover.innerHTML = `${item.rover.name}`;
            // ddTotalPhotos.innerHTML = `${item.rover.total_photos}`;

            // cardBody.appendChild(dtId);
            // cardBody.appendChild(dtCamera);
            // cardBody.appendChild(dtRover);
            // cardBody.appendChild(dtTotalPhotos);
            // cardBody.appendChild(ddId);
            // cardBody.appendChild(ddCamera);
            // cardBody.appendChild(ddRover);
            // cardBody.appendChild(ddTotalPhotos);
            // card.appendChild(cardHeader);
            // card.appendChild(cardBody);
        }
    }).catch((err) => {
        console.error("Error :-", err);
    });
}
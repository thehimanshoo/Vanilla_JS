"use strict"
var isDataLoaded = false;

const modeChanger = () => {
    var body = document.body;
    body.classList.toggle("dark-mode");
};

const LoadData = ()=> {

    if(isDataLoaded){
        return;
    }

    fetch("https://fakestoreapi.com/products")
    .then((response)=> {
        if(!response.ok){
            throw new Error("Network response was not OK..!!");
        };
        return response.json();
    })
    .then((datas)=> {
        isDataLoaded = true;
        for(var data of datas){
            console.log(data);
            var div = document.createElement("div");
            div.className = "card";
            div.style.width = "265px";
            div.style.marginBottom = "25px";
            div.style.marginRight = "35px";

            div.innerHTML =  `
                <a href="${data.image}" target="_blank">
                    <img src="${data.image}" alt="" width="265" height="200" style="border-radius: 8px 8px 0 0"/>
                </a>

                <div class="card-header text-center" style="color: black;">
                <span>
                    <strong class="h5" style="font-weight: 400">${data.title}</strong>
                </span>
                    
                </div>
                <div class="card-body mb-1 py-0 mx-0 my-1">
                    <dl>
                        <dt style="color: black;">Price</dt>
                        <dd style="color: black;">${data.price}</dd>

                        <dt style="color: black;">Category</dt>
                        <dd style="color: black;">${data.category}</dd>
                        
                        <dt style="color: black;">Rating</dt>
                        <dd style="color: black;">${data.rating.rate} [${data.rating.count}]</dd>
                    </dl>
                </div>
            `;
            document.getElementById("cardWrapper").appendChild(div);
            
        }
    })
    .catch((err)=> {
        console.error("Error :", err);
    })
}
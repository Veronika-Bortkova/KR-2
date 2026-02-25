function firstСapitalLettere(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


let paramsURL = new URLSearchParams(window.location.search);
let id = paramsURL.get("id");

fetch("https://jsonplaceholder.typicode.com/users"+"/"+id)
    .then(res => res.json())
    .then((objDetails) => {
        let divTopBlock = document.getElementById("topBlok");
        for (const Key in objDetails) {
            if (Key === "address") {
                let divParamAdr = document.createElement("div");
                divParamAdr.className = "item";
                let ulAddress = document.createElement("ul");
                let divTitleAddress = document.createElement("div");
                divTitleAddress.innerText = "Address:";
                divTopBlock.append(divTitleAddress);
                for (const ulAddressKey in objDetails.address) {
                    if (ulAddressKey === "geo"){





                        let ulGeo = document.createElement("ul");
                        let liLat = document.createElement("li");
                        let liLng = document.createElement("li");
                        liLat.innerText = firstСapitalLettere(ulAddressKey)+ ":" + " " + objDetails.address[ulAddressKey]["geo"];
                    }
                    let liAdres = document.createElement("li");
                    liAdres.className = "liAdress";
                    liAdres.innerText = firstСapitalLettere(ulAddressKey)+ ":" + " " + objDetails.address[ulAddressKey];
                    ulAddress.append(liAdres);
                }
                divParamAdr.append(ulAddress);
                divTopBlock.append(divParamAdr);
            } else if(Key === "company"){
                let divParamComp = document.createElement("div");
                divParamComp.className = "item";
                let ulCompany = document.createElement("ul");
                let divTitleCompany = document.createElement("div");
                divTitleCompany.innerText = "Company:";
                divTopBlock.append(divTitleCompany);
                for (const ulCompanyKey in objDetails.company) {
                    let liCompany = document.createElement("li");
                    liCompany.className = "liCompany";
                    liCompany.innerText = firstСapitalLettere(ulCompanyKey) + ":" + " " + objDetails.company[ulCompanyKey];
                    ulCompany.append(liCompany);
                }
                divParamComp.append(ulCompany);
                divTopBlock.append(divParamComp);
            } else {
                let divParam = document.createElement("div");
                divParam.className = "item";
                divParam.innerText = firstСapitalLettere(Key) + ":" + " " + objDetails[Key];
                divTopBlock.append(divParam);
            }
        }
        console.log(objDetails);
    });

// "id": 3,
//     "name": "Clementine Bauch",
//     "username": "Samantha",
//     "email": "Nathan@yesenia.net",
//     "address": {
//     "street": "Douglas Extension",
//         "suite": "Suite 847",
//         "city": "McKenziehaven",
//         "zipcode": "59590-4157",
//         "geo": {
//         "lat": "-68.6102",
//             "lng": "-47.0653"
//     }
// },
// "phone": "1-463-123-4447",
//     "website": "ramiro.info",
//     "company": {
//     "name": "Romaguera-Jacobson",
//         "catchPhrase": "Face to face bifurcated interface",
//         "bs": "e-enable strategic applications"
// }
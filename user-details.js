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
            if (Key === address) {
                let ulAddress = document.createElement("ul");

            }
            let divParam = document.createElement("div");
            divParam.className = "item";
            divParam.innerText = firstСapitalLettere(Key) + ":" + " " + objDetails[Key];
            divTopBlock.append(divParam);
        }



        console.log(objDetails);


    })

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
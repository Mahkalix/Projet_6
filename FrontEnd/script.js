let elementArray

async function fetchDataWorks() {
    try {
        const response = await fetch('http://localhost:5678/api/works')
        const data = await response.json()
        // console.log(data);
        AddGallery(data)
        elementArray = data

    }
    catch (error) {
        console.log(error);
    }
}
async function fetchCategoriesWorks() {
    try {
        const response = await fetch('http://localhost:5678/api/categories')
        const categories = await response.json()
        // console.log(categories);
        AddBtn(categories)
    }
    catch (error) {
        console.log(error);
    }
}

fetchDataWorks()
fetchCategoriesWorks()

// Création Gallery
const gallery = document.querySelector(".gallery")
// console.log(gallery);

function AddGallery(data) {
    data.forEach(element => {
        // console.log(element.imageUrl, element.title);
        const figure = `<figure>
				<img src=${element.imageUrl} alt=${element.title}>
				<figcaption>${element.title}</figcaption>
			</figure>`
        gallery.innerHTML += figure
        // gallery.innerHTML = figure + gallery.innerHTML
    });
}


const allBtn = document.querySelector(".allBtn")
// console.log(allBtn);
function AddBtn(categories) {
    // Création Btn + Class
    categories.forEach(element => {
        // console.log(element.name, element.id);
        const button = `<button class="btn" id=${element.id}>${element.name}</button>`
        allBtn.innerHTML += button
        // allBtn.innerHTML = button + allBtn.innerHTML 
    });
    Filters()
};

function Filters() {
    const btnObjets = document.getElementById(1)
    const btnAppart = document.getElementById(2)
    const btnHotels = document.getElementById(3)

    // btn Tous
    const btnTous = document.querySelector(".active")
    btnTous.addEventListener("click", () => {
        const filterTous = elementArray.filter(element => {
            return element.categoryId
        });
        console.log(filterTous);
        // console.log("Tous");

        // Reset
        document.querySelector(".gallery").innerHTML = "";
        // J'ajoute à la gallerie les images ayant toute les categorieID 
        AddGallery(filterTous)

        // Syncronisation au click de la class css active
        btnObjets.classList.remove ("active")
        btnHotels.classList.remove ("active")
        btnAppart.classList.remove ("active")
        btnTous.classList.add("active")
        // console.log(btnTous)
    });

    // btn Objets

    btnObjets.addEventListener("click", () => {
        const filterObjets = elementArray.filter(element => {
            return element.categoryId === 1
        });
        console.log(filterObjets);
        // console.log("objets");

        // Reset
        document.querySelector(".gallery").innerHTML = "";
        // J'ajoute à la gallerie les images ayant toute la categorieID 1
        AddGallery(filterObjets)

        // Syncronisation au click de la class css active
        btnTous.classList.remove ("active")
        btnHotels.classList.remove ("active")
        btnAppart.classList.remove ("active")
        btnObjets.classList.add("active")
        // console.log(btnObjets)
    });

    // btn Appart
    btnAppart.addEventListener("click", () => {
        const filterAppart = elementArray.filter(element => {
            return element.categoryId === 2
        });
        console.log(filterAppart);
        // console.log("appart");

        // Reset
        document.querySelector(".gallery").innerHTML = "";
        // J'ajoute à la gallerie les images ayant toute la categorieID 2
        AddGallery(filterAppart)

         // Syncronisation au click de la class css active
         btnTous.classList.remove ("active")
         btnHotels.classList.remove ("active")
         btnObjets.classList.remove ("active")
         btnAppart.classList.add("active")
        //  console.log(btnAppart)
    });

    // btn Hotels
    btnHotels.addEventListener("click", () => {
        const filterHotels = elementArray.filter(element => {
            return element.categoryId === 3
        });
        console.log(filterHotels);
        // console.log("hotels");

        // Reset
        document.querySelector(".gallery").innerHTML = "";
        // J'ajoute à la gallerie les images ayant toute la categorieID 3
        AddGallery(filterHotels)

         // Syncronisation au click de la class css active
         btnTous.classList.remove ("active")
         btnAppart.classList.remove ("active")
         btnObjets.classList.remove ("active")
         btnHotels.classList.add("active")
        //  console.log(btnHotels)
    });

}



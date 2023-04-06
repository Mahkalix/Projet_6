let elementArray

async function fetchDataWorks() {
    try {
        const response = await fetch('http://localhost:5678/api/works')
        const data = await response.json()
        // console.log(data);
        AddGallery(data)
        AddGalleryModale(data)
        elementArray = data

    }
    catch (error) {
        console.log(error);
    }
}
async function fetchCategoriesWorks() {
    try {
        const response = await fetch('http://localhost:5678/api/categories')
        const dataCategories = await response.json()
        // console.log(categories);
        AddBtn(dataCategories)
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

// Création Btn Js 

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

// Trie Filters 

function Filters() {
    const btns = document.getElementsByClassName("btn")
    // console.log(btns)

    for (let i = 0; i < btns.length; i++) {
        

        btns[i].addEventListener("click", () => {
            const filterbtn = elementArray.filter(element => {
                return element.categoryId === i
            });
            btns[0].classList.remove("active")
            btns[1].classList.remove("active")
            btns[2].classList.remove("active")
            btns[3].classList.remove("active")
            btns[i].classList.add("active")
            console.log(filterbtn);

            // Reset
            document.querySelector(".gallery").innerHTML = "";
            // J'ajoute à la gallerie les images ayant toute les categorieID 
            AddGallery(filterbtn)
        });

        // btn Tous
        btns[0].addEventListener("click", () => {
            const filterTous = elementArray.filter(element => {
                return element.categoryId
            });
            btns[0].classList.add("active")
            btns[i].classList.remove("active")
            console.log(filterTous);

            // Reset
            document.querySelector(".gallery").innerHTML = "";
            // J'ajoute à la gallerie les images ayant toute les categorieID 
            AddGallery(filterTous)
        });
    };
}


// Mode edition si login 

const log = document.querySelector(".log");
const banner = document.querySelector(".banner");
const modifierContainer = document.querySelector(".modifier-container");
const modifierprojetsContainer = document.querySelector(".modifier-projets-container");
const projetsContainer = document.querySelector(".projets-container")

function editMode(){
    if (localStorage.login) {
        banner.style = "display: flex"
        log.innerText = "logout",
        modifierContainer.style = "display: flex"
        modifierprojetsContainer.style = "display: flex;"
        projetsContainer.style = "margin-bottom: 92px;"
        allBtn.style = "display:none"

        console.log("Vous êtes connecté !");
      }
      else {
        console.log("Vous n'êtes pas connecté !");
      }
    }

    editMode()

// "logout", supprime true et token et remplace lo
log.addEventListener("click", () => {
    localStorage.removeItem("login");
    localStorage.removeItem("token");
    log.innerText = "login";
  });

  // Modal Toggle ouvert et fermer 

const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal,))

function toggleModal(){
  modalContainer.classList.toggle("active")
}

// injecter les images dans la modal 1
const imgContainer = document.querySelector(".img-container");

function AddGalleryModale(data){

    data.forEach(element => {
        // console.log(element.imageUrl, element.title);
        const figure = `<figure class="element-modal">
                <img class="logobin" src="./assets/icons/bin.svg" alt="">
				<img class="img-modal" src=${element.imageUrl} alt=${element.title}>
				<figcaption>éditer</figcaption>
			</figure>`
            imgContainer.innerHTML += figure
            figure
        // imgContainer.innerHTML = figure + gallery.innerHTML
    });

}




const submit = document.querySelector('input[type="submit"]');


submit.addEventListener("click", function (e) {
    e.preventDefault()
    FetchUserLogin()
});



async function FetchUserLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    try {
        const response = await fetch("http://localhost:5678/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                accept: "application/json",
            },
            body: JSON.stringify({
                "email": email,
                "password": password,
            })
        });

        if (response.ok) {
            window.location.href = "./index.html";
        }

        else {
            alert("User not found");
        }


        // Token d'autentification
        const dataUser = await response.json();
        // console.log(dataUser)

        // Enregistrement du token d'authentification dans le stockage local
        localStorage.setItem("token", dataUser.token)

    }

    catch (e) {
        console.log(e);
    }
};

// Utilisation du token pour envoyer une requête API

// Récupération du token d'authentification depuis le stockage local
const token = localStorage.getItem("token");

// Définir l'URL de l'API
const apiUrl = "http://localhost:5678/api/works";

// Définir les paramètres de la requête
const requestOptions = {
    headers: {
        accept: 'application/json',
        'Authorization': `Bearer ${token}`
    }
};

// Effectuer la requête
try {
    const response = await fetch(apiUrl, requestOptions);
    const data = await response.json();
    console.log(data);
} catch (e) {
    console.error(e);
}
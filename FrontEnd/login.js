const submit = document.querySelector('input[type="submit"]');

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;


submit.addEventListener("click", function (e) {
    e.preventDefault()
    FetchUserLogin()

});


const init = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
    },

    body: JSON.stringify({
        "email": email,
        "password": password,
    })
};

async function FetchUserLogin() {
    try {
        const response = await fetch("http://localhost:5678/api/users/login", init)
        const dataUser = await response.json();
        console.log(dataUser);

        if (response.ok) {
            window.location.href = "./index.html";
        }

        else {
            alert("User not found");
        }
    }

    catch (e) {
        console.log(e);
    }
};



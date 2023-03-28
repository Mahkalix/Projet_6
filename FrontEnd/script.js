

async function fetchDataWorks() {
    try {
        const response = await fetch('http://localhost:5678/api/works')
        const data = await response.json()
        console.log(data);
        createGallery(data)
    }
    catch (error) {
        console.log(error);
    }
}

fetchDataWorks()

// 
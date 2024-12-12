const AboutDetailsEl = document.querySelector(".about__details")
const BASE_URL = "https://dummyjson.com"

async function fetchData(endpoint) {
    const response = await fetch(`${BASE_URL}${endpoint}`)
    response
        .json()
        .then(res => createAboutDetails(res))
        .catch(error => console.log(error))
};

fetchData("/users/")
function createAboutDetails(data) {
    console.log(data);
    

    const fields = [
        { label: "Full Name", value: `${data.firstName} ${data.lastName}` },
        { label: "Email", value: data.email },
        { label: "Phone", value: data.phone },
        { label: "Address", value: data.address }
    ];

    fields.forEach(field => {
        const aboutItem = document.createElement("div");
        aboutItem.classList.add("about__item");
        aboutItem.innerHTML = `
            <h2 class="about__label">${field.label}</h2>
            <p class="about__value">${field.value}</p>
        `;
        AboutDetailsEl.appendChild(aboutItem);
    });
}
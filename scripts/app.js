const Base_Url = "https://dummyjson.com"
const ProfileCards = document.querySelector(".profile-cards")

async function fetchData(endpoint) {
  const response =  await fetch(`${Base_Url}${endpoint}`)
  response
    .json()
    .then(res => createProfileCard(res))
    .catch(error => console.log(error))
}

fetchData("/users")

function createProfileCard(data) {

  data.users.forEach(user => {
    const profileCard = document.createElement("div")
    profileCard.classList.add("profile-card")
    profileCard.innerHTML = `
      <div class="profile-card__image">
        <img src="${user.image}" alt="${user.firstName} ${user.lastName}">
      </div>
      <div class="profile-card__content">
        <h2 class="profile-card__name">${user.firstName} ${user.lastName}</h2>
        <p class="profile-card__title">${user.gender}</p>
        <a href="./pages/info.html" class="profile-card__btn" id="${user.id}">About Me</a>
      </div>
    `
    ProfileCards.appendChild(profileCard)
  })

}
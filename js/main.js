const elInput = document.querySelector(".header__input");
const elList = document.querySelector(".list");
let city = elInput.value;


const renderWeather = (obj, element) => {
  element.innerHTML = null;

  const temperature = Math.ceil(obj.main.temp)
  const icon = obj.weather[0].icon;

  const newItem = document.createElement("div");
  const newTitle = document.createElement("h3");
  const newImage = document.createElement("img");
  const p = document.createElement("p");
  const sup = document.createElement("sup");

  newItem.classList.add("list__item")
  newImage.classList.add("list__image")
  
  newImage.src = `http://openweathermap.org/img/w/${icon}.png`;   

  sup.textContent = "o";
  p.textContent = `${temperature}C`;
  newTitle.textContent = obj.name;

  p.appendChild(sup)
  newItem.appendChild(newImage)
  newItem.appendChild(newTitle);
  newItem.appendChild(p);

  element.appendChild(newItem);
};

async function getWeather() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=d7bb79475f6438d3bcde6ca8929cec0f&units=metric`
  );
  const data = await response.json();
  console.log(data);
  if (data) {
    renderWeather(data, elList);
  }
  console.log(search);
}

elInput.addEventListener("change", (evt) => {
  search = evt.target.value;
  getWeather();
});
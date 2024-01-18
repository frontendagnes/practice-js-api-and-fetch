document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("DOM");
  let form = document.querySelector("form");
  form.addEventListener("submit", handleSubmit);
}

function handleSubmit(e) {
  e.preventDefault();
  const lat = document.querySelector(".form__field--lat");
  const lng = document.querySelector(".form__field--lng");
  const apiKey = "a35781277076455f975baaa63b0ef0eb";

  let latValue = lat.value;
  let lngValue = lng.value;

  const URL = `https://api.weatherbit.io/v2.0/current?lat=${latValue}&lon=${lngValue}&key=${apiKey}&lang=pl&units=I`;

  if (latValue && lngValue) {
    fetchApi(URL);
  } else {
    alert("Brakuje współrzędnych");
    return;
  }
}

function fetchApi(url) {
  fetch(url)
    .then((res) => res.json())
    .then((res) => res.data)
    .then((res) => showResult(res[0]))
    .catch((error) => console.log(error));
}

function showResult(res) {
  const weatherLat = document.querySelector(".weather__lat");
  const weatherLng = document.querySelector(".weather__lng");
  const summary = document.querySelector(".weather__summary");
  const faren = document.querySelector(".weather__temperature");
  const city = document.querySelector(".city");
  const {
    lat,
    lon,
    city_name,
    temp,
    weather: { description },
  } = res;
//   console.log(res);

  weatherLng.innerText = lon;
  weatherLat.innerText = lat;
  city.innerText = city_name;
  summary.innerText = description;
  faren.innerText = temp;
}

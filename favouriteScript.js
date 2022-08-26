const searchBar = document.querySelector("[meal-search]");
const mealList = document.querySelector("[favourite-meal-list]");
const mealTemplate = document.querySelector("[favourite-list-template]");
const favouriteButton =
  mealTemplate.content.children[0].querySelector("[remove-button]");
let meals = [];
let list = [];
var count = 0;
function loader() {
  console.log("loading.....");
  list = JSON.parse(localStorage.getItem("Favourite"));
  meals = list.map((element) => {
    console.log(element.strMeal);
    const card = mealTemplate.content.cloneNode(true).children[0];
    const image = card.querySelector("[favourite-dish-image]");
    const name = card.querySelector("[favourite-dish-name]");
    const category = card.querySelector("[favourite-dish-category]");
    const desc = card.querySelector("[favourite-dish-description]");
    const id = card.querySelector("[remove-button]");
    image.src = element.strMealThumb;
    name.textContent = element.strMeal;
    category.textContent = element.strCategory;
    desc.textContent = element.strInstructions;
    id.id = element.idMeal;
    mealList.append(card);
    return {
      ...element,
      boxElement: card,
    };
  });
}

//remove from favourite
removeFromFavourite = (e) => {
  console.log(list);
  var index = list
    .map((item) => {
      return item.idMeal;
    })
    .indexOf(e);
  meals[index].boxElement.classList.toggle("hide", true);
  list.splice(index, 1);
  localStorage.setItem("Favourite", JSON.stringify(list));
};
//adding search bar event listener
searchBar.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  //   mealList.classList.add("meal-list-update");
  //   var div = document.createElement("div");
  div.textContent = "NO Results Found Please ADD";
  meals.forEach((meal) => {
    const isVisible = meal.strMeal.toLowerCase().includes(value);
    meal.boxElement.classList.toggle("hide", !isVisible);
  });
  //   count += 1;
  //   if (count <= 1 && ) {
  //     mealList.appendChild(div);
  //     return;
  //   }
  //   if (count >= 2) {
  //     mealList.removeChild(div);
  //   }
});

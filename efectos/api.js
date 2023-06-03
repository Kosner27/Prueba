const input = document.querySelector('input');
const button = document.querySelector('button');
const drinks = document.querySelector('.informacion');
const contenido = document.querySelector('.contenido1');



button.addEventListener('click', (e) => {
  e.preventDefault();
  limpiarDrinks();
  traer(input.value);
});

function traer(drink) {
  fetch(`http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then((res) => res.json())
    .then((data) => {
     createDrink(data);
    })
}

function createDrink(drink) {
  if (drink.drinks && drink.drinks.length > 0) {
    const img = document.createElement('img');
    img.src = drink.drinks[0].strDrinkThumb;
    img.style.maxWidth = '200px';
    img.style.maxHeight = '200px';
    img.style.marginTop = '50px';

    const h3 = document.createElement('h3');
    h3.textContent = drink.drinks[0].strDrink;
    const h4 = document.createElement('h4');
    h4.textContent = 'Ingrediente 1:' + ' ' + drink.drinks[0].strIngredient1;
    const h41 = document.createElement('h4');
    h41.textContent = 'Ingrediente 2:' + ' ' + drink.drinks[0].strIngredient2;
    const h42 = document.createElement('h4');
    h42.textContent = 'Ingrediente 3:' + ' ' + drink.drinks[0].strIngredient3;
    const h43 = document.createElement('h4');
    h43.textContent = 'Ingrediente 4:' + ' ' + drink.drinks[0].strIngredient4;
    const div = document.createElement('div');
    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(h41);
    div.appendChild(h42);
    div.appendChild(h43);
    drinks.appendChild(div);
  } 
}

function limpiarDrinks() {
  while (drinks.firstChild) {
    drinks.firstChild.remove();
  }
}

function comprar() {
  alert('Su compra se realizó satisfactoriamente. Productos comprados: ' + carritoItems.length);
  alert('Elementos comprados: ' + input.value);
}

let a = 0;
const carritoItems = [];

function carrito() {
  const drinkInput = document.querySelector('input');
  const drink = drinkInput.value;
  if (drink !== '') {
    a++;
    carritoItems.push(drink);
    alert(`El pedido ${drink} ha sido añadido al carrito.`);
    alert(`Cantidad de pedidos añadidos al carrito: ${a}`);
    alert(`Elementos añadidos al carrito: ${carritoItems.join(', ')}`);
  } else {
    alert('Por favor, introduce un elemento válido para añadir al carrito.');
  }
}




function pintarJSON(datos) {
  if (contenido) {
    datos.forEach((item) => {
      // Crear elementos y agregar contenido
      const name = document.createElement('p');
      name.textContent = 'Name: ' + item.name;
      name.style.marginBottom = '5px'; // Margen inferior

      const colors = document.createElement('p');
      colors.textContent = 'Colors: ' + item.colors;

      const glass = document.createElement('p');
      glass.textContent = 'Glass: ' + item.glass;

      const category = document.createElement('p');
      category.textContent = 'Category: ' + item.category;

      const ingredients = document.createElement('p');
      ingredients.textContent = 'Ingredients:';
      ingredients.style.marginBottom = '5px'; // Margen inferior
      item.ingredients.forEach((ingredient) => {
        const ingredientText = document.createElement('p');
        ingredientText.textContent = `- ${ingredient.amount} ${ingredient.unit} of ${ingredient.ingredient}`;
        ingredients.appendChild(ingredientText);
      });

      const garnish = document.createElement('p');
      garnish.textContent = 'Garnish: ' + item.garnish;

      const preparation = document.createElement('p');
      preparation.textContent = 'Preparation: ' + item.preparation;

      // Crear contenedor y agregar elementos
      const container = document.createElement('div');
      container.style.marginBottom = '20px'; // Margen inferior entre objetos
      container.style.fontFamily = 'Arial, sans-serif'; // Tipo de letra
      container.appendChild(name);
      container.appendChild(colors);
      container.appendChild(glass);
      container.appendChild(category);
      container.appendChild(ingredients);
      container.appendChild(garnish);
      container.appendChild(preparation);

      contenido.appendChild(container); // Agregar el contenedor al elemento contenido
    });
  }
}



function leerproducto() {
  return fetch("/data/datos.json")
    .then((res) => res.json())
    .then((datos) => {
      console.log(datos);
      pintarJSON(datos);
    });
}
window.addEventListener('load', () => {
  leerproducto();
});
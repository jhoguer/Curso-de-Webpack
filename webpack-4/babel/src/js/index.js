import '../css/index.css'
import search from './search';
import render from './render';

const id = prompt('quien es ese pokemon');

search(id)
  .then((data) => {
    render(data);
  })
  .catch(() => {
    console.log('No hubo pokemon');
  })

// const getPokemon = async (id) => {
//   try {
//     const pokemon = await search(id);
//     render(pokemon);
//   } catch (err) {
//     console.error(err);
//   }
// }
// getPokemon(id);

// const pokemon = search(id);
// alert(pokemon);
// render(pokemon);
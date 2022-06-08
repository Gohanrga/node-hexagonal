import PokemonInteractor from './pokemonInteractor';
import PokemonDataSource from '../../datasources/PokemonDataSource';

const pokemonDataSource = new PokemonDataSource();
const pokemonInteractor = new PokemonInteractor(pokemonDataSource);

export default pokemonInteractor;


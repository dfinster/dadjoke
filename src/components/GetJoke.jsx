import uniqueRandomArray from 'unique-random-array';
import List from 'identical-list';
import jokes from '../_jokes.json';

const getRandomJoke = uniqueRandomArray(jokes);

export default function getJoke(id='') {
    if (id==='') {
        return getRandomJoke();
    } else {
        const jokeArray = jokes;
        let list = new List(jokeArray);
        let theJokeById = list.get(id);
        if (theJokeById) {
            return theJokeById;
        } else {
            return getRandomJoke();
        }
    }
}

import router from './router/index.js';
import Route from './router/Route.js';

import homeView from './views/home.js';

const getPosts = async () => {
    const response = await fetch('https://public-api.wordpress.com/wp/v2/sites/vijitail893997651.wordpress.com/posts');
    const data = await response.json();
    console.log(data);
    return data;   
}

const routes = [
    new Route('home', '/', homeView, async () => await getPosts())
];

router(routes);
import router from './router/index.js';
import Route from './router/Route.js';

import homeView from './views/home.js';
import postView from './views/post.js';

const getPosts = async () => {
    const response = await fetch('https://wordpress-pwa-site.000webhostapp.com/wp-json/custom-endpoint/v1/posts');
    const data = await response.json();
    // const data = {};
    return data;   
}

const getPost = async (postId) => {
    const response = await fetch('https://wordpress-pwa-site.000webhostapp.com/wp-json/custom-endpoint/v1/posts/' + postId);
    const data = await response.json();
    return data;   
}

const routes = [
    new Route('home', '/', homeView, async () => await getPosts()),
    new Route('post', '/:id', postView, async postId => await getPost(postId)),
];

router(routes);

if(navigator.serviceWorker) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('../sw.js')
    });
}
import router from './router/index.js';
import Route from './router/Route.js';

import homeView from './views/home.js';

const routes = [
    new Route('home', '/', homeView, () => new Promise((resolve, reject) => {
        setTimeout(() => resolve({ data: 'Test' }), 300)
    }))
];

router(routes);
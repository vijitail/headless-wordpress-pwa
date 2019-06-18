import router from './router/index.js';
import Route from './router/Route.js';

import homeView from './views/home.js';

const routes = [
    new Route('home', '/', homeView, () => ({ data: 'Test' })),
];

router(routes);
export default class Route {
    constructor(name, path, view, init) {
        this.name = name;
        this.path = path;
        this.view = view;
        this.init = init;
        this.props = {};
    }

    setProps(newProps) {
        this.props = newProps;
    }

    renderView(data = {}) {
        return this.view(this.props, data);
    }
}
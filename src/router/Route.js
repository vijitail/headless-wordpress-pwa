export default class Route {
    constructor(name, path, view, beforeRender) {
        this.name = name;
        this.path = path;
        this.view = view;
        this.beforeRender = beforeRender;
    }

    setProps(newProps) {
        this.props = newProps;
    }

    beforeViewRender() {
        let data = this.beforeRender();
        this.setProps(data);
    }

    renderView() {
        this.beforeViewRender();
        return this.view(this.props);
    }
}
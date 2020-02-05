import "./index.css"

class Card {
    constructor(props) {
        this.props = props;
        this.element = document.createElement("div");
    }
    render() {
        return this.element;
    }
}

export default Card;
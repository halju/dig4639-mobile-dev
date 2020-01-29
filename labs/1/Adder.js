class Adder {
    constructor (props) {
        this.props = props;
    }
    sum() {
        return (
            math.sum(a, b)
        );
    }
    render() {
        return (
            <p>The sum of {this.props.a} and {this.props.b} is {this.props.sum}.</p>
        );
    }
}
module.exports = Adder;
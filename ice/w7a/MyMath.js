function Sum (a, b) {
  let result = undefined
  if(typeof a == "number" && typeof b == "number") {
    result = a + b
  }
  return result;
}
//console.log(Sum(2,3)==5);
//console.log(Sum(-10,-20)==-30);
//console.log(isNaN(Sum(-10,"Twenty")));

function AddList (array) {
  let result = undefined;
  if(Array.isArray(array) && array.length > 0) {
    result = 0;
    for(var i = 0; i < array.length; i++) {
      if(typeof array[i] != "number") {
        result = undefined;
        break;
      }
      result = result + array[i];
    }
  }
  return result;
} 
function DivideBy (a, b) {
  let result = undefined;
  if(typeof a == "number" && typeof b == "number" && b != 0) {
    result = a/b;
  }
  return result;
}
function ContainsString (a, b) {
  let result = undefined;
  if(typeof a == "string" && typeof b == "string" && a.indexOf(b) !== -1) {
    result = true;
  }
  return result;
}

//function ReSortedNumbers () {}

function Adder (a, b) {
  class Adder {
    constructor (props) {
        this.props = props;
    }
    sum() {
        return this.props.a + this.props.b;
    }
    render() {
        return (
            `<p>The sum of ${this.props.a} and ${this.props.b} is ${this.sum()}.</p>`
        );
    }
  }
}

export { Sum };
export { AddList };
export { DivideBy };
export { ContainsString };
export { Adder };
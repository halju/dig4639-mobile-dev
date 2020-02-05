import "./components/Card/index.css"
import Card from "./components/Card/index.js"

function runOnLoad()
 {
     let element = document.createElement("div");
     element.id = "container";
     document.body.appendChild(element);
     var newTask = new Card({content:"Simple value provided"});
     element.appendChild(newTask.render());
 }

 runOnLoad();
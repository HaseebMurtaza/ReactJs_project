import React from "react";
import ReactDOM from "react-dom/client";
/**
 * <div id="parent"> 
 *      <div id="child"> 
 *        <h1>I'm a h1 tag</h1>
 *        <h2>I'm a h2 tag</h2>
 *      </div>
 * 
 *      <div id="child2"> 
 *        <h1>I'm a h1 tag</h1>
 *        <h2>I'm a h2 tag</h2>
 *      </div>
 * </div>
 * ReactElement(object) => HTML(Browser Understands)
 */

//using React to write above nested structure
const parent =React.createElement
("div",
{id:"parent"},
[React.createElement
    ("div"
    ,{id:"child"},
    [React.createElement("h1",{},"Hello React 🚀"),
    React.createElement("h2",{},"I'm a h2 tag")
    ]),React.createElement
    ("div"
    ,{id:"child2"},
    [React.createElement("h1",{},"I'm a h1 tag"),
    React.createElement("h2",{},"I'm a h2 tag")
    ])]
);

console.log(parent); //this is basically an object

const root = ReactDOM.createRoot(document.getElementById("root"));
//will render heading insde root
 root.render(parent);


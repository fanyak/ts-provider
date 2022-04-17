"use strict";
exports.__esModule = true;
// https://vitejs.dev/guide/static-deploy.html#github-pages
Object.defineProperty('exports', "__esModule", { value: !0 });
var errors = [
    { "materialWeight1": "is required" },
    { "materialWeight2": "not numeric" },
    { "materialsThickness3": "is required" },
    { "platingMaterial1": 'not found' },
    { "galvanicTreatment": "true" }
];
window.addEventListener("load", function (evt) {
    console.log(evt);
    var btn = document.createElement('button');
    var textNode = document.createTextNode('generate');
    btn.appendChild(textNode);
    btn.onclick = function (e) {
        console.log(e);
    };
    document.body.insertBefore(btn, null);
});

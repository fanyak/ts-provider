const errors: {[key:string]: string | boolean | number | null}[] = [
    {"materialWeight1": "is required"},
    {"materialWeight2": "not numeric"},
    {"materialsThickness3": "is required"},
    {"platingMaterial1": 'not found'},
    {"galvanicTreatment": true}
];

window.addEventListener("load", (evt) => {
    const btn: HTMLElement = document.createElement('button');
    const textNode = document.createTextNode('generate');
    btn.appendChild(textNode);
    btn.onclick = (e) => {
        console.log(JSON.stringify(errors));
    }
    document.body.insertBefore(btn, null);
});



export {}
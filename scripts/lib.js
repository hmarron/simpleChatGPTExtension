function getJsonDataFromPre(pre){
    jsonStuff = pre.querySelector("code.language-json");
    if (jsonStuff) {
        return JSON.parse(jsonStuff.innerHTML.replace(/<\/?[^>]+(>|$)/g, ""));
    }
    return null
}

function addButtons(){
    const pres = document.querySelectorAll('pre:not([hasButton]), pre[id="hasButton"]');
    pres.forEach((pre) => {
        const button = document.createElement('button');
        button.setAttribute("class", "action-button")
        button.innerHTML = 'Action';
        button.addEventListener("click", function(){
            action(getJsonDataFromPre(this.parentElement))
        })
        pre.setAttribute("hasButton", "true")

        pre.appendChild(button);
    });
}

function init(){
    // Add Styles
    const style = document.createElement("style");
    style.textContent = `
    .action-button {
        border: 0;
        outline: 0;
        cursor: pointer;
        color: white;
        background-color: rgb(84, 105, 212);
        box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(84 105 212) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 8%) 0px 2px 5px 0px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        padding: 4px 8px;
        display: inline-block;
        min-height: 28px;
        transition: background-color .24s,box-shadow .24s;
    }

    .action-button:hover {
        box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(84 105 212) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 8%) 0px 3px 9px 0px, rgb(60 66 87 / 8%) 0px 2px 5px 0px;
    }
    `;
    document.head.appendChild(style);

    // Check for new sessions ever 500ms
    setInterval(addButtons, 500)
}

init()

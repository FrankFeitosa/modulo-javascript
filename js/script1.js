let modo = prompt("Digite: dark, red, blue, green, gray, orange ou yellow: ")

switch (modo) {
    case 'dark':
        document.body.style.background = "black";
        document.body.style.color = "white";
        break;
    case 'red':
        document.body.style.background = "red";
        document.body.style.color = "white";
        break;
    case 'blue':
        document.body.style.background = "blue";
        document.body.style.color = "white";
        break;
    case 'green':
        document.body.style.background = "green";
        document.body.style.color = "white";
        break;
    case 'gray':
        document.body.style.background = "gray";
        document.body.style.color = "white";
        break;
    case 'orange':
        document.body.style.background = "orange";
        document.body.style.color = "white";
        break;
    case 'yellow':
        document.body.style.background = "yellow";
        document.body.style.color = "white";
        break;
    default:
        document.body.style.background = "pink";
        document.body.style.color = "white";
        break;
}
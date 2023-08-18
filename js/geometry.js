function getInput(inputId){
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    return inputValue;
}

function calculateTriangleArea(){

    const base = getInput('base-field');
    const height = getInput('height-field');
    
    const area = 0.5 * base * height;

    const areaShow = document.getElementById('area-show');
    areaShow.innerText = area;
}


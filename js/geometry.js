function getInput(inputId){
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    return inputValue;
}

function setAreaShow(areaShowId, area){
    const areaShow = document.getElementById(areaShowId);
    areaShow.innerText = area;
}

function calculateTriangleArea(){
    const base = getInput('base-field');
    const height = getInput('height-field');
    const area = 0.5 * base * height;
    setAreaShow('triangle-show', area);
}

function calculateRectangleArea(){
    const base = getInput('rectangle-base');
    const height = getInput('rectangle-height');
    const area = base * height;
    setAreaShow('rectangle-show', area);
}

function calculateParalleogramArea(){
    const base = getInput('parallelogram-base');
    const height = getInput('parallelogram-height');
    const area = base * height;
    setAreaShow('parallelogram-show', area);
}

function calculateRhombusArea(){
    const diameter1 = getInput('rhombus-diameter-one');
    const diameter2 = getInput('rhombus-diameter-two');
    const area = 0.5 * diameter1 * diameter2;
    setAreaShow('rhombus-show', area);
}

function calculatePentagonArea(){
    const perimeter = getInput('pentagon-perimeter');
    const base = getInput('pentagon-base');
    console.log(perimeter, base);
    const area = 0.5 * base * perimeter;
    setAreaShow('pentagon-show', area);
}

function calculateEllipseArea(){
    const radius1 = getInput('ellipse-radius-one');
    const radius2 = getInput('ellipse-radius-two');
    const area = 3.1416 * radius1 * radius2;
    const areaPrecision = area.toFixed(2);
    setAreaShow('ellipse-show', areaPrecision);
}



let flexDirectionSelect = document.getElementById("direction-select");
flexDirectionSelect.addEventListener('click', changeDirection);

let flexWrapSelect = document.getElementById('wrap-select');
flexWrapSelect.addEventListener('click', changeWrap);

let flexFlowSelect = document.getElementById('flow-select');
flexFlowSelect.addEventListener('click', changeFlow);

let justifyContentSelect = document.getElementById('justify-content-select');
justifyContentSelect.addEventListener('click', changeJustifyContent);

let alignItemsSelect = document.getElementById('align-items-select');
alignItemsSelect.addEventListener('click', changeAlignItems);

function changeDirection() {
    console.log(flexDirectionSelect.value);
    document.getElementById('flex-direction').style.flexDirection = flexDirectionSelect.value;
};

function changeWrap() {
    console.log(flexWrapSelect.value);
    document.getElementById('flex-wrap').style.flexWrap = flexWrapSelect.value;
}

function changeFlow() {
    console.log(flexFlowSelect.value);
    document.getElementById('flex-flow').style.flexFlow = flexFlowSelect.value;
}

function changeJustifyContent() {
    console.log(justifyContentSelect.value);
    document.getElementById('justify-content').style.justifyContent = justifyContentSelect.value;
}

function changeAlignItems() {
    console.log(alignItemsSelect.value);
    document.getElementById('align-items').style.alignItems = alignItemsSelect.value;
}
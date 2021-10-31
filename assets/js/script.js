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

let alignContentSelect = document.getElementById('align-content-select');
alignContentSelect.addEventListener('click', changeAlignContent);

let gapSelect = document.getElementById('gap-slider');
gapSelect.addEventListener('click', changeGap);

let orderSelect = document.getElementById('order-select');
orderSelect.addEventListener('click', changeOrder);

let orderInputs = [document.getElementById('order-input-1'),
                    document.getElementById('order-input-2'),
                    document.getElementById('order-input-3'),
                    document.getElementById('order-input-4')];
orderInputs.forEach(element => {
    element.addEventListener('change', changeOrder);
});

let growInputs = [document.getElementById('grow-input-1'),
                    document.getElementById('grow-input-2'),
                    document.getElementById('grow-input-3'),
                    document.getElementById('grow-input-4')];
growInputs.forEach(element => {
    element.addEventListener('change', changeGrow);
});

let shrinkInputs = [document.getElementById('shrink-input-1'),
                    document.getElementById('shrink-input-2'),
                    document.getElementById('shrink-input-3'),
                    document.getElementById('shrink-input-4')];
shrinkInputs.forEach(element => {
    element.addEventListener('change', changeShrink);
});

// functions that do things
function changeDirection() {
    document.getElementById('flex-direction-span').innerHTML = flexDirectionSelect.value + ';';
    document.getElementById('flex-direction').style.flexDirection = flexDirectionSelect.value;
};

function changeWrap() {
    console.log(flexWrapSelect.value);
    document.getElementById('flex-wrap-span').innerHTML = flexWrapSelect.value + ';';
    document.getElementById('flex-wrap').style.flexWrap = flexWrapSelect.value;
}

function changeFlow() {
    console.log(flexFlowSelect.value);
    document.getElementById('flex-flow-span').innerHTML = flexFlowSelect.value + ';';
    document.getElementById('flex-flow').style.flexFlow = flexFlowSelect.value;
}

function changeJustifyContent() {
    console.log(justifyContentSelect.value);
    document.getElementById('justify-content-span').innerHTML = justifyContentSelect.value + ';';
    document.getElementById('justify-content').style.justifyContent = justifyContentSelect.value;
}

function changeAlignItems() {
    console.log(alignItemsSelect.value);
    document.getElementById('align-items-span').innerHTML = alignItemsSelect.value + ';';
    document.getElementById('align-items').style.alignItems = alignItemsSelect.value;
}

function changeAlignContent() {
    console.log(alignContentSelect.value);
    document.getElementById('align-content-span').innerHTML = alignContentSelect.value + ';';
    document.getElementById('align-content').style.alignContent = alignContentSelect.value;
}

function changeGap() {
    console.log(gapSelect.value);
    document.getElementById('gap-span').innerHTML = `${gapSelect.value}px;`;
    document.getElementById('gap').style.gap = gapSelect.value + 'px';
    document.getElementById('slider-value').innerHTML = gapSelect.value + 'px';
}

function changeOrder() {
    let orderInput1 = document.getElementById('order-input-1').value;
    let orderInput2 = document.getElementById('order-input-2').value;
    let orderInput3 = document.getElementById('order-input-3').value;
    let orderInput4 = document.getElementById('order-input-4').value;
    
    if (orderInput1 != 0) {
        document.getElementById('code-snippet-order-1').style.display = 'inline';
        document.getElementById('order-span-1').innerHTML = orderInput1 + ';';
    } else {
        document.getElementById('code-snippet-order-1').style.display = 'none';
    }
    if (orderInput2 != 0) {
        document.getElementById('code-snippet-order-2').style.display = 'inline';
        document.getElementById('order-span-2').innerHTML = orderInput2 + ';';
    } else {
        document.getElementById('code-snippet-order-2').style.display = 'none';
    }
    if (orderInput3 != 0) {
        document.getElementById('code-snippet-order-3').style.display = 'inline';
        document.getElementById('order-span-3').innerHTML = orderInput3 + ';';
    } else {
        document.getElementById('code-snippet-order-3').style.display = 'none';
    }
    if (orderInput4 != 0) {
        document.getElementById('code-snippet-order-4').style.display = 'inline';
        document.getElementById('order-span-4').innerHTML = orderInput4 + ';';
    } else {
        document.getElementById('code-snippet-order-4').style.display = 'none';
    }
    document.getElementById('order-item-1').style.order = orderInput1;
    document.getElementById('order-item-2').style.order = orderInput2;
    document.getElementById('order-item-3').style.order = orderInput3;
    document.getElementById('order-item-4').style.order = orderInput4;
};

function changeGrow() {
    let growInput1 = document.getElementById('grow-input-1').value;
    let growInput2 = document.getElementById('grow-input-2').value;
    let growInput3 = document.getElementById('grow-input-3').value;
    let growInput4 = document.getElementById('grow-input-4').value;
    
    if (growInput1 != 0) {
        document.getElementById('code-snippet-grow-1').style.display = 'inline';
        document.getElementById('grow-span-1').innerHTML = growInput1 + ';';
    } else {
        document.getElementById('code-snippet-grow-1').style.display = 'none';
    }
    if (growInput2 != 0) {
        document.getElementById('code-snippet-grow-2').style.display = 'inline';
        document.getElementById('grow-span-2').innerHTML = growInput2 + ';';
    } else {
        document.getElementById('code-snippet-grow-2').style.display = 'none';
    }
    if (growInput3 != 0) {
        document.getElementById('code-snippet-grow-3').style.display = 'inline';
        document.getElementById('grow-span-3').innerHTML = growInput3 + ';';
    } else {
        document.getElementById('code-snippet-grow-3').style.display = 'none';
    }
    if (growInput4 != 0) {
        document.getElementById('code-snippet-grow-4').style.display = 'inline';
        document.getElementById('grow-span-4').innerHTML = growInput4 + ';';
    } else {
        document.getElementById('code-snippet-order-4').style.display = 'none';
    }
    document.getElementById('grow-item-1').style.flexGrow = growInput1;
    document.getElementById('grow-item-3').style.flexGrow = growInput3;
    document.getElementById('grow-item-2').style.flexGrow = growInput2;
    document.getElementById('grow-item-4').style.flexGrow = growInput4;
};

function changeShrink() {
    let shrinkInput1 = document.getElementById('shrink-input-1').value;
    let shrinkInput2 = document.getElementById('shrink-input-2').value;
    let shrinkInput3 = document.getElementById('shrink-input-3').value;
    let shrinkInput4 = document.getElementById('shrink-input-4').value;
    
    if (shrinkInput1 != 1) {
        document.getElementById('code-snippet-shrink-1').style.display = 'inline';
        document.getElementById('shrink-span-1').innerHTML = shrinkInput1 + ';';
    } else {
        document.getElementById('code-snippet-shrink-1').style.display = 'none';
    }
    if (shrinkInput2 != 1) {
        document.getElementById('code-snippet-shrink-2').style.display = 'inline';
        document.getElementById('shrink-span-2').innerHTML = shrinkInput2 + ';';
    } else {
        document.getElementById('code-snippet-shrink-2').style.display = 'none';
    }
    if (shrinkInput3 != 1) {
        document.getElementById('code-snippet-shrink-3').style.display = 'inline';
        document.getElementById('shrink-span-3').innerHTML = shrinkInput3 + ';';
    } else {
        document.getElementById('code-snippet-shrink-3').style.display = 'none';
    }
    if (shrinkInput4 != 1) {
        document.getElementById('code-snippet-shrink-4').style.display = 'inline';
        document.getElementById('shrink-span-4').innerHTML = shrinkInput4 + ';';
    } else {
        document.getElementById('code-snippet-order-4').style.display = 'none';
    }
    document.getElementById('shrink-item-1').style.flexShrink = shrinkInput1;
    document.getElementById('shrink-item-3').style.flexShrink = shrinkInput3;
    document.getElementById('shrink-item-2').style.flexShrink = shrinkInput2;
    document.getElementById('shrink-item-4').style.flexShrink = shrinkInput4;
};






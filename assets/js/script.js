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
    
}




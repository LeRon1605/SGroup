const largestEvenNumber = (arr) => {
    let result = null;
    console.log(arr);
    for (let i = 0;i < arr.length;i++) {
        if (arr[i] % 2 == 0) {
            if (result == null || result < arr[i])
                result = arr[i];
        }
    }
    return result == null ? -1 : result;
};

const fibonacci = (n) => {
    let f1 = 1, f2 = 1, f3 = f1 + f2;
    if (n < 2) return 1;
    for (let i = 2;i <= n;i++) {
        f3 = f1 + f2;
        f1 = f2;
        f2 = f3;
    }
    return f3;
};

const transformToArray = (txt) => {
    return txt.split(' ').map(e => Number(e));
};

const createInputOutput = (inputSelector, outputSelector, btnSelector, doSomething, transform) => {
    const inputElement = document.querySelector(inputSelector);
    const outputElement = document.querySelector(outputSelector);
    const btnSubmit = document.querySelector(btnSelector);

    btnSubmit.addEventListener('click', e => {
        outputElement.innerHTML = doSomething(transform == null ? inputElement.value : transform(inputElement.value));
    });
};

createInputOutput('#input-1', '#output-1', '#btnSubmit-1', largestEvenNumber, transformToArray);
createInputOutput('#input-2', '#output-2', '#btnSubmit-2', fibonacci);
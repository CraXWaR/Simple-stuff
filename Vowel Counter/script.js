function vowelCounter() {
    const btn = document.querySelector('button');
    btn.addEventListener('click', onClick);

}

function onClick() {
    const vowels = ["a", "e", "i", "o", "u"];

    const bodyEl = document.querySelector('body');
    const word = document.querySelector('input').value;

    let counter = 0;

    if (word.length == 0) {
        return bodyEl.innerHTML = `
        <h1>Please write a word!</h1>
        <button onclick="onReturn()">Check next word.</button>`;
    }

    for (const letters of word) {
        if (vowels.includes(letters)) {
            counter++;
        }
    }

    if (counter > 0) {
        return bodyEl.innerHTML = `
        <h1>The word has ${counter} vowels.</h1>
        <button id="returnBtn" onclick="onReturn()">Check next word.</button>`
    }

    return bodyEl.innerHTML = `
    <h1>The word has no vowels.</h1>
    <button onclick="onReturn()">Check next word.</button>`

}

function onReturn() {
    const bodyEl = document.querySelector('body');

    bodyEl.innerHTML = `
    <h1>Vowel Counter</h1>
    <input type="text" placeholder="Word">
    <button onclick="onClick()">Count</button>`;

}
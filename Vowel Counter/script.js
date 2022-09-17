function vowelCounter() {
    const vowels = ["a", "e", "i", "o", "u"];

    const btn = document.querySelector('button');
    btn.addEventListener('click', onClick);

    function onClick() {
        let counter = 0;

        const word = document.querySelector('input').value;

        if (word.length == 0) {
            return alert('Please write a word!');
        }

        for (const letters of word) {
            if (vowels.includes(letters)) {
                counter++;
            }
        }
        if (counter > 0) {
            return alert(`The word has ${counter} vowels.`);
        }
        return alert('The word has no vowels.');
    }
}
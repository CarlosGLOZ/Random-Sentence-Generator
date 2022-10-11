function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function copyText() {
    var text = document.getElementById('sentence-box').value;

    navigator.clipboard.writeText(text)

    // show copy alert
    var copyAlert = document.getElementById('copied-alert-text');

    copyAlert.style.display = 'inherit';
    // copyAlert.style.color = 'inherit';
    for (let i = 0; i <= 1; i += 0.001) {
        delay(1).then(() => copyAlert.style.color = 'rgba(0,0,0,' + i + ')');
    }
    delay(2000).then(() => {
        for (let i = 1; i >= 0; i -= 0.001) {
            delay(1).then(() => copyAlert.style.color = 'rgba(0,0,0,' + i + ')');
        }
    })
}

function generateSentence() {
    var text = document.getElementById('sentence-box');

    const sentences = [
        '',
        'Me follo a tu madre',
        'Y me la vuelvo a follar',
        'Gilipollas',
        ' ',
        'Tontito',
        '   '
    ];

    var currentIndex = sentences.indexOf(text.value);
    var nextIndex;

    if (currentIndex == (sentences.length - 1)) {
        // nextIndex = 0;
        text.value = sentences[currentIndex];
        return;
    } else {
        nextIndex = currentIndex + 1;
    }
    text.value = sentences[nextIndex];
}
const body = document.querySelector('body');

const clampedKeys = (func, arrayKeys) => {
    let setKeys = new Set();

    document.addEventListener('keydown', (evt) => {
        setKeys.add(evt.keyCode);

        let arrayKey = Array.from(setKeys);

        if (JSON.stringify(arrayKey.sort()) === JSON.stringify(arrayKeys.sort())) {
            setKeys.clear();
            func();
        }
    });

    document.addEventListener('keyup', function(evt) {
        setKeys.delete(evt.keyCode);
    });
}

const bodyGrid = () => {
    if (body.className === 'grid') {
        body.classList.remove('grid');
    } else {
        body.classList.add('grid');
    }
}

clampedKeys(bodyGrid, [17, 32]);

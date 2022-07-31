window.onload = function () {
    const c = document.getElementById("canvas");
    const ctx = c.getContext("2d");
    const canvasWidth = c.width;
    const canvasHeight = c.height;
    const items = [];
    const timeOut = 100;

    for (let i = 0; i < 73; i++) {
        const rand = Math.floor(Math.random() * 100);
        items.push(rand);
    }

    Array.prototype.swap = function (a, b) {
        const tmp = this[a];
        this[a] = this[b];
        this[b] = tmp;
    }

    function selectionSort(array) {
        const length = array.length;
        let i = 0;
        let min;
        let interval = setInterval(() => {
            min = i;
            for (let j = i + 1; j < length; j++) {
                if (array[min] > array[j]) {
                    min = j;
                }
            }
            array.swap(i, min);
            if (length !== i) {
                ctx.clearRect(0, 0, canvasWidth, canvasHeight)
            }
            items.map((el, i) => draw(i, items[i]))
            if (i === length) {
                clearInterval(interval)
            }
            i++;
        }, timeOut)
        return array;
    }

    function draw(x, y) {
        const maxItem = Math.max.apply(null, items);
        const onePercent = canvasHeight / maxItem;
        const height = Math.floor(y * onePercent);
        ctx.fillRect(x * 11, canvasHeight - height, 10, height);
    }

    selectionSort(items)
}
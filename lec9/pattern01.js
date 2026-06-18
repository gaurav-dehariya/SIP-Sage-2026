let n = 5;

for (let row = 1; row <= 9; row++) {

    let count;

    if (row <= n) {
        count = row;
    } else {
        count = 10 - row;
    }

    let line = "";

    for (let j = 1; j <= count; j++) {
        if (j % 2 === 1) {
            line += row + " ";
        } else {
            line += (10 - row) + " ";
        }
    }

    line += " ".repeat(Math.abs(n - row) * 4);

    for (let j = 1; j <= count; j++) {
        if (j % 2 === 1) {
            line += (10 - row) + " ";
        } else {
            line += row + " ";
        }
    }

    console.log(line);
}
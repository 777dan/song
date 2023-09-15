const bottlesCount = prompt("How many bottles would like?");
const drink = prompt("And which drink would you prefer?");
let bottles = bottlesCount;
for (let i = 0; i <= bottlesCount; i++) {
    if (bottles !== 0) {
        alert(`${bottles} bottles of ${drink} on the wall,`);
        alert(`${bottles} bottles of ${drink},`);
        alert("If one of those bottles should happen to fall");
        bottles -= 1;
    } else {
        alert(`No more bottles of ${drink} on the wall, no more bottles of ${drink}.`);
        alert(`There's nothing else to fall, because there's no more bottles of ${drink} on the wall.`);
    }
}
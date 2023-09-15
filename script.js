const bottlesCount = prompt("How many bottles would like?");
const drink = prompt("And which drink would you prefer?");
let bottles = bottlesCount;
for (let i = 1; i <= bottlesCount; i++) {
    alert(`${bottles} bottles of ${drink} on the wall,`);
    alert(`${bottles} bottles of ${drink},`);
    alert("If one of those bottles should happen to fall");
    bottles -= 1;
}
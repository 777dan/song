const bottlesCount = prompt("How many bottles of beer would like?");
let bottles = bottlesCount;
for (let i = 1; i <= bottlesCount; i++) {
    alert(`${bottles} bottles of beer on the wall,`);
    alert(`${bottles} bottles of beer,`);
    alert("If one of those bottles should happen to fall");
    bottles -= 1;
}
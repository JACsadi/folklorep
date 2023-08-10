const myLink = "folklore.json";
let song = [];
fetch(myLink)
  .then((a) => a.json())
  .then((a) => {
    song.push(...a);
  });
function matchin(tex, sss) {
  const regex = RegExp(tex, "gi");
  return sss.filter(
    (a) => a.lyrics.split("<br>").join("").match(regex) || a.name.match(regex)
  );
}
function dropdown(a) {
  const con = document.querySelector(`.${a}`);
  con.style.display = con.style.display !== "block" ? "block" : "none";
}
function display() {
  const a = matchin(this.value, song);
  const regex = RegExp(this.value, "gi");
  const html = a.map((a) => {
    const mat = a.lyrics.match(regex);
    return `<li class="list">
    <span class="name" onclick = "dropdown('${a.name}')">${a.name
      .split("_")
      .join(" ")}</span>
      <span class="count">${mat ? mat.length : 1} matches</span>
    <span class="lyr ${a.name}">${a.lyrics.replace(
      regex,
      `<b class="alu">${this.value}</b>`
    )}</span>
    <span class-"link"><a href="${
      a.youtube[0]
    }" target="_blank">listen on youtube</a></span>
    </li>`;
  });
  results.innerHTML = html.join("");
}
const inputs = document.querySelector(".sea");
const results = document.querySelector(".result");
inputs.addEventListener("keyup", display);

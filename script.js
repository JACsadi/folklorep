const myLink =
  "https://raw.githubusercontent.com/JACsadi/folklorep/main/folklore.json";
let song = [];
let bimage = [
  "https://e1.pxfuel.com/desktop-wallpaper/595/269/desktop-wallpaper-news-conference-taylor-swift-folklore-59-taylor-swift-folklore-on-afari-taylor-swift-and-taylor-swift-backgrounds-for-your-computer.jpg",
  "https://i.pinimg.com/originals/ef/53/16/ef53169a9822d1618d4ce77ff9363a3b.jpg",
  "https://w0.peakpx.com/wallpaper/345/641/HD-wallpaper-taylor-swift-folklore.jpg",
  "https://w0.peakpx.com/wallpaper/668/220/HD-wallpaper-taylor-folklore-singer-taylor-swift.jpg",
];
fetch(myLink)
  .then((a) => a.json())
  .then((a) => {
    song.push(...a);
  });
function matchin(tex, sss) {
  const regex = RegExp(tex.split(/[,\s.'"]/).join(""), "gi");
  return sss.filter(
    (a) =>
      a.lyrics
        .split("<br>")
        .join("")
        .split(/[,\s.'"]/)
        .join("")
        .match(regex) || a.name.match(regex)
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
function ph() {
  let str = "";
  do {
    str =
      song[Math.floor(Math.random() * 10000) % song.length].lyrics.split(
        "<br>"
      )[Math.floor(Math.random() * 1000) % 20];
  } while (str.length > 35);
  inputs.placeholder = str;
}
let i = 1;
function bim() {
  document.body.style.backgroundImage = `url(${bimage[i % 4]})`;
  console.log(`url(${bimage[i % 4]})`);
  if (document.querySelector(".lyr") != null) {
    if (i % 4 == 2)
      document.querySelector(".lyr").style.color = `rgba(148, 134, 174, 0.9)`;
    else document.querySelector(".lyr").style.color = `black`;
  }
  i++;
}
const inputs = document.querySelector(".sea");
const results = document.querySelector(".result");
inputs.addEventListener("keyup", display);
setInterval(ph, 5000);
setInterval(bim, 5000);

var d1, d2;
var ctr = 0;

function showdice() {
  d1 = Math.floor(Math.random() * 6 + 1);
  d2 = Math.floor(Math.random() * 6 + 1);
  document.images["d1"].src = "./img" + "/dice" + d1 + ".png";
  document.images["d2"].src = "./img" + "/dice" + d2 + ".png";
}

function rolldice() {
  document.f.b.value = "Rolling...";

  if (ctr < 6) {
    showdice();
    ctr++;
    setTimeout("rolldice()", 150);
  } else {
    ctr = 0;
    showdice();
    document.f.b.value = "Roll";
  }

  if (d1 > d2) {
    document.f.h.value = "Player 1 WIN !!!";
  } else if (d1 < d2) {
    document.f.h.value = "Player 2 WIN !!!";
  } else {
    document.f.h.value = "Draw !!!";
  }
}

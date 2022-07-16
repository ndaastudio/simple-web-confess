function otomatis() {
	befanimkata();
	setTimeout(animkata, 400);
}

function befanimkata() {
	kalimat.style = "transform:scale(.3);";
	kalimatb.style = "transform:scale(.3);";
	kalimatc.style = "transform:scale(.3);";
}

function animkata() {
	kalimat.style = "transform:scale(1);";
	kalimatb.style = "transform:scale(1);";
	kalimatc.style = "transform:scale(1);";
}

function otomatis2() {
	befanimkata2();
	setTimeout(animkata2, 400);
}

function befanimkata2() {
	kalimat.style.opacity = "0";
	kalimatb.style.opacity = "0";
	kalimatc.style.opacity = "0";
}

function animkata2() {
	kalimat.innerHTML = kalimat2.innerHTML;
	kalimatb.innerHTML = kalimatb2.innerHTML;
	kalimat.style.opacity = "1";
	kalimatb.style.opacity = "1";
	setTimeout(otomatis2b, 3500);
}

function otomatis2b() {
	kalimatb.innerHTML = "";
	kalimatc.innerHTML = kalimatc2.innerHTML;
    fthilang();
    ftganti = 2;
    setTimeout(ftmuncul, 400);
    kalimat.style.display = "none";
	kalimatc.style.opacity = "1";
	setTimeout(mulaict, 400);
}

function otomatis3() {
	befanimkata3();
	setTimeout(animkata3, 400);
}

function befanimkata3() {
	kalimat.style.opacity = "0";
	kalimatb.style.opacity = "0";
	kalimatc.style.opacity = "0";
}

function animkata3() {
	kalimat.innerHTML = kalimat3.innerHTML;
	kalimatb.innerHTML = kalimatb3.innerHTML;
	kalimatc.innerHTML = kalimatc3.innerHTML + today;
    kalimat.style.display = "unset"
	kalimat.style.opacity = "1";
	kalimatb.style.opacity = "1";
	kalimatc.style.opacity = "1";
}

function sbakhir() {
	Bn.style.display = "none";
	setTimeout(stakhir, 500);
}

function stakhir() {
	tmbl.innerHTML = "💌 Kirim Pesan";
	Tombol.style = "margin-top:10px;opacity:1;transform: scale(1)";
	ftom = 5;
	fungsi = 0;
}

async function diterima() {
	fthilang();
	ftganti = 1;
	setTimeout(ftmuncul, 400);
	Bn2.style.display = "none";
	wallpaper.style = "transform: scale(1)";
	bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);transition:all .7s ease;border-radius:var(--bingkai);margin-top:0;";
	Tombol.style = "opacity:0;transition:all .5s ease;transform: scale(.1);";
	otomatis2();
}

flag = 1;
flagg = 1;

function ditolak() {
	if (fungsi == 1) {
		if (flagg == 1) {
			Bn.style = "margin:12px 0 12px 12px;cursor:default;opacity:0;transition:all .3s ease;";
			flagg = 2;
			Bn2.style = "width:auto;opacity:1;transition:all .3s ease;margin:160px 0 12px 140px;"
		}
	}
}

function ditolak2() {
	if (fungsi == 1) {
		if (flagg == 2) {
			Bn2.style = "width:auto;opacity:1;transition:all .3s ease;margin:190px 0 12px 12px;";
			flagg = 3
		} else if (flagg == 3) {
			Bn2.style = "width:auto;opacity:1;transition:all .3s ease;margin:160px 160px 12px 12px;";
			flagg = 4
		} else if (flagg == 4) {
			Bn2.style = "transition:all .3s ease;margin:12px 0 12px 12px;";
			kalimatc.style.opacity = "0";
			Bn.style = "margin:12px 0 12px 12px";
			flagg = 1
		}
	}
}

function mulaict() {
	var timeleft = 7;
	var downloadTimer = setInterval(function() {
		timeleft--;
		document.getElementById("ctimer").textContent = timeleft;
		if (timeleft <= 0)
			clearInterval(downloadTimer);
		if (timeleft == 0) {
			setInterval(createHeart, 200);
			fthilang();
			ftganti = 3;
			setTimeout(ftmuncul, 400);
			otomatis3();
			setTimeout(sbakhir, 2000);
		}
	}, 1000);
}
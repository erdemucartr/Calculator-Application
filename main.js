const sonucaEkle = (value) => {
  document.getElementById("sonuc").value += value;
};

const sonucuTemizle = () => {
  document.getElementById("sonuc").value = "";
};

const sonucuHesapla = () => {
  let result = document.getElementById("sonuc").value;
  try {
    let output = eval(result);
    document.getElementById("sonuc").value = output;
  } catch (error) {
    alert("Hesaplama hatası!");
  }
};

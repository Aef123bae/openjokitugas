

function log(){
  alert('maaf fitur ini belum bisa dipakai!')

}
function reg(){
  alert('maaf fitur ini belum bisa dipakai!')

}

const produk1 = document.getElementById("produk1");
const produk2 = document.getElementById("produk2");
const produk3 = document.getElementById("produk3");
const total = document.getElementById("total");

produk1.addEventListener("click", updateTotal);
produk2.addEventListener("click", updateTotal);
produk3.addEventListener("click", updateTotal);

function updateTotal() {
  let harga = 0;
  let lis = '';
  let barang = document.getElementById('barang')
  if (produk1.checked) {
    
    harga += parseFloat(produk1.value);
    lis += '\tFISIKA'
    
  }
  if (produk2.checked) {
    harga += parseFloat(produk2.value);
    lis += '\tKIMIA'
  }
  if (produk3.checked) {
    harga += parseFloat(produk3.value);
    lis += '\tMATEMATIKA'
  }
  total.innerHTML = harga.toFixed(3);
  document.getElementById('barang').textContent = lis
}



function cek() {
  let nama = document.getElementById('nama').value;
  let random = document.getElementById('ga').value;
  // Ambil nilai total harga
  const harga = total.innerHTML;
  const produk = document.getElementById('barang').textContent
  // Buat pesan yang akan dikirim
  const pesan = `*CHECKOUT*\nNAMA = ${nama}\n
  joki tugas pelajaran : ${produk}\nPelajaran request : ${random}\ntotal harga ${harga} `
  alert(pesan)

  // Alihkan ke WhatsApp
  const url = "https://wa.me/6282319192604?text=" + encodeURIComponent(pesan);
  location.href = url;
}


function hutang() {
  let nama = document.getElementById('nama').value;
  let random = document.getElementById('ga').value;
  

  // Ambil nilai total harga
  const harga = total.innerHTML;
  const produk = document.getElementById('barang').textContent
  // Buat pesan yang akan dikirim
  const pesan = `*HUTANG*\nNAMA = ${nama}\n
  joki tugas pelajaran : ${produk}\nPelajaran request : ${random}\ntotal harga ${harga} `
  alert(pesan)

  // Alihkan ke WhatsApp
  const url = "https://wa.me/6282319192604?text=" + encodeURIComponent(pesan);
  location.href = url;
}
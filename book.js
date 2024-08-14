var harga = ['150000','300000','200000','400000'];
var kelas = ['VVIP1','STANDAR1','VVIP2','STANDAR2'];
function Tujuan() {

 var tujuan = document.getElementById('inp_tujuan').value;
 var kelas2 = document.getElementById('kelas2');
 kelas2.innerHTML="<option>--PILIH KELAS TIKET--</option>"
 if (tujuan=='jmbr') {
  for (var i = 0; i < 2; i++) {
   result="<option value="+i+">"+kelas[i]+"</option>";
   kelas2.innerHTML+=result;
  }
 }
 else if (tujuan=='sby') {
  for (var i = 2; i < 4; i++) {
   result="<option value="+i+">"+kelas[i]+"</option>";
   kelas2.innerHTML+=result;
  }
 }
}
function harganya(){
 var harga2 = document.getElementById('kelas2').value;
  tampil.value="Rp. "+harga[parseInt(harga2)];
}

function Total() {

var harga2 = document.getElementById('kelas2').value;
var jumlah;
jumlah=parseInt(document.getElementById('inp_jumlah').value);
total= jumlah*parseInt(harga[parseInt(harga2)]);
total2.value="Rp. "+total;
}
function pesan() {

 var nama=document.getElementById('inp_nama').value;
 var notel=document.getElementById('inp_notel').value;
 alert('PERHATIAN !!      ' + 'Saudara/i  ' +nama + ',' +" Pesanan Tiket Anda Sudah Berhasil Disimpan, Dengan NO Pesanan 101" +notel);
 alert('Silahkan Lakukan Pembayaran Di Virtual Account   999' + notel + ' Dengan Total Rp ' + total );
 alert('Konfirmasi Otomatis Setelah Pembayaran. Link Tiket Akan dikirim via WA/SMS ke No Telepon  ' +notel +' Yang Telah Didaftarkan') 
}
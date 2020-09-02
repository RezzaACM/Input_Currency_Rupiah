import "./styles.css";

let input = document.getElementById("input");
let submit = document.getElementById("submit");

input.addEventListener("keyup", function (e) {
  let value = this.value;

  let number_string = value.replace(/[^,\d]/g, "").toString();
  let split = number_string.split(",");
  let sisa = split[0].length % 3;
  let rupiah = split[0].substr(0, sisa);
  let ribuan = split[0].substr(sisa).match(/\d{1,3}/gi);

  if (ribuan) {
    let separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }

  rupiah = split[1] !== undefined ? rupiah + "," + split[1] : rupiah;
  let result =
    this.prefix === undefined ? rupiah : rupiah ? "Rp. " + rupiah : "";

  input.value = result;
});

submit.addEventListener("click", function (e) {
  let input_value = input.value;
  let just_number = input_value.replace(/[^,\d]/g, "").toString();
  console.log(just_number);
});

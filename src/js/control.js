document.getElementById("length").oninput = function() {
  document.getElementById("len_out").innerText = this.value;
} 
const copy_elem = document.getElementById("copy")
copy_elem.onclick = function () { copy() }

function copy() {
  var result = document.getElementById("result");
  navigator.clipboard.writeText(result.innerText).then(
    () => { copy_elem.innerText = "Copied!" }
  )
}
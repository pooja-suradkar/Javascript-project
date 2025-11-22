<!DOCTYPE html>
<html>
<body>

<h2>Counter App</h2>

<p id="count">0</p>

<button onclick="increase()">+</button>
<button onclick="decrease()">-</button>
<button onclick="reset()">Reset</button>

<script>
  let count = 0;

  function increase() {
    count++;
    document.getElementById("count").innerText = count;
  }

  function decrease() {
    count--;
    document.getElementById("count").innerText = count;
  }

  function reset() {
    count = 0;
    document.getElementById("count").innerText = count;
  }
</script>

</body>
</html>

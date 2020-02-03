function sigma(n) {
  var total = 0;
  for (var i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

//console.log(sigma(3));

function sigmaRecursive(n) {
  if (n == 1) {
    return 1;
  }
  return n + sigmaRecursive(n - 1);
}

console.log(sigmaRecursive(3));

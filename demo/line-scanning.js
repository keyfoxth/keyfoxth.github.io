(function () {
  var lineScanning = document.getElementsByClassName('line-scanning'),
      speed = 0.5    // speed one

  if (lineScanning.length > 0) {
    for (var i = 0; i < lineScanning.length; i++) {
      (function (i) {
        var inner = document.createElement('div'),
            lineScanningTop = 0,
            maxTop = lineScanning[i].offsetHeight - 1    // 1 is border-bottom-width

        lineScanning[i].appendChild(inner)

        inner.style.width = '100%'
        inner.style.borderBottom = '1px solid green'
        inner.style.position = 'relative'

        var interval = setInterval(function () {
          if (lineScanningTop < maxTop) {
            lineScanningTop = lineScanningTop + speed
          } else {
            // lineScanningTop = 0    // loop
            clearInterval(interval)    // 1 time
          }
          inner.style.top = lineScanningTop + 'px'
        }, 17)    // speed two
      })(i);
    }
  } else {
    console.log('not find ".line-scanning"')
  }
})();

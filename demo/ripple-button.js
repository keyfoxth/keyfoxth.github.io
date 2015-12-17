(function () {
  var buttons = document.getElementsByClassName('ripple-button'),
      speed = 10    // speed 1

  if (buttons.length > 0) {
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].onmousedown = function (e) {    // button down
        if (this.children.length) return false;    // prohibit ripples appear twice, but there are some problems
        var e = e || window.event,
            offsetX = e.offsetX,
            offsetY = e.offsetY,
            radiusX = (this.offsetWidth - offsetX > offsetX ? this.offsetWidth - offsetX : offsetX),
            radiusY = (this.offsetHeight - offsetY > offsetY ? this.offsetHeight - offsetY : offsetY),
            offsetSize = Math.sqrt(Math.pow(radiusX, 2) + Math.pow(radiusY, 2)),
            inner = document.createElement('div')

        inner.style.position = 'absolute'
        inner.style.backgroundColor = 'rgba(255,255,255,0.3)'
        inner.style.borderRadius = '50%'

        this.appendChild(inner)

        var interval = setInterval(function () {
          inner.style.width = (inner.offsetWidth + speed) + 'px'
          inner.style.height = (inner.offsetHeight + speed) + 'px'
          inner.style.left = (offsetX - inner.offsetWidth / 2) + 'px'
          inner.style.top = (offsetY - inner.offsetHeight / 2) + 'px'
          inner.style.opacity = inner.offsetWidth / offsetSize / 2

          if (inner.offsetWidth >= offsetSize * 2 && inner.offsetHeight >= offsetSize * 2) {
            clearInterval(interval)
          }
        }, 17)    // speed 2
      }

      buttons[i].onmouseup = function (e) {
        if (!this.children.length) return false;    // prohibit ripples appear twice, but there are some problems
        var e = e || window.event,
            that = this,
            inner = this.children[0]

        var interval = setInterval(function () {
          inner.style.opacity = inner.style.opacity - speed / that.offsetWidth
          if (inner.style.opacity <= 0) {
            try {
              that.removeChild(inner);
            } catch (e) {
              console.log(e)
            }
            clearInterval(interval);
          }
        }, 17)    // speed of change of opacity
      }
    }
  } else {
    console.log('not find ".ripple-button"')
  }
})();

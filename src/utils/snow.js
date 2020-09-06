let defOpt = {
  minSize: 14,
  maxSize: 40,
  newOn: 50,
  flakeColor: "#FFFFFF"
}
export class Snow {
  constructor(options) {
    this.options = Object.assign({}, defOpt, options)
    this.docWidth = document.documentElement.clientWidth
    this.docHeight = document.documentElement.clientHeight
    this.interval = null
  }
  play() {
    console.log(1)
    let div = document.createElement('div'),
    $app = document.getElementById('app');
    div.setAttribute('id', 'flake')
    div.style.position = 'absolute'
    div.style.top = '-50px'
    div.innerHTML= '❄'
    var startPositionLeft = Math.random() * this.docWidth - 100,
        startOpacity = 0.5 + Math.random(),
        sizeFlake = this.options.minSize + Math.random() * this.options.maxSize,
        endPositionTop = this.docHeight - 40 + 'px',
        endPositionLeft = startPositionLeft - 100 + Math.random() * 200 + 'px',
        durationFall = this.docHeight * 10 + Math.random() * 5000;
    div.style.left = startPositionLeft + 'px'
    div.style.opacity = startOpacity
    div.style.fontSize = ~~sizeFlake + 'px'
    div.style.color = this.options.flakeColor
    div.animate([
        { top: endPositionTop,left: endPositionLeft, opacity: 0.2}, 
    ], { 
        duration: durationFall,
        easing: 'linear' 
    })
    $app.appendChild(div)
    let arr = document.querySelectorAll('#flake')
    if(arr.length > 50) {
      [...arr].forEach(item => item.remove())
    }
  }
}
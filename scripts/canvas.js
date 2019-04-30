window.addEventListener('load', function () {
    var img = new Image();
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    img.src = 'images/Blizzard_Entertainment_Logo.svg.png';
    img.addEventListener('load', function () {

        var interval = setInterval(function() {
            var x = 0, y = 0;

            return function () {
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                ctx.drawImage(img, x, y, ctx.canvas.width, ctx.canvas.height);

                y += 1;
                if (y > ctx.canvas.height) {
                    y = 0;
                }
            };
        }(), 1000/40);
    }, false);
}, false);


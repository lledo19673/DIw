window.onload = function()
{
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    //      x    y   rad sAng eAng antiC  line    fill
    drawArc(60,  15, 40, 0,   180, false, "aqua", "yellow");
    drawArc(150, 70, 60, 0,   100, true,  "green","white");
    drawArc(250, 15, 50, 350, 170, false, "red",  "pink" );
    drawArc(360, 60, 50, 350, 20,  true,  "blue", "purple");
/*
    drawArc(100, 15, 50, 350, 170, false, "red",  "pink" );
    drawArc(150, 15, 50, 350, 170, false, "red",  "pink" );
    drawArc(200, 15, 50, 350, 170, false, "red",  "pink" );
    drawArc(250, 15, 50, 350, 170, false, "red",  "pink" );*/
    
    function drawArc(xPos, yPos, radius, startAngle, endAngle, anticlockwise, lineColor, fillColor)
    {
        var startAngle = startAngle * (Math.PI/180);
        var endAngle   = endAngle   * (Math.PI/180);
        
        var radius = radius;
        
        context.strokeStyle = lineColor;
        context.fillStyle   = fillColor;
        context.lineWidth   = 8;
        
        context.beginPath();
        context.arc(xPos, yPos, radius, startAngle, endAngle, anticlockwise);
        context.fill();
        context.stroke();
    }
};
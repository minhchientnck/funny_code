var R = 40;
var CX = 50;
var CY = 50;
var rs = [];
for(var i = 0; i < 360; i+=6) {
 console.log(i/6);
 var RAD = (i * 2 * Math.PI) / 360;
 var SIN = Math.sin(RAD);
 var COS = Math.cos(RAD);
 var cx = (SIN * R) + CX;
 var cy = CY - (COS * R);
 rs.push('<circle cx="'+cx+'" cy="'+cy+'" r="1" fill={props.color} stroke={props.color} strokeWidth={`${props.strokeWidth}`} />');
}
console.log(rs);

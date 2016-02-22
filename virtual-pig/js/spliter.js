var animations = [];
function initPigAnimations(pig){
  for(animation of animations){
		pig.animations.add(animation.name, Phaser.Animation.generateFrameNames(animation.name + '-', 0, animation.length, '', 0));
	}
}
var states = [{
	name: "stand1",
	x: 0,
	y: 14,
	w: 48,
	h: 48,
	paddings: [4, 8, 9]
},{
	name: "stand2",
	x: 0,
	y: 81,
	w: 48,
	h: 48,
	paddings: [4, 8, 9, 10, 7, 7, 5, 7, 7]
},{
	name: "rest",
	x: 0,
	y: 147,
	w: 48,
	h: 48,
	paddings: [4, 3, 6, 5, 4]
},{
	name: "move",
	x: 0,
	y: 206,
	w: 48,
	h: 48,
	paddings: [4, 6, 6, 6]
},{
	name: "jump",
	x: 0,
	y: 273,
	w: 48,
	h: 48,
	paddings: [4]
},{
	name: "hang",
	x: 0,
	y: 273,
	w: 48,
	h: 48,
	paddings: [60]
},{
	name: "swim",
	x: 0,
	y: 334,
	w: 48,
	h: 48,
	paddings: [4, 3]
},{
	name: "chat",
	x: 0,
	y: 396,
	w: 48,
	h: 48,
	paddings: [4, 5]
},{
	name: "eat",
	x: 0,
	y: 460,
	w: 50,
	h: 48,
	paddings: [2, 7, 4, 3, 4, 4]
},{
	name: "hungry",
	x: 0,
	y: 460,
	w: 50,
	h: 48,
	paddings: [344]
},{
	name: "happy",
	x: 0,
	y: 526,
	w: 56,
	h: 48,
	paddings: [2, 11, 9, 8]
},{
	name: "cry",
	x: 0,
	y: 593,
	w: 56,
	h: 42,
	paddings: [2, 3, 3, 3]
},{
	name: "angry",
	x: 0,
	y: 651,
	w: 56,
	h: 58,
	paddings: [2, 8, 7, 6]
},{
	name: "deride",
	x: 0,
	y: 726,
	w: 52,
	h: 48,
	paddings: [4, 5, 5, 4]
},{
	name: "sleep",
	x: 0,
	y: 790,
	ws:[54, 54, 54, 54, 57, 60, 60, 60],
	h: 67,
	paddings: [-50, 2, 1, 0, 2, 3, 2, 5]
},{
	name: "stunned",
	x: 0,
	y: 872,
	w: 50,
	h: 48,
	paddings: [4, 5]
},{
	name: "dung",
	x: 0,
	y: 939,
	w: 50,
	h: 48,
	paddings: [4, 8, 5, 5]
}]

function botData () {
	var result = {frames: []};
	for(var state of states){
	// var state = states[1];
		var offset = 0;
		for(var i = 0; i < state.paddings.length; i++){
		// for(var i = 0; i < 9; i++){
			var x;
			var w;
			if (state.ws){
				offset += state.paddings[i] + state.ws[i];
				var x = offset;
				var w = state.ws[i];
			} else {
				offset += state.paddings[i];
				var x = offset + (i * state.w);
				var w = state.w;
			}
			var y = state.y;
			var h = state.h;
			result.frames.push({

				    filename: state.name + "-" + i,
				    frame: { x: x, y: y, w: w, h: h },
				    rotated: false,
				    trimmed: true,
				    spriteSourceSize: { x: 0, y: 0, w: w, h: h },
				    sourceSize: { w: w, h: h }
			});
		}
		animations.push({name: state.name, length: state.paddings.length - 1})
	}
	console.log(result);
	return(result);
}

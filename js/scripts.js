// Info/About Section 
function openLeft() {
	document.getElementById("grid-container").style.left = "0";
}
function closeLeft() {
	document.getElementById("grid-container").style.left = "-49vw";
}

// ???
function myFunction() {
  var x = document.getElementById("navbars");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// ???
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("bottomnav").style.bottom = "-60px";
  } else {
    document.getElementById("bottomnav").style.bottom = "0";
  }
  prevScrollpos = currentScrollPos;
}

// Tooltip - Is it still being used?
$( function() {
	$(document).tooltip();
});

// Load Writing
function constructionOfAnArchitect() {
	$("#writing-container").load("/writing/construction-of-an-architect.txt").scrollTop(0);
};
function displayRooms() {
	$("#writing-container").load("/writing/display-rooms.txt").scrollTop(0);
};
function doubleTrouble() {
	$("#writing-container").load("/writing/double-trouble.txt").scrollTop(0);
};
function bubbleMatter() {
	$("#writing-container").load("/writing/bubble-matter.txt").scrollTop(0);
};
function allEyesOnYou() {
	$("#writing-container").load("/writing/all-eyes-on-you.txt").scrollTop(0);
};
function freshMeatIX() {
	$("#writing-container").load("/writing/fresh-meat-ix.txt").scrollTop(0);
};
function spectatorsOfSelfDeception() {
	$("#writing-container").load("/writing/spectators-of-self-deception.txt").scrollTop(0);
};
function fatspace() {
	$("#writing-container").load("/writing/fatspace.txt").scrollTop(0);
};
function urbanThinkTank() {
	$("#writing-container").load("/writing/urban-think-tank.txt").scrollTop(0);
};

// Load Projects
function aBHouse() {
	$("#project-container").load("/projects/a-b-house.txt").scrollTop(0);
};
function anAdditionForThree() {
	$("#project-container").load("/projects/an-addition-for-three.txt").scrollTop(0);
};
function aCertainKindOfLife() {
	$("#project-container").load("/projects/a-certain-kind-of-life.txt").scrollTop(0);
};
function aModelForLouisAndTadao() {
	$("#project-container").load("/projects/a-model-for-louis-and-tadao.txt").scrollTop(0);
};
function aBigSalad() {
	$("#project-container").load("/projects/a-big-salad.txt").scrollTop(0);
};
function aHouseForOne() {
	$("#project-container").load("/projects/a-house-for-one.txt").scrollTop(0);
};
function aMapWithAudio() {
	$("#project-container").load("/projects/a-map-with-audio.txt").scrollTop(0);
};
function aRoomForKaraokeAndOtherThings() {
	$("#project-container").load("/projects/a-room-for-karaoke-and-other-things.txt").scrollTop(0);
};

// Projects Info Hover - NEED TO FIX THIS
function abOver() {
	document.getElementById("ab").style.display = "block";
}
function abOut() {
	document.getElementById("ab").style.display = "none";
}
function threeOver() {
	document.getElementById("three").style.display = "block";
}
function threeOut() {
	document.getElementById("three").style.display = "none";
}
function lifeOver() {
	document.getElementById("life").style.display = "block";
}
function lifeOut() {
	document.getElementById("life").style.display = "none";
}
function saladOver() {
	document.getElementById("salad").style.display = "block";
}
function saladOut() {
	document.getElementById("salad").style.display = "none";
}
function modelOver() {
	document.getElementById("model").style.display = "block";
}
function modelOut() {
	document.getElementById("model").style.display = "none";
}
function houseOver() {
	document.getElementById("house").style.display = "block";
}
function houseOut() {
	document.getElementById("house").style.display = "none";
}
function karaokeOver() {
	document.getElementById("karaoke").style.display = "block";
}
function karaokeOut() {
	document.getElementById("karaoke").style.display = "none";
}
function mapOver() {
	document.getElementById("map").style.display = "block";
}
function mapOut() {
	document.getElementById("map").style.display = "none";
}

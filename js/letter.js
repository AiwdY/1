String.prototype.pxWidth = function (font) {
	let canvas = String.prototype.pxWidth.canvas ||
		(String.prototype.pxWidth.canvas = document.createElement("canvas")),
		context = canvas.getContext("2d");
	font && (context.font = font);
	let metrics = context.measureText(this);
	return metrics.width;
}

function isNumber(str) {
	return !isNaN(parseInt(str));
}

function getPureStr(str) {
	let spices = str.split('^');
	let res = spices[0];
	for (let i = 1; i < spices.length; i++) {
		let tmp = spices[i];
		if (isNumber(tmp.charAt(0))) {
			let rm = parseInt(tmp).toString();
			tmp = tmp.substring(rm.length);
		}
		else {
			tmp = '^' + tmp;
		}
		res += tmp;
	}
	return res;
}

function loadingPage() {
	let heart_div = $('.heart');
	let heart_parent = heart_div.parent();
	let page_width = heart_parent.width();
	let page_height = heart_parent.height();
	let heart_width = heart_div.width();
	let heart_height = heart_div.height();
	heart_div.css('top', (page_height - heart_height) / 2);
	heart_div.css('left', (page_width - heart_width) / 2);
}

// 使用 document 的事件委托方式确保正常工作
$(document).on('click', '#open', function (e) {
	e.preventDefault();
	if (!envelope_opened) {
		$('#wax-half').css('display', "block");
		
		// 确保 Typed 库已加载
		if (typeof Typed !== 'undefined') {
			new Typed('.letter', {
				strings: [
					"^1000",
					content.salutation + "<br><br>" +
					content.body + "<br><br><p style='float:right; display:block; width:" +
					content.sign + "px;'>^1000" + content.signature + "</p>"
				],
				typeSpeed: 100,
				backSpeed: 50,
				contentType: 'html'
			});
		} else {
			// 如果 Typed 未加载，直接显示文本
			$('.letter').html(
				content.salutation + "<br><br>" +
				content.body + "<br><br><p style='float:right; display:block; width:" +
				content.sign + "px;'>" + content.signature + "</p>"
			);
		}
		
		$('#open').find("span").eq(0).css('background-position', "0 -150px");
		envelope_opened = true;
		
		let player = document.getElementById('music');
		if (player && player.paused) {
			player.play().catch(function(error) {
				console.log("音乐播放被阻止:", error);
			});
			$('#music_btn').css("display", "block");
		}
	}
});

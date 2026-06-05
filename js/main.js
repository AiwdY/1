// main.js
let envelope_opened = false;

// 将 JSON 数据直接嵌入到 JavaScript 中
let content = {
    salutation: "亲爱的唐嘉美",
    signature: "小鹿",

    body: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果那天...没有见到你<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我想我不会那么伤心<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;那么难过<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不会泪流满面<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是如果没有遇见你<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我就不会了解<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如此高兴<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如此温柔<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如此可爱<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如此温暖<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如此幸福的感觉<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在还好吗?<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我...现在还和天空恋爱着`,
    sign: 0,

    // 其他字段
    recipient: "To&nbsp;&nbsp;XXX",
    sender: "Flip",
    title: "Letter to you",
    bgm: "https://music.163.com/song/media/outer/url?id=1902252102.mp3"

    // 如果你想使用本地文件，可以改为：
    // bgm: "audio/bgm.mp3"  // 本地文件路径
};

function playPause() {
    let player = document.getElementById('music');
    let play_btn = $('#music_btn');
    if (player.paused) {
        player.play();
        play_btn.attr('class', 'play');
    }
    else {
        player.pause();
        play_btn.attr('class', 'mute');
    }
}

window.onload = function () {
    loadingPage();

    // 直接使用嵌入的数据，无需 Ajax 请求
    content.sign = getPureStr(content.signature).pxWidth('18px Satisfy, serif');
    document.title = content.title;
    $('#recipient').append(content.recipient);
    $('#flipback').text(content.sender);

    // 设置音乐源
    $('#music').attr('src', content.bgm);

    // 如果需要自动播放音乐（可能需要用户交互后）
    // setTimeout(() => {
    //     document.getElementById('music').play().catch(e => {
    //         console.log("自动播放被阻止:", e);
    //         // 可以显示播放按钮让用户手动点击
    //     });
    // }, 1000);

    $('#envelope').fadeIn('slow');
    $('.heart').fadeOut('fast');

    let currentUrl = window.location.href;
    let firstIndex = currentUrl.indexOf("#");
    if (firstIndex <= 0) window.location.href = currentUrl + "#contact";

    let contact = $('#contact');
    let mtop = (window.innerHeight - contact.height()) * 0.5;
    contact.css('margin-top', mtop + 'px');
    $('body').css('opacity', '1');
    $('#jsi-cherry-container').css('z-index', '-99');
}

window.onresize = function () {
    let cherry_container = $('#jsi-cherry-container');
    let canvas = cherry_container.find('canvas').eq(0);
    canvas.height(cherry_container.height());
    canvas.width(cherry_container.width());
    // Do scaling for sakura background when the window is resized
    loadingPage();
}

// 如果有其他函数，继续添加
String.prototype.pxWidth = function(font) {
    // 计算字符串像素宽度的函数
    var f = font || '12px arial',
        o = $('<div>' + this + '</div>')
            .css({'position': 'absolute', 'float': 'left', 'white-space': 'nowrap', 'visibility': 'hidden', 'font': f})
            .appendTo($('body')),
        w = o.width();
    o.remove();
    return w;
}

function getPureStr(htmlStr) {
    // 获取纯文本，移除 HTML 标签
    return htmlStr.replace(/<[^>]+>/g, '');
}

// 如果需要，可以添加一个简单的加载函数
function loadingPage() {
    // 你的加载页面逻辑
    console.log("页面加载中...");
}

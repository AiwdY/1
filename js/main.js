// main.js
let envelope_opened = false;

// 将 JSON 数据直接嵌入到 JavaScript 中
let content = {
    salutation: "可爱的唐嘉美同学",  // ← 修改这里：改为收件人名字
    signature: "田从树",  // ← 修改这里：改为发件人签名

    body: `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;虽然在第一次的相处中不是很愉快<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;甚至还让你哭的那么伤心，那么难过<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我想说“对不起”！<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这几天的相处中，你的身影慢慢占据了我的心思。和你聊天时的轻松与快乐，见到你时心底骤然的欢喜，都在悄悄提醒我，我发现已经喜欢上你了。我欣赏你的温柔与真诚，还有那份天真的可爱，开心时想第一时间分享喜悦，低落时总想陪在你身边。我不敢贸然打扰你的生活，却实在藏不住满心的心动。我不求立刻得到答案，只是坦诚心意。如果你对我也有一丝好感，我愿意用心陪伴，慢慢奔赴往后的朝夕<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;希望你能再给我一次爱你、珍惜你的机会`,  // ← 修改这里：改为表白内容
    sign: 0,

    // 其他字段
    recipient: "To&nbsp;&nbsp;唐嘉美",  // ← 修改这里：改为收件人显示名
    sender: "I love you",  // ← 可选：修改发件人显示
    title: "Letter to you",  // ← 可选：修改网页标题
    bgm: "https://music.163.com/song/media/outer/url?id=1969373959.mp3"  // ← 修改这里：改为背景音乐链接

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

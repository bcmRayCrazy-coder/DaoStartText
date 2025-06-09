// ==UserScript==
// @name         神岛启动提示酱
// @namespace    http://www.jerrymc.top/
// @version      1.0
// @description  更有意思的启动文字
// @author       bcmray
// @match        https://view.dao3.fun/*
// @icon         https://view.dao3.fun/createra-favicon.ico
// @run-at       document-start
// @grant        none
// ==/UserScript==

const CHANGE_INTERVAL = 3000;
const TEXT_LIST = [
    "支持开发者bcmray喵",
    "启动容器酱",
    "正在加载资源喵",
    "需要稍等一会儿酱",
    "请坐和放宽, 加载正在成功",
    "可以在脚本开头\"TEXT_LIST\"中自定义文字喵",
    "可以在脚本开头\"CHANGE_INTERVAL\"自定义切换时间喵",
    "外挂加载中☠️☠️☠️"
];

(function() {
    var setTextInterval;
    function onLoad() {
        clearInterval(detectInterval);
        setTextInterval = setInterval(()=>{
            startTextElement.innerText = TEXT_LIST[Math.floor(Math.random() * TEXT_LIST.length)];
        }, CHANGE_INTERVAL);
    }
    var startTextElement;
    var detectInterval = setInterval(()=>{
        startTextElement = document.querySelector(".connecting_loadingText__F9Bj7");
        if(startTextElement) onLoad();
    }, 100);
})();

// script.js

const svgContainer = document.getElementById('circuit-svg');

// 绘制串联电路 SVG 示例
function drawSeriesCircuit() {
    svgContainer.innerHTML = `
        <line x1="50" y1="100" x2="150" y2="100" stroke="black" stroke-width="2" />
        <circle cx="50" cy="100" r="15" fill="red" />
        <circle cx="150" cy="100" r="15" fill="red" />
        <text x="50" y="95" font-size="12" text-anchor="middle">R1</text>
        <text x="150" y="95" font-size="12" text-anchor="middle">R2</text>
        <text x="100" y="140" font-size="16" fill="black">串联电路</text>
    `;
    animateCircuit();
}

// 动画效果
function animateCircuit() {
    const resistors = document.querySelectorAll('circle');
    resistors.forEach((resistor, index) => {
        // 简单的动画效果
        resistor.setAttribute('transform', 'scale(1.2)');
        setTimeout(() => {
            resistor.setAttribute('transform', 'scale(1)');
        }, 500 + index * 100);
    });
}

// AI 助教
document.getElementById('ask-button').addEventListener('click', function() {
    const question = document.getElementById('user-question').value;
    let response = "";
    if (question.includes("串联")) {
        response = "串联电路的总电阻是各电阻的总和。";
    } else if (question.includes("并联")) {
        response = "并联电路的总电阻是各电阻的倒数之和。";
    } else {
        response = "抱歉，我无法理解这个问题。";
    }
    document.getElementById('ai-response').innerText = response;
});

// 初始调用
drawSeriesCircuit();

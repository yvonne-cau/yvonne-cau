// script.js

const svgContainer = document.getElementById('thermal-resistance-svg');

// 绘制热阻值的 SVG 示例
function drawThermalResistance() {
    svgContainer.innerHTML = `
        <rect x="50" y="60" width="200" height="20" fill="lightblue" />
        <text x="150" y="55" font-size="16" text-anchor="middle">材料层 (R)</text>
        <line x1="50" y1="90" x2="50" y2="150" stroke="black" stroke-width="2" />
        <line x1="250" y1="90" x2="250" y2="150" stroke="black" stroke-width="2" />
        <text x="20" y="120" font-size="16">热源</text>
        <text x="280" y="120" font-size="16">环境</text>
        <text x="150" y="180" font-size="20" fill="black">热阻值 (R 值)</text>
    `;
    animateHeatFlow();
}

// 动画效果
function animateHeatFlow() {
    const rect = document.querySelector('rect');
    const flowLine = svgContainer.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'line'));
    
    flowLine.setAttribute('x1', '150');
    flowLine.setAttribute('y1', '90');
    flowLine.setAttribute('x2', '150');
    flowLine.setAttribute('y2', '150');
    flowLine.setAttribute('stroke', 'red');
    flowLine.setAttribute('stroke-width', '2');

    let posY = 90;
    const interval = setInterval(() => {
        if (posY > 150) {
            clearInterval(interval);
            return;
        }
        flowLine.setAttribute('y2', posY);
        posY += 5;
    }, 100);
}

// 初始调用
drawThermalResistance();

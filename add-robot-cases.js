// add-robot-cases.js - 一键添加三个机器人案例
const fs = require('fs');
const path = require('path');

// 三个机器人案例的配置
const robotCases = [
    {
        id: "REC007",
        title: "机器人导航与路径规划",
        description: "深入分析移动机器人导航系统的关键技术，包括环境感知、定位和路径规划算法。",
        date: "2023-11-15",
        tags: ["机器人", "导航", "ROS", "算法"],
        status: "complete",
        fileName: "case-analysis-007.html"
    },
    {
        id: "REC008",
        title: "机器人视觉处理与OpenCV",
        description: "探讨机器人视觉系统的构建，使用OpenCV进行图像处理、目标检测和跟踪的实践方法。",
        date: "2023-11-18",
        tags: ["机器人", "视觉", "OpenCV", "Python"],
        status: "complete",
        fileName: "case-analysis-008.html"
    },
    {
        id: "REC009",
        title: "ROS机器人操作系统实战",
        description: "全面介绍ROS核心概念和实际应用，包括节点、话题、服务等关键组件的实战演练。",
        date: "2023-11-20",
        tags: ["机器人", "ROS", "Linux", "C++", "Python"],
        status: "progress",
        fileName: "case-analysis-009.html"
    }
];

// 读取案例模板
const template = fs.readFileSync('case-analysis-template.html', 'utf8');

console.log('🚀 开始创建机器人项目案例...\n');

// 创建每个案例文件
robotCases.forEach(caseData => {
    // 生成案例页面内容
    let content = template
        .replace(/{{CASE_ID}}/g, caseData.id)
        .replace(/{{CASE_TITLE}}/g, caseData.title)
        .replace(/{{CASE_DATE}}/g, caseData.date)
        .replace(/{{CASE_DESCRIPTION}}/g, caseData.description)
        .replace(/{{CASE_TAGS}}/g, caseData.tags.map(tag => 
            `<span class="tag ${tag.toLowerCase().replace(/\s+/g, '-')}">${tag}</span>`
        ).join('\n'));
    
    // 写入文件
    fs.writeFileSync(caseData.fileName, content);
    console.log(`✅ 已创建: ${caseData.fileName} - ${caseData.title}`);
});

console.log('\n📋 请将以下代码添加到 index.html 的 records 数组中:');
console.log('='.repeat(60));

robotCases.forEach(caseData => {
    console.log(JSON.stringify(caseData, null, 2) + ',');
});

console.log('='.repeat(60));
console.log('\n🎉 机器人案例添加完成！刷新主页面查看新案例。');

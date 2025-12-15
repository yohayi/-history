// add-bio-chem-cases.js - 一键添加三个生物化学案例
const fs = require('fs');
const path = require('path');

// 三个生物化学案例的配置
const bioChemCases = [
    {
        id: "REC010",
        title: "材料疲劳数据分析与预测",
        description: "通过数据分析和机器学习方法，预测材料在不同应力条件下的疲劳寿命，为工程设计提供依据。",
        date: "2023-11-25",
        tags: ["材料科学", "疲劳数据", "机器学习", "预测模型"],
        status: "complete",
        fileName: "case-analysis-010.html"
    },
    {
        id: "REC011",
        title: "化学电池材料研究与性能优化",
        description: "研究新型化学电池材料，通过实验和模拟优化电池性能，提高能量密度和循环寿命。",
        date: "2023-11-28",
        tags: ["化学材料", "电池", "电化学", "材料研究"],
        status: "progress",
        fileName: "case-analysis-011.html"
    },
    {
        id: "REC012",
        title: "仿生算法在优化问题中的应用",
        description: "研究仿生算法（如遗传算法、蚁群算法、粒子群算法）在复杂优化问题中的应用，提高求解效率。",
        date: "2023-12-01",
        tags: ["仿生算法", "优化问题", "遗传算法", "人工智能"],
        status: "complete",
        fileName: "case-analysis-012.html"
    }
];

// 读取现有案例模板（以007为模板）
const template = fs.readFileSync('case-analysis-007.html', 'utf8');

console.log('🧪 开始创建生物化学与材料科学案例...\n');

// 为每个案例创建文件
bioChemCases.forEach(caseData => {
    // 这里简化处理，实际需要根据每个案例的内容定制
    console.log(`📄 需要创建: ${caseData.fileName} - ${caseData.title}`);
    console.log(`   描述: ${caseData.description}`);
    console.log(`   标签: ${caseData.tags.join(', ')}`);
    console.log('');
});

console.log('📋 请将以下代码添加到 index.html 的 records 数组中:');
console.log('='.repeat(60));

bioChemCases.forEach(caseData => {
    console.log(JSON.stringify({
        id: caseData.id,
        title: caseData.title,
        description: caseData.description,
        date: caseData.date,
        tags: caseData.tags,
        status: caseData.status,
        link: caseData.fileName
    }, null, 2) + ',');
});

console.log('='.repeat(60));
console.log('\n🎉 生物化学案例配置完成！');
console.log('💡 提示：您可以复制 case-analysis-007.html 为模板，修改内容创建新案例。');

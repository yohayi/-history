const fs = require('fs');
const path = require('path');

// 案例数据
const cases = [
    { id: '001', title: 'CSS布局问题分析与解决', tags: ['css', '布局', '响应式'] },
    { id: '002', title: 'JavaScript异步编程模式', tags: ['javascript', '异步', 'promise'] },
    { id: '003', title: 'HTML语义化结构优化', tags: ['html', '语义化', 'seo'] },
    { id: '004', title: 'PHP后端API接口设计', tags: ['php', 'api', 'restful'] },
    { id: '005', title: 'Python数据分析流程', tags: ['python', '数据分析', 'pandas'] },
    { id: '006', title: '前端性能优化策略', tags: ['javascript', '性能', '优化'] }
];

// 读取模板
const template = fs.readFileSync('case-template.html', 'utf8');

// 为每个案例生成页面
cases.forEach(caseData => {
    let content = template
        .replace(/{{ID}}/g, caseData.id)
        .replace(/{{TITLE}}/g, caseData.title)
        .replace(/{{TAGS}}/g, caseData.tags.map(tag => `<span class="tag">${tag}</span>`).join('\n'));
    
    const filename = `case-analysis-${caseData.id}.html`;
    fs.writeFileSync(filename, content);
    console.log(`创建文件: ${filename}`);
});

window.addEventListener('DOMContentLoaded', (event) => {
    // 使用 fetch 立即从 GitHub Pages 读取 CSV 文件
    fetch('https://github.com/TDSSSzero/TDSSSzero.github.io/chilichill_chengdu.csv')  // 替换为你自己的 CSV 文件 URL
        .then(response => response.text())
        .then(data => {
            Papa.parse(data, {
                complete: function(results) {
                    displayTable(results.data);
                },
                header: true,  // 如果 CSV 有标题行，保留此项；否则删除
                skipEmptyLines: true
            });
        })
        .catch(error => {
            console.error('Error fetching the CSV file:', error);
        });
});

function displayTable(data) {
    const table = document.getElementById('csvTable');
    table.innerHTML = '';

    // 创建表头
    const headerRow = document.createElement('tr');
    Object.keys(data[0]).forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // 创建数据行
    data.forEach(row => {
        const tr = document.createElement('tr');
        Object.values(row).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
}

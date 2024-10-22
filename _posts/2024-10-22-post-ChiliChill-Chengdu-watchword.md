---
title: "2024 成都ChiliChill 口号征集"
date: 2024-10-22T15:34:30-04:00
header:
  image: /assets/images/chilichill.png
categories:
  - blog
tags:
  # - Jekyll
  # - update
---

2024 ChiliChill 成都场，横幅口号绝赞征集中！
欢迎老师们踊跃提交~

<table id="csvTable"></table>

<script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
      // 使用 fetch 读取 CSV 文件
      fetch('/assets/csv/chilichill_chengdu.csv')  // 确保路径正确
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.text();
          })
          .then(data => {
              Papa.parse(data, {
                  header: true,
                  skipEmptyLines: true,
                  complete: function(results) {
                      displayTable(results.data);
                  }
              });
          })
          .catch(error => {
              console.error('Error fetching the CSV file:', error);
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
  });
</script>


Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/

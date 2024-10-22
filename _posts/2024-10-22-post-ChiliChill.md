---
title: "2024 Chengdu ChiliChill Watchword"
categories:
  - Blog
tags:
  - ChiliChill
---

ChiliChill

<table>
  <thead>
    <tr>
      <th>提交时间</th>
      <th>口号</th>
      <th>提交人</th>
    </tr>
  </thead>
  <tbody>
    {% for row in site.data.data %}
    <tr>
      <td>{{ row.time }}</td>
      <td>{{ row.watchword }}</td>
      <td>{{ row.author }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>


[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/

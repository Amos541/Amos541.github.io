var posts=["Hexo/Algolia搜索配置/","Development/搭建图床/","Hexo/hello-world/","Hexo/shoka主题介绍/","Hexo/将shoka主题中valine评论系统更换为waline系统/","Hexo/使用hexo命令创建新文章/","Hexo/更换主题/","Knowledge/C语言学习（一）/","Knowledge/markdown语法/","Knowledge/数据结构初识/","Knowledge/数据结构学习（一）/","Knowledge/数据结构学习（二）/","Others/便携版vscode修改数据路径/","Others/关于如何解决github直连失败的方法/","Others/提取wallpaper壁纸/","Problems/hexo的图片插入/","Others/终端美化篇/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
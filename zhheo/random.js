var posts=["2024/04/11/hello-world/","2024/04/11/test2/","2024/04/11/test3/","2024/04/11/tset1/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};
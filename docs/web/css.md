---
title: 【css】
date: 2020-12-15
tags:
- css
---

# css

## 修改input placeholder样式
``` css
input::-webkit-input-placeholder { 
/* WebKit browsers */ 
color: #ccc; 
} 
input:-moz-placeholder { 
/* Mozilla Firefox 4 to 18 */ 
color: #ccc; 
} 
input::-moz-placeholder { 
/* Mozilla Firefox 19+ */ 
color: #ccc; 
} 
input:-ms-input-placeholder { 
/* Internet Explorer 10+ */ 
color: #ccc; 
}
```
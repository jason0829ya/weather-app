********************
## Midterm Project

### weather APP
********************

#### 簡介
簡易的天氣查詢APP
&nbsp;
#### Heroku 連結:  https://jason0829ya-weather-app.herokuapp.com/
&nbsp;
#### 使用
* 在螢幕上的搜尋欄輸入想查詢的城市名稱後按下enter或是點擊旁邊的search button 即可查詢
&nbsp;
#### 使用的框架
* 前端就是純React， 配合server開出的API去 fetch data後把天氣資訊呈現出來。
* 後端server的部份，串接了mapbox和darksky這兩個API 利用request取得天氣資訊 並利用get傳出。
&nbsp;

#### 我的貢獻
mapbox 和 darksky API的串接是在網路上找到簡易的示範並照著做，但他是用callback function 去寫，看起來真的有點討厭XD。剛好那時候老師要我們上網學promise/async/await，於是就把它改成async await的形式了。 但 request 似乎不支援promise的用法，查了一下發現有利用"request-promise"這個module就可以用promise改寫request。

#### 心得
四月到五月初都在忙別的事情...而且對於後端還有前後端串接的概念真的幾乎是0...QQ 所以完全沒辦法做出跟其他同學們一樣有趣的東西...只能寫出這樣超陽春的APP...期末要加油了...
但是還是學到了前後端最簡單的串接(利用create-react-app)還有簡單的API串接。
web programming真的博大精深...期末真的要加油

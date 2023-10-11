/**
 * quotes.js
 */

const quotes = [
    {
      quote: "피할수 없으면 즐겨라",
      author: "로버트 엘리엇",
    },
    {
        quote: "삶이 있는 한 희망은 있다",
        author: "키케로",
      },
      {
        quote: "산다는것 그것은 치열한 전투이다",
        author: "로망로랑",
      },
      {
        quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다",
        author: "사무엘존슨",
      },
      {
        quote: "당신이 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다",
        author: "헨리 포드",
      },
      {
        quote: "겨울이 오면 봄이 멀지 않으리",
        author: "셸리",
      },
      {
        quote: "최고에 도달하려면 최저에서 시작하라",
        author: "P.시루스",
      },
      {
        quote: "길을 잃는 다는 것은 곧 길을 알게 된다는 것이다",
        author: "동아프리카속담",
      },
      {
        quote: " 사막이 아름다운 것은 어딘가에 샘이 숨겨져 있기 때문이다",
        author: "생떽쥐베리",
      },
      {
        quote: "평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라",
        author: "제임스 딘",
      },
  ];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

quote.innerText = "오늘의 명언";
author.innerText = "오늘의 작가";

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

quote.style.position = "absolute";
quote.style.top = "930px";
quote.style.left = "800px";
quote.style.fontSize = "30px"; // 텍스트 크기 조정

author.style.position = "absolute";
author.style.top = "890px";
author.style.left = "800px";
author.style.fontSize = "30px"; //텍스트 크기 조정

quote.style.color = "white"; //텍스트 색상
author.style.color = "white"; //텍스트 색상





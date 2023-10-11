const images = ["0.JPG", "1.JPG", "2.JPG"];

const todayImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${todayImage}`;
bgImage.style.width = "760px"; // 이미지의 너비 설정
bgImage.style.height = "1120px"; // 이미지의 높이 설정
bgImage.style.position = "absolute"; // 이미지의 위치를 조정하기 위해 절대 위치 지정
bgImage.style.left = "50%"; // 가로 가운데로 이동
bgImage.style.top = "50%"; // 세로 가운데로 이동
bgImage.style.transform = "translate(-120%, -50%)"; // 이미지를 중앙으로 정렬

document.body.appendChild(bgImage);

// 배경 색상.
const backgroundColor = "black";
document.body.style.backgroundColor = backgroundColor;

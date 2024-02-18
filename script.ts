const container = document.querySelector('.container');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'this is the content';
container?.appendChild(content);
const para = document.createElement('p');
para.style.color = 'red';
para.textContent = 'hey i\'m red';
container?.appendChild(para);
const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = 'i\'m a blue h3';
container?.appendChild(h3)
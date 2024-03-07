import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Chúc cậu Mew ngày 8/3 vui vẻ';
  ngOnInit() {
    const textContainer: any = document.getElementById('textAnimation');
    const text = textContainer.innerText;

    textContainer.innerHTML = '';

    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span');
      span.textContent = text[i];
      span.style.opacity = '0';
      span.style.animation = `fadeInText 1s forwards cubic-bezier(0.25, 0.1, 0.25, 1) ${
        i * 0.1
      }s`;
      textContainer.appendChild(span);

      // Kiểm tra nếu là ký tự cuối cùng của một từ
      if (text[i] === ' ' || i === text.length - 1) {
        setTimeout(() => {
          const heart = document.createElement('span');
          heart.style.color = 'red'; // Thiết lập màu chữ thành đỏ
          heart.textContent = '❤';
          heart.style.animation = 'flyHeart 1.5s linear forwards';
          textContainer.appendChild(heart);
        }, i * 100); // Thêm trái tim sau mỗi từ, mỗi trái tim cách nhau 0.1 giây
      }
    }
  }
}

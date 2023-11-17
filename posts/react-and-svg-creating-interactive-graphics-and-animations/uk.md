---
title: 'React і SVG: Створення інтерактивних графіків та анімацій'
date: '2014-06-07T20:31:59.889Z'
category: ['React', 'SVG']
cover: '/images/blog/react-and-svg-creating-interactive-graphics-and-animations/cover.jpg'
thumb: '/images/blog/react-and-svg-creating-interactive-graphics-and-animations/cover-sm.jpg'
slug: '/react-and-svg-creating-interactive-graphics-and-animations'
---

## React і SVG: Створення інтерактивних графіків та анімацій

### 1. Вступ

SVG (Scalable Vector Graphics) являє собою XML-базовану мову розмітки для опису двовимірної графіки. У комбінації з React, який дає змогу створювати виразні та потужні користувацькі інтерфейси, SVG відкриває широкі можливості для веб-розробників.

### 2. Основи SVG у React

Вставити SVG у React-компонент можна двома основними способами: як інлайнову розмітку або як зображення.

#### 2.1. Інлайновий SVG у React

```jsx
var SvgComponent = React.createClass({
  render: function () {
    return (
      <svg width="100" height="100">
        <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" />
      </svg>
    );
  },
});
```

### 3. Створення інтерактивних елементів з SVG у React

Інтерактивні елементи можуть відгукуватися на різні події, такі як наведення миші, кліки та інші.

```jsx
var InteractiveCircle = React.createClass({
  getInitialState: function () {
    return { hover: false };
  },

  toggleHover: function () {
    this.setState({ hover: !this.state.hover });
  },

  render: function () {
    var fill = this.state.hover ? 'blue' : 'red';
    return (
      <svg width="100" height="100">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="black"
          strokeWidth="3"
          fill={fill}
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
        />
      </svg>
    );
  },
});
```

### 4. Анімація SVG за допомогою React

Для анімації SVG-елементів у React можна використовувати CSS.

#### 4.1. Проста CSS-анімація

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.fade-in {
  animation: fadeIn 1s;
}
```

```jsx
var AnimatedCircle = React.createClass({
  render: function () {
    return (
      <svg width="100" height="100">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="black"
          strokeWidth="3"
          fill="red"
          className="fade-in"
        />
      </svg>
    );
  },
});
```

### 5. Практичний приклад: Створення графіка

Розглянемо створення простого стовпчастого графіка на основі масиву даних:

```jsx
var data = [10, 30, 40, 20];

var BarChart = React.createClass({
  render: function () {
    return (
      <svg width="200" height="100">
        {data.map(function (value, index) {
          return (
            <rect
              key={index}
              x={index * 50}
              y={100 - value}
              width="40"
              height={value}
              fill="teal"
            />
          );
        })}
      </svg>
    );
  },
});
```

### 6. Оптимізація та найкращі практики

- **6.1 Уникайте непотрібних ререндерів:** У класових компонентах використовуйте `shouldComponentUpdate` для запобігання непотрібних ререндерів.
- **6.2 Оптимізація завантаження:** Використовуйте SVG спрайти для зменшення кількості запитів до сервера та прискорення завантаження.

### 7. Висновок

Спільне використання React і SVG надає чудовий інструментарій для створення динамічних та інтерактивних графічних компонентів. Ці технології сумісні, і їхня комбінація дає розробникам більшу гнучкість при створенні веб-додатків.

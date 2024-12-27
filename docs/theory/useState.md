Хук `useState` в React позволяет добавлять состояние в функциональные компоненты. Он возвращает массив, состоящий из текущего значения состояния и функции для его обновления. Давайте рассмотрим несколько примеров, чтобы лучше понять, как он работает.

## Основы использования `useState`

### 1. Простой счетчик

В этом примере мы создадим компонент, который отслеживает количество нажатий на кнопку.

```javascript
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0); // Инициализация состояния с начальным значением 0

    return (
        <div>
            <p>You clicked {count} times.</p>
            <button onClick={() => setCount(count + 1)}>Click me</button> {/* Обновление состояния */}
        </div>
    );
}
```

- **Объяснение**: 
  - Мы используем `useState(0)`, чтобы создать переменную состояния `count` с начальным значением 0.
  - Функция `setCount` обновляет значение `count`. При каждом нажатии на кнопку вызывается `setCount(count + 1)`, что увеличивает счетчик на единицу.
  - При изменении состояния компонент автоматически перерисовывается с новым значением.

### 2. Текстовое поле

Теперь создадим компонент с текстовым полем, где пользователь может вводить текст.

```javascript
import React, { useState } from 'react';

function TextInput() {
    const [text, setText] = useState(''); // Инициализация состояния как пустой строки

    return (
        <div>
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} // Обновление состояния при изменении текста
            />
            <p>You typed: {text}</p>
        </div>
    );
}
```

- **Объяснение**:
  - Здесь мы используем `useState('')` для создания переменной состояния `text`.
  - При каждом изменении текста в поле ввода вызывается `setText(e.target.value)`, что обновляет состояние и отображает введенный текст ниже.

### 3. Переключатель (Checkbox)

Создадим компонент с чекбоксом, который будет отслеживать состояние включения/выключения.

```javascript
import React, { useState } from 'react';

function Checkbox() {
    const [isChecked, setIsChecked] = useState(false); // Инициализация состояния как false

    return (
        <div>
            <input 
                type="checkbox" 
                checked={isChecked} 
                onChange={() => setIsChecked(!isChecked)} // Переключение состояния
            />
            <p>{isChecked ? 'Checked' : 'Unchecked'}</p>
        </div>
    );
}
```

- **Объяснение**:
  - Мы используем `useState(false)` для создания переменной состояния `isChecked`.
  - При изменении состояния чекбокса вызывается `setIsChecked(!isChecked)`, что переключает состояние между true и false.

## Заключение

Хук `useState` является мощным инструментом для управления состоянием в функциональных компонентах React. Он позволяет легко добавлять и обновлять состояние, что делает компоненты более интерактивными и динамичными. Используя примеры выше, вы можете увидеть, как `useState` может применяться в различных сценариях для управления состоянием.

Citations:
[1] https://ru.hexlet.io/qna/javascript/questions/usestate-react-chto-eto
[2] https://www.dev-notes.ru/articles/react/guide-usestate-react/
[3] https://reactdev.ru/reference/react/useState/
[4] https://web-dev.guru/reactjs/usestate-reactjs/
[5] https://habr.com/ru/companies/otus/articles/667706/
[6] https://webtricks-master.ru/react-hooks/learn-usestate-on-examples/
[7] https://ru.legacy.reactjs.org/docs/hooks-state.html
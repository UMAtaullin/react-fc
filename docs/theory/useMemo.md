Хук `useMemo` в React используется для мемоизации значений, что позволяет оптимизировать производительность компонентов, избегая ненужных повторных вычислений при каждом рендере. Он кэширует результат выполнения функции и возвращает его, если зависимости не изменились.

## Основные моменты использования `useMemo`

1. **Синтаксис**:
   ```javascript
   const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
   ```
   Здесь `computeExpensiveValue` — это функция, результат которой будет кэшироваться. Массив `[a, b]` — это зависимости, при изменении которых `useMemo` пересчитает значение.

2. **Когда использовать**:
   - Когда у вас есть ресурсоемкие вычисления (например, сложные математические операции или фильтрация больших массивов), которые не должны выполняться при каждом рендере.
   - Когда вы хотите предотвратить лишние ререндеры дочерних компонентов, передавая им мемоизированные значения.

## Примеры использования

### Пример 1: Простое вычисление

```javascript
import React, { useMemo } from 'react';

function App() {
  const sum = useMemo(() => {
    let total = 0;
    for (let i = 1; i <= 1000000; i++) {
      total += i;
    }
    return total;
  }, []);

  return <div>Сумма от 1 до 1000000: {sum}</div>;
}
```
В этом примере сумма чисел от 1 до 1 миллиона вычисляется только один раз при первом рендере. Если компонент будет перерисован по другим причинам, сумма не будет пересчитываться.

### Пример 2: Использование зависимостей

```javascript
import React, { useState, useMemo } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const isEven = useMemo(() => {
    console.log('Вычисление четности');
    return count % 2 === 0;
  }, [count]);

  return (
    <div>
      <div>Счетчик: {count}</div>
      {isEven ? <div>Число четное</div> : <div>Число нечетное</div>}
      <button onClick={() => setCount(count + 1)}>Увеличить</button>
    </div>
  );
}
```
Здесь `isEven` вычисляется только тогда, когда изменяется значение `count`. При нажатии на кнопку происходит обновление состояния `count`, и только тогда срабатывает пересчет четности.

### Пример 3: Мемоизация массивов или объектов

```javascript
import React, { useState, useMemo } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  
  const filteredItems = useMemo(() => {
    // Допустим у нас есть большой массив данных
    const items = [...Array(10000).keys()].map(i => `Item ${i}`);
    return items.filter(item => item.includes(inputValue));
  }, [inputValue]);

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <ul>
        {filteredItems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```
В этом примере массив `filteredItems` будет пересчитываться только при изменении `inputValue`, что позволяет избежать лишних вычислений при каждом рендере.

## Заключение

Хук `useMemo` является мощным инструментом для оптимизации производительности React-приложений. Он помогает избежать ненужных вычислений и ререндеров компонентов, что особенно полезно в случаях с ресурсоемкими операциями или большими массивами данных.

Citations:
[1] https://teletype.in/@skns/react-use-memo
[2] https://habr.com/ru/companies/otus/articles/696610/
[3] https://habr.com/ru/articles/807139/
[4] https://code.mu/ru/javascript/framework/react/book/supreme/hooks/use-memo/
[5] https://ru.hexlet.io/courses/js-react-hooks/lessons/use-callback/theory_unit
[6] https://webtricks-master.ru/react-hooks/uchim-usememo-na-primerah/
[7] https://300.ya.ru/v_WZg7lCir
# Тестовое задание для Авито

Блок Progress

## Запуск

1. Клонировать репозиторий:
   ```sh
   git clone https://github.com/tsignore/test-task-ozon.git
   ```
2. Открыть `index.html`.

## Класс `Progress`

Класс `Progress` отвечает за рендеринг и управление нашим блоком.

### Конструктор

```js
const progress = new Progress({
  container: "#progressBlock",
  value: 0,
  progressColor: "#005cff",
  ringColor: "#eaf0f6",
  size: 160,
  strokeWidth: 8,
  animated: false,
  hidden: false,
  speed: 1,
});
```

### Параметры конструктора:

| Параметр        | Тип       | По умолчанию | Описание                             |
| --------------- | --------- | ------------ | ------------------------------------ |
| `container`     | `string`  | -            | Селектор контейнера для рендера      |
| `value`         | `number`  | `0`          | Начальное значение прогресса (0–100) |
| `progressColor` | `string`  | `#005cff`    | Цвет прогресса                       |
| `ringColor`     | `string`  | `#eaf0f6`    | Цвет кольца                          |
| `size`          | `number`  | `160`        | Размер                               |
| `strokeWidth`   | `number`  | `8`          | Толщина линии прогресса              |
| `animated`      | `boolean` | `false`      | Включить анимацию                    |
| `hidden`        | `boolean` | `false`      | Скрыть прогресс-бар                  |
| `speed`         | `number`  | `1`          | Скорость анимации                    |

### API (Методы класса):

| Метод                            | Описание                              |
| -------------------------------- | ------------------------------------- |
| `setHidden(hidden: boolean)`     | Скрывает или показывает прогресс-бар  |
| `setAnimated(animated: boolean)` | Включает или выключает анимацию       |
| `setSize(size: number)`          | Изменяет размер прогресс-бара         |
| `getValue(): number`             | Возвращает текущее значение прогресса |

---

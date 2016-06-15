# eslint-config-uaprom
Репозиторий c инструкцией подключения к другим проектам и 
готовым конфигом на базе [airbnb](https://github.com/airbnb/javascript)

## Установка
1. *npm install --save-dev Prom-ua/eslint-config-uaprom#1.0.0*
2. *echo "{"extends": "uaprom"}' > .eslintrc*

## Разработка
Если вы хотите внести изменение в существующий конфиг это можно сделать так:
1. Создать PR c изменениями (дождаться review).
2. После подтверждения изменений сделать merge в мастер.
3. Создать новый release tag в master ветке.
    ```
    git tag -a <tagname> -m "коротко об изменениях"
    ```
    ```
    git push origin <tagname>
    ```
4. Обновлям версию в README в секции "Установка".


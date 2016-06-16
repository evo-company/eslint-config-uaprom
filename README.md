# eslint-config-uaprom (1.0.0)
Репозиторий c инструкцией подключения к другим проектам и 
готовым конфигом на базе [airbnb](https://github.com/airbnb/javascript)

## Установка
1. *npm install --save-dev https://github.com/Prom-ua/eslint-config-uaprom/archive/1.0.0.tar.gz*
2. *echo "{"extends": "uaprom"}' > .eslintrc*

## Настройка для webpack для нового проекта
1. npm install --save-dev eslint-loader
2. Добавляем eslint-loader как показано на инструкции [https://github.com/MoOx/eslint-loader](https://github.com/MoOx/eslint-loader)

## Разработка
Если вы хотите внести изменение в существующий конфиг это можно сделать так:

1. Создать PR c изменениями (дождаться review).
2. После подтверждения изменений сделать merge в мастер.
3. Создать новый release tag в master ветке.

    ```
    git tag -a <tagname> -m "коротко об изменениях"
    git push origin <tagname>
    ```
    
4. Обновлям версию в *README* в секции "Установка".


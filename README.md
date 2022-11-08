# starterPage
my resume


webpack build lessons

step 3
оптимизация размера бандла
настройка переменных среды dev and prod 
сценарии нпм?

Чтобы запустить билд, надо перейти в его папку и запустить команду npx serve, он автоматом ставится вроде в глобал
Проверяем размеры двух бандлов, в деве 1.6 мб, а вот в проде всего 48.5 кб (перезагружить ctrl shift r) дело именно в конфигурации разных версий вебпак сборки
process env поставил пакет и есть доступ из браузера, но свою переменную из ноды я подключить не могу, нужно читать гайды
ВЫЯСНИТЬ что за DefinePlugin / ProvidePlugin / все разделы внутри схемы вебпака на расшифровку
https://www.robinwieruch.de/webpack-advanced-setup-tutorial/ - как сделать process и протащить из ноды в глобал и браузер

step4 
function react refresh (plugin)
Суть заключается в том чтобы перерендерить только изменившиеся компоненты и не трогать то что не изменилось
https://www.youtube.com/watch?v=xKQ2rEoYmXw&list=PLC3y8-rFHvwiWPS2RO3BKotLRfgg_8WEo&index=4

https://habr.com/ru/post/597389/

step5
eslint install and config
vsc plugin eslint
eslint-plugin-react - for react hooks rules
eslint-plugin-react-hooks
@typescript-eslint/parser
@typescript-eslint/eslint-plugin
eslint-plugin-import  - проверка
eslint-plugin-jsx-a11y
  и добавляем под них настройки в еслинт
  еще добавляем команду "lint": "eslint --fix \"./src/**/*.{js,jsx,ts,tsx,json}\"", - исправить принудительно или обозначить ошибки в консоль

  !!Пройти по всем настройкам и расшифровать

  step6
  prettier форматирование кода
  vsc plugin prettier
  prettier eslint-config-prettier eslint-plugin-prettier
  добавили prettierrc.js правила и добавили использование в еслинт настройку плагинов
  и команду добавили  "format": "prettier --write \"./src/**/*.{js,jsx,ts,tsx,json,css,scss,md}\"",
  так же рекомендация при сохранении автоматом выравнивать settings -> search format -> Editor Format on Save: true

  step7
  внесение изменений при комите от еслинта и претир
  используем husky@4 (ибо он работает на запрет камитов, а 8 версию надо еще настраивать)
   lint-staged
  добавляем поэтапную конфигурацию в package.json
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged" //заставляет запускать линт стейдж на этапе перед камитом
    }
  },
  "lint-staged": {  //говорит о запуске еслинта и преттира
    "src/**/*.{js,jsx,ts,tsx,json}": [
      "eslint --fix"
    ],
    "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
      "prettier --write"
    ]
  }
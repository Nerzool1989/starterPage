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
eslint-plugin-react - for react hooks rules
eslint-plugin-react-hooks
@typescript-eslint/parser
@typescript-eslint/eslint-plugin
eslint-plugin-import  - проверка
eslint-plugin-jsx-a11y
  и добавляем под них настройки в еслинт
  еще добавляем команду "lint": "eslint --fix \"./src/**/*.{js,jsx,ts,tsx,json}\"", - исправить принудительно или обозначить ошибки в консоль

  !!Пройти по всем настройкам и расшифровать
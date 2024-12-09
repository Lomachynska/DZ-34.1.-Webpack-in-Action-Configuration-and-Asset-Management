# DZ-34.1.-Webpack-in-Action-Configuration-and-Asset-Management
DZ 34.1. Webpack in Action: Configuration and Asset Management



..
nvm ls-remote - Перевірте доступні версії Node.js:
nvm install 18 - Встановити актуальну стабільну версію Node.js.
nvm use 18 - Активувати нову версію Node.js:

.. перевірити чи активувалась версія 
node -v
npm -v

.. Оновлення npm 
npm install -g npm


..npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader node-sass file-loader url-loader html-webpack-plugin mini-css-extract-plugin optimize-css-assets-webpack-plugin terser-webpack-plugin font-awesome
дає помилки


..
npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader node-sass file-loader url-loader html-webpack-plugin mini-css-extract-plugin optimize-css-assets-webpack-plugin terser-webpack-plugin font-awesome --legacy-peer-deps
даж помилки

..
mkdir webpack-project
cd webpack-project
npm init -y


npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader node-sass file-loader url-loader html-webpack-plugin clean-webpack-plugin mini-css-extract-plugin babel-loader @babel/core @babel/preset-env

webpack-project/
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   │   └── custom-font.woff
│   │   ├── images/
│   │   │   └── logo.png
│   ├── index.js
│   ├── styles/
│   │   └── main.scss
├── dist/
├── webpack.config.js
├── package.json



... dist
npm run build

..
nvm list available
nvm install 18  # для Node.js 18.x
nvm use 18  # або nvm use 20

nvm use 18  # або nvm use 20

node -v   # повинна бути версія 18.x або 20.x
npm -v    # перевірте версію npm

...
npm run build


... створення папки package.json
npm init -y

npm install
npm run build



... index.js створення
mkdir src
touch src/index.js - власноруч


...створення
touch webpack.config.js


my-webpack-project/
├── dist/                  # Папка для зібраних файлів
├── node_modules/          # Папка з залежностями
├── src/                   # Джерела
│   ├── index.js           # Основний файл JS
│   └── index.html         # Шаблон HTML
├── webpack.config.js      # Конфігурація Webpack
├── package.json           # Залежності та скрипти
└── package-lock.json      # Лок файл для npm


...запуск збірки
npm run build
...запуск сервера
npm run start

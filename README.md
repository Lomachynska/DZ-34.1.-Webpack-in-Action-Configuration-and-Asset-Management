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

@echo off

::
:: JSHint
::
echo == Running JSHint on JavaScript files

    ::TODO: have a separate global JSHint settings
    echo -- on src\js\app files
    call jshint src\js\app\

    echo -- on src\js\utils files
    call jshint src\js\utils\

echo == End Running JSHint

::
:: Building
::
echo == Start Building CORS-PLANNER

    echo - removing release folder
        ::remove release
        rmdir release /S /Q

    echo - calling r.j to build using build.js
        ::build javascripts
        call node build\r.js -o build\build.js

    echo - reorganizing JS libraries
        ::remove js files under bootstrap and copy the min.js only
        del release\js\libs\bootstrap\*.* /Q
        xcopy src\js\libs\bootstrap\*.min.js release\js\libs\bootstrap\ /Y
        ::copy moderize
        xcopy src\js\libs\modernizr*.js release\js\libs\ /Y
        ::copy data folder
        xcopy src\js\data release\js\data\ /S /Y

    echo - modifying html script includes
        ::modify index.html to use css
        call node build\clean.html.js

    echo - moving font folder to release\
        ::move awesone-fonts to css folder
        xcopy src\less\font release\font\ /S /Y

    echo - compiling less to css
        ::create folder in release for css files
        mkdir release\css
        ::build less to css file
        call lessc --yui-compress src\less\style.less > release\css\style.css

echo == Build Succeed

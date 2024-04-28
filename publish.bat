@echo off

cd projects/ngx-components-lib-cf6
echo Start build library
call ng build --configuration=production

if %errorlevel% equ 0 (
    echo Finished build library

    pushd ../../dist/ngx-components-lib-cf6
    echo Start publish library
    call npm publish
    if %errorlevel% equ 0 (
        echo Finished publish library
    ) else (
        echo Publish failed. Exiting script.
        exit /b %errorlevel%
    )
    popd
) else (
    echo Build failed. Exiting script.
    exit /b %errorlevel%
)

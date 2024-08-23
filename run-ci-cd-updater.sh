#!/bin/bash

echo "Running LaraNext update..."

pwd
git reset --hard
git clean -fd
# php artisan optimize:clear
# php artisan icons:clear
# php artisan filament:clear-cached-components
git pull --ff
composer install --no-interaction --prefer-dist --optimize-autoloader -q
php artisan migrate --force
export NVM_DIR=~/.nvm
source ~/.nvm/nvm.sh
npm install -g pnpm
pnpm i
npm run build
# php artisan optimize
# php artisan icons:cache
# php artisan filament:cache-components
echo 'Running commands after update...'
# php artisan app:update-permissions
php artisan cache:clear
# supervisorctl restart laranext-worker:*
# supervisorctl restart laranext-pulse
# php artisan pulse:restart
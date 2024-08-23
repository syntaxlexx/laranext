<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Application Name
    |--------------------------------------------------------------------------
    |
    | This value is the name of your application, which will be used when the
    | framework needs to place the application's name in a notification or
    | other UI elements where an application name needs to be displayed.
    |
     */

    'name' => env('APP_NAME', 'Laravel'),

    /*
    |--------------------------------------------------------------------------
    | Application Environment
    |--------------------------------------------------------------------------
    |
    | This value determines the "environment" your application is currently
    | running in. This may determine how you prefer to configure various
    | services the application utilizes. Set this in your ".env" file.
    |
     */

    'env' => env('APP_ENV', 'production'),

    /*
    |--------------------------------------------------------------------------
    | Application Debug Mode
    |--------------------------------------------------------------------------
    |
    | When your application is in debug mode, detailed error messages with
    | stack traces will be shown on every error that occurs within your
    | application. If disabled, a simple generic error page is shown.
    |
     */

    'debug' => (bool) env('APP_DEBUG', false),
    'dd_on_error' => (bool) env('DD_ON_ERROR', false),
    'debugbar' => (bool) env('DEBUGBAR_ENABLED', false),
    'under_maintenance' => (bool) env('APP_UNDER_MAINTENANCE', false),

    /*
    |--------------------------------------------------------------------------
    | Application URL
    |--------------------------------------------------------------------------
    |
    | This URL is used by the console to properly generate URLs when using
    | the Artisan command line tool. You should set this to the root of
    | the application so that it's available within Artisan commands.
    |
     */

    'url' => env('APP_URL', 'http://localhost'),
    'home_redirect' => env('APP_HOME_REDIRECT'),

    /*
    |--------------------------------------------------------------------------
    | Application Timezone
    |--------------------------------------------------------------------------
    |
    | Here you may specify the default timezone for your application, which
    | will be used by the PHP date and date-time functions. The timezone
    | is set to "UTC" by default as it is suitable for most use cases.
    |
     */

    'timezone' => env('APP_TIMEZONE', 'UTC'),

    'schedule_timezone' => 'Europe/London',

    /*
    |--------------------------------------------------------------------------
    | Application Locale Configuration
    |--------------------------------------------------------------------------
    |
    | The application locale determines the default locale that will be used
    | by Laravel's translation / localization methods. This option can be
    | set to any locale for which you plan to have translation strings.
    |
     */

    'locale' => env('APP_LOCALE', 'en'),

    'fallback_locale' => env('APP_FALLBACK_LOCALE', 'en'),

    'faker_locale' => env('APP_FAKER_LOCALE', 'en_US'),

    /*
    |--------------------------------------------------------------------------
    | Encryption Key
    |--------------------------------------------------------------------------
    |
    | This key is utilized by Laravel's encryption services and should be set
    | to a random, 32 character string to ensure that all encrypted values
    | are secure. You should do this prior to deploying the application.
    |
     */

    'cipher' => 'AES-256-CBC',

    'key' => env('APP_KEY'),

    'previous_keys' => [
         ...array_filter(
            explode(',', env('APP_PREVIOUS_KEYS', ''))
        ),
    ],

    /*
    |--------------------------------------------------------------------------
    | Maintenance Mode Driver
    |--------------------------------------------------------------------------
    |
    | These configuration options determine the driver used to determine and
    | manage Laravel's "maintenance mode" status. The "cache" driver will
    | allow maintenance mode to be controlled across multiple machines.
    |
    | Supported drivers: "file", "cache"
    |
     */

    'maintenance' => [
        'driver' => env('APP_MAINTENANCE_DRIVER', 'file'),
        'store' => env('APP_MAINTENANCE_STORE', 'database'),
    ],

    /*
    |--------------------------------------------------------------------------
    | Application Organisation Info
    |--------------------------------------------------------------------------
    |
    | These values provide the different information for the application
    |
     */

    'logo' => env('APP_LOGO', '/img/logo.png'),
    'slogan' => env('APP_SLOGAN'),
    'title' => env('APP_TITLE'),
    'description' => env('APP_DESCRIPTION'),
    'facebook' => env('APP_FACEBOOK'),
    'twitter' => env('APP_TWITTER'),
    'instagram' => env('APP_INSTAGRAM'),
    'tiktok' => env('APP_TIKTOK'),
    'youtube' => env('APP_YOUTUBE'),
    'github' => env('APP_GITHUB'),
    'discord' => env('APP_DISCORD'),
    'phone' => env('APP_PHONE'),
    'email' => env('APP_EMAIL'),
    'whatsapp' => env('APP_WHATSAPP'),
    'address' => env('APP_ADDRESS'),

];

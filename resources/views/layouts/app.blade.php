<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Check the Tools/Nexus Response/withHeadTitle($title) and withHeadDescription($description) section in the docs for more details -->
    <title>{{ @$head['title'] ?? config('app.name', 'Laravel') }}</title>
    <meta name="description" content="{{ @$head['description'] ?? config('app.description') }}">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Style -->
    @vite(['resources/css/app.css'])
</head>

<body class="font-sans antialiased">
    <div>
        @nexus()
    </div>

    @laravextScripts <!-- This will create a __laravext context variable -->
    @viteReactRefresh <!-- In case you're using React -->

    @vite(['resources/js/app.tsx']) <!-- In case you're using React -->
    {{-- @vite(['resources/js/app.js']) <!-- In case you're using Vue --> --}}
</body>

</html>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ config('panda.name') }}</title>
    <link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" rel="stylesheet">
    <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <script src="extend-js/jquery-3.6.0.js"></script>
</head>

<body>
    @include('layouts.navbar')
    @include('layouts.sidebar')
    <div class="panda-content">
        @include(view_index('components.breadcumb'))
        @yield('content')
    </div>
    
</body>

</html>

<?php
    if(!function_exists('view_index')){
        function view_index($path)
        {
            return $path.'.index';
        }
    }
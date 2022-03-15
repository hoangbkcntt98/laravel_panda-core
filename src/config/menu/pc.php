<?php
return [
    'home' => [
        'icon' => 'home',
        'index' => 'Home'
    ],
    'user_management' => [
        'icon' => 'people',
        'index' => 'User Management',
        'sub_menu' => [
            'admin_management' => 'Admin Management',
            'account_management' => 'Account Management'
        ]
    ],
    'lesson_management' => [
        'index' => 'Lesson Management',
        'icon' => 'menu_book',
        'sub_menu' => [
            'lesson_schedule_management' => 'Schedule Management',
            'lesson_student_management' => 'Student Management',
            'material_management' => 'Material Management'
        ]
    ],
    'personal_setting' => [
        'index' => 'Personal Setting',
        'icon' => 'manage_accounts',
        'sub_menu' => [
            'admin_management' => 'Admin Management',
            'account_management' => 'Account Management'
        ]
    ],
    'system_customization' => [
        'index' => 'System Customization',
        'icon' => 'settings_suggest',
        'sub_menu' => [
            'admin_management' => 'Admin Management',
            'account_management' => 'Account Management'
        ]
    ],
];

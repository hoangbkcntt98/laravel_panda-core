<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view(view_index('pages.home'));
})->name('home');

Route::get('/account',function(){
    return view(view_index('pages.users'));
})->name('account_management');
Route::get('/admin',function(){
    return view(view_index('pages.users'));
})->name('admin_management');
Route::get('/lesson',function(){
    return view(view_index('pages.users'));
})->name('lesson_schedule_management');
Route::get('/lesson_student',function(){
    return view(view_index('pages.users'));
})->name('lesson_student_management');
Route::get('/lesson_material',function(){
    return view(view_index('pages.users'));
})->name('material_management');
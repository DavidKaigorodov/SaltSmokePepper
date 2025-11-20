<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\SessionController;
use Illuminate\Support\Facades\Route;

Route::resource('/', HomeController::class)
        ->only(['index']);

Route::controller(SessionController::class)->group(function () {
    Route::get('/login', 'create')->middleware('guest')->name('login');
    Route::post('/login', 'store')->middleware('guest')->name('auhtificate');
    Route::post('/logout', 'destroy')->middleware('auth')->name('logout');
});

<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::resource('/', HomeController::class)
        ->only(['index']);

Route::controller(SessionController::class)->group(function () {
    Route::get('/login', 'create')->middleware('guest')->name('login');
    Route::post('/login', 'store')->middleware('guest')->name('auhtificate');
    Route::post('/logout', 'destroy')->middleware('auth')->name('logout');
});

Route::controller(RegistrationController::class)->group(function () {
    Route::get('/registration', 'create')->middleware('guest')->name('registration');
    Route::post('/registration', 'store')->middleware('guest')->name('register');
});

Route::controller(ProfileController::class)->group(function () {
    Route::get('/profile', 'edit')->middleware('auth')->name('profile');
    Route::post('/profile', 'update')->middleware('auth')->name('profile.update');
});

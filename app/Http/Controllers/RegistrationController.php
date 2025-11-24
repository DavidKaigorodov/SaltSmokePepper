<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class RegistrationController
{
    public function create()
    {
        return Inertia::render('register/ui/RegisterPage');
    }

    // public function store(StoreSessionRequest $request)
    // {
    //     if (Auth::attempt($request->only('email', 'password'), $request->input('remember')))
    //         return redirect()->route('/');

    //     return back()->withErrors(['form' => 'Неверный логин или пароль']);
    // }
}

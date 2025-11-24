<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProfileController
{
    public function edit()
    {
        return Inertia::render('profile/ui/ProfilePage');
    }
}

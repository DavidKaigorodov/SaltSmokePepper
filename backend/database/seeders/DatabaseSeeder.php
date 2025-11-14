<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(RoleSeeder::class);

        User::factory()->create([
            'name'     => 'root',
            'email'    => 'root',
            'password' => Hash::make('root'),
            'role_id'  => 1, // admin
        ]);
    }
}

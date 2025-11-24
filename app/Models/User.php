<?php

namespace App\Models;

use App\Http\Resources\SubscribeTimeLineResource;
use App\Models\UserRole;
use Carbon\CarbonImmutable;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Carbon;
use App\Models\ChangeEmailToken;

class User extends Authenticatable
{
    use HasFactory, Notifiable, SoftDeletes;

    ### Настройки
    ##################################################
    protected
    $table = 'main__users',
    $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
        'role_id',
    ],
    $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    ### Связи
    ##################################################
    public function role(): BelongsTo
    {
        return $this->belongsTo(UserRole::class, 'role_id');
    }

    public function changeEmailTokens(){
        return $this->hasMany(ChangeEmailToken::class, 'user_id');
    }
}
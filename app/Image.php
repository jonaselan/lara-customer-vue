<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Nexmo\User\User;

class Image extends Model
{
    protected $guarded = [];

    public function customer()
    {
        return $this->belongsTo(User::class);
    }
}

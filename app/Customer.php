<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $guarded = ['images'];

    public function images()
    {
        return $this->hasMany(Image::class);
    }
}

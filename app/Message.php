<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $guarded = [];

    public function receive_for()
    {
        return $this->belongsTo(User::class, 'to');
    }

    public function send_to()
    {
        return $this->belongsTo(User::class, 'from');
    }
}

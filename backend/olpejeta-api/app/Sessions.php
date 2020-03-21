<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sessions extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'session_date', 'session_period', 'user_id' 
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
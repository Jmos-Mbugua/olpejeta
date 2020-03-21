<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Users extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_name', 'user_email', 'user_contact', 'user_type','user_password'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['updated_at', 'created_at'];

    public function sightings(){
        return $this->hasMany('App\Sightings', 'user_id');
    }
}
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sightings extends Model
{

    public function user()
    {
        return $this->belongsTo('\App\Users');
    }
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'sighting_location', 'user_id', 'birds_count', 'date_taken', 'updated_at', 'created_at'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];

    public function Birds()
    {
        return $this->belongsToMany('App\Birds', 'bird_sightings');
    }
}
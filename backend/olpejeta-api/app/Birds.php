<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Birds extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'common_name', 'scientific_name', 'bird_age', 'general_status', 'conservation_status', 'species', 
        'category', 'bird_image_url', 'bird_description', 'bird_sound_url'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['updated_at', 'created_at'];

    public function Sightings()
    {
        return $this->belongsToMany('App\Sightings', 'bird_sightings');
    }
}
<?php
 
namespace App;
 
use Illuminate\Database\Eloquent\Model;
 
class Bird_sightings extends Model 
{
    public function Bird_sightings()
    {
        return $this->hasManyThrough('App\Sightings', 'App\Category');
    }
 	
}
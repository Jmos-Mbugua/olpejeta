<?php
 
namespace App;
 
use Illuminate\Database\Eloquent\Model;
 
class Sightings extends Model
{

    public function Sightings()
    {
        return $this->hasManyThrough('App\Location', 'App\Users_list');
    }
}
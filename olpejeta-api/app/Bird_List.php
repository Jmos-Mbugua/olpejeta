<?php
 
namespace App;
 
use Illuminate\Database\Eloquent\Model;
 
class Bird_List extends Model 
{
    public function Bird_List()
    {
        return $this->belongsTo('App\Species', 'foreign_key');
    }
 	
}
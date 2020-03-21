<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class ExampleController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function show($id)
    {
        //return $id;
        $species = app('db')->select("SELECT * FROM Species");
        $results = app('db')->select("SELECT * FROM Bird_list");

        return response()->json($results);
    }

    //
}

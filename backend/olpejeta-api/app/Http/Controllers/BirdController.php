<?php

namespace App\Http\Controllers;

use App\Birds;
use App\Sightings;

use Illuminate\Http\Request;

class BirdController extends Controller
{

    public function showAllBirds()
    {
        return response()->json(Birds::all());
    }

    //show all sightings from user
    public function showAllSightingsFromBirds($birds_id)
    {
        $birds = Birds::find($birds_id);
        $sightings = $birds->sightings;
        return response()->json($sightings, 200);
    }

    public function showOneBird($id)
    {
        return response()->json(Birds::find($id));
    }

    public function create(Request $request)
    {
        $birds = Birds::create($request->all());

        return response()->json($birds, 201);
    }

    public function update($id, Request $request)
    {
        $birds = Birds::findOrFail($id);
        $birds->update($request->all());

        return response()->json($birds, 200);
    }

    public function delete($id)
    {
        Birds::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}
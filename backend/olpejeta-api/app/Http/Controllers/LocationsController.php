<?php

namespace App\Http\Controllers;

use App\Locations;

use Illuminate\Http\Request;

class LocationsController extends Controller
{

    public function showAllLocations()
    {
        return response()->json(Locations::all());
    }

    public function showOneLocation($id)
    {
        return response()->json(Locations::find($id));
    }

    public function create(Request $request)
    {
        $locations = Locations::create($request->all());

        return response()->json($locations, 201);
    }

    public function update($id, Request $request)
    {
        $locations = Locations::findOrFail($id);
        $locations->update($request->all());

        return response()->json($locations, 200);
    }

    public function delete($id)
    {
        Locations::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}
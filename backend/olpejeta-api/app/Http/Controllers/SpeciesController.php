<?php

namespace App\Http\Controllers;

use App\Species;

use Illuminate\Http\Request;

class SpeciesController extends Controller
{

    public function showAllSpecies()
    {
        return response()->json(Species::all());
    }

    public function showOneSpecies($id)
    {
        return response()->json(Species::find($id));
    }

    public function create(Request $request)
    {
        $species = Species::create($request->all());

        return response()->json($species, 201);
    }

    public function update($id, Request $request)
    {
        $species = Species::findOrFail($id);
        $species->update($request->all());

        return response()->json($species, 200);
    }

    public function delete($id)
    {
        Species::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}
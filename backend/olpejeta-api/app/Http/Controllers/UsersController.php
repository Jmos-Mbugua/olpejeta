<?php

namespace App\Http\Controllers;

use App\Users;
use App\Sightings;

use Illuminate\Http\Request;

class UsersController extends Controller
{
    //Function to show all users
    public function showAllUsers()
    {
        return response()->json(Users::all());
    }

    //Showall user sightings
    

    //show all sightings from user
    public function showAllSightingsFromUser($user_id)
    {
        $users = Users::find($user_id);
        $sightings = $users->sightings;
        return response()->json($sightings, 200);
    }

    //Show one user
    public function showOneUser($id)
    {
        return response()->json(Users::find($id));
    }

    //Show one sighting
    public function showOneSighting($user_id, $id)
    {
        $user = Users::find($user_id);
        $sighting = $user->sightings
                       ->where('id', '=', $id)
                       ->first();
        return response()->json($sighting, 200);
    }

    //Create a new user
    public function create(Request $request)
    {
        $users = Users::create($request->all());

        return response()->json($users, 201);
    }

    //Create a user sighting    
    public function createSighting($user_id, Request $request)
    {
        $user = Users::find($user_id);
        $sightings = Sightings::create([
            'sighting_location' => $request->sighting_location,
            'user_id' => $user->id,
            'birds_count' => $request->birds_count,
            'date_taken' => $request->date_taken
        ]);
        return response()->json($sightings, 201);
    }


    //Update user details
    public function update($id, Request $request)
    {
        $users = Users::findOrFail($id);
        $users->update($request->all());
        return response()->json($users, 200);
    }

    //Delete a user
    public function delete($id)
    {
        Users::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}
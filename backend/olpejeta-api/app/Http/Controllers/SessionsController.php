<?php

namespace App\Http\Controllers;

use App\Sessions;
use Illuminate\Http\Request;

class SessionsController extends Controller
{
    //Show all sessions
    public function showAllSessions()
    {
        return response()->json(Sessions::all());
    }

    //Get one session by id
    public function showOneSession($id)
    {
        return response()->json(Sessions::find($id));
    }

    //create a new session
    public function create(Request $request)
    {
        $sessions = Sessions::create($request->all());

        return response()->json($sessions, 201);
    }

    //Update a session
    public function update($id, Request $request)
    {
        $sessions = Sessions::findOrFail($id);
        $sessions->update($request->all());

        return response()->json($sessions, 200);
    }

    //Delete a session
    public function delete($id)
    {
        Sessions::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}
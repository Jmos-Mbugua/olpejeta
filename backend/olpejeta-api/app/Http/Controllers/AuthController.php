<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use  App\Users;

class AuthController extends Controller
{
    /**
     * Store a new user.
     *
     * @param  Request  $request
     * @return Response
     */
    public function register(Request $request)
    {
        //validate incoming request 
        $this->validate($request, [
            'user_name' => 'required|string',
            'user_email' => 'required|email|unique:users',
            'user_password' => 'required|confirmed',
        ]);

        try {

            $user = new Users;
            $user->user_name = $request->input('user_name');
            $user->user_email = $request->input('user_email');
            // $user->user_type = $request->input('user_type');
            $plainPassword = $request->input('user_password');
            $user->user_password = app('hash')->make($plainPassword);

            $user->save();

            //return successful response
            return response()->json(['user' => $user, 'message' => 'Successfully registered'], 201);

        } catch (\Exception $e) {
            //return error message
            return response()->json(['message' => $e], 409);
        }

    }


}
<?php

namespace App\Http\Controllers;

use App\Admin;

use Illuminate\Http\Request;

class AdminController extends Controller
{

    public function showAllAdmin()
    {
        return response()->json(Admin::all());
    }

    public function showOneAdmin($id)
    {
        return response()->json(Admin::find($id));
    }

    public function create(Request $request)
    {
        $admin = Admin::create($request->all());

        return response()->json($admin, 201);
    }

    public function update($id, Request $request)
    {
        $admin = Admin::findOrFail($id);
        $admin->update($request->all());

        return response()->json($admin, 200);
    }

    public function delete($id)
    {
        Admin::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}
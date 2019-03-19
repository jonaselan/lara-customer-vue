<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ImagesController extends Controller
{
    public function store(Request $request)
    {
        if (count($request->images)) {
            foreach ($request->images as $image) {
                $image->store('public');
            }
        }
        return response()->json([
            "message" => "Done"
        ]);
    }
}

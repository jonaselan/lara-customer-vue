<?php

namespace App\Http\Controllers;

use App\Customer;
use App\Http\Requests\CustomerRequest;
use App\Image;

class CustomersController extends Controller
{
    public function index()
    {
        $customers = Customer::latest()->get();

        return response()
                ->json(["customers" => $customers], 200);
    }

    public function show($id)
    {
        $customer = Customer::with('images')->find($id)->toArray();

        return response()
                ->json(["customer" => $customer], 200);
    }
    public function store(CustomerRequest $request)
    {
        $customer = Customer::create($request->all());

        if ($customer && count($request->images)) {
            foreach ($request->images as $image) {
                $customer->images()->create([
                    "url" => $image->store('public')
                ]);
            }
        }

        return response()
              ->json(["customer" => $customer], 200);
    }

    public function delete($id)
    {
        $msg = "fail";

        try {
            if (Customer::find($id)->delete()){
                $msg = "done";
            }
        }
        catch (\Exception $e) {
            return response()
                ->json(['message' => $e->getMessage(), 500]);
        }

        return response()
            ->json(['message' => $msg, 200]);
    }
}

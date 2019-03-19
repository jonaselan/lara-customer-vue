<?php

namespace App\Http\Controllers;

use App\Customer;
use App\Http\Requests\CustomerRequest;

class CustomersController extends Controller
{
    public function index()
    {
        $customers = Customer::all();
        return response()
                ->json(["customers" => $customers], 200);
    }
    public function show($id)
    {
        $customer = Customer::find($id);
        return response()
                ->json(["customer" => $customer], 200);
    }
    public function store(CustomerRequest $request)
    {
        $customer = Customer::create($request->all());
        return response()
              ->json(["customer" => $customer], 200);
    }
}

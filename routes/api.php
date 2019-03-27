<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'auth'], function ($router) {
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
});

Route::group(['middleware' => 'jwt.auth', 'prefix' => 'customers'], function ($router) {
    Route::get('', 'CustomersController@index');
    Route::post('', 'CustomersController@store');
    Route::get('{id}', 'CustomersController@show');
    Route::delete('{id}', 'CustomersController@delete');
});

Route::group(['middleware' => 'jwt.auth', 'prefix' => 'conversation'], function ($router) {
    Route::get('getUsers', 'ConversationsController@getUsers');
    Route::get('{id}', 'ConversationsController@getMessagesFor');
    Route::post('send', 'ConversationsController@send');
});

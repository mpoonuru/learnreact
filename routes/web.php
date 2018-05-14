<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('dashboard');
// });

Route::get('/', function () {
    return redirect('dash');
});
Route::get('/api/status', function () {
    return response()->json(['hcmqueue' => 'OPEN', 'elmqueue' => 'OPEN', 'crmqueue' => 'OPEN', 'ihqueue' => 'CLSE', 'inqueueuow' => 'PYTHON', 'reluow' => 'BUILD']);
});

Route::post('/hc',function(){
    return response()->json(['id' => '1', 'name' => 'Abigail', 'state' => 'CA']);
});
Route::post('/tdp', function () {
    return response()->json(['id'=> '1','name' => 'Abigail', 'state' => 'CA']);
});
Route::view('dash','dashboard');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

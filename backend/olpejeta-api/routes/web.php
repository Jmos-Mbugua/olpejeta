<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});





//birds routes
$router->group(['prefix' => 'api/'], function () use ($router) {
    $router->get('birds',  ['uses' => 'BirdController@showAllBirds']);
    $router->get('/birds/{bird_id}/sightings', ['uses' => 'BirdController@showAllSightingsFromBirds']);


    $router->get('birds/{id}', ['uses' => 'BirdController@showOneBird']);
  
    $router->post('birds', ['uses' => 'BirdController@create']);
  
    $router->delete('birds/{id}', ['uses' => 'BirdController@delete']);
  
    $router->put('birds/{id}', ['uses' => 'BirdController@update']);
  });


  //Species routes
  $router->group(['prefix' => 'api/'], function () use ($router) {
    $router->get('species',  ['uses' => 'SpeciesController@showAllSpecies']);
  
    $router->get('species/{id}', ['uses' => 'SpeciesController@showOneSpecies']);
  
    $router->post('species', ['uses' => 'SpeciesController@create']);
  
    $router->delete('species/{id}', ['uses' => 'SpeciesController@delete']);
  
    $router->put('species/{id}', ['uses' => 'SpeciesController@update']);
  });


  //Category routes
  $router->group(['prefix' => 'api/'], function () use ($router) {
    $router->get('categories',  ['uses' => 'CategoryController@showAllCategories']);
  
    $router->get('categories/{id}', ['uses' => 'CategoryController@showOneCategory']);
  
    $router->post('categories', ['uses' => 'CategoryController@create']);
  
    $router->delete('categories/{id}', ['uses' => 'CategoryController@delete']);
  
    $router->put('categories/{id}', ['uses' => 'CategoryController@update']);
  });


  //Sightings routes
  $router->group(['prefix' => 'api/'], function () use ($router) {
    $router->get('sightings',  ['uses' => 'SightingsController@showAllSightings']);
    $router->get('/sightings/{sighting_id}/birds', ['uses' => 'SightingsController@showAllBirdsFromSightings']);

  
    $router->get('sightings/{id}', ['uses' => 'SightingsController@showOneSighting']);
  
    $router->post('sightings', ['uses' => 'SightingsController@create']);
  
    $router->delete('sightings/{id}', ['uses' => 'SightingsController@delete']);
  
    $router->put('sightings/{id}', ['uses' => 'SightingsController@update']);
  });


  //Location routes
  $router->group(['prefix' => 'api/'], function () use ($router) {
    $router->get('locations',  ['uses' => 'LocationsController@showAllLocations']);
  
    $router->get('locations/{id}', ['uses' => 'LocationsController@showOneLocation']);
  
    $router->post('locations', ['uses' => 'LocationsController@create']);
  
    $router->delete('locations/{id}', ['uses' => 'LocationsController@delete']);
  
    $router->put('locations/{id}', ['uses' => 'LocationsController@update']);
  });


  //Users routes
  $router->group(['prefix' => 'api/'], function () use ($router) {
    $router->get('users',  ['uses' => 'UsersController@showAllUsers']);

    $router->get('users/{id}', ['uses' => 'UsersController@showOneUser']);
  
    $router->post('users', ['uses' => 'UsersController@create']);
    $router->Post('users/{id}/sightings',  ['uses' => 'UsersController@createSighting']);

    $router->delete('users/{id}', ['uses' => 'UsersController@delete']);
  
    $router->put('users/{id}', ['uses' => 'UsersController@update']);

    // Find Books
    
    $router->get('/users/{user_id}/sightings', ['uses' => 'UsersController@showAllSightingsFromUser']);
    $router->get('/users/{user_id}/sightings/{id}', ['uses' => 'UsersController@showOneSighting']);
  });

  

  //Sessions routes
  $router->group(['prefix' => 'api/'], function () use ($router) {
    $router->get('sessions',  ['uses' => 'SessionsController@showAllSessions']);
      
    $router->get('sessions/{id}', ['uses' => 'SessionsController@showAllSession']);
  
    $router->post('sessions', ['uses' => 'SessionsController@create']);
  
    $router->delete('sessions/{id}', ['uses' => 'SessionsController@delete']);
  
    $router->put('sessions/{id}', ['uses' => 'SessionsController@update']);
  });

  //Admin routes
  $router->group(['prefix' => 'api/'], function () use ($router) {
    $router->get('admin',  ['uses' => 'AdminController@showAllAdmin']);
  
    $router->get('admin/{id}', ['uses' => 'AdminController@showOneAdmin']);
  
    $router->post('admin', ['uses' => 'AdminController@create']);
  
    $router->delete('admin/{id}', ['uses' => 'AdminController@delete']);
  
    $router->put('admin/{id}', ['uses' => 'AdminController@update']);
  });


  $router->group(['prefix' => 'api'], function () use ($router) {
    // Matches "/api/register
    $router->post('register', 'AuthController@register');
 
 });


  







 

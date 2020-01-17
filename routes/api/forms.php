<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

Route::get('/inbox/{slug?}', 'InboxController@index');

Route::get('/forms/responses', 'ResponseController@index');
Route::apiResource('/forms/{slug}/responses', 'ResponseController');
Route::apiResource('/forms', 'FormController');

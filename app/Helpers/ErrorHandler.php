<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;

class ErrorHandler
{
    public static function handleException($e)
    {
        $request = request();
        $route = Route::current();

        if (env("APP_ENV") === "local") {
            dd($e);
        }

        $logData = [
            'exception' => $e,
            'route' => [
                'name' => optional($route)->getName(),
                'uri' => optional($route)->uri(),
                'action' => optional($route)->getActionName(),
            ],
            'request' => [
                'method' => $request->method(),
                'url' => $request->fullUrl(),
                'input' => $request->all(),
                'headers' => $request->headers->all(),
            ],
        ];

        Log::info('An error occurred', $logData);

        return abort(500);
    }

    public static function apiErrorResponse($errorMessage)
    {
        if (env("APP_ENV") === "local") {
            return [
                'success' => false,
                'message' => $errorMessage,
            ];
        }

        return [
            'success' => false,
            'message' => "Something went wrong! Process not completed",
        ];
    }
}

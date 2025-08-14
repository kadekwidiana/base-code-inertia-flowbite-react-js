<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Symfony\Component\HttpFoundation\Response;

class ApiResponse
{
    /**
     * Success response
     */
    public static function success(
        $data,
        string $message = 'Success',
        int $statusCode = Response::HTTP_OK
    ) {
        $response = [
            'success' => true,
            'message' => $message,
            'timestamp' => now()->toIso8601String(),
        ];

        if (isset($data['pagination'])) {
            $response['pagination'] = $data['pagination'];
            $response['data'] = $data['data'];
        } else {
            $response['data'] = $data;
        }

        return response()->json($response, $statusCode);
    }

    /**
     * Error response
     */
    public static function error(
        $data = null,
        string $message = 'Something went wrong',
        int $statusCode = Response::HTTP_INTERNAL_SERVER_ERROR
    ) {
        $request = request();
        $route = Route::current();

        $logData = [
            'exception' => $message,
            'route' => [
                'name' => $route?->getName(),
                'uri' => $route?->uri(),
                'action' => $route?->getActionName(),
            ],
            'request' => [
                'method' => $request->method(),
                'url' => $request->fullUrl(),
                'input' => $request->all(),
                'headers' => $request->headers->all(),
            ],
        ];

        Log::error("{$message} - {$statusCode} - " . json_encode($logData));

        $response = [
            'success' => false,
            'message' => $message,
            'timestamp' => now()->toIso8601String()
        ];

        if ($data) {
            $response['errors'] = $data;
        }

        return response()->json($response, $statusCode);
    }
}

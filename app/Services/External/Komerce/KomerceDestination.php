<?php

namespace App\Services\External\Komerce;

use App\Helpers\ErrorHandler;
use App\Models\RajaOngkirConfig;
use Exception;
use Illuminate\Support\Facades\Http;

class KomerceDestination
{
    public static function searchDestination(
        ?string $search = null,
        ?int $limit = null,
        ?int $offset = null
    ) {
        static $config = null;
        if ($config === null) {
            $config = RajaOngkirConfig::getActiveConfig();
        }

        $baseUrl = $config->api_url ?? env('KOMERCE_API_URL');
        $key = $config->api_key ?? env('KOMERCE_API_KEY');
        $url = $baseUrl . '/api/v1/destination/domestic-destination';

        $queryParams = [
            'search' => $search,
            'limit' => $limit,
            'offset' => $offset
        ];

        try {
            $response = Http::withHeaders([
                'key' => $key
            ])->get($url, $queryParams);

            if ($response->successful()) {
                return [
                    'success' => true,
                    'code' => $response->status(),
                    'data' => $response->json()
                ];
            }

            $err = json_decode($response->body());

            return [
                'success' => false,
                'code' => $response->status(),
                'message' => $response->json('message') ?? 'API request failed.',
                'error' => $err
            ];
        } catch (Exception $e) {
            return ErrorHandler::apiErrorResponse($e->getMessage());
        }
    }
}

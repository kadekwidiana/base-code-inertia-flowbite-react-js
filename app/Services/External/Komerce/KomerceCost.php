<?php

namespace App\Services\External\Komerce;

use App\Helpers\ErrorHandler;
use App\Models\RajaOngkirConfig;
use Exception;
use Illuminate\Support\Facades\Http;

class KomerceCost
{
    public static function checkCost(
        int $destination,
        int $weight,
        string $courier,
        ?int $price
    ) {
        static $config = null;
        if ($config === null) {
            $config = RajaOngkirConfig::getActiveConfig();
        }

        $baseUrl = $config->api_url ?? env('KOMERCE_API_URL');
        $key = $config->api_key ?? env('KOMERCE_API_KEY');
        $originDefault = (int) ($config->origin_default ?? env('KOMERCE_ORIGIN_DEFAULT'));

        $url = $baseUrl . '/api/v1/calculate/domestic-cost';

        try {
            $response = Http::withHeaders([
                'key' => $key
            ])->asForm()->post($url, [
                'origin' => $originDefault,
                'destination' => $destination,
                'weight' => $weight,
                'courier' => $courier,
                'price' => $price
            ]);

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

<?php

namespace App\Services\External\RajaOngkir;

use App\Helpers\ErrorHandler;
use Exception;
use Illuminate\Support\Facades\Http;

class RajaOngkirCost
{
    public static function checkCost(
        string $origin,
        string $destination,
        int $weight,
        string $courier
    ) {
        $url = env('RAJA_ONGKIR_API_URL') . '/cost';
        $key = env('RAJA_ONGKIR_API_KEY');

        try {
            $response = Http::withHeaders([
                'key' => $key
            ])->post($url, [
                'origin' => $origin,
                'destination' => $destination,
                'weight' => $weight,
                'courier' => $courier
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

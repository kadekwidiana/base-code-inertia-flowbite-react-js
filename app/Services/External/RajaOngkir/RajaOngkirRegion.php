<?php

namespace App\Services\External\RajaOngkir;

use App\Helpers\ErrorHandler;
use Exception;
use Illuminate\Support\Facades\Http;

class RajaOngkirRegion
{
    public static function getProvince()
    {
        $url = env('RAJA_ONGKIR_API_URL') . '/province';
        $key = env('RAJA_ONGKIR_API_KEY');

        try {
            $response = Http::withHeaders([
                'key' => $key
            ])->get($url);

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

    public static function getCity(
        ?string $province = null,
    ) {
        $url = env('RAJA_ONGKIR_API_URL') . '/city';
        $key = env('RAJA_ONGKIR_API_KEY');

        $queryParams = [
            'province' => $province
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

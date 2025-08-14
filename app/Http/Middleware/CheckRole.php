<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, ?string $role = null): Response
    {
        if ($role === 'ADMIN' && Auth::user()->role !== 'ADMIN') {
            return Inertia::render('Error/Error', ['status' => 403])
                ->toResponse($request)
                ->setStatusCode(403);
        }

        if (Auth::user()->role === 'CUSTOMER') {
            return Inertia::render('Error/Error', ['status' => 403])
                ->toResponse($request)
                ->setStatusCode(403);
        }

        return $next($request);
    }
}

<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Laravext\Middleware;
use Symfony\Component\HttpFoundation\Response;

class HandleLaravextRequests extends Middleware
{
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
            ],
            'site' => [
                'name' => config('app.name'),
                'email' => config('app.email'),
                'phone' => config('app.phone'),
                'logo' => config('app.logo'),
                'slogan' => config('app.slogan'),
                'title' => config('app.title'),
                'description' => config('app.description'),
                'address' => config('app.address'),
                'facebook' => config('app.facebook'),
                'twitter' => config('app.twitter'),
                'instagram' => config('app.instagram'),
                'tiktok' => config('app.tiktok'),
                'youtube' => config('app.youtube'),
                'github' => config('app.github'),
                'discord' => config('app.discord'),
                'whatsapp' => config('app.whatsapp'),
            ],
        ]);
    }
}

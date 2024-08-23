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
            'motivation' => 'You have bills to pay',
            'app_name' => 'My App With An Original Name',
        ]);
    }
}

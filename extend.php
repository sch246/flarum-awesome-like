<?php

/*
 * This file is part of sch246/flarum-awesome-like.
 *
 * Copyright (c) 2024 sch246.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Sch246\FlarumAwesomeLike;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
    new Extend\Locales(__DIR__.'/locale'),


    (new Extend\Settings())
        ->serializeToForum('sch246-awesome-like.like', 'sch246-awesome-like.like', 'strval')
        ->serializeToForum('sch246-awesome-like.reply', 'sch246-awesome-like.reply', 'strval')
];

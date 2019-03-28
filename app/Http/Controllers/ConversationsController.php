<?php

namespace App\Http\Controllers;

use App\User;
use App\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ConversationsController extends Controller
{
    public function getUsers()
    {
        // get all users except the authenticated one
        $users = User::where('id', '!=', auth()->id())->get();

        // get a collection of items where sender_id is the user who sent us a message
        // and messages_count is the number of unread messages we have from him
        $unreadIds = Message::select(DB::raw("'from' as sender_id, count('from') as messages_count"))->where('to', auth('api')->id())
            ->where('read', false)
            ->groupBy('from')
            ->get();

        // add an unread key to each user with the count of unread messages
        $users = $users->map(function($user) use ($unreadIds) {
            $userUnread = $unreadIds->where('sender_id', $user->id)->first();

            $user->unread = $userUnread ? $userUnread->messages_count : 0;

            return $user;
        });

        return response()->json([
            'users' => $users
        ]);
    }

    public function getMessagesFor($id)
    {
        // mark all messages with the selected user as read
        Message::where('from', $id)
            ->where('to', auth('api')->id())
            ->update(['read' => true]);

        // get all messages between the authenticated user and the selected user
        $messages = Message::where(function($q) use ($id) {
                            $q->where('from', auth('api')->id());
                            $q->where('to', $id);
                        })->orWhere(function($q) use ($id) {
                            $q->where('from', $id);
                            $q->where('to', auth('api')->id());
                        })
                        ->get();

        return response()->json([
            'messages' => $messages
        ]);

    }

    public function send(Request $request)
    {
        $message = Message::create([
            'from' => auth('api')->id(),
            'to' => $request->user_id,
            'text' => $request->text
        ]);

//        broadcast(new NewMessage($message));

        return response()->json($message);
    }
}

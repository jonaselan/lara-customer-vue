<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
      \App\User::create(['name' => 'user1', 'email' => 'email@email.com', 'password' =>bcrypt('123123')]);
    }
}

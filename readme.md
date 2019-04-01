# Lara-costumer-vue

### Studying:

- Authentication using JWT
- Vuex
- laravel-echo

### What was done here:

- CRUD of customers
- Image upload
- Use the major concepts about Vue and Vuex
- API authentication
- chat with others users
    > here I have a problem because Laravel-echo needs to session for works fine, 
    and my authentication has not done this way ¯\ (ツ)_/¯ But the chat was finished
    
### Try out:

```bash
$ composer install

# after configure db 
$ php artisan migrate 

$ factory('App\User', 10)->create()

$ factory('App\Message', 100)->create()

# keep running for compile assets...
$ npm run watch

```

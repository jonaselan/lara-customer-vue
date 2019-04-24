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
- Chat with others users
    > here I have a problem because Laravel-echo needs to session for works fine, 
    and my authentication has not done this way ¯\ (ツ)_/¯ But the chat was finished
- Ability for change backend source: local ou [external](https://github.com/jonaselan/js-customer-api)
- For the external source, be able to filter (using elasticsearch)

### Try out:

```bash
$ composer install

# after configure db 
$ php artisan migrate 

$ php artisan db:seed

# keep running for compile assets...
$ npm run watch

# turn on the serve (preferably on port 4000)
$ php artisan serve --port=4000

```

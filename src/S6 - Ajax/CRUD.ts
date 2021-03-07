import { ajax } from "rxjs/ajax";

/**
 * Para trabajar con el CRUD, podemos hacerlo de 2 maneras distintas
 */

const url = 'https://httpbin.org/delay/1';

/**
 * Manera 1: por función
 */
// GET
ajax.get(url, { headers: 'Encabezados' })

// POST
ajax.post(url, {body: 'Body'}, { headers: 'Encabezados' })

// PUT
ajax.put(url, {body: 'Body'}, { headers: 'Encabezados' })

// DELETE
ajax.delete(url, {body: 'Body'})


/**
 * Manera 2: por objeto
 */

const metodo: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET';

ajax({
    url,
    headers: {
        'mi-Token': 'ABC123'
    },
    body: {
        body: 'Body'
    },
    method: metodo
}).subscribe()
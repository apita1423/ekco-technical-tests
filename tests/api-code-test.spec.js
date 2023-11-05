import { test, expect } from '@playwright/test';

//Test Case 1 - Create User/Log In/Delete User
// Step 1 - Register/Create User
test('test POST Register API', async({ request }) => {
    const response = await request.post('https://reqres.in/api/register', {
        data: {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }
    });
    expect(response.status()).toBe(200);
});

// Step 2 - Log In
test('test POST Login API', async({ request }) => {
    const response = await request.post('https://reqres.in/api/login', {
        data: {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }
    });
    expect(response.status()).toBe(200);
});

// Step 3 - Delete
test('test DELETE API', async({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/2');
    expect(response.status()).toBe(204);
});

// Test Case 2 - Get Single User/Update User
// Step 1 - Get Single User
test('test GET single user API', async({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2', {
        data: {
            "data": {
                "id": 2,
                "email": "janet.weaver@reqres.in",
                "first_name": "Janet",
                "last_name": "Weaver",
                "avatar": "https://reqres.in/img/faces/2-image.jpg"
            },
            "support": {
                "url": "https://reqres.in/#support-heading",
                "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
            }
        }
    });
    expect(response.status()).toBe(200);
});

// Step 2 - Update User
test('test PUT update API', async({ request }) => {
    const response = await request.put('https://reqres.in/api/users/2', {
        data: {
            "name": "morpheus",
            "job": "zion resident"
        }
    });
    expect(response.status()).toBe(200);
});
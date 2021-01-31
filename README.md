# contacts

[![Build Status: Linux](https://travis-ci.org/dlwhitehurst/contacts.svg?branch=main)](https://travis-ci.org/dlwhitehurst/contacts)


This project is a NodeJS/Express web application REST API that utilizes a 
relational database MySQL for its data and persistence.

### Endpoints
- /v1/contacts GET
- /v1/contacts POST
- /v1/contacts DELETE (warning all Contacts)
- /v1/contacts/{id} GET
- /v1/contacts/{id} PUT
- /v1/contacts/{id} DELETE
- /api-docs Swagger API Specification

### Prerequisites

Node and NPM are required on your system prior to building or running this 
application locally. You can however, download NodeJS and with that installation
you get Node Package Manager (NPM).

If you do not have NodeJS, you can get it here: https://nodejs.org/en/download/

### Build

A NodeJS/Express application has NPM dependencies but this software repository
is not the venue to host them. This project however, has a `package.json` file
that specifies these dependencies and the NPM utility can be used to populate
your `contacts` code base with the dependencies it needs.

```shell
npm install
```

This command when run at the parent directory `contacts/` will download and
install all the application's dependencies locally in a folder or directory 
called `node-modules`. Once everything is in place, you need to establish a 
database for the application to use for persistence.

For a pre-configured, pre-populated MySQL database on localhost, you can clone
the `contacts-db` project (https://github.com/dlwhitehurst/contacts-db) and 
use Docker to run it locally.

Once the database is running, we need to export ENV variables for the `contacts`
application to use for its database connection. What I'm describing is NOT for
production use. The `contacts` application looks for specific ENV vars such as
username, password, host, and schema for it to connect via socket on port 3306 
(mysql default port). For MicroK8S, a Kubernetes Secret object will be used to
protect sensitive information such as username and password.

Assign the following ENV variables for our localhost testing.

```shell
export DB_HOST='locahost'
export DB_USERNAME='root'
export DB_PASSWORD='oursecret'
export DB_SCHEMA='reference'
```
With our exports in place and the Node dependencies downloaded, we can now start
the `contacts` application on localhost.

```shell
npm start
```

You should see output like so:

```shell
> contacts@1.0.0 start C:\cygwin64\home\jwlyn\Development\MicroK8S\contacts
> node server.js

Server is running on port 3000.
```

You can use curl to test the application or just open a browser for the GET-
contacts call. Here's a curl command to see if your application is running.

```shell
curl -i -X GET http://localhost:3000/v1/contacts
```
--- 
```shell
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 685
ETag: W/"2ad-UawkcWvyjVirpjS17e3jWBj8D9k"
Date: Sun, 31 Jan 2021 22:58:45 GMT
Connection: keep-alive
Keep-Alive: timeout=5

[{"id":12,"name":"David L. Whitehurst","phone":"212-617-9946","email":"dlwhitehu
rst@gmail.com"},{"id":13,"name":"Bob Smith","phone":"919-812-3498","email":"bsmi
th@gmail.com"},{"id":14,"name":"Sue Jones","phone":"919-605-4592","email":"sjone
s@gmail.com"},{"id":15,"name":"Sanjiv Kumar","phone":"818-222-6529","email":"ssk
umar@yahoo.com"},{"id":16,"name":"Robert Kolzsky","phone":"566-324-9898","email"
:"kolzsky56@gmail.com"},{"id":17,"name":"Betty Maelik","phone":"757-455-9832","e
mail":"1maelik@betty.com"},{"id":18,"name":"John Rutherford III","phone":"294-72
1-1802","email":"jr3@gmail.com"},{"id":19,"name":"Nellie Halliford","phone":"405
-222-7982","email":"nhalliford94@gmail.com"}]
```
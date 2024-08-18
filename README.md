# Nest.js Microservices with MySQL & Docker

This repository contains 3 Nest.js projects:

- online-bookstore
- book-service
- order-service

# Getting Started

The best way to set this project up is by using Docker.

1. Pull down this repository and make sure you install each projects' dependencies by running `npm run install`.

2. Ensure Docker is running then run `docker-compose up --build` to build the container, images, and pull down the mysql image from Docker.

3. Verify that all services are up and running. The Server runs on port 3000.

# Application Structure

### API Gateway

This is a application that uses both HTTP and TCP as sources to listen to requests from. This is the entry point to the entire platform. It forwards the request by publishing a message to the server, and then the server distributes requests to the services.

### Book Microservice

This is a CRUD opration microservice that have the following services - add-book, book-details/:bookID, all-books, edit-book/:bookID, and remove-book/:bookID APIs to create, update and delete records from the books table.

### Order Microservice

In this microservices following services defined - create-order, order-details/:orderID, all-user-orders/:userID, and update-order-status/:orderID

### Data Modeling
DTO models are used

### CRUD Operations
Both Book and Order services have CRUD operation APIs

### Microservices Architecture
Two separate microservices book-service (Book) & order-service (Order) are created, both are internally connected, and managed by the API Gateway (online-bookstore).

### Communication
TCP transporters are used to communicate between microservices.

### Transaction Management
Transaction implemented for the create-order API in the order-service project, The create-order API stores data in orders and order_items table. Storing data in both tables is managed by the transaction.
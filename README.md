Job Portal — Backend API

Job Portal is a backend API built with Node.js, Express, and MongoDB that powers a simple hiring platform. It supports creating jobs, applying to jobs, listing applicants, and managing application status.

Project Overview =>
This repo contains the backend for a Job Portal application. It exposes RESTful endpoints to:
Create and manage job postings
Allow users to apply to jobs
Let admins view applicants and update application statuses

Features
JWT-based authentication middleware to protect routes
Job CRUD operations
Application formation when a user applies to a job
Relationship population (Application → Job → Company) for easy reads
Admin endpoints to list applicants and change status
Basic validations and meaningful HTTP responses

Tech Stack
Node.js (ES Modules)
Express
MongoDB + Mongoose
JWT for authentication
nodemon (development)

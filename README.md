# Mentorship Management System

## Introduction

The Mentorship Management System is a comprehensive web-based application designed to facilitate mentorship programs. It serves three primary user roles: Users, Students, and Teachers/Mentors. This application streamlines communication, assignment management, and learning resources distribution, enhancing the mentorship experience.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Frontend](#frontend)
   - [Admin Stuff](#admin-stuff)
   - [Chat](#chat)
   - [Home](#home)
   - [Login](#login)
   - [Student Stuff](#student-stuff)
   - [Teacher Stuff](#teacher-stuff)
3. [Backend](#backend)
   - [Auth](#auth)
   - [Models](#models)
   - [Routes](#routes)
   - [Student Submit](#student-submit)
   - [index.js](#indexjs)
4. [Getting Started](#getting-started)
   - [Clone Repository](#clone-repository)
   - [Install Dependencies](#install-dependencies)
   - [Start Backend Server](#start-backend-server)
   - [Start Frontend Application](#start-frontend-application)
   - [Access the Application](#access-the-application)
5. [Contributing](#contributing)
6. [License](#license)
7. [Acknowledgments](#acknowledgments)

## Project Structure

### Frontend

#### Admin Stuff

- `admin-dashboard`: The admin dashboard with a welcome page.
- `view-login-data`: Manage student login data.

#### Chat

- `chat`: A chat feature accessible to both students and teachers/mentors.

#### Home

- `home`: The landing page of the application.

#### Login

- `login`: Common login and registration based on user roles.

#### Student Stuff

- `student-dashboard`: The welcome page for students.
- `submission-form`: Allows students to submit assignments and forms.
- `video-content`: Contains videos provided/uploaded by mentors for student download.

#### Teacher Stuff

- `assigning-marks`: Enables teachers to assign marks for student submissions.
- `teacher-dashboard`: The welcome page for teachers.
- `upload-videos`: Allows teachers to upload videos for students.

### Backend

#### Auth

- `auth`: Handles login data management.

#### Models

- `models`: Defines MongoDB models for chat messages.

#### Routes

- `routes`: Contains all API routes for the application.

#### Student Submit

- `student-submit`: Manages student form submissions.

#### index.js

- `index.js`: Entry point for the application, including MongoDB connection and setup.

## Getting Started

To set up and run this project locally, follow these steps:

### Clone Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/SiddharthChitrala/mentorship-management.git
cd mentorship-management


## Install Dependencies
Install dependencies for both the frontend and backend:

# Install frontend dependencies
cd smart-assignment-frontend
npm install

# Install backend dependencies
cd ../smart-assignment-backend
npm install

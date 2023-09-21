# Mentorship Management MEAN Stack Project

Welcome to the Mentorship Management project! This web application facilitates mentorship relationships between teachers/mentors and students, providing a platform for communication, assignment submission, and resource sharing.

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Installation](#installation)
- [Application Explanation](#application-explanation)
- [Conclusion](#conclusion)

## Introduction

Mentorship Management is a MEAN (MongoDB, Express.js, Angular, Node.js) stack-based web application designed to streamline mentorship activities. It aims to create a seamless experience for administrators, teachers/mentors, and students involved in mentorship programs.

## Project Structure

### Frontend

The frontend of the application is responsible for the user interface and user experience. Here's an overview of the frontend directory structure:

- `/admin-stuff/admin-dashboard`: Welcome page for administrators.
- `/admin-stuff/view-login-data`: View login data for students.
- `/chat`: Real-time chat for students and teachers/mentors.
- `/home`: Landing page.
- `/login`: Common login and registration based on user roles.
- `/student-stuff/student-dashboard`: Welcome page for students.
- `/student-stuff/submission-form`: Assignment submission.
- `/student-stuff/video-content`: Access videos provided by mentors.
- `/teacher-stuff/assigning-marks`: Teachers/mentors can assign marks.
- `/teacher-stuff/teacher-dashboard`: Welcome page for teachers/mentors.
- `/teacher-stuff/upload-videos`: Upload videos for students.

### Backend

The backend of the application handles data storage, retrieval, and overall application logic. Here's an overview of the backend directory structure:

- `/auth`: User authentication and login data.
- `/models`: Data models, including chat messages.
- `/routes`: API routes.
- `/student-submit`: Handles student form submission.
- `/index.js`: Main entry point for the application, including MongoDB connection.

## Installation

To run the application:

1. Clone this repository:

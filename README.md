# Mentorship Management MEAN Stack Project

Welcome to Mentorship Management, where mentorship experiences are enhanced through technology. Our MEAN stack application facilitates teacher/mentor-student relationships by offering tools for seamless communication, assignment management, resource access, and an interactive chat system. Elevate your mentorship journey with this app.

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

1. Clone this repository: https://github.com/SiddharthChitrala/mentorship-management.git

2. Install dependencies for both the frontend and backend:

   ```bash
   cd mentorship-management/smart-assignment-frontend
   npm install
   cd ../smart-assignment-backend
   npm install
   ```

3. Start the backend server:

   ```bash
   node index.js
   ```

4. Start the frontend development server:

   ```bash
   cd ../smart-assignment-frontend
   ng serve
   ```

5. Access the application at `http://localhost:4200/` in your web browser.

## Application Explanation

Mentorship Management offers the following key features:

- **Administrator Dashboard**: Administrators can access a dashboard to manage various aspects of the system, including user data.

- **Real-time Chat**: Students and teachers/mentors can communicate in real time through the chat feature.

- **Assignment Submission**: Students can submit assignments and forms through the submission form.

- **Resource Sharing**: Teachers/mentors can upload videos for students to access.

- **Assignment Grading**: Teachers/mentors can assign marks to assignments submitted by students.

## Conclusion

Mentorship Management is a powerful MEAN stack application designed to enhance mentorship experiences.

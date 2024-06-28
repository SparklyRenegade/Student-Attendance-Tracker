                                            Student Attendance Tracking Application

This project is a beginner-friendly, from-scratch build of a student attendance tracking application. It offers a comprehensive suite of features for managing and analyzing student attendance data with an intuitive and user-friendly interface.

Features
Dashboard:
Displays analytics and status of student attendance.
Shows total students registered for a standard and month.
Presents data on total students present and absent in percentage form.
Allows selection of different dates and months, updating the graph accordingly.
Uses bar charts, donut charts, and pie charts to visualize attendance data.
Allows hovering to see detailed statistics for each day.
Automatically updates layout based on selected class or grade.

Student Management:
Add new students with their information, including the grade.
Integrated grid view with pagination.
Search functionality across all columns.

Attendance Tracking:
Search and display attendance for a specific month and grade.
Tracks attendance daily with columns for each day of the month.
Mark students as present or absent, with real-time updates and toast messages.
Stores attendance data in the database.
Easily switch between months and grades.

Authentication:
Includes social and username/password authentication.
Uses authentication services for secure login.

Technology Stack
Frontend: React, Next.js, Tailwind CSS
Backend: Node.js
Database: MySQL
ORM: Drizzle ORM
Authentication: Auth0 or similar services

Installation
Prerequisites
Node.js and npm installed
MySQL database setup
Steps
Clone the repository

Copy code
git clone https://github.com/yourusername/student-attendance-tracker.git
cd student-attendance-tracker
Install dependencies

Copy code
npm install
Setup environment variables

Create a .env file in the root directory and add your MySQL and authentication service credentials.
env
Copy code
DATABASE_URL=mysql://user:password@localhost:3306/database
AUTH0_DOMAIN=your-auth0-domain
AUTH0_CLIENT_ID=your-auth0-client-id
AUTH0_CLIENT_SECRET=your-auth0-client-secret
Run database migrations

bash
Copy code
npx drizzle-orm migrate
Start the development server

bash
Copy code
npm run dev
Open the application in your browser

http://localhost:3000

Usage
Dashboard: View overall attendance statistics.
Students: Add new students and manage existing ones.
Attendance: Mark daily attendance for students.

Learning Resources

Contributing
Fork the repository
Create your feature branch (git checkout -b feature/fooBar)
Commit your changes (git commit -am 'Add some fooBar')
Push to the branch (git push origin feature/fooBar)
Create a new Pull Request

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
Special thanks to the open-source community for their invaluable tools and libraries.
Inspired by real-world attendance tracking systems and educational tools.

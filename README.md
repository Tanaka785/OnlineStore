# Tech Merchandise & Swag Store

## Project Status 

- Active (actively maintained).

## Table of Contents 

- [Project status](#project-status)
- [Project Description](#project-description)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [Configuring Environment Variables](#configuring-environment-variables)
- [Contributing](#contributing)
- [License](#license)
- [Screenshots](#screenshots)
- [Project Demo](#project-demo)
- [Maintained by](#maintained-by)

## Project Description

A stylish and developer-focused eCommerce platform specializing in tech-themed merchandise and swag. Built with Django (backend) and React (frontend), the store features a curated collection of coding-inspired T-shirts, hoodies, mugs, stickers, and more. Key features include dynamic product listings, user authentication, shopping cart, secure payment integration, and order tracking. The platform leverages RESTful APIs, ensures a responsive UI, and follows best practices for performance, scalability, and seamless user experience.

## Technologies Used

- Backend: https://www.djangoproject.com/, https://www.django-rest-framework.org/
- Frontend: https://reactjs.org/, https://reactrouter.com/, https://axios-http.com/, https://material-ui.com/
- Database: https://www.sqlite.org/ (for development) / https://www.postgresql.org/ (for production)
- Other: https://www.docker.com/ (optional), https://stripe.com/docs/api (for payment processing)

##  Prerequisites

Before you begin, ensure you have the following installed:

- https://www.python.org/
- https://nodejs.org/
- https://www.postgresql.org/ (optional, if using PostgreSQL in production)
- https://pip.pypa.io/en/stable/ (for Python package management)
- https://www.docker.com/ (optional, for Dockerized environment)

## Setup Instructions

1. **Clone the Repository**

    - git clone https://github.com/Tanaka785/onlinestore.git
    - cd OnlineStore

2. **Backend Setup (Django)**

    - Install Backend Dependencies

            - cd backend
            - pip install pipenv
            - pipenv install

    - Then activate the virtual environment by:

            - pipenv shell

    - Database Setup

        - Migrate the database, by running:
                
                - python manage.py migrate
            
            OR:

                - by using tasks defined in .vscode/tasks.json. Run the task 'Migrate'.

    - Create a Superuser (for Django Admin), by running:

            - python manage.py createsuperuser

        OR:

            - by using tasks defined in .vscode/tasks.json. Run the task 'Create SuperUser'.

3. **Frontend Setup (React)**

    - Install Frontend Dependencies

        - Navigate to the frontend directory:

                - cd frontend

        - and install dependencies, by:
            
                - npm install

4. **Running The Project Locally**

- To run the application locally, follow these steps:

    - From the root directory:

        - **Start the Django Development Server by**:

                - cd backend/

        - then activate the virtual environment by:

                - pipenv shell  

        - then run the server by:

                - python manage.py runserver

        - OR Start the django development server by:

            - simply using tasks defined in .vscode/tasks.json. Run the task 'Run django server'.
            

        - **Start the React Development Server by**:

            - from the root directory also, do:
            
                    - cd frontend
                    - npm run dev

            OR Start the react development server by:

                - simply using tasks defined in .vscode/tasks.json. Run the task 'Run reactVite server'.

        - Now, you can interact with the online store through the React frontend and Django backend.

## Configuring Environment Variables

- Create a .env file in the **backend** directory of the project and add the following:

    - DEBUG=True
    - SECRET_KEY='your-secret-key'
    - DB_NAME='your-database-name'
    - DB_USER='your-database-user'
    - DB_PASSWORD='your-database-password'
    - DB_HOST='localhost'
    - DB_PORT='the-port-number'


## License 

- 

## Screenshots 

- 

## Project Demo

- 

## Contributing

- If you'd like to contribute to this project, feel free to fork the repository, create a new branch, and submit a pull request.

## Acknowledgements 

- Hat tip to [React](https://reactjs.org/) for the amazing framework.
- Thanks to [John Doe](https://github.com/johndoe) for the code contributions.


## Maintained by:

- Tanaka Chanetsa (mailto: tanakachanetsa204@gmail.com)

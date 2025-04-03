# OnlineStore

A modern eCommerce platform built with **Django** (backend) and **React** (frontend). Features include product listings, user authentication, shopping cart, order management, and payment integration. Uses RESTful APIs, responsive UI, and follows best practices for scalability and performance.

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




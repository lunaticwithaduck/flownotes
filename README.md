Current Preview: ![image](https://github.com/lunaticwithaduck/flownotes/assets/132492967/6da3eaf6-dc2c-48f8-a9d4-3fa7ec8081c6)

# "I want to try this out, how uuuh do I do the setup?"

1. git clone https://github.com/lunaticwithaduck/flownotes.git
2. cd frontend and yarn install (fuck you, use yarn >:3)
3. yarn build
4. cd ../backend and pip install -r requirements.txt
5. uvicorn main:app --reload
6. navigate to 127.0.0.1:8000 and have fun

# Tech Stack of the Project

### On the Frontend

- **React** with **TypeScript** for the application
- **MaterialUI** with **SCSS** for building the UI
- **Auth0** for the authentication
- **ReactFlow** for the custom functionality

### On The Backend

- **Python** with **FastAPI** for the server
- **PostgreSQL** for the database
- **Prisma (Python Client)** for the ORM

### TODO List:

- [] Add the Ability to Save Boards (CRUD)
- [] Add Collaboration Feature
- [] Maybe Add Undo Button??????

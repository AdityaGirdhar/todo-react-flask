# Full Stack Tasks API

## Getting started

### Installation Dependancies
Developers using this project must have python3, pip, virtualenv, flask, node and npm installed.


#### Frontend Dependancies

The frontend uses Node Package Manager (npm) to manage all dependancies, which relies on the `package.json` file in the `frontend` directory of this repository. After you've cloned the repository, open your terminal and run:

```npm install```

#### Backend Dependancies

This project uses a virtual environment (venv) to isolate dependancies and prevent version conflicts. To activate the python virtual environment, open your terminal and run:

```source backend/env/bin/activate``` 

Once your virtual environment is ready, navigate to the `backend` directory and run:

```pip install -r requirements.txt```

### Running the frontend

### Running the server

Before proceeding ensure that your virtual environment has been activated. Not doing so can lead to messy module import errors. To run the app, open yor terminal and run:

```python backend/app.py```

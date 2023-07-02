Full-Stack Tasks API

## Getting started

### Installating Dependancies
Developers using this project must have [python3](https://www.python.org/downloads/), [pip](https://pip.pypa.io/en/stable/installation/), [node](https://nodejs.org/en/download/) and [npm](https://nodejs.org/en/download/) installed.


#### Frontend Dependancies

The frontend uses Node Package Manager (npm) to manage all dependancies, which relies on the `package.json` file in the `frontend` directory of this repository. After you've cloned the repository, open your terminal and run:

```
npm install
```

#### Backend Dependancies

This project uses a virtual environment (venv) to isolate dependancies and prevent version conflicts. To activate the python virtual environment, open your terminal and run:

```
source backend/env/bin/activate
``` 

Once your virtual environment is ready, run:

```
pip install -r backend/requirements.txt
```

## Running the frontend

To run the frontend in dev mode, open your terminal and run:

```
npm start
```

Then navigate to [http://localhost:3000](http://localhost:3000) in your browser (if it does not open automatically)

## Running the server

Before proceeding ensure that your virtual environment has been activated. Not doing so can lead to messy module import errors. To run the app, open yor terminal and run:

```
python backend/app.py
```

## API Reference

### Overview
* Base URL: The backend is assumed to be hosted at `http://127.0.0.1:5000`.
* Authentication: The current version of this application does not require authentication or API keys.

For a complete API reference, refer to `backend/README.md`.



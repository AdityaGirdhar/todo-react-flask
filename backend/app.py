from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///tasks.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Tasks(db.Model):
    sno = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(256), nullable=False)
    desc = db.Column(db.String(1024), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)
    
    def __repr__(self) -> str:
        return f'{self.sno}: {self.title}'

@app.route('/')
def hello_world():
    task = Tasks(title='First task', desc='With great power, comes great responsibility.')
    db.session.add(task)
    db.session.commit()
    return '<h1>Hello, world!</h1>'

@app.route('/test-data')
def testData():
	return {"tasks": ["task1", "task2", "task3"]}

@app.route('/show')
def show():
    allTodo = Tasks.query.all()
    print(allTodo)
    return 'All tasks'

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
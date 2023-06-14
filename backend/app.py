from flask import Flask, render_template, request, redirect
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

@app.route('/', methods=['GET', 'POST'])
def hello_world():
    if request.method == 'POST':
        print('post')
        title = request.form['title']
        desc = request.form['desc']
        task = Tasks(title=title, desc=desc)
        db.session.add(task)
        db.session.commit()
    return redirect('http://localhost:3000')

@app.route('/test-data')
def testData():
	return {"tasks": ["task1", "task2", "task3"]}

@app.route('/show')
def show():
    allTodo = Tasks.query.all()
    print([x.sno for x in allTodo])
    obj = {"tasks": [{
        "sno": str(x.sno),
        "title": str(x.title),
        "desc": str(x.desc),
        "date": str(x.date_created)
        } for x in allTodo]}
    return obj

@app.route('/update/<int>:sno')
def update(sno):
	return {"tasks": ["task1", "task2", "task3"]}

@app.route('/delete/<int:sno>')
def delete(sno):
    tbd = Tasks.query.filter_by(sno=sno).first()
    db.session.delete(tbd)
    db.session.commit()
    return 'deleted'

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
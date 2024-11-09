from flask import Flask, redirect, url_for, session, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from authlib.integrations.flask_client import OAuth
from flask_login import LoginManager, UserMixin, login_user, logout_user, current_user, login_required

app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = 'your_secret_key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
db = SQLAlchemy(app)

# Flask-Login setup
login_manager = LoginManager(app)

# OAuth setup
oauth = OAuth(app)
google = oauth.register(
    name='google',
    client_id='GOOGLE_CLIENT_ID',
    client_secret='GOOGLE_CLIENT_SECRET',
    authorize_url='https://accounts.google.com/o/oauth2/auth',
    access_token_url='https://oauth2.googleapis.com/token',
    client_kwargs={'scope': 'openid email profile'}
)

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(150), unique=True, nullable=False)

db.create_all()

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

# Google OAuth Login route
@app.route('/api/login')
def google_login():
    redirect_uri = url_for('authorized', _external=True)
    return google.authorize_redirect(redirect_uri)

# OAuth callback route
@app.route('/login/authorized')
def authorized():
    token = google.authorize_access_token()
    if token is None:
        return jsonify({'error': 'Authorization failed'}), 401

    user_info = google.get('userinfo').json()
    email = user_info['email']

    # Check if user exists; if not, create a new user
    user = User.query.filter_by(email=email).first()
    if not user:
        user = User(email=email)
        db.session.add(user)
        db.session.commit()

    login_user(user)
    session['user'] = user_info

    # Return user data to the React frontend
    return jsonify({'success': True, 'user': {'email': user.email}})

# Logout route
@app.route('/api/logout')
@login_required
def logout():
    logout_user()
    return jsonify({'success': True})

if __name__ == '__main__':
    app.run(port=5000, debug=True)
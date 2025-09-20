# SSI-Style Personal Website

A Django-based personal website inspired by the design of Safe Superintelligence Inc. (https://ssi.inc/). Features a dark theme with green accent links, monospace typography, and integration with React and Tailwind CSS for future enhancements.

## Features

- 🎨 **SSI.inc-inspired Design**: Dark background with monospace fonts and green accent links
- 🚀 **Django Backend**: Robust Python web framework
- ⚛️ **React Ready**: CDN-based React integration for interactive components
- 🎨 **Tailwind CSS**: Utility-first CSS framework via CDN
- 📱 **Responsive Design**: Mobile-friendly layout
- ⚡ **Fast Setup**: No complex build process required

## Quick Start

### Prerequisites

- Python 3.8+ installed on your system
- pip (Python package manager)

### Installation & Setup

1. **Navigate to the project directory:**
   ```bash
   cd /Users/lilshivs/Documents/website
   ```

2. **Create a virtual environment (recommended):**
   ```bash
   python -m venv venv
   
   # Activate virtual environment
   # On macOS/Linux:
   source venv/bin/activate
   # On Windows:
   # venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run database migrations:**
   ```bash
   python manage.py migrate
   ```

5. **Create a superuser (optional, for admin access):**
   ```bash
   python manage.py createsuperuser
   ```

6. **Start the development server:**
   ```bash
   python manage.py runserver
   ```

7. **Open your browser and visit:**
   ```
   http://127.0.0.1:8000/
   ```

## Project Structure

```
website/
├── manage.py                 # Django management script
├── requirements.txt          # Python dependencies
├── package.json             # Node.js metadata (for future use)
├── README.md               # This file
├── website/                # Django project settings
│   ├── __init__.py
│   ├── settings.py         # Main settings
│   ├── urls.py            # URL routing
│   ├── wsgi.py            # WSGI config
│   └── asgi.py            # ASGI config
├── main/                  # Main Django app
│   ├── __init__.py
│   ├── apps.py
│   ├── models.py
│   ├── views.py           # View functions
│   ├── urls.py            # App URL routing
│   ├── admin.py
│   └── tests.py
├── templates/             # HTML templates
│   ├── base.html          # Base template
│   └── main/
│       └── home.html      # Home page template
└── static/               # Static files
    ├── css/
    │   └── custom.css     # Custom styles
    └── js/
        └── main.js        # Custom JavaScript
```

## Customization

### Changing Content

Edit the content in `templates/main/home.html` to customize the text and structure of your homepage.

### Styling

- **Colors**: Modify the Tailwind config in `templates/base.html` or add custom CSS in `static/css/custom.css`
- **Fonts**: The site uses monospace fonts by default. Change the font family in the Tailwind config or CSS files
- **Layout**: Adjust the layout classes in the HTML templates

### Adding React Components

React is loaded via CDN and ready to use. Example component code is commented out in `templates/main/home.html`. Uncomment and modify as needed.

### Adding New Pages

1. Create a new view function in `main/views.py`
2. Add a URL pattern in `main/urls.py`
3. Create a new HTML template in `templates/main/`

## Development Commands

```bash
# Start development server
python manage.py runserver

# Start server on all interfaces (accessible from other devices)
python manage.py runserver 0.0.0.0:8000

# Run database migrations
python manage.py migrate

# Create new migrations after model changes
python manage.py makemigrations

# Create superuser for admin access
python manage.py createsuperuser

# Collect static files (for production)
python manage.py collectstatic

# Run tests
python manage.py test
```

## Production Deployment

For production deployment, you'll need to:

1. Set `DEBUG = False` in `settings.py`
2. Configure `ALLOWED_HOSTS` with your domain
3. Set up a proper database (PostgreSQL recommended)
4. Configure static file serving
5. Use a WSGI server like Gunicorn
6. Set up a reverse proxy (Nginx recommended)

## Technologies Used

- **Backend**: Django 4.2.7
- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Tailwind CSS (CDN)
- **Interactive Components**: React 18 (CDN)
- **Database**: SQLite (development), easily configurable for PostgreSQL/MySQL
- **Static Files**: WhiteNoise for serving in production

## License

This project is open source and available under the MIT License.

## Support

If you encounter any issues:

1. Check that all dependencies are installed correctly
2. Ensure you're in the correct directory
3. Make sure your virtual environment is activated
4. Check the Django development server logs for errors

For additional help, refer to the [Django documentation](https://docs.djangoproject.com/) or [Tailwind CSS documentation](https://tailwindcss.com/docs).



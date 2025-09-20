#!/bin/bash

# Activate virtual environment and run Django server
echo "🚀 Starting SSI-style website..."
echo "📂 Working directory: $(pwd)"

# Check if virtual environment exists
if [ ! -d "venv" ]; then
    echo "❌ Virtual environment not found. Creating one..."
    python -m venv venv
fi

# Activate virtual environment
echo "🔧 Activating virtual environment..."
source venv/bin/activate

# Install dependencies if needed
if [ ! -f "venv/pyvenv.cfg" ] || ! pip show Django > /dev/null 2>&1; then
    echo "📦 Installing dependencies..."
    pip install -r requirements.txt
fi

# Run migrations
echo "🗄️ Running database migrations..."
python manage.py migrate

# Start server
echo "🌐 Starting development server..."
echo "📍 Open your browser and visit: http://127.0.0.1:8000/"
echo "🛑 Press Ctrl+C to stop the server"
echo ""

python manage.py runserver



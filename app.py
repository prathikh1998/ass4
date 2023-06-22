from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('query.html')

@app.route('/query', methods=['POST'])
def handle_query():
    # Retrieve form data
    attribute = request.form.get('attribute')
    interval = request.form.get('interval')

    # Process the query and generate chart data
    # Replace this with your own logic to fetch data and create the chart data
    chart_data = {
        'labels': ['Label 1', 'Label 2', 'Label 3'],
        'values': [10, 20, 30],
    }

    return jsonify(chart_data)

if __name__ == '__main__':
    app.run()

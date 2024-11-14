from flask import Flask, request, jsonify
from flask_cors import CORS
from huggingface_hub import InferenceClient
import re

# Initialize the Hugging Face client with your model and token
client = InferenceClient(
    "mistralai/Mistral-Nemo-Instruct-2407",
    token="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"  # Use your provided API key
)

# Flask app setup
app = Flask(__name__)
CORS(app, resources={r"/query": {"origins": "*"}})

@app.route('/query', methods=['POST'])
def query():
    data = request.get_json()
    user_input = data.get('query', '')
    
    if not user_input:
        return jsonify({'error': 'No query provided'}), 400

    try:
        # Use the Hugging Face model for chat completion
        response_gen = client.chat_completion(
            messages=[{"role": "user", "content": user_input}],
            max_tokens=500  # Adjust if needed according to the model's parameters
        )
        
        # Print raw response for debugging
        print("Raw response:", response_gen)

        # Extract the content from the response
        if hasattr(response_gen, 'choices') and len(response_gen.choices) > 0:
            response = response_gen.choices[0].message.content
        else:
            response = 'No valid response received.'

        # Format the response to be cleaner and more readable
        formatted_response = format_general_response(response)
        
        return jsonify({'result': formatted_response})

    except Exception as err:
        print(f"Error occurred: {err}")
        return jsonify({'error': 'An error occurred while processing your request.'}), 500

def format_general_response(text):
    """
    Formats the response text to ensure it is clean and properly aligned.
    """
    # Regular expressions for identifying lists
    numbered_list_pattern = re.compile(r'\d+\.\s')
    bullet_list_pattern = re.compile(r'^[\*\-\+\•]\s', re.MULTILINE)

    # Split text into lines for processing
    lines = text.split('\n')
    formatted_lines = []
    
    for line in lines:
        # Check for numbered list items
        if numbered_list_pattern.match(line.strip()):
            formatted_lines.append(f'\n{line.strip()}')
        # Check for bulleted list items
        elif bullet_list_pattern.match(line.strip()):
            formatted_lines.append(f'    {line.strip()}')
        else:
            formatted_lines.append(line.strip())

    # Join lines back into a single string
    return '\n'.join(formatted_lines)

if __name__ == '__main__':
    app.run(debug=True, port=5001)

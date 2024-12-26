from flask import Flask, request, jsonify
# from scripts.inference import run_inference  # Importando inferência dos scripts

app = Flask(__name__)

@app.route('/analyze')
def analyze_text():
    # text = request.json.get('text')
    
    # if not text:
    #     return jsonify({"error": "Texto não fornecido"}), 400
    
    # result = run_inference(text)
    
    # return jsonify(result)
    return "testando Flask"

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
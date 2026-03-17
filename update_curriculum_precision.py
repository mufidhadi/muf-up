import sys
from ruamel.yaml import YAML

def update_path(file_path, new_path_data):
    yaml = YAML()
    yaml.preserve_quotes = True
    yaml.indent(mapping=2, sequence=4, offset=2)
    
    with open(file_path, 'r', encoding='utf-8') as f:
        data = yaml.load(f)
    
    # Mencari path yang sama untuk diganti, atau tambah baru jika tidak ada
    found = False
    for i, path in enumerate(data):
        if path['id'] == new_path_data['id']:
            data[i] = new_path_data
            found = True
            print(f"Surgical Update: Path '{new_path_data['id']}' successfully replaced.")
            break
            
    if not found:
        data.append(new_path_data)
        print(f"Surgical Append: Path '{new_path_data['id']}' added as a new curriculum path.")
        
    with open(file_path, 'w', encoding='utf-8') as f:
        yaml.dump(data, f)

if __name__ == "__main__":
    import json
    # Mengambil input dari stdin untuk menghindari limitasi panjang command line
    input_data = sys.stdin.read()
    if input_data:
        new_path = json.loads(input_data)
        update_path('src/curriculum.yaml', new_path)

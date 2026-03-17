import sys
from ruamel.yaml import YAML

def deep_update_lesson(file_path, path_id, curr_id, mod_id, lesson_id, new_lesson_data):
    yaml = YAML()
    yaml.preserve_quotes = True
    yaml.indent(mapping=2, sequence=4, offset=2)
    yaml.width = 4096 # Menghindari line break otomatis yang merusak format
    
    with open(file_path, 'r', encoding='utf-8') as f:
        data = yaml.load(f)
    
    found = False
    for path in data:
        if path['id'] == path_id:
            for curr in path.get('curriculums', []):
                if curr['id'] == curr_id:
                    for mod in curr.get('modules', []):
                        if mod['id'] == mod_id:
                            # Cari lesson yang ada atau tambahkan jika baru
                            lessons = mod.setdefault('lessons', [])
                            for i, lesson in enumerate(lessons):
                                if lesson['id'] == lesson_id:
                                    lessons[i] = new_lesson_data
                                    found = True
                                    break
                            if not found:
                                lessons.append(new_lesson_data)
                                found = True
                            break
    
    if found:
        with open(file_path, 'w', encoding='utf-8') as f:
            yaml.dump(data, f)
        print(f"Success: Updated lesson '{lesson_id}' in module '{mod_id}'")
    else:
        print(f"Error: Could not find path/curr/mod path for '{lesson_id}'")

if __name__ == "__main__":
    import json
    input_data = sys.stdin.read()
    if input_data:
        params = json.loads(input_data)
        deep_update_lesson(
            'src/curriculum.yaml', 
            params['path_id'], 
            params['curr_id'], 
            params['mod_id'], 
            params['lesson_id'], 
            params['lesson_data']
        )

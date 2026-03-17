import yaml
import sys

def validate_muf_up_curriculum(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = yaml.safe_load(f)
        
        if not isinstance(data, list):
            print("Error: Root element must be a List (e.g. - id: path-id)")
            return False
            
        for path in data:
            if 'id' not in path or 'curriculums' not in path:
                print(f"Error: Path '{path.get('id', 'unknown')}' is missing required fields.")
                return False
                
        print(f"✅ Success: Found {len(data)} valid paths.")
        return True
    except Exception as e:
        print(f"❌ YAML Error: {e}")
        return False

if __name__ == "__main__":
    if validate_muf_up_curriculum('src/curriculum.yaml'):
        sys.exit(0)
    else:
        sys.exit(1)

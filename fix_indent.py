import yaml
import sys

# Memastikan file dibaca dan ditulis dengan encoding utf-8
# dan menjaga struktur agar tidak rusak
def normalize_yaml(input_file):
    with open(input_file, 'r', encoding='utf-8') as f:
        content = yaml.safe_load(f)
    
    with open(input_file, 'w', encoding='utf-8') as f:
        # Menulis ulang dengan format standar
        yaml.dump(content, f, allow_unicode=True, sort_keys=False, indent=2, width=4096)
    print("YAML Normalization Complete.")

if __name__ == "__main__":
    normalize_yaml('src/curriculum.yaml')

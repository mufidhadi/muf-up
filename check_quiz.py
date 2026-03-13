import yaml

with open('src/curriculum.yaml', 'r', encoding='utf-8') as f:
    data = yaml.safe_load(f)

for group in data:
    for module in group.get('modules', []):
        for lesson in module.get('lessons', []):
            if 'quiz' not in lesson:
                print(f"Missing quiz in: {lesson['id']} ({lesson['title']})")

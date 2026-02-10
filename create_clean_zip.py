import os
import zipfile
import shutil

def unzip_file(zip_path, extract_to):
    """Extracts the ZIP file to the specified folder."""
    try:
        with zipfile.ZipFile(zip_path, 'r') as zip_ref:
            zip_ref.extractall(extract_to)
            print(f"Successfully extracted {zip_path} to {extract_to}.")
    except Exception as e:
        print(f"Error extracting {zip_path}: {e}")
        return False
    return True

def organize_files(base_dir):
    """Reorganizes files into css, js, and data folders."""
    folders = ['css', 'js', 'data']
    for folder in folders:
        os.makedirs(os.path.join(base_dir, folder), exist_ok=True)

    for item in os.listdir(base_dir):
        if item.endswith('.css'):
            shutil.move(os.path.join(base_dir, item), os.path.join(base_dir, 'css', item))
        elif item.endswith('.js'):
            shutil.move(os.path.join(base_dir, item), os.path.join(base_dir, 'js', item))
        elif os.path.isfile(os.path.join(base_dir, item)):
            shutil.move(os.path.join(base_dir, item), os.path.join(base_dir, 'data', item))

def create_zip(zip_name, folder_to_zip):
    """Creates a new ZIP file including the organized files."""
    try:
        shutil.make_archive(zip_name, 'zip', folder_to_zip)
        print(f"Successfully created {zip_name}.zip")
    except Exception as e:
        print(f"Error creating {zip_name}.zip: {e}")

def main(zip_path):
    extract_folder = "extracted_files"
    
    if unzip_file(zip_path, extract_folder):
        organize_files(extract_folder)
        create_zip('cleaned_files', extract_folder)

        shutil.rmtree(extract_folder)

if __name__ == "__main__":
    print("Usage: Place the ZIP file path as an argument when running this script.")

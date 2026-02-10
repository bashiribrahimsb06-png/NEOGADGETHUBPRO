import zipfile
import os

# Function to clean and fix ZIP structure

def clean_zip(zip_path, output_path):
    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        # Extract all the contents of the zip file
        zip_ref.extractall(output_path)

    # Create a new ZIP file
    with zipfile.ZipFile(os.path.join(output_path, 'cleaned.zip'), 'w') as new_zip:
        for foldername, subfolders, filenames in os.walk(output_path):
            for filename in filenames:
                filepath = os.path.join(foldername, filename)
                new_zip.write(filepath, os.path.relpath(filepath, output_path))

if __name__ == '__main__':
    # Specify the path to the original ZIP and the output directory
    clean_zip('path/to/original.zip', 'path/to/output/directory')

import numpy as np
import cv2
import os
import csv
from image_processing import func  

if not os.path.exists("data2"):
    os.makedirs("data2")
if not os.path.exists("data2/train"):
    os.makedirs("data2/train")
if not os.path.exists("data2/test"):
    os.makedirs("data2/test")

path = "train"  
path1 = "data2"  


a = ['label']
for i in range(64 * 64):
    a.append("pixel" + str(i))

label = 0
var = 0  # Total number of images
c1 = 0  # Count of training images
c2 = 0  # Count of testing images

for (dirpath, dirnames, filenames) in os.walk(path):
    for dirname in dirnames:
        print(f"Processing {dirname}...")
        
        
        train_dir = os.path.join(path1, "train", dirname)
        test_dir = os.path.join(path1, "test", dirname)
        
        if not os.path.exists(train_dir):
            os.makedirs(train_dir)
        if not os.path.exists(test_dir):
            os.makedirs(test_dir)
        
        
        num_train = int(0.8 * len(filenames))  # 80% for training
        i = 0

        for file in filenames:
            var += 1
            actual_path = os.path.join(path, dirname, file)
            actual_path1 = os.path.join(train_dir, file)
            actual_path2 = os.path.join(test_dir, file)

            # Read and process the image
            img = cv2.imread(actual_path, 0)  # Read in grayscale
            bw_image = func(actual_path)  # Ensure the 'func' function returns a preprocessed image

            # Split images between training and testing
            if i < num_train:
                c1 += 1
                cv2.imwrite(actual_path1, bw_image)
            else:
                c2 += 1
                cv2.imwrite(actual_path2, bw_image)
                
            i += 1
        
        label += 1

# Print statistics
print(f"Total images processed: {var}")
print(f"Training images: {c1}")
print(f"Testing images: {c2}")

import sys
from PIL import Image

def get_dominant_colors(image_path, num_colors=3):
    try:
        img = Image.open(image_path)
        img = img.resize((50, 50)) # scale down for performance
        result = img.convert('P', palette=Image.ADAPTIVE, colors=num_colors)
        result.putalpha(0)
        colors = result.getcolors(50*50)
        
        print(f"Colors for {image_path}:")
        if colors:
            for count, color in sorted(colors, reverse=True):
                hex_color = '#{:02x}{:02x}{:02x}'.format(color[0], color[1], color[2])
                print(f"Hex: {hex_color}, Count: {count}")
    except Exception as e:
        print(f"Error processing {image_path}: {e}")

get_dominant_colors("/Users/setupinbahrain/.gemini/antigravity/brain/e58d7315-e779-4f0c-b49b-446a2901e4ca/media__1775835293764.png", 5)
get_dominant_colors("/Users/setupinbahrain/.gemini/antigravity/brain/e58d7315-e779-4f0c-b49b-446a2901e4ca/media__1775836017128.png", 5)

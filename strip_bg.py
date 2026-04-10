from PIL import Image

def make_transparent(input_path, output_path, bg_color=(74, 4, 4), tolerance=40):
    img = Image.open(input_path)
    img = img.convert("RGBA")
    datas = img.getdata()
    
    # Let's get the exact top-left pixel to assume it's the background color
    bg_color = datas[0] # Top left pixel
    print(f"Detected Background Color: {bg_color}")
    
    new_data = []
    for item in datas:
        # Check tolerance
        if abs(item[0] - bg_color[0]) < tolerance and \
           abs(item[1] - bg_color[1]) < tolerance and \
           abs(item[2] - bg_color[2]) < tolerance:
            new_data.append((255, 255, 255, 0)) # transparent
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")

make_transparent("/Users/setupinbahrain/.gemini/antigravity/brain/e58d7315-e779-4f0c-b49b-446a2901e4ca/media__1775836017128.png", "/Users/setupinbahrain/.gemini/antigravity/scratch/farhati-nextjs/public/images/final_transparent_logo.png")

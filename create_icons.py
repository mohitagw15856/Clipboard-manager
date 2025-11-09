from PIL import Image, ImageDraw, ImageFont

def create_icon(size):
    # Create a new image with a gradient background
    img = Image.new('RGB', (size, size), color='#2196F3')
    draw = ImageDraw.Draw(img)
    
    # Draw a clipboard shape
    padding = size // 6
    clip_width = size - (padding * 2)
    clip_height = size - (padding * 2)
    
    # Clipboard body
    draw.rectangle(
        [padding + size//8, padding + size//8, 
         size - padding - size//8, size - padding],
        fill='white',
        outline='#1976D2',
        width=max(1, size//32)
    )
    
    # Clipboard clip
    clip_top = padding
    clip_width_small = size // 3
    clip_x = (size - clip_width_small) // 2
    draw.rectangle(
        [clip_x, clip_top, clip_x + clip_width_small, clip_top + size//6],
        fill='#1976D2',
        outline='#0D47A1',
        width=max(1, size//32)
    )
    
    # Save the icon
    img.save(f'icon{size}.png', 'PNG')
    print(f'Created icon{size}.png')

# Create icons in different sizes
create_icon(16)
create_icon(48)
create_icon(128)

@app.route('/shop')
def shop():
    products = [
        {
            'name': 'Agbada',
            'price': 120.00,
            'image': 'agbada.jpg',
            'description': 'Traditional West African three-piece attire with intricate embroidery.'
        },
        {
            'name': 'Kaftan Shirt',
            'price': 80.00,
            'image': 'kaftan_shirt.jpg',
            'description': 'Comfortable and vibrant kaftan shirt made from high-quality fabric.'
        },
        {
            'name': 'Blouse',
            'price': 60.00,
            'image': 'blouse.jpg',
            'description': 'Elegant blouse featuring unique cuts and traditional patterns.'
        },
        {
            'name': 'Boubou',
            'price': 100.00,
            'image': 'boubou.jpg',
            'description': 'Flowing wide-sleeved robe, perfect for special occasions.'
        }
    ]
    return render_template('shop.html', products=products)



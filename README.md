# Shopify Developer Challenge Completed

Hello,

I have completed this task and added some information below as mentioned in last part.

## Description on liquid template

I kept the template.liquid file simple by including just the basic HTML structure, essential meta tags, and the header & footer code. I treated it as the main theme.liquid file in the Shopify theme. 

In the product.liquid file, I used Liquid code to display product content such as product images, vendor name, title, description, and variant options.

I have created custom.css and custom.js files in the public folder. After completing the development, I created minified versions of both files. I made separate js and css files to maintain code cleanliness, which is a good practice to keep them separate from the template code. For speed optimization, I used the minified versions of both in page. Additionally, I kept the unminified versions of both files in the public folder for your review, along with some comments.

For designing the product section, I used custom CSS because Shopify themes often have their own grid structures and styles. The reason to use custom CSS, in most of the cases Clients typically prefer custom designs and layouts over standard theme designs.

Now, let's discuss the actual functionality and design-related aspects.

1. For the product images, I've created a simple function. When a thumbnail image is clicked, I update the src of the main image and add the "active" class to the clicked image element. And highlights the selected image using the CSS box-shadow property, making it easy for the user to see which image is selected from the product image list. I've also added a zoom-in effect using CSS when hovering over the main image.
2. To properly display the price, I applied a money filter. To display each variant option on the page, I used the product variants loop. I utilized radio buttons to display the variants and customized the design of the radio buttons to enhance the look and feel.
3. For Quntity selector, I used an input of type "number" and made it read-only so the user cannot manually enter a value. For increment and decrement functionality, I added plus and minus buttons. On click of those buttons, I call the function "updateQuantity" with true and false parameters.
4. For Add to cart button, As mentioned I send a POST request to the 'cart/add.js' endpoint to add the one or more variants to the cart by passing the variant ID, quantity and size. On success, I update the cart count and display a popup confirming that the product has been successfully added to the cart, showing the size and quantity for the user's reference.


## Improvement & favourite part

* I used the lazy load for the image part but I used the simple img tag for now. For better improvement, I can use the <picture> tag with different sources so that the image can render accordingly based on screen size.
* In this, I simply display the product description below the "add to cart" section. Instead of this, for improvement, I can use an accordion for that and also add some more accordion panels for shipping and returns.

My favourite parts are developing the add to cart functionality, displaying a successful product addition to the cart and implementing animations on buttons or links to attract user attention.


## If this were actually shopify theme

1. I will implement a slider and image zoom in functionality instead of just displaying simple product images.
2. I will offer color and size as variant options instead of just size, which will greatly improve the customer experience. I will also group product images based on selected colors and display color swatches instead of color names.
3. Additionally, I will add a product review form, display the product review count below the product title, include a section for related products, add short videos demonstrating the comfort of the shoe, insert a section for recommended products below the add to cart button, display share icons, create a pop-up for the size guide, and introduce additional payment options for purchasing.

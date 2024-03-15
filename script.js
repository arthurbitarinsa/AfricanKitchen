// script.js

const dishes = [
    {
        name: "JOLL OF RICE",
        category: "Main Course",
        description: "A popular West African dish made with rice, tomatoes, and spices.",
        price: 12.99,
        image: "https://wazobiaafricankitchen.com/wp-content/uploads/food34.jpg"
    },
    {
        name: "TYPICAL UGANDAN FOOD",
        category: "Matooke,posho and rice",
        description: "A traditional Ugandan dish consisting of green banana, cooked maize floor, rice and sauce of your choice.",
        price: 29.99,
        image: "https://viaturi.com/wp-content/uploads/2015/10/EL-Matoke-una-comida-tipica-de-Uganda.jpg"
    },
    {
        name: "FUFU AND EGUSI SOUP",
        category: "Main Course",
        description: "A traditional Nigerian dish consisting of pounded yam served with a thick soup made from melon seeds and vegetables.",
        price: 14.99,
        image: "https://lh3.googleusercontent.com/proxy/PtHstYEEJ2ExigAGbMWjKRSkQZuwD2mH8Q61riJZ9xrNZ9d77AqEYoFvHDiLn1Gb82w8bkKah_8XlYD4koKud9yMcAVAnlecdeM_Tv5gKnig-T4petMSdbpV9Jx3MYMaw1FeOSrvz9BqskCLaYtKLeLSKA=s0-d"
    },
    

    {
        name: "BINYEBWA AND LUMONDE",
        category: "Local dish of G.nut paste",
        description: "A traditional Ugandan dish consisting of ground nuts paste, and sweet potatoes served with salad.",
        price: 18.89,
        image: "https://d36tnp772eyphs.cloudfront.net/blogs/1/2020/01/Ugandan-sauce-made-of-groundnuts-and-served-with-Matoke-sweet-potatoes-arrow-roots-and-avocado.jpg"
    },

    {
        name: "TYPICAL RWANDESE FOOD",
        category: "Local dish of Ishombe",
        description: "A traditional rwandan dish consisting of well grinded and cooked Casava leaves served with any food mainly ugali .",
        price: 15.89,
        image: "https://i.ytimg.com/vi/0T6Uitn7grE/maxresdefault.jpg"
    },
      
    {
        name: "ROLEX",
        category: "Chapati with eggs",
        description: "A famous quick meal with chappati, fried eggs and ingredients like tomatoes,onions and cabbage",
        price: 6.9,
        image: "https://i0.wp.com/muwado.com/wp-content/uploads/2019/08/ugaroll.jpg?fit=1200%2C800&ssl=1"
    },

    {
        name: "SOUTH AFRICAN CUISINE",
        category: "Different Mix",
        description: "this dish has well fried rice, different vegetables mixed with various ingridients, and very well spiced, it has the original taste of traditional chicken",
        price: 22.89,
        image: "https://th.bing.com/th/id/OIP.cLKI76jmvIlycwO6m1IFPAAAAA?rs=1&pid=ImgDetMain"
    },

    {
        name: "GRILLED CHICKEN",
        category: "Local chicked with proper ingredients",
        description: "This is a super tasty dish that is really special and grilled by professional chefs with the correct ingredients that gives it a special taste",
        price: 23.99,
        image: "https://wallpaperaccess.com/full/3216363.jpg"
    },

    
];

const darkModeToggle = document.getElementById("darkModeToggle");
const main = document.querySelector("main");
const cartItems = document.getElementById("cartItems");
const totalAmount = document.getElementById("totalAmount");

// Function to toggle dark mode
darkModeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
});

// Function to display dishes
function displayDishes() {
    main.innerHTML = "";
    dishes.forEach(dish => {
        const card = document.createElement("div");
        card.classList.add("card");

        const image = document.createElement("img");
        image.src = dish.image;
        image.alt = dish.name;

        const cardContent = document.createElement("div");
        cardContent.classList.add("card-content");

        const name = document.createElement("h2");
        name.textContent = dish.name;

        const category = document.createElement("p");
        category.textContent = dish.category;

        const description = document.createElement("p");
        description.textContent = dish.description;

        const price = document.createElement("p");
        price.textContent = `$${dish.price.toFixed(2)}`;

        const addButton = document.createElement("button");
        addButton.textContent = "Add to Cart";
        addButton.addEventListener("click", () => addToCart(dish));

        cardContent.appendChild(name);
        cardContent.appendChild(category);
        cardContent.appendChild(description);
        cardContent.appendChild(price);
        cardContent.appendChild(addButton);

        card.appendChild(image);
        card.appendChild(cardContent);

        main.appendChild(card);
    });
}

// Function to add item to cart
function addToCart(dish) {
    const cartItem = document.createElement("div");
    cartItem.textContent = dish.name;
    cartItems.appendChild(cartItem);

    // Calculate total amount
    let total = parseFloat(totalAmount.textContent.substring(1)) || 0;
    total += dish.price;
    totalAmount.textContent = `$${total.toFixed(2)}`;
}

// Initialize
displayDishes();

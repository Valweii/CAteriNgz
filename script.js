const products = {
    chicken: [
        {
            img: "/img/protein-1.jpg",
            title: "Hamburger",
            description: "A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor."
        },
        {
            img: "/img/protein-2.jpg",
            title: "Chicken Katsu",
            description: "Chicken katsu, also known as panko chicken or tori katsu is a Japanese dish of fried chicken made with panko bread crumbs."
        },
        {
            img: "/img/protein-4.jpg",
            title: "Steamed chicken",
            description: "Steamed chicken is a dish made by cooking chicken using steam, resulting in tender, juicy meat that retains its natural flavors."
        },
        {
            img: "/img/protein-3.jpeg",
            title: "Oyakodon",
            description: "Oyakodon is a Japanese rice bowl dish, in which chicken, egg, sliced scallion, and other ingredients are all simmered together in a kind of soup that is made with soy sauce and stock"
        },
        {
            img: "/img/protein-5.jpg",
            title: "Chicken Adobo",
            description: "Chicken Adobo is a Filipino dish made by braising chicken legs (thighs and/or drumsticks) in a sauce made up of vinegar, soy sauce, garlic, and black pepper"
        },
        {
            img: "/img/protein-6.jpg",
            title: "Nasi Uduk",
            description: "Nasi uduk is an Indonesian-style steamed rice cooked in coconut milk dish, especially popular in Betawi cuisine.."
        },
    ],
    noodles: [
        {
            img: "/img/noodles-1.jpg",
            title: "Carbonara",
            description: "Carbonara is a pasta dish made with fatty cured pork, eggs, hard cheese, salt, and black pepper. It is typical of the Lazio region of Italy"
        },
        {
            img: "/img/noodles-2.jpg",
            title: "Fried Noodles",
            description: "Fried noodles are common throughout East Asia, Southeast Asia and South Asia. Many varieties, cooking styles, and ingredients exist"
        },
        {
            img: "/img/noodles-3.jpg",
            title: "Creamy Rigatoni",
            description: "Rigatoni are a type of pasta. They are larger than penne and ziti, and sometimes slightly curved, but not as curved as elbow macaroni"
        },
        {
            img: "/img/noodles-4.jpg",
            title: "Chow Mein",
            description: "Chow mein is a dish of Chinese stir-fried noodles with vegetables and sometimes meat or tofu"
        },
        {
            img: "/img/noodles-5.jpg",
            title: "Fettucinne Alfredo",
            description: "Fettuccine Alfredo is a pasta dish made with fettuccine, butter, and Parmesan cheese"
        },
        {
            img: "/img/noodles-6.jpg",
            title: "Spaghetti bolognese",
            description: "Spaghetti bolognese consists of spaghetti (long strings of pasta) with an Italian ragù (meat sauce) made with minced beef, bacon and tomatoes, served with Parmesan cheese"
        },
    ],
    veggies: [
        {
            img: "/img/healthy-1.jpg",
            title: "Salad",
            description: "A salad is a dish consisting of mixed ingredients, frequently vegetables."
        },
        {
            img: "/img/healthy-2.jpg",
            title: "Salad Wraps",
            description: "These salad wraps feature fresh vegetables, whole grains, and a simple dressing that make a healthy and delicious lunch idea"
        },
        {
            img: "/img/healthy-2.jpg",
            title: "Grilled Vegetables",
            description: "Grilled vegetables are vegetables cooked on a grill, often seasoned with spices or herbs."
        },
        {
            img: "/img/healthy-3.jpeg",
            title: "Cap Cai",
            description: "Cap cai, sometimes spelled cap cay, is the Hokkien-derived term for a popular Chinese Indonesian and Peranakan stir-fried vegetable dish that originates from Fujian cuisine. ."
        },
        {
            img: "/img/veggies-1.jpg",
            title: "Sayur Asam",
            description: "Sayur asem or sayur asam is an Indonesian vegetable soup. It is a popular Southeast Asian dish originating from Sundanese cuisine, consisting of vegetables in tamarind soup"
        },
        {
            img: "/img/veggies-2.jpg",
            title: "Ratatouille",
            description: "Ratatouille is a French Provençal dish of stewed vegetables that originated in Nice and is sometimes referred to as ratatouille niçoise."
        },
    ],
    dessert: [
        {
            img: "/img/dessert-1.jpeg",
            title: "Chocolate Cake",
            description: "Chocolate cake is a cake flavored with melted chocolate, cocoa powder, or both."
        },
        {
            img: "/img/dessert-2.jpg",
            title: "Ice Cream",
            description: "Ice cream is a sweetened frozen food typically eaten as a snack or dessert."
        },
        {
            img: "/img/dessert-3.jpg",
            title: "Purin",
            description: "Purin (プリン) is a custard dessert made from eggs, milk, and sugar, and covered with a thin layer of rich caramel sauce on top"
        },
        {
            img: "/img/dessert-4.jpg",
            title: "Ximilu",
            description: "Ximilu is a fruit soup made with fresh fruits and powdered creamer"
        },
        {
            img: "/img/dessert-5.jpeg",
            title: "Watermelon",
            description: "Watermelon is a flowering plant species of the Cucurbitaceae family and the name of its edible fruit. A scrambling and trailing vine-like plant, it is a highly cultivated fruit worldwide, with more than 1,000 varieties"
        },
        {
            img: "/img/dessert-6.jpg",
            title: "Smoothies",
            description: "A smoothie is a beverage made by puréeing ingredients in a blender. A smoothie commonly has a liquid base, such as fruit juice or milk, yogurt or ice cream."
        },
    ]
};

const slidesContainer = document.getElementById("carrousel-slides");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
});

function openNav() {
    var nav = document.getElementById("navbar");
    if (nav.style.height === "10vh" || nav.style.height === "") {
        nav.style.height = "50vh";
    } else {
        nav.style.height = "10vh";
    }
}

function showCategory(category) {
    const productContent = document.getElementById('product-content');
    productContent.innerHTML = ''; // Clear current products
    
    products[category].forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'item bg white border rad-1 w30 margin mr-4';
        
        productDiv.innerHTML = `
            <div>
                <img src="${product.img}" class="item-pict flex flow-column align-center product-img border rad-1 cover w15" alt="${product.title}">
            </div>
            <div>
                <h3 class="item-title margin auto text center">${product.title}</h3>
                <h5 class="item-text margin auto text center">${product.description}</h5>
            </div>
        `;

        productContent.appendChild(productDiv);

        const navButtons = document.querySelectorAll('#product-bar .nav-btn');
        navButtons.forEach(button => button.classList.remove('active'));
        const activeButton = document.querySelector(`#product-bar [onclick="showCategory('${category}')"]`).parentElement;
        activeButton.classList.add('active');
    });
};
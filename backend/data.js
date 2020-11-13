import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Kazeem',
            email: 'kazeem@kazeem.com',
            password: bcrypt.hashSync('123456', 8),
            isAdmin: true,
        },
        {
            name: 'Ade',
            email: 'ade@ade.com',
            password: bcrypt.hashSync('123456', 8),
            isAdmin: false,
        }
    ],
    products: [
        {

            name: 'Slim Designer Shirt',
            category: 'Shirts',
            image: './images/p1.jpg',
            price: 125,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'Quality Product'
        },
        {

            name: 'Slim Kotki Shirt',
            category: 'Shirts',
            image: './images/p2.jpg',
            price: 110,
            countInStock: 30,
            brand: 'Versace',
            rating: 4.5,
            numReviews: 15,
            description: 'Quality Product'
        },
        {

            name: 'Hogan Designer Shirt',
            category: 'Shirts',
            image: './images/p3.jpg',
            price: 90,
            countInStock: 20,
            brand: 'Hogan',
            rating: 4.5,
            numReviews: 15,
            description: 'Quality Product'
        },
        {

            name: 'Kalax Pants',
            category: 'Pants',
            image: './images/p4.jpg',
            price: 80,
            countInStock: 23,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 8,
            description: 'Quality Product'
        },
        {

            name: 'Sulum Pants',
            category: 'Pants',
            image: './images/p5.jpg',
            price: 75,
            countInStock: 88,
            brand: 'Sulum',
            rating: 4.5,
            numReviews: 18,
            description: 'Quality Product'
        },
        {

            name: 'Daidos Pant',
            category: 'Pants',
            image: './images/p6.jpg',
            price: 115,
            countInStock: 0,
            brand: 'Daidos',
            rating: 4.5,
            numReviews: 10,
            description: 'Quality Product'
        },
    ],
};
export default data;
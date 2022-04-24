const fruits = [
    {
        id: 1,
        name: 'apple',
        img: '/images/apple.png',
        state: 0,
        show: true,
    },
    {
        id: 2,
        name: 'banana',
        img: '/images/banana.png',
        state: 0,
        show: true,
    },
    {
        id: 3,
        name: 'strawberry',
        img: '/images/strawberry.png',
        state: 0,
        show: true,
    },
    {
        id: 4,
        name: 'kiwi',
        img: '/images/kiwi.png',
        state: 0,
        show: true,
    },
    {
        id: 5,
        name: 'mango',
        img: '/images/mango.png',
        state: 0,
        show: true,
    },
    {
        id: 6,
        name: 'watermelon',
        img: '/images/watermelon.png',
        state: 0,
        show: true,
    },
    {
        id: 7,
        name: 'grape',
        img: '/images/grape.png',
        state: 0,
        show: true,
    },
    {
        id: 8,
        name: 'lemon',
        img: '/images/lemon.png',
        state: 0,
        show: true,
    },
    {
        id: 9,
        name: 'cherry',
        img: '/images/cherry.png',
        state: 0,
        show: true,
    },
    {
        id: 10,
        name: 'orange',
        img: '/images/orange.png',
        state: 0,
        show: true,
    },
    {
        id: 11,
        name: 'peach',
        img: '/images/peach.png',
        state: 0,
        show: true,
    },
    {
        id: 12,
        name: 'guava',
        img: '/images/guava.png',
        state: 0,
        show: true,
    },
    {
        id: 13,
        name: 'mangosteen',
        img: '/images/mangosteen.png',
        state: 0,
        show: true,
    },
    {
        id: 14,
        name: 'pineapple',
        img: '/images/pineapple.png',
        state: 0,
        show: true,
    },
    {
        id: 15,
        name: 'durian',
        img: '/images/durian.png',
        state: 0,
        show: true,
    },
    {
        id: 16,
        name: 'dragonfruit',
        img: '/images/dragonfruit.png',
        state: 0,
        show: true,
    },
    {
        id: 17,
        name: 'coconut',
        img: '/images/coconut.png',
        state: 0,
        show: true,
    },
]
// Randomize, choose 8 cards, duplicate and shuffle.
let cardsBoard = fruits.sort(() => Math.random() -0.5).slice(0, 8);
cardsBoard.forEach(card => cardsBoard.push({...card, id: card.id * -1}));
let randomizedFruits = cardsBoard.sort(() => Math.random() - 0.5);

export default randomizedFruits
interface Menu {
    id: string;
    name: string;
    price: string;
}

interface Restaurant {
    id: string;
    category: string;
    name: string;
    menu: Menu[];
}

export default Restaurant;

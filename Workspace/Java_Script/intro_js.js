class restaurant {

    restaurantList = [
        {
            Name : "Hariprasad",
            Location: "Mangalore",
            Address : "Konaje"
        },
        {
            Name : "Dosa Point",
            Location: "Udupi",
            Address : "Kaup"
        },
        {
            Name : "Tikka point",
            Location: "Kasaragod",
            Address : "Manjeshwara"
        }, {
            Name : "Breakfast home",
            Location: "Bangalore",
            Address : "Hebbal"
        }
    ]

    printAllRestaurantNames = () => {
        return this.restaurantList.map(Item => Item.Name);
    }

    filterRestaurantByCity = (city) => {
        return this.restaurantList.filter(Item => Item.Location == city);
    }
}


var obj = new restaurant();
obj.printAllRestaurantNames();
obj.filterRestaurantByCity("Bangalore");

export const filterRestaurents = (searchText, restaurants) => {

    const filteredRestaurents = restaurants.filter((restaurant) => {
      return restaurant.data?.name?.toLocaleLowerCase().includes(searchText);
    });

    return filteredRestaurents;
  }
import { View, Text, StyleSheet } from "react-native";
import MealsList from "../components/MealsList/MealsList";
// import { FavoritesContext } from "../store/context/favorite-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

function FavoritesScreen() {
  // const favoritesMealsCtx = useContext(FavoritesContext);
  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);

  // const favoriteMeals = MEALS.filter((meal) =>
  //   favoritesMealsCtx.ids.includes(meal.id)
  // );

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>There is no favorites yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}
export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

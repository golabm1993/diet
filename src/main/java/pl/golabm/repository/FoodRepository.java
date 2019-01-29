package pl.golabm.repository;

import org.springframework.data.repository.CrudRepository;
import pl.golabm.model.Food;

public interface FoodRepository extends CrudRepository<Food, Long> {

    public void deleteByFoodAmountAndFoodName(Double foodAmount, String foodName);
}

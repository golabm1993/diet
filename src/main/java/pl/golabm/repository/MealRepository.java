package pl.golabm.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import pl.golabm.model.Meal;
import pl.golabm.model.MealType;
import pl.golabm.model.User;

import java.util.Date;
import java.util.List;

public interface MealRepository extends CrudRepository<Meal, Long> {

    Meal findByMealTimeAndMealType(/*@Temporal(DATE)*/ Date mealTime, MealType mealType);

    List<Meal> findAllByMealTime(@Param("mealTime") Date mealTime);

    List<Meal> findAllByUser(User user);
}
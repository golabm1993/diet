package pl.golabm.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import pl.golabm.model.Meal;

import java.util.Date;
import java.util.List;

public interface MealRepository extends CrudRepository<Meal, Long> {

    List<Meal> findAllByMealTime(@Param("mealTime") Date mealTime);

    List<Meal> findAllByUserId(Long id);
}
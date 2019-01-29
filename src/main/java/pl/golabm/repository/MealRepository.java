package pl.golabm.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import pl.golabm.model.Meal;
import pl.golabm.model.MealType;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Date;
import java.util.List;

import static javax.persistence.TemporalType.DATE;

public interface MealRepository extends CrudRepository<Meal, Long> {

    Meal findByMealTimeAndMealType(/*@Temporal(DATE)*/ Date mealTime, MealType mealType);

    List<Meal> findAllByMealTime(@Param("mealTime") Date mealTime);
}
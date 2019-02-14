package pl.golabm.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.golabm.model.Food;
import pl.golabm.model.Meal;
import pl.golabm.repository.FoodRepository;
import pl.golabm.repository.MealRepository;

import javax.transaction.Transactional;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@Transactional(Transactional.TxType.REQUIRES_NEW)
public class MealService {

    private static final Logger log = LoggerFactory.getLogger(MealService.class);
    private static final String PATTERN = "yyyy-MM-dd";

    private final MealRepository mealRepository;
    private final FoodRepository foodRepository;

    @Autowired
    MealService(MealRepository mealRepository, FoodRepository foodRepository) {
        this.mealRepository = mealRepository;
        this.foodRepository = foodRepository;
    }

    public List<Meal> getAllMeals() {
        return (List<Meal>) mealRepository.findAll();
    }

    public List<Meal> getMeals(String date) {
        Date date1 = null;
        try {

            date1 = new SimpleDateFormat(PATTERN).parse(date);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        List<Meal> testList = mealRepository.findAllByMealTime(date1);
        return testList;
    }

    public Optional<Meal> getOneMeal(Long id) {
        return mealRepository.findById(id);
    }

    public Meal saveMeal(Meal meal) {
        // fixme get existing element by query
        Meal m = findExisting(meal);

        for (Food food : meal.getFood()) {
            food.setMeal(m);
            foodRepository.save(food);
        }

        return meal;
    }

    private Meal findExisting(final Meal meal) {
        final List<Meal> mealList = (List<Meal>) mealRepository.findAll();

        for (Meal m : mealList) {
            final LocalDate localDate = LocalDate.parse(m.getMealTime().toString());
            final LocalDate localDate2 = LocalDate.parse(meal.getMealTime().toString());

            final Boolean datesEquals = localDate.getYear() == localDate2.getYear() &&
                    localDate.getMonth() == localDate2.getMonth() &&
                    localDate.getDayOfMonth() == localDate2.getDayOfMonth();

            if (datesEquals && meal.getMealType() == m.getMealType()) {
                return m;
            }
        }

        // workaround
        meal.setMealTime(meal.getMealTime().plusDays(1));

        return mealRepository.save(meal);
    }

    public Meal updateMeal(Meal meal, Long id) {
        Meal newMeal = mealRepository.findById(id).get();
        newMeal.setMealType(meal.getMealType());
        newMeal.setMealTime(meal.getMealTime());
        newMeal.setFood(meal.getFood());
        return mealRepository.save(newMeal);
    }

    public void deleteMeal(Long id) {
        mealRepository.deleteById(id);
    }
}

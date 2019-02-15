package pl.golabm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.golabm.dto.MealDTO;
import pl.golabm.model.Meal;
import pl.golabm.service.MealService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/meal")
public class MealController {

    private final MealService mealService;
    private final MealDTO mealDTO = new MealDTO();

    @Autowired
    MealController(MealService mealService) {
        this.mealService = mealService;
    }

    @GetMapping
    public List<MealDTO> allMeals() {
        List<Meal> listOfMeals = mealService.getAllMeals();
        return listOfMeals.stream().map(meal -> mealDTO.fromEntity(meal))
                .collect(Collectors.toList());
    }

    @PostMapping
    public Meal newMeal(@RequestBody MealDTO newMealDTO) {
        Meal meal = newMealDTO.toEntity();
        return mealService.saveMeal(meal);
    }

    @PutMapping("/{id}")
    public Meal changeMeal(@RequestBody MealDTO newMealDTO, @PathVariable Long id) {
        Meal meal = newMealDTO.toEntity();
        return mealService.updateMeal(meal, id);
    }

    @DeleteMapping("/{id}")
    public void deleteMeal(@PathVariable Long id) {
        mealService.deleteMeal(id);
    }
}

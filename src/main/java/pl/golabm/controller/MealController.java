package pl.golabm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.golabm.dto.MealDTO;
import pl.golabm.model.Meal;
import pl.golabm.service.MealService;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class MealController {

    private final MealService mealService;
    private final MealDTO mealDTO = new MealDTO();

    @Autowired
    MealController(MealService mealService) {
        this.mealService = mealService;
    }

    @GetMapping("/start")
    public String test() {
        return "index";
    }

    @GetMapping("/all")
    public List<MealDTO> allMeals() {
        List<Meal> listOfMeals = mealService.getAllMeals();
        return listOfMeals.stream().map(meal -> mealDTO.fromEntity(meal))
                .collect(Collectors.toList());
    }

//    @GetMapping("/all/{id}")
//    public MealDTO oneMeal(@PathVariable Long id) {
//        Meal meal = mealService.getOneMeal(id).get();
//        MealDTO mealDTO = new MealDTO();
//        return mealDTO.fromEntity(meal);
//    }

    @GetMapping("/all/date/{date}")
    public List<MealDTO> getMeals(@PathVariable String date) {

        List<Meal> mealList = mealService.getMeals(date);
        return mealList.stream().map(meal -> mealDTO.fromEntity(meal))
                .collect(Collectors.toList());
    }

    @PostMapping("/newMeal")
    public Meal newMeal(@RequestBody MealDTO newMealDTO) {
        Meal meal = newMealDTO.toEntity();
        return mealService.saveMeal(meal);
    }

    @PutMapping("/all/{id}")
    public Meal changeMeal(@RequestBody MealDTO newMealDTO, @PathVariable Long id) {
        Meal meal = newMealDTO.toEntity();
        return mealService.updateMeal(meal, id);
    }

    @DeleteMapping("/all/{id}")
    public void deleteMeal(@PathVariable Long id) {
        mealService.deleteMeal(id);
    }
}

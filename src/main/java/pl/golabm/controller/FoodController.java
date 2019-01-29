package pl.golabm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.golabm.dto.FoodDTO;
import pl.golabm.model.Food;
import pl.golabm.model.Meal;
import pl.golabm.service.FoodService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/food")
public class FoodController {

    private final FoodService foodService;

    @Autowired
    FoodController(FoodService foodService) {
        this.foodService = foodService;
    }

    @GetMapping("/{id}")
    public Optional<Food> getFoodList(@PathVariable Long id) {
        return foodService.getOneFood(id);
    }

    @PostMapping
    public Food save(@RequestBody FoodDTO foodDTO) {
        Food food = foodDTO.toEntity();
        return foodService.save(food);
    }

    @GetMapping
    public List<Food> getAll() {
        return foodService.getAllFood();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        foodService.delete(id);
    }

}

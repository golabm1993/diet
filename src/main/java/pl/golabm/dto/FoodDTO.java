package pl.golabm.dto;

import org.springframework.lang.NonNull;
import pl.golabm.model.Food;
import pl.golabm.model.Meal;

public class FoodDTO {

    private Long id;

    @NonNull
    private String foodName;

    @NonNull
    private Double foodAmount;

    private Meal meal;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFoodName() {
        return foodName;
    }

    public void setFoodName(String foodName) {
        this.foodName = foodName;
    }

    public Double getFoodAmount() {
        return foodAmount;
    }

    public void setFoodAmount(Double foodAmount) {
        this.foodAmount = foodAmount;
    }

    public Meal getMeal() {
        return meal;
    }

    public void setMeal(Meal meal) {
        this.meal = meal;
    }

    public Food toEntity() {
        Food food = new Food();
        food.setId(id);
        food.setFoodName(foodName);
        food.setFoodAmount(foodAmount);
        food.setMeal(meal);
        return food;

    }

    public FoodDTO fromEntity(Food food) {
        FoodDTO foodDTO = new FoodDTO();
        foodDTO.setId(food.getId());
        foodDTO.setFoodName(food.getFoodName());
        foodDTO.setFoodAmount(food.getFoodAmount());
        foodDTO.setMeal(food.getMeal());
        return foodDTO;
    }
}

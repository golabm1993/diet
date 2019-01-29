package pl.golabm.dto;

import org.modelmapper.ModelMapper;
import org.springframework.lang.NonNull;
import pl.golabm.model.Food;
import pl.golabm.model.Meal;
import pl.golabm.model.MealType;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class MealDTO {

    private Long id;

    @NonNull
    private MealType mealType;

    @NonNull
    private LocalDate mealTime;

    @NonNull
    private List<Food> food = new ArrayList<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public MealType getMealType() {
        return mealType;
    }

    public void setMealType(MealType mealType) {
        this.mealType = mealType;
    }

    public LocalDate getMealTime() {
        return mealTime;
    }

    public void setMealTime(LocalDate mealTime) {
        this.mealTime = mealTime;
    }

    public List<Food> getFood() {
        return food;
    }

    public void setFood(List<Food> food) {
        this.food = food;
    }

    public Meal toEntity() {
        Meal meal = new Meal();
        meal.setId(id);
        meal.setMealType(mealType);
        meal.setMealTime(mealTime);
        meal.setFood(food);
        return meal;
//        MealDTO mealDTO = new MealDTO();
//        ModelMapper modelMapper = new ModelMapper();
//        return modelMapper.map(mealDTO, Meal.class);

    }

    public MealDTO fromEntity(Meal meal) {
        MealDTO mealDTO = new MealDTO();
        mealDTO.setId(meal.getId());
        mealDTO.setMealType(meal.getMealType());
        mealDTO.setMealTime(meal.getMealTime());
        mealDTO.setFood(meal.getFood());
        return mealDTO;

//        ModelMapper modelMapper = new ModelMapper();
//        return modelMapper.map(meal, MealDTO.class);
    }
}

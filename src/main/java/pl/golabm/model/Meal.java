package pl.golabm.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static javax.persistence.EnumType.STRING;

@Entity
public class Meal {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Enumerated(STRING)
    private MealType mealType;
//    @JsonFormat(pattern = "yyyy-mm-dd")
    private LocalDate mealTime;

    @OneToMany(mappedBy = "meal", cascade = CascadeType.MERGE)
    private List<Food> food = new ArrayList<>();

    public Meal() {
    }

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

    @Override
    public String toString() {
        return "Meal{" +
                "id=" + id +
                ", mealType=" + mealType +
                ", mealTime=" + mealTime +
                ", food=" + food +
                '}';
    }
}

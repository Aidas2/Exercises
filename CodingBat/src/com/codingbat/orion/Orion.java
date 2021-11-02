package orion;

import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Orion {

    //Write a static method that takes in a list of Farmers, and returns a list of unique vegetable names (ASC order)
//that are grown by farmers older than 50 (years) and that only use organic fertilizers

    public static void main(String[] args) {
//        result();
    }
    public class Fertilizer {
        int id;
        String name;
        boolean organic;
    }

    public class Vegetable {
        int id;
        String name;
        int ageDays;
    }

    public class Farmer {
        int id;
        String license;
        String firstName;
        String lastName;
        LocalDate birthday;
        List<Vegetable> vegetables;
        List<Fertilizer> fertilizers;
    }

    public static List result(List<Farmer> listOfFarmers) {
        List farmers =  new ArrayList();
        LocalDate now = LocalDate.now();
        var filteredFarmers = listOfFarmers.stream().filter(f -> Period.between(now, f.birthday).getYears() > 50)
                .filter(f -> f.fertilizers.stream().allMatch(fertilizer -> fertilizer.organic))
                .flatMap(farmer -> farmer.vegetables.stream()).map(veg -> veg.name).distinct().sorted().collect(Collectors.toList());
        return farmers;
    }
}

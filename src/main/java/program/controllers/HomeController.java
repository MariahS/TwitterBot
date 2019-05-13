package program.controllers;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(HomeController.BASE_URL)
public class HomeController {
    public static final String BASE_URL = "/api/v1";

    @GetMapping(path= "/index")
    public String Index () {
        return "index";
    }
}

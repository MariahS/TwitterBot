package program.controllers;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/index")
public class HomeController {

    @GetMapping(path= "/index")
    public String Index () {
        return "index";
    }
}

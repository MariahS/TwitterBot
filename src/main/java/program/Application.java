package program;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import javax.servlet.http.HttpServletResponse;

@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer () {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/subreddit").allowedOrigins("http://localhost:4200");
            }

            private void addCorsHeader(HttpServletResponse response){
                response.addHeader("Access-Control-Allow-Origin", "*");
                response.addHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE, HEAD");
                response.addHeader("Access-Control-Allow-Headers", "X-PINGOTHER, Origin, X-Requested-With, Content-Type, Accept");
                response.addHeader("Access-Control-Max-Age", "1728000");
            }

        };
    }


}
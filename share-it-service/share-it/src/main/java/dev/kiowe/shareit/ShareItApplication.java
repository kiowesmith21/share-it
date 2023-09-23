package dev.kiowe.shareit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class ShareItApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShareItApplication.class, args);
	}

}

package com.mnm.mnmpcd;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(exclude=SecurityAutoConfiguration.class)
public class MnmpcdApplication {

	public static void main(String[] args) {
		SpringApplication.run(MnmpcdApplication.class, args);
	}

}

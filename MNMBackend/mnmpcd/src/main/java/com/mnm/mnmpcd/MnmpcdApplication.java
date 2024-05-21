package com.mnm.mnmpcd;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
@SpringBootApplication
@ComponentScan(basePackages = "com.mnm.mnmpcd.Controller")

public class MnmpcdApplication {
	public static void main(String[] args) {
		SpringApplication.run(MnmpcdApplication.class, args);
	}

}

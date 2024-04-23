package com.mnm.mnmpcd;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
@Configuration
@SpringBootApplication
@EnableJpaRepositories("com.mnm.mnmpcd.Repo")
@EntityScan("com.mnm.mnmpcd.Entity")
public class MnmpcdApplication {
	public static void main(String[] args) {
		SpringApplication.run(MnmpcdApplication.class, args);
	}

}

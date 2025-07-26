package com.aojt.mgmt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.aojt.mgmt.config.JwtConfig;

@SpringBootApplication
@EnableConfigurationProperties(JwtConfig.class)
public class MgmtApplication {
    public static void main(String[] args) {
        SpringApplication.run(MgmtApplication.class, args);
    }
}
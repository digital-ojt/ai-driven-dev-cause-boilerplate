package com.aojt.mgmt.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.aojt.mgmt.repository.user.UserRepository;

import lombok.RequiredArgsConstructor;

/**
 * アプリケーション設定
 */
@Configuration
@RequiredArgsConstructor
public class ApplicationConfig {

    /**
     * ユーザーリポジトリ
     */
    private final UserRepository repository;

    /**
     * ユーザー詳細サービス
     */
    @Bean
    public UserDetailsService userDetailsService() {
        return username -> repository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
}
package com.aojt.mgmt.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * JWT設定
 */
@Component
@ConfigurationProperties(prefix = "jwt")
@Data
public class JwtConfig {

    /**
     * トークンの有効期限（ms）
     */
    private long expiration;

    /**
     * リフレッシュトークンの有効期限（ms）
     */
    private long refreshExpiration;
}

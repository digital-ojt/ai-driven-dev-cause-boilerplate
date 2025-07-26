package com.aojt.mgmt.repository.user;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aojt.mgmt.model.User;

/**
 * ユーザーリポジトリ
 */
public interface UserRepository extends JpaRepository<User, Integer> {

    /**
     * メールアドレスでユーザーを検索
     * 
     * @param email メールアドレス
     * @return ユーザー
     */
    Optional<User> findByEmail(String email);
}
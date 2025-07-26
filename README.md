# Backend

## バックエンド

### 技術スタック

- Java 21
- Spring Boot 3.4.3
- Spring Security 6
- Spring Data JPA
- H2 Database（テスト用）
- JUnit 5 & Mockito（テスト用）

### 環境構築

1. `./mvnw clean package` でビルド
2. `./mvnw spring-boot:run` で実行
3. ブラウザで http://localhost:8080/swagger-ui/index.html にアクセス

Ref. https://zenn.dev/okamyuji/articles/0bfcc5a9b17cb5

### APIエンドポイント

| エンドポイント | メソッド | 説明 | 認証要否 |
|--------------|--------|-----|---------|
| `/api/v1/auth/register` | POST | 新規ユーザー登録 | 不要 |
| `/api/v1/auth/authenticate` | POST | ユーザー認証・JWT取得 | 不要 |
| `/api/v1/auth/refresh-token` | POST | トークン更新 | 必要 (リフレッシュトークン) |

### テスト実行

```bash
$ ./mvnw test
```

## フロントエンド

### 技術スタック
- React
- Next.js
- TypeScript
- Chakra UI (UIライブラリ)
- Playwright（E2Eテスト）

### 環境構築

1. `npm install` で依存関係をインストール
2. `npm run dev` で開発サーバーを起動
3. ブラウザで `http://localhost:3000` にアクセス

'use client';

import {
  Box,
  Container,
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  Card,
  CardBody,
  Avatar,
  Flex,
  Spacer,
  Badge,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import { useAuth } from '../contexts/AuthContext';
import { ProtectedRoute } from '../components/ProtectedRoute';

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const cardBg = useColorModeValue('white', 'gray.800');
  const statBg = useColorModeValue('gray.50', 'gray.700');

  return (
    <ProtectedRoute>
      <Container maxW="6xl" py={8}>
        <VStack spacing={8} align="stretch">
          {/* Header */}
          <Card bg={cardBg} shadow="lg" borderRadius="xl">
            <CardBody p={8}>
              <Flex align="center">
                <HStack spacing={4}>
                  <Avatar
                    size="lg"
                    name={user?.lastname + ' ' + user?.firstname}
                    bg="primary.500"
                    color="white"
                  />
                  <VStack align="start" spacing={1}>
                    <Heading size="lg" color="gray.700">
                      {user?.lastname} {user?.firstname}さん
                    </Heading>
                    <Text color="gray.500">{user?.email}</Text>
                  </VStack>
                </HStack>
                <Spacer />
                <VStack spacing={2}>
                  <Badge colorScheme="green" px={3} py={1} borderRadius="full">
                    オンライン
                  </Badge>
                  <Button
                    variant="outline"
                    colorScheme="red"
                    size="sm"
                    onClick={logout}
                  >
                    ログアウト
                  </Button>
                </VStack>
              </Flex>
            </CardBody>
          </Card>

          {/* Stats */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            <Card bg={statBg} borderRadius="xl">
              <CardBody>
                <Stat>
                  <StatLabel color="gray.600">総ログイン回数</StatLabel>
                  <StatNumber color="primary.600">42</StatNumber>
                </Stat>
              </CardBody>
            </Card>

            <Card bg={statBg} borderRadius="xl">
              <CardBody>
                <Stat>
                  <StatLabel color="gray.600">アクティブ日数</StatLabel>
                  <StatNumber color="secondary.600">15</StatNumber>
                </Stat>
              </CardBody>
            </Card>

            <Card bg={statBg} borderRadius="xl">
              <CardBody>
                <Stat>
                  <StatLabel color="gray.600">最終ログイン</StatLabel>
                  <StatNumber fontSize="lg" color="accent.600">今日</StatNumber>
                </Stat>
              </CardBody>
            </Card>
          </SimpleGrid>

          {/* Welcome Message */}
          <Card bg={cardBg} shadow="md" borderRadius="xl">
            <CardBody p={8}>
              <VStack spacing={4} align="start">
                <Heading size="md" color="gray.700">
                  アプリケーションダッシュボード
                </Heading>
                <Text color="gray.600" lineHeight="tall">
                  認証システムが正常に動作しています。このダッシュボードでは、
                  ユーザーの活動状況や各種設定を管理できます。
                </Text>
                <HStack spacing={4} pt={4}>
                  <Button colorScheme="primary" size="md">
                    設定を編集
                  </Button>
                  <Button variant="outline" colorScheme="secondary" size="md">
                    プロフィール更新
                  </Button>
                </HStack>
              </VStack>
            </CardBody>
          </Card>
        </VStack>
      </Container>
    </ProtectedRoute>
  );
}

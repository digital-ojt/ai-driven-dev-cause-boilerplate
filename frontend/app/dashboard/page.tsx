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
        </VStack>
      </Container>
    </ProtectedRoute>
  );
}

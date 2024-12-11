import { useRouter } from 'expo-router';
import React from 'react';

import { Cover } from '@/components/cover';
import {
  Button,
  FocusAwareStatusBar,
  SafeAreaView,
  Text,
  View,
} from '@/components/ui';
import { useIsFirstTime } from '@/lib/hooks';

export default function Onboarding() {
  const [_, setIsFirstTime] = useIsFirstTime();
  const router = useRouter();
  return (
    <View className="flex h-full items-center justify-center bg-slate-50">
      <FocusAwareStatusBar />
      <View className="w-full flex-1">
        <Cover />
      </View>
      <View className="justify-end px-4">
        <Text className="my-3 text-center text-5xl font-bold text-blue-600">
          Rua Start Reconhece
        </Text>
        <Text className="mb-2 text-center text-lg text-gray-600">
          Acesso seguro através do reconhecimento facial
        </Text>

        <Text className="my-1 flex items-center pt-6 text-left text-lg">
          🔒 Tecnologia avançada de reconhecimento facial
        </Text>
        <Text className="my-1 text-left text-lg">
          ⚡ Autenticação rápida e sem complicações
        </Text>
        <Text className="my-1 text-left text-lg">
          🛡️ Recursos aprimorados de segurança
        </Text>
        <Text className="my-1 text-left text-lg">
          🔐 Abordagem com foco na privacidade
        </Text>
        <Text className="my-1 text-left text-lg">
          📱 Funciona em múltiplos dispositivos
        </Text>
      </View>
      <SafeAreaView className="mt-6 w-full px-4">
        <Button
          label="Começar agora"
          onPress={() => {
            setIsFirstTime(false);
            router.replace('/face-recognition');
          }}
          className="bg-blue-600"
        />
      </SafeAreaView>
    </View>
  );
}

import { useRouter } from 'expo-router';
import React from 'react';

import {
  Button,
  FocusAwareStatusBar,
  SafeAreaView,
  Text,
  View,
} from '@/components/ui';
import { Camera } from '@/components/ui/icons';

export default function FaceSetup() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-slate-50 dark:bg-slate-900">
      <FocusAwareStatusBar />
      <SafeAreaView className="flex-1">
        <View className="flex-1 items-center justify-center px-4">
          <View className="mb-8 rounded-full bg-blue-100 p-8 dark:bg-blue-900">
            <Camera color="#2563eb" />
          </View>
          
          <Text className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Configurar Face ID
          </Text>
          
          <Text className="mb-8 text-center text-base text-gray-600 dark:text-gray-300">
            Posicione seu rosto em frente à câmera para configurar o reconhecimento facial.
            Certifique-se de estar em um ambiente bem iluminado.
          </Text>

          <View className="w-full space-y-4">
            <Button
              label="Iniciar Registro de Reconhecimento"
              onPress={() => router.push('/face-recognition')}
              className="bg-blue-600"
            />
            
            {/* <Button
              label="Pular por Enquanto"
              onPress={() => router.push('/login')}
              variant="outline"
            /> */}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
} 
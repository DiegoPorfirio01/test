import { useRouter } from 'expo-router';
import React, { useState } from 'react';

import {
  ActivityIndicator,
  Button,
  FocusAwareStatusBar,
  SafeAreaView,
  Text,
  View,
} from '@/components/ui';

export default function FaceRecognition() {
  const router = useRouter();
  const [isScanning, setIsScanning] = useState(false);

  const handleScanComplete = () => {
    setIsScanning(true);
    // Simulate face scanning process
    setTimeout(() => {
      setIsScanning(false);
      router.push('/login');
    }, 3000);
  };

  return (
    <View className="flex-1 bg-slate-50 dark:bg-slate-900">
      <FocusAwareStatusBar />
      <SafeAreaView className="flex-1">
        <View className="flex-1 items-center justify-center px-4">
          {isScanning ? (
            <View className="items-center">
              <ActivityIndicator size="large" className="mb-4" />
              <Text className="text-center text-lg text-gray-600 dark:text-gray-300">
                Escaneando seu rosto...
              </Text>
            </View>
          ) : (
            <>
              <View className="mb-8 size-64 items-center justify-center rounded-full border-4 border-dashed border-blue-500 dark:border-blue-400">
                <Text className="text-center text-gray-500 dark:text-gray-400">
                  Área de Escaneamento
                </Text>
              </View>

              <Text className="mb-6 text-center text-xl font-semibold text-gray-900 dark:text-white">
                Posicione seu rosto dentro da área
              </Text>

              <Text className="mb-8 text-center text-base text-gray-600 dark:text-gray-300">
                Mantenha seu rosto centralizado e aguarde o escaneamento automático
              </Text>

              <View className="w-full space-y-4">
                <Button
                  label="Iniciar Escaneamentos"
                  onPress={handleScanComplete}
                  className="bg-blue-600"
                />
                
                {/* <Button
                  label="Voltar"
                  onPress={() => router.back()}
                  variant="outline"
                /> */}
              </View>
            </>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
} 
/* eslint-disable react/no-unstable-nested-components */
import { Redirect, SplashScreen, Tabs } from 'expo-router';
import React, { useCallback, useEffect } from 'react';

import {
  Camera,
  PlusProfile,
  Settings as SettingsIcon,
} from '@/components/ui/icons';
import { useAuth, useIsFirstTime } from '@/lib';

export default function TabLayout() {
  const status = useAuth.use.status();
  const [isFirstTime] = useIsFirstTime();
  const hideSplash = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);
  useEffect(() => {
    if (status !== 'idle') {
      setTimeout(() => {
        hideSplash();
      }, 1000);
    }
  }, [hideSplash, status]);

  if (isFirstTime) {
    return <Redirect href="/onboarding" />;
  }
  if (status === 'signOut') {
    return <Redirect href="/login" />;
  }
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Camera',
          tabBarIcon: ({ color }) => <Camera color={color} />,
          tabBarButtonTestID: 'feed-tab',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="face-setup"
        options={{
          title: 'Dataset',
          headerShown: false,
          tabBarIcon: ({ color }) => <PlusProfile color={color} />,
          tabBarButtonTestID: 'add-photo-tab',
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ color }) => <SettingsIcon color={color} />,
          tabBarButtonTestID: 'settings-tab',
        }}
      />
    </Tabs>
  );
}
// const CreateNewRecognitionPhoto = () => {
//   return (
//     <Link href="/feed/add-post" asChild>
//       <Pressable>
//         <Text className="px-3 text-primary-300">Adicionar foto</Text>
//       </Pressable>
//     </Link>
//   );
// };


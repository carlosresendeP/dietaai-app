import { Stack } from "expo-router";
import {  QueryClientProvider, QueryClient } from "@tanstack/react-query";
/*
explicação:
- Stack é um componente que permite a navegação entre telas no Expo Router.
- QueryClientProvider é um componente que fornece o cliente de consulta para o React Query, permitindo
  que os hooks do React Query funcionem corretamente.
  - QueryClient é a instância do cliente de consulta que gerencia o cache e as consultas.
*/

export default function RootLayout() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider  client={queryClient}>
      <Stack>
        <Stack.Screen 
        name='index'
        options={{headerShown: false}}
        >

        </Stack.Screen>
        <Stack.Screen 
        name='step/index'
        options={{headerShown: false}}
        >

        </Stack.Screen>

        <Stack.Screen 
        name='create/index'
        options={{headerShown: false}}
        >

        </Stack.Screen>

        <Stack.Screen 
        name='nutrition/index'
        options={{headerShown: false}}
        >

        </Stack.Screen>
      </Stack>
    </QueryClientProvider>
  )
}

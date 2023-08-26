import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import * as Styled from "./styles";
import { useRef } from "react";

export default function App() {
  const containerRef = useRef<View>();
  return (
    <Styled.Container ref={containerRef}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </Styled.Container>
  );
}

function AppEx2() {
  const containerRef = useRef<View>();
  return (
    <Styled.Container ref={(ref) => (containerRef.current = ref)}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </Styled.Container>
  );
}

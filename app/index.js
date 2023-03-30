import { useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { images, icons, COLORS, FONT, SIZES, SHADOWS } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("React developer");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimensions="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimensions="100%" />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Popularjobs searchTerm={searchTerm} />
          <Nearbyjobs searchTerm={searchTerm} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

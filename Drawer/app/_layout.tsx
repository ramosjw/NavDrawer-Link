import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index1" // NOME DO AQUIVO
        options={{
          drawerLabel: "Index", //NOME QUE APARECE NA TABELA DO LADO
          title: "Index", // NOME QUE APARECE QUANDO VOCE TA NA TELA
        }}
      />
      <Drawer.Screen
        name="cadastro"
        options={{
          drawerLabel: "Cadastro",
          title: "Cadastro",
          drawerItemStyle: { height: 0 }
        }}
      />
            <Drawer.Screen
        name="sobre"
        options={{
          drawerLabel: "sobre",
          title: "sobre",
          drawerItemStyle: { height: 0 }
        }}
      />
            <Drawer.Screen
        name="home"
        options={{
          drawerLabel: "Home",
          title: "Home",
        }}
      />
    </Drawer>
  );
}
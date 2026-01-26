import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  Modal,
  Pressable,
  SafeAreaView,
} from 'react-native';

/* ===== Популярные фильмы  ===== */
const items = [
  {
    title: 'Игра в кальмара',
    imageUrl: 'https://avatars.mds.yandex.net/i?id=49c138cf9ecddba88210f5e3b395450a_l-5234386-images-thumbs&n=13',
    author: 'Хван Дон-хёк',
    year: 2021,
    detailedInfo: 'Сон Ги-хун уже немолод, разведён, по уши погряз в долгах. Он вступает в тайную игру на выживание ради огромного приза.',
  },
  {
    title: 'Oppenheimer',
    imageUrl: 'https://avatars.mds.yandex.net/i?id=264f820570929ea1129357bcc7d2bb83_l-10811833-images-thumbs&n=13',
    author: 'Christopher Nolan',
    year: 2023,
    detailedInfo: 'История создателя атомной бомбы и его морального выбора.',
  },
  {
    title: 'Barbie',
    imageUrl: 'https://avatars.mds.yandex.net/i?id=db817f10b2f2c94c2425bf93427449aa_l-12423024-images-thumbs&n=13',
    author: 'Greta Gerwig',
    year: 2023,
    detailedInfo: 'Фантастическая комедия о поиске себя в реальном мире.',
  },
  {
    title: 'The Irishman',
    imageUrl: 'https://avatars.mds.yandex.net/i?id=cc293cceab9613a789fcf8a4ff310b57_l-5252264-images-thumbs&n=13',
    author: 'Martin Scorsese',
    year: 2019,
    detailedInfo: 'Криминальная драма от Netflix о мафии и времени.',
  },
  {
    title: 'The Gray Man',
    imageUrl: 'https://resizer.mail.ru/p/70f4a23f-cab8-506f-96ad-ba6aa045b634/AQACKMTbdlgUR7mooCLAXbK8oAhDQPYVc919csUjFnUZg_QeZz_3r-JHcr5ymbfVI35_Bh7-7I515jJ2CMny3u-AWz8.jpg',
    author: 'Russo Brothers',
    year: 2022,
    detailedInfo: 'Шпионский боевик Netflix с Райаном Гослингом.',
  },
  {
    title: 'Аватар: Пламя и пепел',
    imageUrl: 'https://avatars.mds.yandex.net/i?id=dca0af717d0cbc8e2c554422c52d374e7484288d-4800903-images-thumbs&n=13',
    author: 'Джеймс Кэмерон',
    year: 2025,
    detailedInfo: 'жейк Салли, Нейтири и их дети переживают смерть Нетейама. Противостояние с корпорацией RDA обостряется, и теперь семье предстоит столкнуться с враждебным племенем На`ви во главе с Варанг.',
  },
  {
    title: 'Joker',
    imageUrl: 'https://basket-10.wbbasket.ru/vol1463/part146317/146317773/images/big/1.webp',
    author: 'Todd Phillips',
    year: 2019,
    detailedInfo: 'История превращения Артура Флека в культового злодея Джокера.',
  },
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const item = items[currentIndex];

  const handleNext = () => {
    if (currentIndex < items.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Элемент галереи */}
        <Pressable
          onLongPress={() => setModalVisible(true)}
          style={styles.pressable}
        >
          <Image
            source={{ uri: item.imageUrl }}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>Режиссёр: {item.author}</Text>
          <Text style={styles.text}>Год: {item.year}</Text>
          <Text style={styles.hint}>(Удерживайте для подробностей)</Text>
        </Pressable>

        {/* Кнопки навигации */}
        <View style={styles.buttons}>
          <Button
            title="Предыдущий"
            onPress={handlePrevious}
            disabled={currentIndex === 0}
          />
          <Button
            title="Следующий"
            onPress={handleNext}
            disabled={currentIndex === items.length - 1}
          />
        </View>

        {/* Модальное окно */}
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{item.title}</Text>
              <Text style={styles.modalText}>{item.detailedInfo}</Text>
              <Button title="Закрыть" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

/* ===== Стили ===== */
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  pressable: { alignItems: 'center', width: '100%' },
  image: {
    width: '100%',
    height: 350,
    marginBottom: 12,
    borderRadius: 8,
  },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 6, textAlign: 'center' },
  text: { fontSize: 16, marginBottom: 2, textAlign: 'center' },
  hint: { fontSize: 12, color: '#888', marginTop: 10, fontStyle: 'italic' },
  buttons: {
    flexDirection: 'row',
    marginTop: 30,
    width: '100%',
    justifyContent: 'space-between',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
  modalText: { fontSize: 16, marginBottom: 20, textAlign: 'center', lineHeight: 22 },
});
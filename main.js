import React from 'react';
import { SectionList, ScrollView, StyleSheet, Text, View, Image } from 'react-native';

const beranda = require('./img/beranda.png');

export default class Beranda extends React.Component {
  static navigationOptions = {
    title: 'Beranda',
    drawerLabel: 'Beranda',
    drawerIcon: () => (
    <Image
      source={beranda}
      style={styles.icon}
    />
  )
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <SectionList
            sections={[
              {
                title: 'Desa Penglipuran Village',
                data: ['  Awal mula keberadaan Desa Penglipuran sudah ada sejak dahulu, konon pada zaman Kerajaan Bangli. Para leluhur penduduk desa ini datang dari Desa Bayung Gede dan menetap sampai sekarang, sementara nama “Penglipuran” sendiri mempunyai makna sebagai Penghibur Penglipur hati raja yang pada saat itu raja sedih karena tidak ada orang yang dapat dipercaya dan beliau mencari orang yang jujur, yang pada akhirnya beliau temukan ketika sedang merenung sambil mengamati penduduk desa yang kini bernama penglipuran ini. 

        Namun, dari sudut pandang sejarah dan menurut para sesepuh, kata Penglipuran berasal dari kata “Pengeling Pura” yang berarti tempat suci mengenang para leluhur. Tempat ini sangat berarti sejak leluhur mereka datang dari desa Bayung Gede ke Penglipuran yang jaraknya cukup jauh, oleh karena itu masyarakat Penglipuran mendirikan pura yang sama sebagaimana yang ada di desa Bayung Gede. Dalam hal ini berarti masyarakat Penglipuran masih mengenal asal usul mereka. Pendapat lain mengatakan bahwa Penglipuran berasal dari kata “Penglipur” yang berarti “penghibur” karena pada jaman kerajaan tempat ini dijadikan tempat peristirahatan.

        Penglipuran memiliki dua pengertian, yaitu pangeling yang kata dasarnya “eling” atau mengingat. Sementara pura artinya tanah leluhur. Jadi, penglipuran artinya mengingat tanah leluhur. Kata itu juga bisa berarti “penghibur” yang berkonteks makna memberikan petunjuk bahwa ada hubungan sangat erat antara tugas dan tanggung jawab masyarakat dalam menjalankan dharma agama.

        Masyarakat desa adat penglipuran percaya bahwa leluhur mereka berasal dari Desa Bayung Gede, Kintamani.Sebelumnya desa Panglipuran bernama Kubu Bayung. Pada jaman dahulu raja bali memerintahkan pada warga-warga di Bayung Gede untuk mengerjakan proyek di Kubu Bayung, tapi akhirnya para warga tersebut memutuskan untuk menetap di desa Kubu Bayung. Dilihat dari segi tradisi, desa adat ini menggunakan sistem pemerintahan hulu apad. Pemerintahan desa adatnya terdiri dari prajuru hulu apad dan prajuru adat. Prajuru hulu apad terdiri dari jero kubayan, jero kubahu, jero singgukan, jero cacar, jero balung dan jero pati. Prajuru hulu apad otomatis dijabat oleh mereka yang paling senior dilihat dari usia perkawinan tetapi yang belum ngelad. Ngelad atau pensiun terjadi bila semua anak sudah menikah atau salah seorang cucunya telah kawin. Mereka yang baru menikah duduk pada posisi yang paling bawah dalam tangga keanggotaan desa adat.']
              },
              
            ]}
            renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 14,
    // height: 100
  },
  icon: {
    height: 24,
    width: 24
  }
});

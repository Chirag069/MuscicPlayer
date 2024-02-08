import React from 'react';
import {
  Avatar,
  Card,
  Colors,
  GridList,
  Spacings,
  Text,
  View,
} from 'react-native-ui-lib';
import scale from '../utils/scale';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      image:
        'https://img.freepik.com/free-vector/moon_1308-85399.jpg?w=740&t=st=1707401738~exp=1707402338~hmac=c3232c76a83c5e5fc7afa6c3b0fb5f7a55d4d2ea27fb2b5dfacc118b0aee4d41',
      title: 'Mind',
      sub_title: `Lets's train it`,
    },
    {
      id: 2,
      image:
        'https://img.freepik.com/free-vector/moon_1308-85399.jpg?w=740&t=st=1707401738~exp=1707402338~hmac=c3232c76a83c5e5fc7afa6c3b0fb5f7a55d4d2ea27fb2b5dfacc118b0aee4d41',
      title: 'Sleep',
      sub_title: `Restful sleep`,
    },
    {
      id: 3,
      image:
        'https://img.freepik.com/free-vector/moon_1308-85399.jpg?w=740&t=st=1707401738~exp=1707402338~hmac=c3232c76a83c5e5fc7afa6c3b0fb5f7a55d4d2ea27fb2b5dfacc118b0aee4d41',
      title: 'Relax',
      sub_title: `Reframe stress`,
    },
    {
      id: 4,
      image:
        'https://img.freepik.com/free-vector/moon_1308-85399.jpg?w=740&t=st=1707401738~exp=1707402338~hmac=c3232c76a83c5e5fc7afa6c3b0fb5f7a55d4d2ea27fb2b5dfacc118b0aee4d41',
      title: 'Focus',
      sub_title: `Focus on work`,
    },
  ];

  const renderItem = ({item}) => {
    return (
      <Card padding-10 onPress={() => navigation.navigate('Player')}>
        <View right marginB-20 marginR-10>
          <FastImage
            source={{uri: item.image}}
            style={{height: scale(30), width: scale(30)}}
          />
        </View>
        <View padding-s2>
          <Text text60BL black>
            {item.title}
          </Text>
          <Text text800 grey40>
            {item.sub_title}
          </Text>
        </View>
      </Card>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#ecedff'}}>
      {/* header */}
      <View
        marginH-20
        marginV-20
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View center style={{flexDirection: 'row'}}>
          <Avatar
            imageStyle={{borderRadius: scale(10)}}
            source={{
              uri: 'https://lh3.googleusercontent.com/-cw77lUnOvmI/AAAAAAAAAAI/AAAAAAAAAAA/WMNck32dKbc/s181-c/104220521160525129167.jpg',
            }}
          />
          <Text marginL-20 text50BL color={'#998898'}>
            Hello Malik
          </Text>
        </View>
        <MaterialIcons name="filter-list" color={'#998898'} size={scale(40)} />
      </View>

      <Text center text50BL marginV-30 color={'#998898'}>
        What's your mood today?
      </Text>

      <View
        marginH-20
        marginV-20
        style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text center text60BL black>
          Latest Practices
        </Text>
        <View>
          <Text center text60BL black>
            View all
          </Text>
          <View
            backgroundColor={Colors.red50}
            paddingV-1
            width={'50%'}
            style={{alignSelf: 'flex-end'}}
          />
        </View>
      </View>

      <GridList
        data={data}
        renderItem={renderItem}
        numColumns={2}
        // maxItemWidth={200}
        itemSpacing={Spacings.s7}
        listPadding={Spacings.s5}
        // keepItemSize
        contentContainerStyle={{paddingTop: Spacings.s5}}
      />
    </View>
  );
};

export default Home;

import React from 'react';
import Swiper from 'react-native-swiper';
import {
  Carousel,
  View,
  Text,
  Button,
  Colors,
  Assets,
} from 'react-native-ui-lib';
import scale, {verticalScale} from '../utils/scale';
import {Dimensions, Pressable, TouchableWithoutFeedback} from 'react-native';
import FastImage from 'react-native-fast-image';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const plusIcon = Assets.getAssetByPath('icons.demo.plus');

const AppInto = () => {
  const navigation = useNavigation();
  const sliderimage = [
    {
      image:
        'https://i.postimg.cc/gcv1cnh6/Pngtree-meditation-yoga-sitting-exercise-illustration-6234814.png',
      id: 1,
    },
    {
      image:
        'https://i.postimg.cc/gcv1cnh6/Pngtree-meditation-yoga-sitting-exercise-illustration-6234814.png',
      id: 2,
    },
    {
      image:
        'https://i.postimg.cc/gcv1cnh6/Pngtree-meditation-yoga-sitting-exercise-illustration-6234814.png',
      id: 3,
    },
  ];

  const {width, height} = Dimensions.get('window');

  const SilderItem = ({item}) => {
    return (
      <>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'transparent',
          }}>
          <FastImage
            style={{width, flex: 1}}
            source={{
              uri: item?.image
                ? item?.image
                : 'https://upload.wikimedia.org/wikipedia/commons/7/75/No_image_available.png',
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.stretch}></FastImage>
        </View>
      </>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#ecedff'}}>
      <View style={{flex: 0.5}}>
        <Swiper
          autoplay={true}
          style={{}}
          //   height={verticalScale(360)}
          dot={
            <View
              style={{
                backgroundColor: '#f6cbd3',
                width: scale(30),
                height: verticalScale(4),
                borderRadius: 4,
                marginLeft: scale(3),
                marginRight: scale(3),
                marginBottom: verticalScale(-100),
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: '#ff95a8',
                width: scale(30),
                height: verticalScale(4),
                borderRadius: 4,
                marginLeft: scale(3),
                marginRight: scale(3),
                marginBottom: verticalScale(-100),
              }}
            />
          }
          paginationStyle={{
            marginBottom: verticalScale(30),
            bottom: verticalScale(0),
          }}
          loop>
          {sliderimage?.map((item, i) => {
            return (
              <>
                <SilderItem item={item} key={item.id} />
              </>
            );
          })}
        </Swiper>
      </View>
      <View style={{flex: 0.5}}>
        <Text center text50BL black marginT-100>
          Time to meditate
        </Text>
        <Text
          center
          text60BL
          grey40
          marginT-20
          marginH-80
          //   style={{width: '50%'}}
        >
          Take a breath, and ease your mind
        </Text>

        <Button
          onPress={() => {
            navigation.navigate('Home');
          }}
          marginV-60
          paddingV-15
          backgroundColor={Colors.white}
          color={Colors.black}
          borderRadius={10}
          iconStyle={{height: scale(20), width: scale(20)}}
          style={{marginHorizontal: scale(20)}}
          label="Lets's get started"
          iconSource={require('../Assets/icones/right-arrow.png')}
          iconOnRight
        />
      </View>
    </View>
  );
};

export default AppInto;

import React, {useEffect, useRef, useState, version} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
  Animated,
} from 'react-native';

import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import scale, {verticalScale} from '../utils/scale';
import {Button, Colors, Text, View} from 'react-native-ui-lib';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const songs = [
  {
    id: 1,
    title: 'One Kiss',
    artist: 'Dua lipa',
    artwork:
      'https://upload.wikimedia.org/wikipedia/en/3/3e/Calvin_Harris_and_Dua_Lipa_One_Kiss.png',
    url: 'https://audio.jukehost.co.uk/YIVzPysvnZqjwIxD1IEWv9YfJ8liqG6f',
  },
  {
    id: 2,
    title: 'Ram Aayenge',
    artist: 'Swati Mishra',
    artwork: 'https://i.ytimg.com/vi/wncNcu6jEgs/maxresdefault.jpg',
    url: 'https://audio.jukehost.co.uk/2lwZjtZJEmon76FlT30KOoDf6lJg9nVx',
  },
];

const setupPlayer = async () => {
  try {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.Stop,
      ],
    });
    await TrackPlayer.add(songs);
  } catch (error) {
    console.log(error);
  }
};

const togglePlayBack = async playBackState => {
  const currentTrack = await TrackPlayer.getCurrentTrack();
  console.log(currentTrack, playBackState, State.Playing);
  if (currentTrack != null) {
    if (playBackState.state != 'playing') {
      await TrackPlayer.play();
    }
    if (playBackState.state == 'playing') {
      await TrackPlayer.pause();
    }
  }
};

const MusicPlayer = () => {
  const playBackState = usePlaybackState();
  const progress = useProgress();
  const navigation = useNavigation();
  //   custom states
  const [songIndex, setsongIndex] = useState(0);
  const [repeatMode, setRepeatMode] = useState('off');
  const [trackTitle, setTrackTitle] = useState();
  const [trackArtist, setTrackArtist] = useState();
  const [trackArtwork, setTrackArtwork] = useState();
  // custom referecnces
  const scrollX = useRef(new Animated.Value(0)).current;
  const songSlider = useRef(null);

  //   changing the track on complete
  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (event.type === Event.PlaybackTrackChanged && event.nextTrack !== null) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const {title, artwork, artist} = track;
      setTrackTitle(title);
      setTrackArtist(artist);
      setTrackArtwork(artwork);
    }
  });

  const repeatIcon = () => {
    if (repeatMode == 'off') {
      return 'repeat-off';
    }

    if (repeatMode == 'track') {
      return 'repeat-once';
    }

    if (repeatMode == 'repeat') {
      return 'repeat';
    }
  };

  const changeRepeatMode = () => {
    if (repeatMode == 'off') {
      TrackPlayer.setRepeatMode(RepeatMode.Track);
      setRepeatMode('track');
    }

    if (repeatMode == 'track') {
      TrackPlayer.setRepeatMode(RepeatMode.Queue);
      setRepeatMode('repeat');
    }

    if (repeatMode == 'repeat') {
      TrackPlayer.setRepeatMode(RepeatMode.Off);
      setRepeatMode('off');
    }
  };

  const skipTo = async trackId => {
    await TrackPlayer.skip(trackId);
  };

  useEffect(() => {
    setupPlayer();

    scrollX.addListener(({value}) => {
      //   console.log(`ScrollX : ${value} | Device Width : ${width} `);

      const index = Math.round(value / width);
      skipTo(index);
      setsongIndex(index);

      //   console.log(`Index : ${index}`);
    });

    return () => {
      scrollX.removeAllListeners();
      //   TrackPlayer?.destroy();
    };
  }, []);

  const skipToNext = () => {
    songSlider.current.scrollToOffset({
      offset: (songIndex + 1) * width,
    });
  };

  const skipToPrevious = () => {
    songSlider.current.scrollToOffset({
      offset: (songIndex - 1) * width,
    });
  };

  const renderSongs = ({item, index}) => {
    return (
      <Animated.View style={style.mainWrapper}>
        <View style={[style.imageWrapper, style.elevation]}>
          <Image
            source={{uri: item.artwork}}
            // source={trackArtwork}
            style={style.musicImage}
          />
        </View>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={style.container}>
      {/* header */}
      <View
        marginH-20
        marginV-20
        style={{
          flexDirection: 'row',
          // alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" color={'#9e9ffd'} size={scale(40)} />
        </TouchableOpacity>
        <MaterialIcons name="filter-list" color={'#9e9ffd'} size={scale(40)} />
      </View>
      {/* music player section */}
      <View style={style.mainContainer}>
        {/* Image */}

        <Animated.FlatList
          ref={songSlider}
          renderItem={renderSongs}
          data={songs}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          style={{marginVertical: verticalScale(50)}}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {x: scrollX},
                },
              },
            ],
            {useNativeDriver: true},
          )}
        />

        {/* Title & Artist Name */}
        <View>
          <Text style={[style.songContent, style.songTitle]}>
            {/* {songs[songIndex].title} */ trackTitle}
          </Text>
          <Text style={[style.songContent, style.songArtist]}>
            {/* {songs[songIndex].artist} */ trackArtist}
          </Text>
        </View>
        <View>
          {/* music control */}
          <View style={style.musicControlsContainer}>
            <TouchableOpacity
              //   onPress={skipToPrevious}
              style={{marginRight: scale(30)}}>
              <Feather name="refresh-cw" size={25} color="#9e9ffd" />
            </TouchableOpacity>
            <TouchableOpacity onPress={skipToPrevious}>
              <Ionicons
                name="play-skip-back-outline"
                size={35}
                color="#9e9ffd"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => togglePlayBack(playBackState)}
              style={{marginHorizontal: scale(10)}}>
              <Ionicons
                name={
                  playBackState.state === State.Playing
                    ? 'pause-circle'
                    : 'play-circle'
                }
                size={75}
                color="#9e9ffd"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={skipToNext}>
              <Ionicons
                name="play-skip-forward-outline"
                size={35}
                color="#9e9ffd"
              />
            </TouchableOpacity>
            <TouchableOpacity
              //   onPress={skipToNext}
              style={{marginLeft: verticalScale(30)}}>
              <Entypo name="shuffle" size={25} color="#9e9ffd" />
            </TouchableOpacity>
          </View>
        </View>

        {/* songslider */}

        {/* Progress Durations */}
        <View style={style.progressLevelDuraiton}>
          <Text style={style.progressLabelText}>
            {new Date(progress.position * 1000)
              .toLocaleTimeString()
              .substring(3)}
          </Text>
          <Text style={style.progressLabelText}>
            {new Date((progress.duration - progress.position) * 1000)
              .toLocaleTimeString()
              .substring(3)}
          </Text>
        </View>
        <Slider
          style={style.progressBar}
          value={progress.position}
          minimumValue={0}
          maximumValue={progress.duration}
          thumbTintColor="#9e9ffd"
          minimumTrackTintColor="#9e9ffd"
          maximumTrackTintColor="#000"
          onSlidingComplete={async value => {
            await TrackPlayer.seekTo(value);
          }}
        />
      </View>

      <Button
        onPress={() => {}}
        marginV-60
        paddingV-15
        backgroundColor={Colors.white}
        color={Colors.black}
        borderRadius={10}
        iconStyle={{height: scale(20), width: scale(20)}}
        style={{marginHorizontal: scale(20)}}
        label="Explore similar"
        iconSource={require('../Assets/icones/right-arrow.png')}
        iconOnRight
      />
    </SafeAreaView>
  );
};

export default MusicPlayer;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecedff',
  },
  mainContainer: {
    // flex: 1,
    marginTop: verticalScale(20),
    marginHorizontal: scale(20),
    borderRadius: scale(50),
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  bottomSection: {
    borderTopColor: '#393E46',
    borderWidth: 1,
    width: width,
    alignItems: 'center',
    paddingVertical: 15,
  },

  bottomIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },

  mainWrapper: {
    width: width - scale(40),
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageWrapper: {
    width: scale(200),
    height: scale(200),
  },
  musicImage: {
    width: '100%',
    height: '100%',
    borderRadius: scale(100),
  },
  elevation: {
    elevation: 5,

    shadowColor: '#ccc',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
  songContent: {
    textAlign: 'center',
    color: '#000',
  },
  songTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },

  songArtist: {
    fontSize: 16,
    color: Colors.grey40,
    fontWeight: '300',
  },

  progressBar: {
    width: scale(300),
    height: 40,
    flexDirection: 'row',
    marginBottom: scale(20),
  },
  progressLevelDuraiton: {
    width: scale(270),
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginHorizontal: scale(10),
  },
  progressLabelText: {
    color: Colors.black,
    fontSize: scale(17),
    fontWeight: 'bold',
  },

  musicControlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    width: '60%',
  },
});

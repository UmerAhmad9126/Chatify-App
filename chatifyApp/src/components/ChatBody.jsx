import { StyleSheet, View, Text } from 'react-native'
import React, { useRef } from 'react'
import { Colors } from '../theme/Colors'
import VectorIcon from '../utils/VectorIcons'
import { MessagesData } from '../data/MessagesData'
import { ScrollView } from 'react-native-gesture-handler'

const ChatBody = () => {

  const userID = "1jdfnvchjkd";
  const scrollviewRef = useRef();

  const UserMessageView = ({ message, time }) => {
    return (
      <View style={styles.userContainer}>
        <View style={styles.userInnerContainer}>
          <Text style={styles.message}>{message}</Text>
          <Text style={styles.time}>{time}</Text>
          <VectorIcon
            name="check-double"
            type="FontAwesome5"
            color={Colors.blue}
            size={12}
            style={styles.doubleCheck}
          />
        </View>
      </View>
    )
  }

  const OtherUserMessageView = ({ message, time }) => {
    return (
      <View style={styles.otherUserContainer}>
        <View style={styles.otherUserInnerContainer}>
          <Text style={styles.message}>{message}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    )
  }

  const scrollToBotom = () => {
    scrollviewRef.current.scrollToEnd({ animated: true });
  }

  return (
    <>
      <ScrollView
        ref={scrollviewRef}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={scrollToBotom}
      >
        {MessagesData.map((el) => (
          <>
            {el.id === userID ? (

              <UserMessageView key={el.id} message={el.message} time={el.time} />
            ) : (

              <OtherUserMessageView key={el.id} message={el.message} time={el.time} />
            )}
          </>
        ))}
      </ScrollView>
      <View style={styles.scrollIcon}>
        <View style={styles.scrollDownArrow}>
          <VectorIcon
            name="angle-dobule-down"
            type="Fontisto"
            size={12}
            color={Colors.white}
            onPress={scrollToBotom}
          />
        </View>
      </View>
    </>
  )
}

export default ChatBody

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 5,
  },
  otherUserContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  userInnerContainer: {
    backgroundColor: Colors.teal,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  message: {
    fontSize: 13,
    color: Colors.white,
  },
  time: {
    fontSize: 9,
    color: Colors.white,
    marginLeft: 5,
  },
  doubleCheck: {
    marginLeft: 5,
  },
  otherUserInnerContainer: {
    backgroundColor: Colors.primaryColor,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  scrollDownArrow: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 50,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

const ChatBody = () => {

  const UserMessageView = () => {
    return (
      <View style={styles.userContainer}>
        <Text>hiii</Text>
        <Text>09:42 PM</Text>

      </View>
    )
  }

  const OtherUserMessageView = () => {
    return (
      <View>
        <Text>hyy</Text>
        <Text>9:42 PM</Text>
      </View>
    )
  }


  return (
    <View>
      <UserMessageView />
      <OtherUserMessageView />
    </View>
  )
}

export default ChatBody

const styles = StyleSheet.create({
  userContainer: {
    fontSize: 12
  }
})
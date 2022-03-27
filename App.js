import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, SectionList } from 'react-native';
import React from 'react';

export default function App() {
  let [data, setData] = React.useState();
  let [refreshing, setRefreshing] = React.useState(false);

  React.useEffect(() => {
    setTimeout(loadData, 2000);
  });

  let refreshData = () => {
    setRefreshing(true);
    setTimeout(loadData, 2000);
  };

  let loadData = () => {
    let loadedData = [
      {
        title: "Overdue",
        color: "#FF0000",
        data: [
          "English Homework",
          "Wash Dishes",
          "Wash Hair"
        ]
      },
      {
        title: "Todo",
        color: "#000000",
        data: [
          "Buy Laura's Birthday Present",
          "Exercise",
          "Grocery Shopping"
        ]
      },
      {
        title: 'Completed',
        color: "#00FF00",
        data: [
          "Laundry",
          "Make Bed",
          "Prepare Dinner"
        ]
      }
    ];

    setData(loadedData);
    setRefreshing(false);
  };

  let renderItem = ({item}) => {
    return <Text>{item}</Text>
  };

  let renderSectionHeader = ({section}) => {
    return <Text style={[styles.sectionHeader, { color: section.color }]}>{section.title}</Text>
  };

  let renderSectionFooter = ({section}) => {
    return <Text style={styles.sectionFooter}>{section.data.length} Items {section.title}</Text>
  };

  let SectionSeparator = () => {
    return <View style={styles.sectionSeparator} />
  };

  let ItemSeparator = () => {
    return <View style={styles.itemSeparator} />
  };

  return (
    <SafeAreaView style={styles.container}>
      <SectionList 
        sections={data}
        style={styles.stretch}
        onRefresh={refreshData}
        refreshing={refreshing}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        renderSectionFooter={renderSectionFooter}
        SectionSeparatorComponent={SectionSeparator}
        ItemSeparatorComponent={ItemSeparator}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 16
  },
  stretch: {
    alignSelf: 'stretch'
  },
  sectionHeader: {
    textTransform: 'uppercase',
    textDecorationLine: 'underline',
    fontSize: 20,
    paddingVertical: 4,
    alignSelf: 'stretch',
    backgroundColor: '#ffffff'
  },
  sectionFooter: {
    fontStyle: 'italic',
    paddingVertical: 4
  },
  itemSeparator: {
    height: 4,
    backgroundColor: '#eeeeee',
    alignSelf: 'stretch'
  },
  sectionSeparator: {
    height: 4,
    backgroundColor: '#bebebe',
    alignSelf: 'stretch'
  }
});

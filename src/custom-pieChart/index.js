import React from 'react'
import { View, ScrollView, Dimensions, StyleSheet } from 'react-native'
import { VictoryPie } from 'victory-native'


const { width } = Dimensions.get("screen")

const App = () => {

    // Dummy Date
    const confirmStatus = "C"
    const pendingStatus = "P"

    let categoriesData = [
        {
            id: 1,
            name: "Education",
            color: "#f6bd60",
            expenses: [
                {
                    id: 1,
                    title: "Tuition Fee",
                    description: "Tuition fee",
                    location: "Ahmet's tuition center",
                    total: 100.00,
                    status: pendingStatus,
                },
                {
                    id: 2,
                    title: "Arduino",
                    description: "Hardware",
                    location: "Ahmet's tuition center",
                    total: 30.00,
                    status: pendingStatus,
                },
                {
                    id: 3,
                    title: "Javascript Books",
                    description: "Javascript books",
                    location: "Ahmet's tuition center",
                    total: 20.00,
                    status: confirmStatus,
                },
                {
                    id: 4,
                    title: "PHP Books",
                    description: "PHP books",
                    location: "Ahmet's tuition center",
                    total: 20.00,
                    status: confirmStatus,
                },
            ]
        },

        {
            id: 2,
            name: "Nutrition",
            color: "#577590",
            expenses: [
                {
                    id: 5,
                    title: "Vitamins",
                    description: "Vitamin",
                    location: "Ahmet's Pharmacy",
                    total: 25.00,
                    status: pendingStatus,
                },
                {
                    id: 6,
                    title: "Protein Powder",
                    description: "Protein",
                    location: "Ahmet's Pharmacy",
                    total: 50.00,
                    status: confirmStatus,
                },
            ]
        },

        {
            id: 3,
            name: "Child",
            color: "#f5cac3",
            expenses: [
                {
                    id: 7,
                    title: "Toys",
                    description: "toys",
                    location: "Ahmet's Toy Store",
                    total: 25.00,
                    status: confirmStatus,
                },
                {
                    id: 8,
                    title: "Baby Car Seat",
                    description: "Baby Car Seat",
                    location: "Ahmet's Toy Store",
                    total: 100.00,
                    status: pendingStatus,
                },
                {
                    id: 9,
                    title: "Pampers",
                    description: "Pampers",
                    location: "Ahmet's Toy Store",
                    total: 100.00,
                    status: pendingStatus,
                },
                {
                    id: 10,
                    title: "Baby T-Shirt",
                    description: "T-Shirt",
                    location: "Ahmet's Toy Store",
                    total: 20.00,
                    status: pendingStatus,
                },
            ]
        },

        {
            id: 4,
            name: "Beauty & Care",
            color: "#84a59d",
            expenses: [
                {
                    id: 11,
                    title: "Skin Care Product",
                    description: "skin care",
                    location: "Ahmet's Pharmacy",
                    total: 10.00,
                    status: pendingStatus,
                },
                {
                    id: 12,
                    title: "Lotion",
                    description: "lotion",
                    location: "Ahmet's Pharmacy",
                    total: 50.00,
                    status: confirmStatus,
                },
                {
                    id: 13,
                    title: "Face Mask",
                    description: "face mask",
                    location: "Ahmet's Pharmacy",
                    total: 50.00,
                    status: pendingStatus,
                },
                {
                    id: 14,
                    title: "Sunscreen Cream",
                    description: "sunscreen cream",
                    location: "Ahmet's Pharmacy",
                    total: 50.00,
                    status: pendingStatus,
                },
            ]
        },

        {
            id: 5,
            name: "Sports",
            color: "#f28482",
            expenses: [
                {
                    id: 15,
                    title: "Gym Membership",
                    description: "montly fee",
                    location: "Ahmet's Gym",
                    total: 45.00,
                    status: pendingStatus,
                },
                {
                    id: 16,
                    title: "Gloves",
                    description: "gym equipment",
                    location: "Ahmet's Gym",
                    total: 15.00,
                    status: confirmStatus,
                },
            ]
        },

        {
            id: 6,
            name: "Clothing",
            color: "#40916c",
            expenses: [
                {
                    id: 17,
                    title: "T-Shirt",
                    description: "plain color t-shirt",
                    location: "Ahmet's Mall",
                    total: 20.00,
                    status: pendingStatus,
                },
                {
                    id: 18,
                    title: "Jeans",
                    description: "blue jeans",
                    location: "Ahmet's Mall",
                    total: 50.00,
                    status: confirmStatus,
                },
            ]
        },
    ]

    const [categories, setCategories] = React.useState(categoriesData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)

    function processCategoryDataToDisplay() {
        let chartData = categories.map((item) => {
            let confirmExpenses = item.expenses.filter(a => a.status == "C")
            var total = confirmExpenses.reduce((a, b) => a + (b.total || 0), 0)

            return {
                name: item.name,
                y: total,
                expenseCount: confirmExpenses.length,
                color: item.color,
                id: item.id,
            }
        })

        // Filter out categories with no data / expenses
        let filterChartData = chartData.filter(a => a.y > 0)

        // Calculate the total expenses
        let totalExpense = filterChartData.reduce((a, b) => a + (b.y || 0), 0)

        // Calculate percantage and repopulate chart data
        let finalChartData = filterChartData.map((item) => {
            let percentage = (item.y / totalExpense * 100).toFixed(0)
            return {
                label: `${percentage}%`,
                y: Number(item.y),
                expenseCount: item.expenseCount,
                color: item.color,
                name: item.name,
                id: item.id,
            }
        })

        return finalChartData;
    }

    function setSelectCategoryByName(name) {
        let category = categories.filter(a => a.name == name)
        setSelectedCategory(category[0])
    }

    function renderChart() {

        let chartData = processCategoryDataToDisplay();
        let colorScales = chartData.map((item) => item.color)


        return (

            <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
                <VictoryPie
                    data={chartData}
                    colorScale={colorScales}
                />

                <VictoryPie
                    data={chartData}
                    colorScale={colorScales}
                    labels={(datum) => `${datum.y}`}
                    radius={({ datum }) => (selectedCategory && selectedCategory.name == datum.name) ? width * 0.4 : width * 0.4 - 10}
                    innerRadius={70}
                    labelRadius={({ innerRadius }) => (width * 0.4 + innerRadius) / 2.5}
                    style={{
                        labels: { fill: 'white', fontSize: 16 },
                        parent: { ...styles.shadow }
                    }}
                    width={width * 0.8}
                    height={width * 0.8}
                    events={[{
                        target: "data",
                        eventHandlers: {
                            onPress: () => {
                                return [{
                                    target: "labels",
                                    mutation: (props) => {
                                        let categoryName = chartData[props.index].name
                                        setSelectCategoryByName(categoryName)
                                    }
                                }]
                            }
                        }
                    }]}
                />
            </ScrollView>

        )
    }


    return (
        <View>
            {renderChart()}
        </View>
    )
}

const styles = StyleSheet.create({
    shadow: {
        elevation: 6
    }
})

export default App

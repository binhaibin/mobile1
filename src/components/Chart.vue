<template>
    <Page>
    <ActionBar title="Chart"/>
    <RadCartesianChart>
      <CategoricalAxis v-tkCartesianHorizontalAxis />
      <LinearAxis v-tkCartesianVerticalAxis />
      <LineSeries v-tkCartesianSeries
                  :items="favoriteFruits"
                  categoryProperty="type"
                  valueProperty="count" />
    </RadCartesianChart>
  </Page>
</template>

<script>
    import Vue from "nativescript-vue";
    import RadChart from "nativescript-ui-chart/vue";
    Vue.use(RadChart);

    export default {
        data() {
            return {
                favoriteFruits: [{
                        type: "🍎",
                        count: 7
                    },
                    {
                        type: "🍌",
                        count: 15
                    },
                    {
                        type: "🍍",
                        count: 12
                    },
                    {
                        type: "🍒",
                        count: 30
                    },
                    {
                        type: "🍇",
                        count: 16
                    }
                ]
            };
        },
        methods: {
            onNavigationButtonTap() {
              Frame.topmost().goBack();
              console.log('adasda')
            }
        }
    };
</script>

<style scoped>
    .page{
      background-color:#ffffff;
    }
</style>
<template>
    <Page >
       <ActionBar title="Home"/>
          <FlexboxLayout class="page" flexDirection="column" backgroundColor="white">
            <Button text="RoomMap" class="btn-primary" @tap="goToRoomMap" />
            <Button text="Chart" class="btn-primary" @tap="goToChart" />
          </FlexboxLayout>
    </Page>
</template>

<script >
import RoomMap from './RoomMap';
import Chart from './Chart';
  export default {
    data() {
      return {
      }
    },
    methods: {
      goToRoomMap() {
        this.$navigateTo(RoomMap);
      },
      goToChart() {
        this.$navigateTo(Chart);
      }
    }
  }
</script>
<style scoped>
  .btn-primary {
    height: 50;
    margin: 30 5 15 5;
    background-color: #D51A1A;
    border-radius: 5;
    font-size: 20;
    font-weight: 600;
    color: white;
}
</style>

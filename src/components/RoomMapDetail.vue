<template>
    <Page class="page">
       <ActionBar title="RoomMapDetail"/>
        <StackLayout>
            <Button @tap="this.$navigateBack" text="Go Back"></Button>
        </StackLayout>
    </Page>
</template>

<script >
  export default {
    data() {
      return {
      }
    }
  }
</script>
<style scoped>
    .page{
      background-color:#ffffff;
    }
</style>
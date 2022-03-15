<template>
  <div class="main">
      <div class="behind"></div>
      <v-row justify="center" align="center">
          <v-col cols="12" sm="8" md="6">
              <v-card elevation="5" class="card">
                <v-list-item>
                    <v-list-item-avatar size="200" color="grey"> 
                        <p id="logo" >{{getForm.firstname[0]}}{{getForm.lastname[0]}} </p>
                    </v-list-item-avatar>
                    <v-list-item-content class="inside">
                        <v-list-item-title>
                            <h1 class="title">{{getForm.firstname}} {{getForm.lastname}}</h1>
                        </v-list-item-title>
                        <p> {{getForm.address}} </p>
                        <p> Email: {{getForm.email}} </p>
                        <p> Phone: {{getForm.phonenumber}} </p>
                        <p> Website: {{getForm.website }} </p>
                    </v-list-item-content>
                </v-list-item>

                <!-- <div id="circle">
                    <h1 id="logo"> {{getForm.firstname[0]}}{{getForm.lastname[0]}} </h1>
                </div>
                <v-card-title justify="center" class="title">
                    <h1> {{getForm.firstname}}{{getForm.lastname}} </h1>
                </v-card-title> -->
              </v-card>
              <v-btn @click="getFormPage()" id="button"> Start Again </v-btn>
          </v-col>
      </v-row>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
      getFormPage() {
          this.$router.push('/form')
      }
  },
  computed: {
    getForm() {
      return this.$store.state.mainForm.form
    }
  }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Montserrat:wght@200;300;400&family=Quicksand:wght@300;400&display=swap');

  .card{
    position: absolute;
    top: 150px;
    padding: 50px;
    background-color: white;
    border-radius: 25px;
    color: black;
  }

    .v-list-item__content {
        height: 250px;
        width: 300px;
    }

  .title {
      font-size: 40px !important;
      margin-bottom: 20px;
      color: black;
      padding-left: 20px;
  }

  #circle {
      border-radius: 50%;
      height: 200px;
      width: 200px;
      background-color: gray;
  }

    .inside {
        color: black;
    }

    .inside p {
        padding-left: 20px;
    }

  #logo {
      font-family: 'Dancing Script', cursive;
      color: white;
      margin-top: 25px;
      font-size: 75px;
      text-align: center;
  }

    #button {
        top: 500px;
        left: 250px;
    }
</style>
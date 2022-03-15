<template>
  <div class="main">
      <div class="behind"></div>
      <v-row justify="center" align="center">
          <v-col cols="10" sm="8" md="6">
              <div class="grid-container">
                  <div class="grid">
                      <div class="item" v-for="item in form" :key="item.firstname">
                        <v-card elevation="5" class="card">
                            <v-list-item>
                                <v-list-item-avatar size="200" color="grey"> 
                                    <p id="logo" >{{item.firstname[0]}}{{item.lastname[0]}}</p>
                                </v-list-item-avatar>
                                <v-list-item-content class="inside">
                                    <v-list-item-title>
                                        <h1 class="title">{{item.firstname}} {{item.lastname}}</h1>
                                    </v-list-item-title>
                                    <p> {{item.address}} </p>
                                    <p> Email: {{item.email}} </p>
                                    <p> Phone: {{item.phonenumber}} </p>
                                    <p> Website: {{ item.website }} </p>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card>
                    </div>
                  </div>
                </div>
              <v-btn @click="getFormPage()" id="button"> Try it Out </v-btn>
          </v-col>
      </v-row>
  </div>
</template>

<script>
export default {
  name: 'examples',
  data () {
    return {
      form: [{
                firstname: 'Anais',
                lastname: 'Dawes',
                email: 'aedawes@byu.edu',
                phonenumber: '(801)691-6216',
                website: 'www.aedawess.click',
                address: '123 secret st'
            },
            {
                firstname: 'John',
                lastname: 'Doe',
                email: 'john@foo.com',
                phonenumber: '(123)697-2018',
                website: 'www.johnssite.com',
                address: '123 Peach St'
            },
            {
                firstname: 'Pyper',
                lastname: 'Shmi',
                email: 'pypes@gmail.com',
                phonenumber: '(470)102-4782',
                website: 'www.pyperisamazing.com',
                address: '194 Camolot Rd'
            },
            {
                firstname: 'Blake',
                lastname: 'Anders',
                email: 'belake@icloud.com',
                phonenumber: '(470)184-2740',
                website: 'www.hereisblake.com',
                address: '28478 Tedsworth Pl'
            },
            {
                firstname: 'Pudge',
                lastname: 'Ers',
                email: 'fish@me.com',
                phonenumber: '(000)000-0000',
                website: 'www.fishesarethebest.com',
                address: '000 countertop way'
            },
            {
                firstname: 'Maverick',
                lastname: 'Dawes',
                email: 'doggo@icloud.com',
                phonenumber: '(403)123-4567',
                website: 'www.mavs.com',
                address: '31069 Morgans View'
            },

            ]
    }
  },
  methods: {
      getFormPage() {
          this.$router.push('/form')
      }
  }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Montserrat:wght@200;300;400&family=Quicksand:wght@300;400&display=swap');
    .grid-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 600px;
    }

    .grid{
        width: 600px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .item{
        width: 700px;
        height: 400px;
    }

  .card{
    position: absolute;
    padding: 50px;
    background-color: white;
    border-radius: 25px;
    color: black;
    align-items: center;
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
        top: 0px;
        left: 250px;
        height: 75px;
        margin-bottom: 20px;
    }
</style>
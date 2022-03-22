<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            <strong>Ew</strong>D
          </v-list-item-title>
          <v-list-item-subtitle>Your digital travel companion</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in menuItems" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="logo-container">
        <img alt="Eurowings logo" src="./assets/logo.svg" width="240px" />
      </div>
    </v-app-bar>

    <v-main>
      <div class="pa-6">
        <h1>Price Offers</h1>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search by origin or destination"
          single-line
          hide-details
        ></v-text-field>
        <v-data-table :headers="headers" :items="offers.data" :search="search"></v-data-table>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import json from './data/offers.json';
export default {
  data: () => ({
    drawer: null,
    menuItems: [
      { title: 'Flights', icon: 'mdi-airplane' },
      { title: 'Hotels', icon: 'mdi-food' },
      { title: 'Promotions', icon: 'mdi-ticket' },
    ],
    offers: json,
    search: '',
    headers: [
      {
        text: 'Origin', value: 'origin', align: 'start',
      },
      {
        text: 'Destination', value: 'destination', align: 'center',
      },
      {
        text: 'Departure Date', value: 'departureDate', align: 'center',
      },
      {
        text: 'Return Date', value: 'returnDate', align: 'center',
      },
      {
        text: 'Price (EUR)', value: 'price.amount', align: 'center',
      },
      {
        text: 'Available seat(s)', value: 'seatAvailability', align: 'center',
      }
    ]

  })
};
</script>

<style>
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
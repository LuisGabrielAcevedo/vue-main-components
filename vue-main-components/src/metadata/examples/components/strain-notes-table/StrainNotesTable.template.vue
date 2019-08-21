<template>
  <div>
    <v-layout row align-center justify-center>
      <v-btn @click="addNote()">Add new note</v-btn>
    </v-layout>
    <!-- <v-data-table :headers="headers" :items="notes" class="elevation-1">
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.note }}</td>
      </template>
    </v-data-table> -->
  </div>
</template>
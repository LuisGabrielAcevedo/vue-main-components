<template>
    <v-layout row wrap text-xs-center pb-3>
      <v-flex sm4 xs12 >
        <h4>Current total cost</h4>
        <span class="summary-description">{{ totalCost }}</span>
      </v-flex>
      <v-flex sm4 xs12>
        <h4>Average cost per unit</h4>
        <span class="summary-description">{{ averageCostPerUnit }}</span>
      </v-flex>
      <v-flex sm4 xs12>
        <h4>Total potential profit</h4>
        <span class="summary-description">{{ totalPotentialProfit }}</span>
      </v-flex>
    </v-layout> 
</template>

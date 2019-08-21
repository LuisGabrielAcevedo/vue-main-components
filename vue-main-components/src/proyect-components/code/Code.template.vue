<template>
    <v-layout column>
        <v-flex>
            <highlight-code class="" :lang="type">
                {{data}}
            </highlight-code>
        </v-flex> 
    </v-layout>
</template>

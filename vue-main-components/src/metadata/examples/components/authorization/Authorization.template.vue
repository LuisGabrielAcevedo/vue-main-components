<template>
  <div>
    <v-form>
      <v-layout row>
        <v-flex class="xs12 md3 px-2">
          <v-text-field
            type="password"
            v-model="password"
            :name="'password'"
            :ref="'password'"
            :placeholder="'Write your password'"
            v-validate="'required'"
            :error-messages="errors.has('password') ? [errors.first('password')] : null"
            solo
          ></v-text-field>
        </v-flex>
        <v-flex class="xs12 md3 px-2">
          <v-text-field
            type="password"
            v-model="passwordConfirmation"
            :name="'password-confirmation'"
            :placeholder="'Confirm your password'"
            v-validate="'required|confirmed:password'"
            :error-messages="errors.has('password-confirmation') ? [errors.first('password-confirmation')] : null"
            solo
          ></v-text-field>
        </v-flex>
        <v-flex class="xs12 md3 px-2" @click="submit()">
            <v-btn>Change password</v-btn>
        </v-flex>
        <v-spacer></v-spacer>
      </v-layout>
    </v-form>
  </div>
</template>

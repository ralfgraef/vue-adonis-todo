<template>
  <Panel title="Kategorien">
    <div v-for="project in projects" :key="project.id">{{ project.title }}</div>
    <v-layout row wrap>
      <v-flex xs8>
        <v-text-field
          placeholder="Kategorie eingeben..."
          @input="setNewProjectName"
          :value="newProjectName"
        ></v-text-field>
      </v-flex>
      <v-flex xs4>
        <v-btn class="mt-3" color="teal" dark @click="createProject">
          <v-icon class="mr-2">add_circle</v-icon>Create
        </v-btn>
      </v-flex>
    </v-layout>
  </Panel>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState("projects", ["newProjectName", "projects"])
  },
  methods: {
    ...mapMutations("projects", ["setNewProjectName"]),
    ...mapActions("projects", ["createProject"])
  }
};
</script>

<style>
</style>

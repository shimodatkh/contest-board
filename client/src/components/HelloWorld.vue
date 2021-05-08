<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <ul class="flex flex-col mt-6 rounded-lg border divide-y divide-gray-400">
      <!-- <li
        v-for="todo in todos"
        :key="todo.Id"
        class="p-4 border-grey flex items-stretch"
      >
        <p class="flex-1">
          {{ todo.Score }}
        </p>
      </li> -->
    </ul>
    {{ msg1 }}
    <br />
    {{ msg2 }}
    <br />
    {{ msgList }}
    <br />
    <li
      v-for="todo in msgList"
      :key="todo.Id"
      class="p-4 border-grey flex items-stretch"
    >
      <p class="flex-1">
        {{ todo.Score }}
        <br />
      </p>
    </li>
    <br />
    <!-- {{ ret }} -->
    <!-- {{ todos }} -->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      msg1: "Hello World!",
      msg2: "abcd",
      msgList: [
        {
          Id: 1,
          Score: 10.1,
        },
        {
          Id: 3,
          Score: 10.2,
        },
        {
          Id: 2,
          Score: 10.3,
        },
      ],
    };
  },
};

import { ref } from "vue";
import todo_pb from "../contest_board_pb";
import grpc_web from "../contest_board_grpc_web_pb";

const { GetMeasurementsReq } = todo_pb;
const { ContestBoardClient } = grpc_web;

export const todos = ref([]);
const client = new ContestBoardClient("http://localhost:8081", null, null);
console.log("tes");
export const getMeasures = () => {
  let getRequest = new GetMeasurementsReq();
  client.getMeasurements(getRequest, {}, (err, response) => {
    if (err) console.log(err);
    console.log(response.toObject());
    todos.value = response.toObject().measurementsList;
    // return {
    //   ret: response.toObject().getMeasurementList,
    // };
  });
};
getMeasures();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
